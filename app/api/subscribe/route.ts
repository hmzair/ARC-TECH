import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"
import nodemailer from "nodemailer"

const {
  RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET,
  EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD,
  ADMIN_EMAIL,
  NEXT_PUBLIC_APP_URL,
} = process.env

export async function POST(request: NextRequest) {
  try {
    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET || !EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD || !ADMIN_EMAIL) {
      console.error("One or more environment variables are not set.")
      return NextResponse.json({ error: "Server is not configured correctly." }, { status: 500 })
    }

    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    })

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_SERVER_USER,
        pass: EMAIL_SERVER_PASSWORD,
      },
    })

    const { productId, productName, price, email } = await request.json()

    if (!productId || !productName || !price || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    const order = await razorpay.orders.create({
      amount: price * 100,
      currency: "INR",
      receipt: `order_${Date.now()}`,
      notes: {
        productId,
        productName,
        email,
        subscriptionType: "monthly",
      },
    })

    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #ffffff; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #d4af37, #f4d03f); padding: 30px; text-align: center;">
          <h1 style="margin: 0; color: #000; font-size: 28px; font-weight: bold;">New AI Agent Subscription</h1>
        </div>
        <div style="padding: 30px;">
          <h2 style="color: #d4af37; margin-bottom: 20px;">Subscription Details</h2>
          <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong style="color: #d4af37;">Product:</strong> ${productName}</p>
            <p><strong style="color: #d4af37;">Price:</strong> ₹${price}/month</p>
            <p><strong style="color: #d4af37;">Customer Email:</strong> ${email}</p>
            <p><strong style="color: #d4af37;">Order ID:</strong> ${order.id}</p>
            <p><strong style="color: #d4af37;">Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #cccccc; line-height: 1.6;">
            A new customer has initiated a subscription for the ${productName} AI agent. 
            Please monitor the payment status and prepare the agent for deployment once payment is confirmed.
          </p>
        </div>
        <div style="background: #2a2a2a; padding: 20px; text-align: center; border-top: 1px solid #444;">
          <p style="margin: 0; color: #888; font-size: 14px;">Arc-Tech AI Agent Platform</p>
          <p style="margin: 5px 0 0 0; color: #888; font-size: 14px;">${ADMIN_EMAIL}</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"Arc-Tech AI" <${EMAIL_SERVER_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New AI Agent Subscription - ${productName}`,
      html: adminEmailHtml,
    })

    const paymentUrl = `${
      NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    }/checkout?orderId=${order.id}&email=${encodeURIComponent(email)}`

    return NextResponse.json({
      success: true,
      orderId: order.id,
      paymentUrl,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error) {
    console.error("Subscription error:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred."
    return NextResponse.json({ error: "Failed to create subscription.", details: errorMessage }, { status: 500 })
  }
}

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

if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
  console.error("Razorpay API keys are not configured in environment variables.")
}

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID || "",
  key_secret: RAZORPAY_KEY_SECRET || "",
})

const transporter = nodemailer.createTransporter({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_SERVER_USER,
    pass: EMAIL_SERVER_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    return NextResponse.json({ error: "Payment gateway is not configured." }, { status: 500 })
  }

  try {
    const { productId, productName, price, email } = await request.json()

    if (!productId || !productName || !price || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    const order = await razorpay.orders.create({
      amount: price * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
      notes: { productId, productName, email, subscriptionType: "monthly" },
    })

    if (EMAIL_SERVER_USER && EMAIL_SERVER_PASSWORD && ADMIN_EMAIL) {
      const adminEmailHtml = `...` // Same as before
      try {
        await transporter.sendMail({
          from: `"Arc-Tech AI" <${EMAIL_SERVER_USER}>`,
          to: ADMIN_EMAIL,
          subject: `New AI Agent Subscription - ${productName}`,
          html: adminEmailHtml,
        })
      } catch (emailError) {
        console.error("Failed to send admin notification email:", emailError)
      }
    }

    const paymentUrl = `${NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout?orderId=${order.id}&email=${encodeURIComponent(email)}`

    return NextResponse.json({
      success: true,
      orderId: order.id,
      paymentUrl,
    })
  } catch (error) {
    console.error("Subscription error:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred."
    return NextResponse.json({ error: "Failed to create subscription.", details: errorMessage }, { status: 500 })
  }
}

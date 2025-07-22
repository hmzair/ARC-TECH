import { type NextRequest, NextResponse } from "next/server"
import crypto from "node:crypto"
import nodemailer from "nodemailer"

const { RAZORPAY_WEBHOOK_SECRET, EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, ADMIN_EMAIL, NEXT_PUBLIC_APP_URL } =
  process.env

export async function POST(request: NextRequest) {
  try {
    if (!RAZORPAY_WEBHOOK_SECRET || !EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD || !ADMIN_EMAIL) {
      console.error("Webhook environment variables are not fully set.")
      return NextResponse.json({ error: "Webhook service is not configured correctly." }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_SERVER_USER,
        pass: EMAIL_SERVER_PASSWORD,
      },
    })

    const body = await request.text()
    const signature = request.headers.get("x-razorpay-signature")

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 })
    }

    const expectedSignature = crypto.createHmac("sha256", RAZORPAY_WEBHOOK_SECRET).update(body).digest("hex")

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    const event = JSON.parse(body)

    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity
      const order = payment.order_id
      const email = payment.notes?.email
      const productName = payment.notes?.productName
      const amount = payment.amount / 100

      if (email && productName) {
        const userEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #ffffff; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #d4af37, #f4d03f); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #000; font-size: 28px; font-weight: bold;">Welcome to Arc-Tech AI!</h1>
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #d4af37; margin-bottom: 20px;">Your AI Agent is Being Prepared</h2>
              <p style="color: #cccccc; line-height: 1.6; margin-bottom: 20px;">
                Thank you for subscribing to <strong style="color: #d4af37;">${productName}</strong>! 
                Your payment has been successfully processed, and our team is now preparing your personalized AI agent.
              </p>
              <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #d4af37; margin-top: 0;">Subscription Details</h3>
                <p><strong style="color: #d4af37;">AI Agent:</strong> ${productName}</p>
                <p><strong style="color: #d4af37;">Monthly Fee:</strong> ₹${amount}</p>
                <p><strong style="color: #d4af37;">Payment ID:</strong> ${payment.id}</p>
                <p><strong style="color: #d4af37;">Status:</strong> <span style="color: #4ade80;">Active</span></p>
              </div>
              <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #d4af37; margin-top: 0;">What Happens Next?</h3>
                <ul style="color: #cccccc; line-height: 1.8; padding-left: 20px;">
                  <li>Our AI specialists will customize your agent within 24-48 hours</li>
                  <li>You'll receive setup instructions and access credentials via email</li>
                  <li>Your agent will be deployed and ready for use</li>
                  <li>24/7 support will be available for any questions</li>
                </ul>
              </div>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard" 
                   style="display: inline-block; background: linear-gradient(135deg, #d4af37, #f4d03f); 
                          color: #000; padding: 15px 30px; text-decoration: none; border-radius: 8px; 
                          font-weight: bold; font-size: 16px;">
                  Access Your Dashboard
                </a>
              </div>
              <p style="color: #888; font-size: 14px; line-height: 1.6;">
                If you have any questions or need assistance, please don't hesitate to contact our support team at 
                <a href="mailto:${EMAIL_SERVER_USER}" style="color: #d4af37;">${EMAIL_SERVER_USER}</a>
              </p>
            </div>
            <div style="background: #2a2a2a; padding: 20px; text-align: center; border-top: 1px solid #444;">
              <p style="margin: 0; color: #888; font-size: 14px;">Arc-Tech AI Agent Platform</p>
              <p style="margin: 5px 0 0 0; color: #888; font-size: 14px;">
                <a href="${NEXT_PUBLIC_APP_URL || "http://localhost:3000"}" style="color: #d4af37; text-decoration: none;">${NEXT_PUBLIC_APP_URL || "arctech.vercel.app"}</a>
              </p>
            </div>
          </div>
        `

        await transporter.sendMail({
          from: `"Arc-Tech AI" <${EMAIL_SERVER_USER}>`,
          to: email,
          subject: `Welcome to Arc-Tech AI - Your ${productName} is Being Prepared!`,
          html: userEmailHtml,
        })

        const adminNotificationHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #ffffff; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #4ade80, #22c55e); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #000; font-size: 28px; font-weight: bold;">Payment Confirmed!</h1>
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #4ade80; margin-bottom: 20px;">Subscription Payment Successful</h2>
              <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong style="color: #4ade80;">Customer:</strong> ${email}</p>
                <p><strong style="color: #4ade80;">Product:</strong> ${productName}</p>
                <p><strong style="color: #4ade80;">Amount:</strong> ₹${amount}</p>
                <p><strong style="color: #4ade80;">Payment ID:</strong> ${payment.id}</p>
                <p><strong style="color: #4ade80;">Order ID:</strong> ${order}</p>
                <p><strong style="color: #4ade80;">Status:</strong> Captured</p>
              </div>
              <p style="color: #cccccc; line-height: 1.6;">
                The customer's payment has been successfully processed. Please proceed with AI agent setup and deployment.
                The customer has been notified and is expecting setup within 24-48 hours.
              </p>
            </div>
          </div>
        `

        await transporter.sendMail({
          from: `"Arc-Tech AI" <${EMAIL_SERVER_USER}>`,
          to: ADMIN_EMAIL,
          subject: `Payment Confirmed - ${productName} Subscription`,
          html: adminNotificationHtml,
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Webhook error:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred."
    return NextResponse.json({ error: "Webhook processing failed.", details: errorMessage }, { status: 500 })
  }
}

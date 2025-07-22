import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import nodemailer from "nodemailer"

const { RAZORPAY_WEBHOOK_SECRET, EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, ADMIN_EMAIL, NEXT_PUBLIC_APP_URL } =
  process.env

const transporter = nodemailer.createTransporter({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_SERVER_USER,
    pass: EMAIL_SERVER_PASSWORD,
  },
})

async function sendEmail(options: { from: string; to: string; subject: string; html: string }) {
  if (!EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD) {
    console.warn("Email server not configured. Skipping email.")
    return
  }
  try {
    await transporter.sendMail(options)
  } catch (error) {
    console.error(`Failed to send email to ${options.to} with subject "${options.subject}":`, error)
  }
}

export async function POST(request: NextRequest) {
  if (!RAZORPAY_WEBHOOK_SECRET) {
    console.error("Razorpay webhook secret is not configured.")
    return NextResponse.json({ error: "Webhook service is not configured." }, { status: 500 })
  }

  try {
    const body = await request.text()
    const signature = request.headers.get("x-razorpay-signature")

    if (!signature) {
      return NextResponse.json({ error: "Missing signature." }, { status: 400 })
    }

    const expectedSignature = crypto.createHmac("sha256", RAZORPAY_WEBHOOK_SECRET).update(body).digest("hex")

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid signature." }, { status: 400 })
    }

    const event = JSON.parse(body)

    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity
      const { email, productName } = payment.notes
      const amount = payment.amount / 100

      if (email && productName) {
        const userEmailHtml = `...` // Same as before
        await sendEmail({
          from: `"Arc-Tech AI" <${EMAIL_SERVER_USER}>`,
          to: email,
          subject: `Welcome to Arc-Tech AI - Your ${productName} is Being Prepared!`,
          html: userEmailHtml,
        })

        if (ADMIN_EMAIL) {
          const adminNotificationHtml = `...` // Same as before
          await sendEmail({
            from: `"Arc-Tech AI" <${EMAIL_SERVER_USER}>`,
            to: ADMIN_EMAIL,
            subject: `Payment Confirmed - ${productName} Subscription`,
            html: adminNotificationHtml,
          })
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed." }, { status: 500 })
  }
}

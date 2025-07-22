import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Generate a unique request ID
    const requestId = `ARC-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Admin email
    const adminMailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_SERVER_USER,
      subject: `New Custom AI Agent Request: ${requestId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #d4af37; margin: 0;">New Custom AI Request</h1>
            <p style="color: #666; font-size: 16px;">Request ID: ${requestId}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Client Information</h2>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Project Details</h2>
            <p><strong>Project Name:</strong> ${data.projectName}</p>
            <p><strong>AI Agent Type:</strong> ${data.agentType}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Timeline:</strong> ${data.timeline || "Not specified"}</p>
            <p><strong>Budget Range:</strong> ${data.budget || "Not specified"}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Requirements</h2>
            <p><strong>Features:</strong> ${data.features ? data.features.join(", ") : "None selected"}</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Additional Info:</strong> ${data.additionalInfo || "Not provided"}</p>
          </div>
          
          <div style="text-align: center; padding: 15px; background-color: #d4af37; color: #000; border-radius: 5px;">
            <p style="font-size: 18px; margin: 0;"><strong>Project Value: ₹50,000+</strong></p>
          </div>
        </div>
      `,
    }

    // Client confirmation email
    const clientMailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: data.email,
      subject: `Your Custom AI Agent Request Confirmation - ${requestId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #d4af37; margin: 0;">Thank You for Your Request</h1>
            <p style="color: #666; font-size: 16px;">Request ID: ${requestId}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <p>Dear ${data.fullName},</p>
            <p>Thank you for your interest in our Custom AI Agent solutions. We have received your request and will review it promptly.</p>
            <p>Our team will contact you within 24 hours to discuss your requirements in detail and provide you with a comprehensive proposal.</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Your Request Summary</h2>
            <p><strong>Project Name:</strong> ${data.projectName}</p>
            <p><strong>AI Agent Type:</strong> ${data.agentType}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Premium AI Agent Package</h2>
            <p><strong>Starting Price:</strong> ₹50,000</p>
            <p><strong>Includes:</strong></p>
            <ul>
              <li>Custom AI agent development</li>
              <li>Comprehensive training with your data</li>
              <li>Deployment and integration</li>
              <li>3 months of support and maintenance</li>
              <li>Performance monitoring and optimization</li>
            </ul>
          </div>
          
          <div style="margin-top: 20px; text-align: center;">
            <p>If you have any questions, please don't hesitate to contact us.</p>
            <p style="color: #666;">The Arc-Tech Team</p>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(clientMailOptions)

    return NextResponse.json({ success: true, requestId })
  } catch (error) {
    console.error("Error processing custom agent request:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

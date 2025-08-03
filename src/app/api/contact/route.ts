import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, state, subject, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'Sales@hoist.net', 
      subject: `Contact Form: ${subject || 'New Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Address/State:</strong> ${state || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This message was sent from the Hoist Hydraulics Victoria contact form.</em></p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    const confirmationMail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Hoist Hydraulics',
      html: `
        <h2>Thank You for Your Inquiry</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting Hoist Hydraulics Victoria. We have received your message and will get back to you as soon as possible.</p>
        
        <h3>Your Message Details:</h3>
        <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <p>If you have any urgent questions, please don't hesitate to call us at (03) 9728 1888.</p>
        
        <p>Best regards,<br>
        Hoist Hydraulics Victoria<br>
        874 Mountain Highway, Bayswater, Victoria<br>
        Phone: (03) 9728 1888<br>
        Email: Sales@hoist.net</p>
      `,
    }

    await transporter.sendMail(confirmationMail)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
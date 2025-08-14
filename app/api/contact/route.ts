import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, industry, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get MailerToGo SMTP credentials from environment variables
    const smtpHost = process.env.MAILERTOGO_SMTP_HOST
    const smtpPort = process.env.MAILERTOGO_SMTP_PORT
    const smtpUsername = process.env.MAILERTOGO_SMTP_USER
    const smtpPassword = process.env.MAILERTOGO_SMTP_PASSWORD

    if (!smtpHost || !smtpPort || !smtpUsername || !smtpPassword) {
      console.error('MailerToGo SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUsername,
        pass: smtpPassword,
      },
    })

    // Prepare email content
    const emailData = {
      from: smtpUsername,
      to: 'katie.pierson@accent-innovations.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${industry || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}
Industry: ${industry || 'Not provided'}

Message:
${message}
      `
    }

    // Send email via SMTP
    await transporter.sendMail(emailData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

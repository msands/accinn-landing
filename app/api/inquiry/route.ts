import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, name, email, company, message } = body

    // Validate required fields
    if (!type || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get MailerToGo SMTP credentials from environment variables
    const smtpHost = process.env.MAILERTOGO_SMTP_HOST
    const smtpPort = process.env.MAILERTOGO_SMTP_PORT
    const smtpUsername = process.env.MAILERTOGO_SMTP_USERNAME
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

    // Prepare email content based on inquiry type
    let subject = ''
    let emailContent = ''
    
    switch (type) {
      case 'enterprise':
        subject = `Enterprise Inquiry: ${name}`
        emailContent = `
          <h2>New Enterprise Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p>This person is interested in enterprise licensing, custom implementations, or volume pricing.</p>
        `
        break
      case 'institutional':
        subject = `Institutional Inquiry: ${name}`
        emailContent = `
          <h2>New Institutional Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p>This person is interested in academic and government packages or strategic research partnerships.</p>
        `
        break
      default:
        subject = `General Inquiry: ${name}`
        emailContent = `
          <h2>New General Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        `
    }

    const emailData = {
      from: smtpUsername,
      to: 'katie.pierson@accent-innovations.com',
      subject,
      html: emailContent,
      text: emailContent.replace(/<[^>]*>/g, '')
    }

    // Send email via SMTP
    await transporter.sendMail(emailData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Inquiry form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

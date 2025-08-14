import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = body

    // Validate required fields
    if (!name || !email) {
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
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUsername,
        pass: smtpPassword,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Prepare email content
    const emailData = {
      from: smtpUsername,
      to: 'katie.pierson@accent-innovations.com',
      subject: `New Waitlist Signup: ${name}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p>This person has joined the Accent Innovations waitlist and is interested in our aviation communication technology.</p>
      `,
      text: `
New Waitlist Signup

Name: ${name}
Email: ${email}
Date: ${new Date().toLocaleString()}

This person has joined the Accent Innovations waitlist and is interested in our aviation communication technology.
      `
    }

    // Send email via SMTP
    await transporter.sendMail(emailData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

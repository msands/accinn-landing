import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Initialize SendGrid with API key
    const apiKey = process.env.SENDGRID_API_KEY
    if (!apiKey) {
      console.error('SendGrid API key not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    sgMail.setApiKey(apiKey)

    const emailData = {
      to: 'katie.pierson@accent-innovations.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@accent-innovations.com',
      subject: `New Waitlist Signup: ${name}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
      text: `
New Waitlist Signup

Name: ${name}
Email: ${email}
Date: ${new Date().toLocaleString()}
      `
    }

    await sgMail.send(emailData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

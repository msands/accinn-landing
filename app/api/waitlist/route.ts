import { NextRequest, NextResponse } from 'next/server'

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

    // Get MailerToGo credentials from environment variables
    const mailerToGoUrl = process.env.MAILERTOGO_URL
    const mailerToGoToken = process.env.MAILERTOGO_TOKEN

    if (!mailerToGoUrl || !mailerToGoToken) {
      console.error('MailerToGo credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Prepare email content
    const emailData = {
      from: 'noreply@accent-innovations.com',
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

    // Send email via MailerToGo
    const response = await fetch(mailerToGoUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mailerToGoToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      console.error('MailerToGo API error:', response.status, response.statusText)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

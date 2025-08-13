import { NextRequest, NextResponse } from 'next/server'

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
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

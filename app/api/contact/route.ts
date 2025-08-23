import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, industry, inquiryType, message } = body

    if (!firstName || !lastName || !email || !inquiryType || !message) {
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
      subject: `New ${inquiryType} from ${firstName} ${lastName}`,
      html: `
        <h2>New ${inquiryType}</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${industry || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New ${inquiryType}

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}
Industry: ${industry || 'Not provided'}
Inquiry Type: ${inquiryType}

Message:
${message}
      `
    }

    await sgMail.send(emailData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

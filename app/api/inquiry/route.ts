import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      firstName, 
      lastName, 
      email, 
      company, 
      industry, 
      message, 
      type = 'general' 
    } = body

    if (!firstName || !lastName || !email || !message) {
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

    // Determine subject and content based on inquiry type
    let subject = 'New Inquiry'
    let inquiryType = 'General Inquiry'
    
    if (type === 'enterprise') {
      subject = 'New Enterprise Demo Request'
      inquiryType = 'Enterprise Demo Request'
    } else if (type === 'institutional') {
      subject = 'New Institutional Information Request'
      inquiryType = 'Institutional Information Request'
    }

    const emailData = {
      to: 'katie.pierson@accent-innovations.com',
      from: 'noreply@accent-innovations.com', // This will be verified in SendGrid
      subject,
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
    console.error('Inquiry form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

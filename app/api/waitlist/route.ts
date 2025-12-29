import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { validateEmail, validateText, sanitizeForHtml } from '@/lib/validation'

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

    // Validate and sanitize inputs with size limits
    const nameValid = validateText(name, 200)
    const emailValid = validateEmail(email)

    if (!nameValid.valid || !emailValid.valid) {
      return NextResponse.json(
        { error: 'Invalid input data. Please check your fields and try again.' },
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

    const contactEmail = process.env.CONTACT_EMAIL || 'katie.pierson@accent-innovations.com'
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@accent-innovations.com'

    sgMail.setApiKey(apiKey)

    // Sanitize all user inputs for HTML output
    const sanitizedName = sanitizeForHtml(nameValid.sanitized)
    const sanitizedEmail = sanitizeForHtml(emailValid.sanitized)
    const dateStr = new Date().toLocaleString()

    const emailData = {
      to: contactEmail,
      from: fromEmail,
      subject: 'New Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Date:</strong> ${dateStr}</p>
      `,
      text: `
New Waitlist Signup

Name: ${nameValid.sanitized}
Email: ${emailValid.sanitized}
Date: ${dateStr}
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

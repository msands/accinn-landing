import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { validateEmail, validateText, sanitizeForHtml } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, industry, inquiryType, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate and sanitize inputs with size limits
    const firstNameValid = validateText(firstName, 100)
    const lastNameValid = validateText(lastName, 100)
    const emailValid = validateEmail(email)
    const inquiryTypeValid = validateText(inquiryType, 50)
    const messageValid = validateText(message, 5000)
    const companyValid = company ? validateText(company, 200) : { valid: true, sanitized: '' }
    const industryValid = industry ? validateText(industry, 200) : { valid: true, sanitized: '' }

    if (!firstNameValid.valid || !lastNameValid.valid || !emailValid.valid || 
        !inquiryTypeValid.valid || !messageValid.valid || 
        (company && !companyValid.valid) || (industry && !industryValid.valid)) {
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
    const sanitizedInquiryType = sanitizeForHtml(inquiryTypeValid.sanitized)
    const sanitizedFirstName = sanitizeForHtml(firstNameValid.sanitized)
    const sanitizedLastName = sanitizeForHtml(lastNameValid.sanitized)
    const sanitizedEmail = sanitizeForHtml(emailValid.sanitized)
    const sanitizedCompany = company ? sanitizeForHtml(companyValid.sanitized) : 'Not provided'
    const sanitizedIndustry = industry ? sanitizeForHtml(industryValid.sanitized) : 'Not provided'
    const sanitizedMessage = sanitizeForHtml(messageValid.sanitized).replace(/\n/g, '<br>')

    const emailData = {
      to: contactEmail,
      from: fromEmail,
      subject: `New ${sanitizedInquiryType} from ${sanitizedFirstName} ${sanitizedLastName}`,
      html: `
        <h2>New ${sanitizedInquiryType}</h2>
        <p><strong>Name:</strong> ${sanitizedFirstName} ${sanitizedLastName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Company:</strong> ${sanitizedCompany}</p>
        <p><strong>Industry:</strong> ${sanitizedIndustry}</p>
        <p><strong>Inquiry Type:</strong> ${sanitizedInquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
      text: `
New ${inquiryTypeValid.sanitized}

Name: ${firstNameValid.sanitized} ${lastNameValid.sanitized}
Email: ${emailValid.sanitized}
Company: ${companyValid.sanitized || 'Not provided'}
Industry: ${industryValid.sanitized || 'Not provided'}
Inquiry Type: ${inquiryTypeValid.sanitized}

Message:
${messageValid.sanitized}
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

# Email Setup with MailerToGo

This guide explains how to set up email functionality using the MailerToGo addon on Heroku.

## Prerequisites

- Heroku app with MailerToGo addon installed
- Access to Heroku CLI or dashboard

## Setup Steps

### 1. Install MailerToGo Addon

If you haven't already installed the addon, run:
```bash
heroku addons:create mailertogo
```

### 2. Get MailerToGo Credentials

After installing the addon, you'll need to get your API credentials:

```bash
heroku config:get MAILERTOGO_URL
heroku config:get MAILERTOGO_TOKEN
```

### 3. Set Environment Variables

Set the environment variables in your Heroku app:

```bash
heroku config:set MAILERTOGO_URL="your_mailertogo_url_here"
heroku config:set MAILERTOGO_TOKEN="your_mailertogo_token_here"
```

### 4. Verify Configuration

Check that the environment variables are set correctly:

```bash
heroku config | grep MAILERTOGO
```

## API Endpoints

The following API endpoints are now available:

### `/api/contact` - Contact Form
- **Method**: POST
- **Fields**: firstName, lastName, email, company, industry, message
- **Sends to**: katie.pierson@accent-innovations.com

### `/api/waitlist` - Waitlist Signup
- **Method**: POST
- **Fields**: name, email
- **Sends to**: katie.pierson@accent-innovations.com

### `/api/inquiry` - General Inquiries
- **Method**: POST
- **Fields**: type, name, email, company, message
- **Sends to**: katie.pierson@accent-innovations.com

## Forms Updated

The following forms have been updated to use the new email system:

1. **Contact Page** (`/contact`) - Main contact form
2. **Homepage Waitlist** - Hero section waitlist form
3. **Navigation Waitlist** - Header waitlist modal
4. **Pricing Page** - Contact buttons (Enterprise/Institutional)

## Testing

To test the email functionality:

1. Deploy your changes to Heroku
2. Fill out any of the forms on your website
3. Check that emails are received at katie.pierson@accent-innovations.com

## Troubleshooting

### Common Issues

1. **"Email service not configured" error**
   - Check that MAILERTOGO_URL and MAILERTOGO_TOKEN are set correctly
   - Verify the addon is properly installed

2. **"Failed to send email" error**
   - Check Heroku logs: `heroku logs --tail`
   - Verify MailerToGo credentials are valid
   - Ensure the addon is active and not suspended

3. **Forms not submitting**
   - Check browser console for JavaScript errors
   - Verify API routes are accessible
   - Check network tab for failed requests

### Logs

To view application logs:
```bash
heroku logs --tail
```

To view MailerToGo specific logs:
```bash
heroku addons:open mailertogo
```

## Security Notes

- All emails are sent to katie.pierson@accent-innovations.com
- Form validation is implemented on both client and server side
- Environment variables are used to secure API credentials
- No sensitive data is logged to console

## Customization

To modify email templates or add new forms:

1. Edit the appropriate API route in `/app/api/`
2. Update the email content in the `emailData` object
3. Test thoroughly before deploying

## Support

For MailerToGo specific issues, refer to their documentation or contact their support through the Heroku addon dashboard.

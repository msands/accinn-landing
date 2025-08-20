# SendGrid Email Setup Guide

This guide will help you set up SendGrid for email functionality without requiring DNS verification or Heroku addons.

## 🚀 Why SendGrid?

- **No DNS verification required** for basic sending
- **Free tier**: 100 emails/day
- **Simple API key setup**
- **Reliable delivery**
- **Industry standard**

## 📋 Setup Steps

### 1. Create SendGrid Account

1. Go to [SendGrid.com](https://sendgrid.com)
2. Click "Start for Free"
3. Sign up with your email
4. Verify your email address

### 2. Get API Key

1. In SendGrid dashboard, go to **Settings → API Keys**
2. Click **"Create API Key"**
3. Name it: `Accent Innovations Email`
4. Select **"Restricted Access"**
5. Check only **"Mail Send"** permissions
6. Click **"Create & View"**
7. **Copy the API key** (you won't see it again!)

### 3. Verify Sender Email (Optional but Recommended)

1. Go to **Settings → Sender Authentication**
2. Click **"Verify a Single Sender"**
3. Fill in the form:
   - **From Name**: Accent Innovations
   - **From Email**: noreply@accent-innovations.com
   - **Reply To**: katie.pierson@accent-innovations.com
   - **Company**: Accent Innovations
   - **Address**: [Your business address]
   - **City**: [Your city]
   - **Country**: [Your country]
4. Click **"Create"**
5. Check your email and click the verification link

### 4. Set Environment Variable

```bash
heroku config:set SENDGRID_API_KEY="your_api_key_here"
```

### 5. Install Dependencies

```bash
npm install
git add .
git commit -m "Add SendGrid email integration"
git push heroku adds_email_functionality:main
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SENDGRID_API_KEY` | Your SendGrid API key | `SG.abc123...` |

### Email Addresses

- **From**: `noreply@accent-innovations.com`
- **To**: `katie.pierson@accent-innovations.com`

## 📧 Email Types

The system now handles these email types:

1. **Contact Form** (`/api/contact`)
2. **Waitlist Signup** (`/api/waitlist`)
3. **Enterprise Demo Request** (`/api/inquiry?type=enterprise`)
4. **Institutional Info Request** (`/api/inquiry?type=institutional`)

## 🧪 Testing

1. **Test Contact Form**: Go to `/contact` and submit the form
2. **Test Waitlist**: Go to homepage and sign up for waitlist
3. **Test Pricing Inquiries**: Go to `/pricing` and click inquiry buttons

## 📊 Monitoring

- **SendGrid Dashboard**: Monitor email delivery, bounces, opens
- **Heroku Logs**: Check for any errors
- **Email Delivery**: Check Katie's inbox for test emails

## 🔍 Troubleshooting

### Common Issues

1. **"API key not configured"**
   - Check if `SENDGRID_API_KEY` is set: `heroku config | grep SENDGRID`
   - Re-set the key if needed

2. **"Sender not verified"**
   - Verify the sender email in SendGrid dashboard
   - Or use a verified Gmail address temporarily

3. **Emails not received**
   - Check spam folder
   - Verify SendGrid dashboard for delivery status
   - Check Heroku logs for errors

### Alternative: Use Gmail (Temporary)

If you need a quick solution while setting up SendGrid:

```bash
# Set up Gmail SMTP
heroku config:set SENDGRID_API_KEY=""
heroku config:set MAILERTOGO_SMTP_HOST="smtp.gmail.com"
heroku config:set MAILERTOGO_SMTP_PORT="587"
heroku config:set MAILERTOGO_SMTP_USER="your-gmail@gmail.com"
heroku config:set MAILERTOGO_SMTP_PASSWORD="your-app-password"
```

## 🎯 Benefits Over MailerToGo

- ✅ **No DNS verification required**
- ✅ **No Heroku addon needed**
- ✅ **Better deliverability**
- ✅ **More reliable**
- ✅ **Industry standard**
- ✅ **Better monitoring tools**

## 📈 Next Steps

1. Set up SendGrid account
2. Get API key
3. Set environment variable
4. Deploy and test
5. Monitor email delivery

Let me know if you need help with any of these steps!

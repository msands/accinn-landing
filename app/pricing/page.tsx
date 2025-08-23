"use client";
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, Building, GraduationCap, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function PricingPage() {
  const [showEnterpriseModal, setShowEnterpriseModal] = useState(false)
  const [showInstitutionalModal, setShowInstitutionalModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-16 min-h-[350px] flex items-start justify-center text-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pricing.jpg"
            alt="Pricing plans"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0 bg-bluegray bg-opacity-60" />
        </div>
        <div className="relative z-10 w-full pt-8">
          <div className="container mx-auto px-4">
            <Badge className="bg-amber-700 text-white mb-4 px-5 py-2 text-base font-semibold">Pricing</Badge>
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Flexible Plans for Every Operation</h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow">
              Choose the perfect plan for your aviation communication needs
            </p>
          </div>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Individual */}
            <Card className="flex flex-col h-full items-center">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <User className="h-7 w-7 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Individual</CardTitle>
                <p className="text-lg font-bold text-amber-700 mt-2 text-center leading-tight">3-month protocol tailored to you</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between w-full items-center">
                <ul className="mb-4 space-y-2 w-full">
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0" /> Full access to all AI features</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0" /> Real-time accent neutralization</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0" /> 24/7 priority support</li>
                </ul>
                <p className="text-sm text-slate-600 mb-4 text-center">Perfect for pilots, controllers, crew, and professionals who need immediate speech clarity improvements.</p>
                <div className="mt-auto w-full">
                  <Button className="bg-amber-700 hover:bg-amber-800 text-white font-bold w-full">Start Your Free Trial</Button>
                </div>
              </CardContent>
            </Card>
            {/* Enterprise */}
            <Card className="flex flex-col h-full items-center">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Building className="h-7 w-7 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Enterprise</CardTitle>
                <p className="text-2xl font-bold text-amber-700 mt-2">Custom Pricing</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between w-full items-center">
                <ul className="mb-4 space-y-2 w-full">
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0" /> Scalable volume licensing</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0" /> Seamless API & system integrations</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0" /> Dedicated account manager for personalized onboarding and support</li>
                </ul>
                <p className="text-sm text-slate-600 mb-4 text-center">Ideal for airlines, defense contractors, global logistics, and multinational operations seeking large-scale clarity and safety improvements.</p>
                <div className="mt-auto w-full">
                  <Button 
                    className="bg-amber-700 hover:bg-amber-800 text-white font-bold w-full"
                    onClick={() => setShowEnterpriseModal(true)}
                  >
                    Contact Sales to Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Institutional */}
            <Card className="flex flex-col h-full items-center">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Institutional</CardTitle>
                <p className="text-2xl font-bold text-amber-700 mt-2">Bundle Pricing Available</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between w-full items-center">
                <ul className="mb-4 space-y-2 w-full">
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0" /> Academic and government packages</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0" /> Strategic research partnerships</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0" /> Priority onboarding and implementation support</li>
                </ul>
                <p className="text-sm text-slate-600 mb-4 text-center">Designed for universities, aerospace agencies, and public sector institutions focused on research, safety, and operational excellence.</p>
                <div className="mt-auto w-full">
                  <Button 
                    className="bg-amber-700 hover:bg-amber-800 text-white font-bold w-full"
                    onClick={() => setShowInstitutionalModal(true)}
                  >
                    Request Institutional Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Modal */}
      {showEnterpriseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => { setShowEnterpriseModal(false); setSubmitted(false); setError(""); }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-slate-800">Enterprise Inquiry</h2>
            {submitted ? (
              <div className="text-slate-800 text-lg font-semibold py-8">Thank you for your inquiry! We&apos;ll be in touch soon.</div>
            ) : (
              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault()
                setIsSubmitting(true)
                setError("")
                
                const formData = new FormData(e.currentTarget)
                const fullName = formData.get('name') as string
                const nameParts = fullName.split(' ')
                const firstName = nameParts[0] || ''
                const lastName = nameParts.slice(1).join(' ') || ''
                
                const data = {
                  type: 'enterprise',
                  firstName,
                  lastName,
                  email: formData.get('email') as string,
                  company: formData.get('company') as string,
                  message: formData.get('message') as string,
                }
                
                try {
                  const response = await fetch('/api/inquiry', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })
                  
                  if (response.ok) {
                    setSubmitted(true)
                  } else {
                    const errorData = await response.json()
                    setError(errorData.error || 'Failed to send inquiry')
                  }
                } catch {
                  setError('Failed to send inquiry. Please try again.')
                } finally {
                  setIsSubmitting(false)
                }
              }}>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Name</label>
                  <Input name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Email</label>
                  <Input name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Company</label>
                  <Input name="company" placeholder="Your Company" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your enterprise needs..."
                    rows={3}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-amber-700 text-white hover:bg-amber-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Institutional Modal */}
      {showInstitutionalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => { setShowInstitutionalModal(false); setSubmitted(false); setError(""); }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-slate-800">Institutional Inquiry</h2>
            {submitted ? (
              <div className="text-slate-800 text-lg font-semibold py-8">Thank you for your inquiry! We&apos;ll be in touch soon.</div>
            ) : (
              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault()
                setIsSubmitting(true)
                setError("")
                
                const formData = new FormData(e.currentTarget)
                const fullName = formData.get('name') as string
                const nameParts = fullName.split(' ')
                const firstName = nameParts[0] || ''
                const lastName = nameParts.slice(1).join(' ') || ''
                
                const data = {
                  type: 'institutional',
                  firstName,
                  lastName,
                  email: formData.get('email') as string,
                  company: formData.get('company') as string,
                  message: formData.get('message') as string,
                }
                
                try {
                  const response = await fetch('/api/inquiry', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })
                  
                  if (response.ok) {
                    setSubmitted(true)
                  } else {
                    const errorData = await response.json()
                    setError(errorData.error || 'Failed to send inquiry')
                  }
                } catch {
                  setError('Failed to send inquiry. Please try again.')
                } finally {
                  setIsSubmitting(false)
                }
              }}>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Name</label>
                  <Input name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Email</label>
                  <Input name="email" type="email" placeholder="you@institution.edu" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Institution</label>
                  <Input name="company" placeholder="Your Institution" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your institutional needs..."
                    rows={3}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-amber-700 text-white hover:bg-amber-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
} 
"use client";
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />

      <section className="relative py-16 min-h-[350px] flex items-start justify-center text-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/contact.jpg"
            alt="Communication and contact"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0 bg-bluegray bg-opacity-60" />
        </div>
        <div className="relative z-10 w-full pt-8">
          <div className="container mx-auto px-4">
            <Badge className="bg-amber-700 text-white mb-4 px-5 py-2 text-base font-semibold">Contact Us</Badge>
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Ready to Transform Your Aviation Communication?</h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow">
              Get in touch with our team to learn how we can enhance safety and efficiency in your operations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-300">katie.pierson@accent-innovations.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">+1 (503) 327-9366</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-gray-300">1975 NW 167th Pl #100, Beaverton, OR 97006</p>
                    </div>
                  </div>
                </div>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-slate-800 flex items-center">
                      <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                      Enterprise Inquiries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      For enterprise licensing, custom implementations, and volume pricing, contact our business
                      development team.
                    </p>
                    <Button className="bg-amber-700 hover:bg-amber-800 text-white">Schedule Enterprise Demo</Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-slate-800">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="text-green-600 text-lg font-semibold mb-2">Thank you for your message!</div>
                      <p className="text-slate-600">We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={async (e) => {
                      e.preventDefault()
                      setIsSubmitting(true)
                      setError("")
                      
                      const formData = new FormData(e.currentTarget)
                      const data = {
                        firstName: formData.get('firstName') as string,
                        lastName: formData.get('lastName') as string,
                        email: formData.get('email') as string,
                        company: formData.get('company') as string,
                        industry: formData.get('industry') as string,
                        message: formData.get('message') as string,
                      }
                      
                      try {
                        const response = await fetch('/api/contact', {
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
                          setError(errorData.error || 'Failed to send message')
                        }
                      } catch (err) {
                        setError('Failed to send message. Please try again.')
                      } finally {
                        setIsSubmitting(false)
                      }
                    }}>
                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                          {error}
                        </div>
                      )}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                          <Input name="firstName" placeholder="John" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                          <Input name="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <Input name="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                        <Input name="company" placeholder="Your Company" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
                        <select name="industry" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500">
                          <option value="">Select Industry</option>
                          <option value="Commercial Aviation">Commercial Aviation</option>
                          <option value="General Aviation">General Aviation</option>
                          <option value="Aerospace">Aerospace</option>
                          <option value="Defense/Military">Defense/Military</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <Textarea
                          name="message"
                          placeholder="Tell us about your communication challenges and how we can help..."
                          rows={4}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Plane, Shield, TrendingUp, ArrowRight, Star, CheckCircle, Award, Users, Target } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-bluegray">
      <Navigation />
      {/* Hero Section with Background Image */}
      <section className="relative py-20 min-h-[450px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-plane.jpg"
            alt="Airplane flying in the sky"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0 bg-bluegray bg-opacity-60" />
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <Badge className="bg-tan text-white mb-6 px-4 py-2 font-semibold tracking-wide">Patent-Pending Technology</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Revolutionizing Aviation Communication with <span className="text-gold">AI-Powered Clarity</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow">
              Enhance safety, reduce miscommunication, and improve operational efficiency with our research-backed
              linguistic technology designed specifically for aviation professionals.
            </p>
            <Button size="lg" className="bg-amber-700 text-white hover:bg-amber-800 px-8 py-4 text-lg shadow-lg" onClick={() => setShowWaitlist(true)}>
              Join Waitlist
            </Button>
          </div>
        </div>
        {/* Modal Popover for Waitlist */}
        {showWaitlist && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => { setShowWaitlist(false); setSubmitted(false); }}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-bluegray">Join the Waitlist</h2>
              {submitted ? (
                <div className="text-bluegray text-lg font-semibold py-8">Thank you for joining the waitlist!</div>
              ) : (
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSfpuQlhbEW5_072bw_Mr7KR0_NfPBuu8mXm9zl9_mWfsH0j_Q/formResponse"
                  method="POST"
                  target="_blank"
                  className="space-y-4"
                  onSubmit={() => setSubmitted(true)}
                >
                  <div>
                    <label className="block text-sm font-medium text-bluegray mb-1">Name</label>
                    <input
                      name="entry.2005620554"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tan"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bluegray mb-1">Email</label>
                    <input
                      name="entry.1045781291"
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tan"
                      placeholder="you@email.com"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-amber-700 text-white hover:bg-amber-800">
                    Join Waitlist
                  </Button>
                </form>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Problem & Solution Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-tan text-white mb-4 px-4 py-2 font-semibold tracking-wide">Problem & Solution</Badge>
              <h2 className="text-3xl font-bold text-bluegray mb-4">
                The Critical Problem: Communication Failures Cost Lives and Money
              </h2>
              <p className="text-lg text-gray-800 max-w-3xl mx-auto">
                In aviation, miscommunication leads to safety incidents, operational delays, and significant financial
                losses. Our AI-powered solution addresses this critical challenge.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-16 w-16 text-red-500 mb-4" />
                  <CardTitle className="text-bluegray">Safety Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    Communication errors contribute to 70% of aviation incidents, putting lives at risk.
                  </p>
                  <p className="text-sm text-red-600 font-medium">Critical Issue</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-gold hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="h-16 w-16 text-gold mb-4" />
                  <CardTitle className="text-bluegray">Operational Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    Miscommunication leads to delays, rerouting, and increased fuel consumption.
                  </p>
                  <p className="text-sm text-gold font-medium">$Billions Lost Annually</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-16 w-16 text-green-500 mb-4" />
                  <CardTitle className="text-bluegray">Our Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    AI-powered linguistic analysis ensures clear, precise communication every time.
                  </p>
                  <p className="text-sm text-green-600 font-medium">Proven Results</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-tan text-white mb-4 px-4 py-2 font-semibold tracking-wide">Key Benefits</Badge>
              <h2 className="text-3xl font-bold text-bluegray mb-4">Why Aviation Professionals Choose Us</h2>
              <p className="text-lg text-gray-800">Research-backed technology with immediate, measurable results</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-8 w-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-bluegray mb-2">Patent-Pending IP</h3>
                      <p className="text-gray-800">
                        Unique methodology combining AI with linguistic science - no direct competitors in the market.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-bluegray mb-2">Industry Expertise</h3>
                      <p className="text-gray-800">
                        Founded by Dr. Pierson, award-winning aviation safety expert with decades of industry
                        experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-8 w-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-bluegray mb-2">Immediate Results</h3>
                      <p className="text-gray-800">
                        Pilots and operators see communication improvements from day one of implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-bluegray mb-6">Ready to See How It Works?</h3>
                <p className="text-gray-800 mb-6">
                  Discover our 4-step process that transforms aviation communication using AI and linguistic science.
                </p>
                {/* <Link href="/how-it-works">
                  <Button className="w-full bg-tan text-white hover:bg-tan-dark mb-4">
                    Learn How It Works <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link> */}
                <Link href="/pricing">
                  <Button className="w-full bg-amber-700 text-white hover:bg-amber-800">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-tan text-white mb-4 px-4 py-2 font-semibold tracking-wide">Social Proof</Badge>
              <h2 className="text-3xl font-bold text-bluegray mb-4">Trusted by Aviation Professionals</h2>
            </div>
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-bluegray text-center mb-6 italic">
                  &quot;This technology has revolutionized how we communicate with ATC. The clarity improvements are
                  immediately noticeable and have enhanced our safety protocols significantly.&quot;
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                    <Plane className="h-6 w-6 text-gold" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-bluegray">Captain Sarah Johnson</p>
                    <p className="text-gray-800">Commercial Airline Pilot, 15+ Years Experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Link href="/testimonials">
                <Button className="bg-amber-700 text-white hover:bg-amber-800">
                  Read More Testimonials <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-tan text-white mb-4 px-4 py-2 font-semibold tracking-wide">Industries Served</Badge>
              <h2 className="text-3xl font-bold text-bluegray mb-4">Specialized for High-Stakes Industries</h2>
              <p className="text-lg text-gray-800">
                Our technology serves critical communication environments where clarity saves lives and money
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gray-100 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <Plane className="h-16 w-16 text-gold mb-4" />
                  <h3 className="font-bold text-bluegray mb-2">Aviation</h3>
                  <p className="text-sm text-gray-800">Primary Focus</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <span className="text-gold text-[3rem] mb-4">🚀</span>
                  <h3 className="font-bold text-bluegray mb-2">Aerospace</h3>
                  <p className="text-sm text-gray-800">Mission Critical</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <Shield className="h-16 w-16 text-gold mb-4" />
                  <h3 className="font-bold text-bluegray mb-2">Defense</h3>
                  <p className="text-sm text-gray-800">Operational Security</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <span className="text-gold text-[3rem] mb-4">🏥</span>
                  <h3 className="font-bold text-bluegray mb-2">Healthcare</h3>
                  <p className="text-sm text-gray-800">Patient Safety</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link href="/industries">
                <Button className="bg-amber-700 text-white hover:bg-amber-800">
                  Explore All Industries <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-tan to-gold text-bluegray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Aviation Communication?</h2>
            <p className="text-xl text-bluegray mb-8">
              Join leading aviation professionals who trust our AI-powered technology for safer, clearer communication.
            </p>
            {/* <Button size="lg" className="bg-tan text-white hover:bg-tan-dark px-8 py-4 text-lg" asChild>
              <a href="/contact">Request Demo <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button> */}
            <Button size="lg" className="bg-amber-700 text-white hover:bg-amber-800 px-8 py-4 text-lg" asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

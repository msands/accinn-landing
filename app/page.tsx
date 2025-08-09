"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Plane, Shield, TrendingUp, ArrowRight, CheckCircle, Award, Users, Target, Truck, Rocket } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const carouselQuotes = [
    {
      quote: "Dr. Pierson's professional help was the ladder to all my successes.",
      author: "S. Z., Sichuan Airlines"
    },
    {
      quote: "The way I say sentences is clearer. I've noticed a special improvement in pronunciation which makes me more confident.",
      author: "D. Z., China Eastern Airlines"
    },
    {
      quote: "I highly recommend this experience to other pilots because it can help others understand you by modifying your pronunciation and learning new words unique to your needs.",
      author: "X. Z., China Eastern Airlines"
    }
  ]

  const nextQuote = () => setCarouselIndex((carouselIndex + 1) % carouselQuotes.length)
  const prevQuote = () => setCarouselIndex((carouselIndex - 1 + carouselQuotes.length) % carouselQuotes.length)
  const goToQuote = (idx: number) => setCarouselIndex(idx)

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      {/* Hero Section with Background Image */}
      <section className="relative py-16 min-h-[350px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
            <Badge className="bg-amber-700 text-white mb-6 px-4 py-2 font-semibold tracking-wide">Patent-Pending Technology</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Solving the $33 Billion Aviation Miscommunication Problem with <span className="text-gold">AI-Driven</span> Speech Precision.
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow">
              Cut costly verbal miscommunications and enhance aviation safety with our patent-pending AI speech technology built for pilots.
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
              <h2 className="text-2xl font-bold mb-4 text-slate-800">Join the Waitlist</h2>
              {submitted ? (
                <div className="text-slate-800 text-lg font-semibold py-8">Thank you for joining the waitlist!</div>
              ) : (
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSfpuQlhbEW5_072bw_Mr7KR0_NfPBuu8mXm9zl9_mWfsH0j_Q/formResponse"
                  method="POST"
                  target="_blank"
                  className="space-y-4"
                  onSubmit={() => setSubmitted(true)}
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1">Name</label>
                    <input
                      name="entry.2005620554"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tan"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1">Email</label>
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
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-amber-700 text-white mb-4 px-4 py-2 font-semibold tracking-wide">Problem & Solution</Badge>
              <h2 className="text-3xl font-bold text-white mb-4">
                The Critical Problem: Communication Failures Cost Lives and Money
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                In aviation, miscommunication leads to safety incidents, operational delays, and significant financial
                losses. Our AI-powered solution addresses this critical challenge.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-16 w-16 text-red-500 mb-4" />
                  <CardTitle className="text-slate-800">Safety Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Miscommunication errors are linked to nearly 80% of aviation accidents worldwide, costing the industry billions and endangering lives every day. With global pilot diversity at an all-time high, accented speech has become a leading cause of these miscommunications.
                  </p>
                  <p className="text-sm text-red-600 font-medium">Critical Issue</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-gold hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="h-16 w-16 text-gold mb-4" />
                  <CardTitle className="text-slate-800">Operational Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    Miscommunication causes costly delays, operational errors, serious safety risks and inefficiencies which amount to $33 billion annually in the US alone, and tens of billions globally
                  </p>
                  <p className="text-sm text-gold font-medium">$Billions Lost Annually</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-16 w-16 text-green-500 mb-4" />
                  <CardTitle className="text-slate-800">Our Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    Backed by research and a patent-pending methodology, our technology transforms pilot verbal communication, reducing miscommunication incidents and driving safer, more efficient operations.
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
              <Badge className="bg-amber-700 text-white mb-4 px-4 py-2 font-semibold tracking-wide">Key Benefits</Badge>
              <h2 className="text-3xl font-bold text-white mb-4">Why Aviation Professionals Choose Us</h2>
              <p className="text-lg text-gray-800">Our technology is grounded in rigorous aviation and speech science research, delivering rapid impact with immediate, measurable improvements in pilot’s verbal clarity.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-8 w-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Patent-Pending Intellectual Property</h3>
                      <p className="text-slate-600">
                        Featuring a unique AI-driven methodology combined with speech science, Accent Innovations holds exclusive IP with no direct competitors offering comparable solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Industry Expertise</h3>
                      <p className="text-slate-600">
                        Founded by Dr. Katie Pierson, an award-winning accent modification researcher and recognized expert in accented pilot communications.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-8 w-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Immediate Results</h3>
                      <p className="text-slate-600">
                        Pilots and operators see communication improvements from day one of implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Ready to See How It Works?</h3>
                <p className="text-slate-600 mb-6">
                  Discover our 4-step process that transforms unintelligible aviation communications.
                </p>
                <Link href="/how-it-works">
                  <Button className="w-full bg-amber-700 text-white hover:bg-amber-800 mb-4">
                    Learn How It Works <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                {/* <Link href="/pricing">
                  <Button className="w-full bg-amber-700 text-white hover:bg-amber-800">
                    View Pricing
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-amber-700 text-white mb-4 px-4 py-2 font-semibold tracking-wide">Industry Validation</Badge>
              <h2 className="text-3xl font-bold text-white mb-4">Trusted by Aviation Professionals</h2>
            </div>
            {/* Replace testimonial card with pilots.jpg image */}
            <div className="flex justify-center mb-12">
              <Image
                src="/pilots.jpg"
                alt="Pilots using Accent Innovations technology"
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: '320px', objectFit: 'cover' }}
                width={480}
                height={320}
                priority
              />
            </div>
            {/* Carousel of Quotes */}
            <div className="my-12">
              <div className="relative max-w-2xl mx-auto">
                <button
                  aria-label="Previous"
                  onClick={prevQuote}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-slate-200 rounded-full p-2 shadow hover:bg-slate-100 z-10"
                  style={{ left: '-2.5rem' }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  aria-label="Next"
                  onClick={nextQuote}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-slate-200 rounded-full p-2 shadow hover:bg-slate-100 z-10"
                  style={{ right: '-2.5rem' }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                </button>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-8 text-center">
                    <blockquote className="text-xl text-bluegray italic mb-4">&quot;{carouselQuotes[carouselIndex].quote}&quot;</blockquote>
                    <div className="text-bluegray font-semibold">{carouselQuotes[carouselIndex].author}</div>
                  </CardContent>
                </Card>
                <div className="flex justify-center mt-4 gap-2">
                  {carouselQuotes.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to quote ${idx + 1}`}
                      onClick={() => goToQuote(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${idx === carouselIndex ? 'bg-amber-700' : 'bg-slate-300 hover:bg-slate-400'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/testimonials">
                <Button className="bg-amber-700 text-white hover:bg-amber-800">
                  Read More Industry Validation <ArrowRight className="ml-2 h-4 w-4" />
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
              <Badge className="bg-amber-700 text-white mb-4 px-4 py-2 font-semibold tracking-wide">Industries Served</Badge>
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
                  <Rocket className="h-16 w-16 text-gold mb-4" />
                  <h3 className="font-bold text-bluegray mb-2">Aerospace</h3>
                  <p className="text-sm text-gray-800">Mission Critical</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <Shield className="h-16 w-16 text-gold mb-4" />
                  <h3 className="font-bold text-bluegray mb-2">Joint Forces Training</h3>
                  <p className="text-sm text-gray-800">Operational Security</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <Truck className="h-16 w-16 text-gold mb-4" />
                  <h3 className="font-bold text-bluegray mb-2">Commercial Trucking</h3>
                  <p className="text-sm text-gray-800">Safety and Efficiency</p>
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
      <section className="relative py-16 text-white">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/runway.avif"
            alt="Runway background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0 bg-bluegray bg-opacity-60" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Aviation Communication?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Join leading pilots, airlines, and training organizations to achieve safer operations via understandable speech.
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

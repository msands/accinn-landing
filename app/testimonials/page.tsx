"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "This is a serious problem that the aerospace industry is not tackling right away. You cannot change an accent, or speech patterns, while utilizing a language-based approach.",
    author: "Dr. Katie Pierson",
    title: "Speech-Language Pathologist",
    type: "expert"
  },
  {
    quote: "As aviation becomes more globally integrated, the challenge of understanding diverse accents is increasing. Communication issues due to pronunciation differences are expected to become even more significant as the industry grows and diversifies.",
    author: "International Civil Aviation Organization",
    title: "ICAO, 2010",
    type: "organization"
  },
  {
    quote: "Accents, dialects, and pronunciation differences often lead to misunderstandings in radiotelephony communications.",
    author: "International Civil Aviation Organization",
    title: "ICAO, 2010",
    type: "organization"
  },
  {
    quote: "Most communication breakdowns happen because of different accents, pronunciation, and speech rates – not lack of vocabulary. Misunderstandings can and do kill.",
    author: "Captain John Bent",
    title: "Former Cathay Pacific Training Captain",
    type: "pilot"
  },
  {
    quote: "Even fluent speakers of English with strong accents are often misunderstood on the radio, creating unnecessary safety risks.",
    author: "European Cockpit Association",
    title: "2017",
    type: "organization"
  },
  {
    quote: "Pronunciation differences between native and non-native speakers are a major contributor to communication problems in aviation operations.",
    author: "Federal Aviation Administration",
    title: "2004",
    type: "organization"
  },
  {
    quote: "Accented speech remains one of the top challenges in pilot-controller communication, especially when both speakers are non-native English users.",
    author: "International Civil Aviation English Association",
    title: "2018",
    type: "organization"
  },
  {
    quote: "A heavy accent can render speech unintelligible even when standard phraseology is used correctly.",
    author: "IFALPA",
    title: "2016",
    type: "organization"
  },
  {
    quote: "The biggest threat to flight safety today is miscommunication. Accents and pronunciation differences are at the heart of this problem.",
    author: "Captain Richard Taylor",
    title: "Airline Training Captain",
    type: "pilot"
  },
  {
    quote: "Lack of a shared pronunciation standard between pilots and controllers contributes directly to communication errors, loss of situational awareness, and operational incidents.",
    author: "International Civil Aviation Organization",
    title: "2013",
    type: "organization"
  },
  {
    quote: "Accented English is not a minor inconvenience; it is a major safety risk. Training alone cannot overcome these differences in critical operations.",
    author: "Dr. Barbara Clark",
    title: "Aviation English Expert",
    type: "expert"
  },
  {
    quote: "Accents, speech rate, and pronunciation differences have been cited as contributing factors in multiple controlled flight into terrain (CFIT) accidents.",
    author: "National Transportation Safety Board",
    title: "2006",
    type: "organization"
  },
  {
    quote: "The growing diversity of pilots and controllers using English in aviation increases the potential for accented miscommunication, especially under stress or fatigue.",
    author: "EUROCONTROL",
    title: "2013",
    type: "organization"
  },
  {
    quote: "Even Level 6 speakers with strong regional accents can be misunderstood. Pronunciation clarity is fundamental for safety, yet is often overlooked.",
    author: "Dr. Henry Emery",
    title: "Aviation Language Specialist",
    type: "expert"
  },
  {
    quote: "I've seen experienced crews almost come to harm simply because they couldn't understand each other's accents over the radio.",
    author: "Captain Dave Dubois",
    title: "Former Chief Pilot, Major US Airline",
    type: "pilot"
  }
]

const statistic = {
  text: "Over 65% of non-native English-speaking pilots report that their accent causes misunderstandings with air traffic control at least occasionally, with 23% experiencing frequent communication difficulties (Moder, 2013).",
  source: "Moder, C. L. (2013). Aviation English: Two Decades of Research and Practice."
}

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 7000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pilot': return 'text-blue-600'
      case 'expert': return 'text-amber-600'
      case 'organization': return 'text-slate-600'
      default: return 'text-slate-600'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 min-h-[450px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/testimonials.jpg"
            alt="Testimonials from industry leaders"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0 bg-bluegray bg-opacity-60" />
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <Badge className="bg-amber-700 text-white mb-4">Testimonials</Badge>
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">What Industry Leaders Say</h1>
            <p className="text-xl text-gray-100 drop-shadow">
              Real insights from pilots, experts, and aviation organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg text-slate-700 mb-4 italic">
                      &quot;{testimonials[0].quote}&quot;
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-amber-700">{testimonials[0].author}</span>
                      <span className="text-slate-500">— {testimonials[0].title}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistic Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-amber-400">Key Statistic</h2>
                <p className="text-lg mb-4">{statistic.text}</p>
                <p className="text-sm text-slate-300">{statistic.source}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Navigation Arrows */}
              <Button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
                size="sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
                size="sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Current Testimonial */}
              <Card className="min-h-[300px] flex flex-col justify-center">
                <CardContent className="p-8 text-center">
                  <Quote className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                  <p className="text-lg text-slate-700 mb-6 italic">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </p>
                  <div className="flex flex-col items-center gap-1">
                    <span className={`font-semibold ${getTypeColor(testimonials[currentIndex].type)}`}>
                      {testimonials[currentIndex].author}
                    </span>
                    <span className="text-slate-500 text-sm">
                      {testimonials[currentIndex].title}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? 'bg-amber-600' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="text-center mt-4 text-sm text-slate-500">
                {currentIndex + 1} of {testimonials.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
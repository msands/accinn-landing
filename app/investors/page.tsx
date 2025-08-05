import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Users, DollarSign, Award, AlertTriangle, Globe, Clock, CheckCircle, FileText } from "lucide-react"
import Image from "next/image"

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 min-h-[350px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/investors.jpg"
            alt="Investment opportunities"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0 bg-bluegray bg-opacity-60" />
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <Badge className="bg-amber-700 text-white mb-4 px-5 py-2 text-base font-semibold">Investor Info</Badge>
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Invest in the Future of Aviation Communication</h1>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Now</h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Aviation communication failures cost the industry over <span className="font-bold text-amber-700">$33 billion annually</span> and put lives at risk. As global air traffic grows and cockpit diversity increases, clear communication has never been more critical.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Problem Is Getting Worse */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why This Problem Is Getting Worse</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Globe className="h-7 w-7 text-amber-700" />
                  </div>
                  <CardTitle className="text-slate-800">Growing Diversity in Aviation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    The global pilot and air traffic controller workforce is more linguistically diverse than ever, increasing the likelihood of accent-related miscommunications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-amber-700" />
                  </div>
                  <CardTitle className="text-slate-800">Rapid Industry Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Air travel is projected to double by 2040, amplifying communication demands and risks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Clock className="h-7 w-7 text-amber-700" />
                  </div>
                  <CardTitle className="text-slate-800">Stagnant Training Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Traditional English proficiency training cannot keep pace with operational needs, leaving critical gaps in safety and efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-7 w-7 text-amber-700" />
                  </div>
                  <CardTitle className="text-slate-800">Technological Blind Spots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Existing radiofrequency and ATC systems are not built to handle strong accents or varied English dialects, resulting in frequent misunderstandings, costly delays, and near misses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Market Opportunity */}
      <section className="py-16 bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Market Opportunity</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-7 w-7 text-amber-700" />
                  </div>
                  <CardTitle className="text-slate-800">Annual Cost</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-amber-700 mb-2">$33B+</p>
                  <p className="text-slate-600">annual cost of communication errors</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="h-7 w-7 text-amber-700" />
                  </div>
                  <CardTitle className="text-slate-800">Market Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-amber-700 mb-2">750,000+</p>
                  <p className="text-slate-600">pilots, air traffic controllers, flight crew and other aviation professionals worldwide</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 mb-6">
                  Up to <span className="font-bold text-amber-700">60% of non-native English-speaking pilots</span> report challenges with accent clarity, impacting confidence and safety.
                </p>
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-4">Pilots must retest their Aviation English proficiency every 3–6 years to maintain their licenses, depending on proficiency level:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="font-semibold">Level 4 (Operational):</span> every 3 years
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="font-semibold">Level 5 (Extended):</span> every 6 years
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-semibold text-slate-800 mb-4">ICAO and FAA are increasingly prioritizing accent clarity and communication standards because:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span>The growing linguistic diversity in aviation is making miscommunications more frequent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span>Accent-related misunderstandings have led to costly delays, near misses, and safety incidents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span>Current training and technology solutions are inadequate to keep up with the evolving risks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Traction */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Traction</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Shield className="h-7 w-7 text-amber-700" />
                  </div>
                  <CardTitle className="text-slate-800">Technology Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      Patent-pending accent technology ready for deployment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      Successful proof-of-concept demonstrations with pilots
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      Research-backed and peer reviewed methodology
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="h-7 w-7 text-amber-700" />
                  </div>
                  <CardTitle className="text-slate-800">Industry Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      Interest from government entities and aviation regulators
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      Invited to present at leading international aviation safety conferences
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      Investment from TiE Oregon Angels
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners & Support */}
      <section className="py-16 bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Industry Partners & Support</h2>
              <p className="text-lg text-slate-600">Leading organizations supporting our mission</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Image src="/TiEOregon.png" alt="TiE Oregon Angels logo" width={128} height={128} className="object-contain max-h-32" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    <a 
                      href="https://www.tieoregon.org/programs/oregon-tie-angels" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-800 hover:text-amber-700 transition-colors"
                    >
                      TiE Oregon Angels
                    </a>
                  </h3>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Image src="/GBA.png" alt="Great Basin Aviation logo" width={128} height={128} className="object-contain max-h-32" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    <a 
                      href="https://www.greatbasinaviation.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-800 hover:text-amber-700 transition-colors"
                    >
                      Great Basin Aviation
                    </a>
                  </h3>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Image src="/WAI.png" alt="Women in Aviation International logo" width={128} height={128} className="object-contain max-h-32" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    <a 
                      href="https://www.wai.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-800 hover:text-amber-700 transition-colors"
                    >
                      Women in Aviation International
                    </a>
                  </h3>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Image src="/WAN.png" alt="Women&apos;s Aerospace Network logo" width={128} height={128} className="object-contain max-h-32" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    <a 
                      href="https://www.womensaerospace.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-800 hover:text-amber-700 transition-colors"
                    >
                      Women&apos;s Aerospace Network
                    </a>
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Unique Advantages */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Unique Advantages</h2>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                    <span className="text-lg text-slate-700">Proprietary real-time accent clarity AI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                    <span className="text-lg text-slate-700">Led by a powerhouse team experts in aviation and aerospace, scalable technology, and speech science.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                    <span className="text-lg text-slate-700">Scalable across global aviation operations and other mission-critical industries</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Letters of Support */}
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">We are currently in discussions with strategic partners and early-stage investors</h2>
            </div>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Interested in learning more?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  <a href="/contact" className="text-amber-700 hover:text-amber-800">Contact us here</a> to request our investor materials or schedule a meeting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
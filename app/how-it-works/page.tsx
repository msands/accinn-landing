import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, Brain, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <section className="relative py-20 min-h-[450px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/how-it-works.jpeg"
            alt="How our AI technology works"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <Badge className="bg-amber-700 text-white mb-4">Technology</Badge>
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">How Our AI Revolutionizes Aviation Communication</h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow">
              At Accent Innovations, we believe every word in aviation should be understood the first time. Our proprietary methodology transforms accented speech into clear and comprehensible communication, ensuring safety and operational efficiency worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Process</h2>
              <p className="text-lg text-slate-600">From “Say Again” to “Roger”</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">1. Initial Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Users start by reading a passage to establish a baseline for English intelligibility. The app analyzes their speech and creates a personalized learning plan for each individual user.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">2. Flight Path Practice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Users improve their pronunciation by controlling an aircraft with their voice. The flight path represents understandable speech.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">3. Feedback System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Users receive individualized real-time visual feedback with visual cues to adjust their pronunciation, with success metrics displayed after each practice session.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">4. Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    The app tracks users&apos; improvement over time, showing their progress for each target vowel.
                  </p>
                </CardContent>
              </Card>
            </div>
            <br></br>
            <div className="text-center mb-12">
              <p className="text-lg text-slate-600">This app aims to help users improve their intelligibility engaging and gamified interactive practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Proprietary Technology</h2>
              <p className="text-lg text-slate-600">
                Built from years of research in aviation speech patterns and communication safety, our AI combines:
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Speech Science Foundation:</h3>
                    <ul className="space-y-2 text-slate-700 text-base">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Based on established speech therapy protocols</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Individualized per user regardless of native language</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Targeted approach addressing specific changes for improved speech clarity</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Engaging Visualization:</h3>
                    <ul className="space-y-2 text-slate-700 text-base">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">User-friendly and understandable visualization of speech patterns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Intuitive aircraft control metaphor for gamified speech therapy techniques</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Real-time visual feedback that directly maps to changing how one speaks in aviation English</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Specialized Content:</h3>
                    <ul className="space-y-2 text-slate-700 text-base">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Career specific phraseology for professional users</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Progressive difficulty based on linguistic and speech therapy principles</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Customization based on user&apos;s native language patterns and English accent</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                  Request Technical Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-slate-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Unmatched Performance</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700">Processing Latency</span>
                      <span className="text-amber-600 font-bold">Sub-100ms</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">Real-time feedback with minimal delay, enhancing the user experience</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700">Global Accent Support</span>
                      <span className="text-amber-600 font-bold">150+</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">Versatile technology accommodating a wide range of accents worldwide</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700">Compliance Standards</span>
                      <span className="text-amber-600 font-bold">FAA & ICAO</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">Meets stringent aviation authority requirements for ICAO LPL Level 4 pronunciation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Real-World Applications</h2>
              <p className="text-lg text-slate-600">Transforming communication across speech critical sectors, with a special focus on enhancing pilot communications:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Aviation Communication Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Pilots and air traffic controllers use the app in training and live operations to neutralize heavy accents in real time, ensuring clear communication to avoid misunderstandings that could risk lives and operational safety.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Global Airline Crew Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Airlines integrate the app into crew training programs, enabling multinational cabin crews to practice clear aviation English pronunciation, improving passenger safety announcements and emergency communication clarity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Military Flight Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Military aviation units deploy the app during multinational joint exercises to standardize English communication across diverse accents, enhancing mission coordination and reducing misinterpretation during critical maneuvers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">ATC and Pilot Recurrency Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Aviation schools and airlines use the app as part of recurrency training for pilots and controllers to maintain ICAO English proficiency levels and continuously refine speech clarity despite regional accent influences. Speech clarity is “use it or lose it”.Military aviation units deploy the app during multinational joint exercises to standardize English communication across diverse accents, enhancing mission coordination and reducing misinterpretation during critical maneuvers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Ground Crew and Maintenance Team Coordination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Airport ground operations and aircraft maintenance teams use the app to reduce miscommunication between multinational staff when performing time-critical tasks like fueling, towing, and mechanical repairs. By improving intelligibility in real time, teams ensure instructions are clearly understood the first time, minimizing delays, safety risks, and costly operational errors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Accent Innovations Advantage */}
      <section className="py-16 bg-white flex justify-center">
        <div className="w-full text-center px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">The Accent Innovations Advantage</h2>
          <p className="text-lg text-slate-600">
            Our mission is straightforward: ensuring every pilot, controller, and crew member is heard clearly the first time, regardless of accent, native language, or background.
          </p>
          <br />
          <p className="text-lg text-slate-600">
            With Accent Innovations, aviation communication transcends barriers, becoming a bridge to safer skies.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-amber-700 text-white mb-4">Technology</Badge>
            <h1 className="text-4xl font-bold text-slate-800 mb-6">How Our AI Revolutionizes Aviation Communication</h1>
            <p className="text-xl text-slate-600">
              Real-time accent neutralization and clarity enhancement for critical aviation operations
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">The Process</h2>
              <p className="text-lg text-slate-600">From speech to crystal-clear communication in milliseconds</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">1. Voice Capture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Advanced microphones capture speech with noise cancellation and clarity enhancement
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">2. AI Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Neural networks analyze and neutralize accents while preserving critical information
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">3. Real-time Output</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Processed audio delivered with sub-100ms latency for immediate comprehension
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">4. Safety Verified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Multiple validation layers ensure accuracy and reliability in critical situations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Advanced AI Technology</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our proprietary neural network architecture combines speech recognition, accent analysis, 
                  and real-time processing to deliver unprecedented clarity in aviation communication.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">99.7% accuracy in accent neutralization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Sub-100ms processing latency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Works with 150+ global accents</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">FAA and ICAO compliant</span>
                  </div>
                </div>
                
                <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                  Request Technical Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-slate-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Performance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700">Accuracy Rate</span>
                      <span className="text-amber-600 font-bold">99.7%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full" style={{width: '99.7%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700">Processing Speed</span>
                      <span className="text-amber-600 font-bold">&lt;100ms</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700">Accent Coverage</span>
                      <span className="text-amber-600 font-bold">150+</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
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
              <p className="text-lg text-slate-600">Transforming communication across aviation sectors</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Air Traffic Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Clear communication between controllers and pilots, reducing miscommunication incidents by 87%.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Real-time accent neutralization</li>
                    <li>• Noise cancellation</li>
                    <li>• Emergency priority processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Cockpit Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Enhanced clarity between pilots and crew members, improving operational efficiency and safety.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Multi-language support</li>
                    <li>• Critical command recognition</li>
                    <li>• Fatigue detection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Ground Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Streamlined communication between ground crews, maintenance teams, and flight operations.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Maintenance coordination</li>
                    <li>• Safety protocol enforcement</li>
                    <li>• Incident reporting</li>
                  </ul>
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
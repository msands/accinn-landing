import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, Target, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />

      <section className="relative py-16 min-h-[350px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about.jpg"
            alt="About Accent Innovations"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0 bg-bluegray bg-opacity-60" />
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <Badge className="bg-amber-700 text-white mb-4 px-5 py-2 text-base font-semibold">About Accent Innovations</Badge>
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Pioneering the Future of Aviation Communication</h1>
            <p className="text-xl text-gray-100 drop-shadow">
              Founded by industry experts, driven by safety, powered by innovation
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Meet Dr. Katie Pierson: Aviation Safety and Speech Innovation Leader</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Dr. Katie Pierson is an award-winning speech-language pathologist and researcher dedicated to enhancing communication safety in aviation.
                  As the founder of Accent Innovations, Dr. Pierson has pioneered the first patent-pending accent modification protocol for pilots, significantly improving intelligibility and preventing miscommunication-related accidents. 
                  Her groundbreaking work has not only advanced the field of speech therapy but also made a substantial impact on aviation safety, earning her recognition as an Aerospace Pioneer by the Women&apos;s Aerospace Network.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                    <div className="flex items-start space-x-4">
                      <Award className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-base font-bold text-slate-800 mb-2">Developer of Aviation&apos;s First Accent Modification Protocol</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Dr. Pierson created a groundbreaking protocol that enhances pilot communication, reducing the risk of miscommunication-related accidents.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                    <div className="flex items-start space-x-4">
                      <Users className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-base font-bold text-slate-800 mb-2">Nationally and Internationally Awarded for Innovation</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Recognized for her pioneering work in speech and aviation safety, Dr. Pierson has received numerous awards both nationally and internationally.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                    <div className="flex items-start space-x-4">
                      <Globe className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-base font-bold text-slate-800 mb-2">Aligned with the United Nation&apos;s SDGs 8 and 10</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Dr. Pierson&apos;s work promotes decent work, economic growth, and reduced inequalities by empowering non-native English-speaking pilots, contributing to global sustainable development goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                  Contact Dr. Pierson <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-l-amber-600 mb-6">
                  <p className="text-amber-800 font-medium italic text-lg">
                    &quot;Understandable speech saves lives and cuts costs. 
                    Our technology makes this possible at scale, transforming how aviation professionals speak when every word counts.&quot;
                  </p>
                  <p className="text-amber-700 font-semibold mt-4">- Dr. Pierson, Founder & CEO</p>
                </div>
                <div className="mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/katie.webp"
                    alt="Dr. Katie Pierson"
                    className="w-full h-64 object-contain rounded-lg shadow-md"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Academic Background</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Doctor of Clinical Science in Speech-Language Pathology specializing in aviation communication safety</li>
                  <li>• M.S. in Speech-Language Pathology</li>
                  <li>• Harvard University Women in Leadership alumna</li>
                  <li>• Published researcher in aerospace communication, pilot speech intelligibility, and safety</li>
                  <li>• Presenter at international and domestic aviation safety and aerospace conferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission & Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Creating safer skies through revolutionary speech modification techniques that enhance clarity in aviation communications.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Safety first, innovation always, and equity in access to novel accent modification technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-slate-800">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Contribute to the United Nation&apos;s Sustainable Development Goals by promoting exceptional work and economic growth 
                    through safer aviation practices and reducing inequalities by empowering diverse voices in aerospace.
                  </p>
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

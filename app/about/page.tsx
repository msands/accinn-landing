import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, Target, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-amber-700 text-white mb-4">About Accent Innovations</Badge>
            <h1 className="text-4xl font-bold text-slate-800 mb-6">Pioneering the Future of Aviation Communication</h1>
            <p className="text-xl text-slate-600">
              Founded by industry experts, driven by safety, powered by innovation
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Meet Dr. Pierson: Aviation Safety Pioneer</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Dr. Pierson brings decades of experience in aviation safety and linguistic research. With multiple
                  awards and board positions in aviation organizations, she recognized the critical need for better
                  communication tools in high-stakes environments.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Multiple aviation safety awards and recognitions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Board member of leading aviation organizations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Aligned with UN SDG 8: Decent Work and Economic Growth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">20+ years in aviation safety research</span>
                  </div>
                </div>
                <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                  Contact Dr. Pierson <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-l-amber-600 mb-6">
                  <p className="text-amber-800 font-medium italic text-lg">
                    &quot;Every clear communication saves lives and reduces costs. Our technology makes this possible at
                    scale, transforming how aviation professionals interact in critical moments.&quot;
                  </p>
                  <p className="text-amber-700 font-semibold mt-4">- Dr. Pierson, Founder & CEO</p>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Academic Background</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Ph.D. in Linguistic Science</li>
                  <li>• M.S. in Aviation Safety Management</li>
                  <li>• Published researcher in communication theory</li>
                  <li>• Former FAA advisory committee member</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission & Values</h2>
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
                    To create safer skies through revolutionary communication technology that eliminates ambiguity and
                    enhances clarity in aviation operations worldwide.
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
                    Safety first, innovation always, and equity in access to life-saving communication technology for
                    all aviation professionals.
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
                    Contributing to UN Sustainable Development Goal 8 by promoting decent work and economic growth
                    through safer aviation practices.
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

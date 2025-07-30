import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { User, Building, GraduationCap, CheckCircle } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 min-h-[450px] flex items-center justify-center text-center">
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
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <Badge className="bg-amber-700 text-white mb-4">Pricing</Badge>
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Flexible Plans for Every Operation</h1>
          </div>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Individual */}
            <Card className="flex flex-col h-full items-center">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <User className="h-7 w-7 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Individual</CardTitle>
                <p className="text-2xl font-bold text-amber-700 mt-2">$999</p>
                <div className="flex justify-center mt-1 mb-2">
                  <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-0.5 rounded-full whitespace-nowrap">3-month protocol</span>
                </div>
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
                  <Button className="bg-amber-700 hover:bg-amber-800 text-white font-bold w-full">Contact Sales to Learn More</Button>
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
                  <Button className="bg-amber-700 hover:bg-amber-800 text-white font-bold w-full">Request Institutional Info</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 
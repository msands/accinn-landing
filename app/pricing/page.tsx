import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bluegray">
      <Navigation />
      <section className="py-16 bg-tan">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-gold text-bluegray mb-4">Pricing</Badge>
            <h1 className="text-4xl font-bold text-white mb-6">Flexible Plans for Every Operation</h1>
            <p className="text-xl text-gold">
              Choose the plan that fits your needs—individual, enterprise, or institutional.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-bluegray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gold mb-4">Individual</h2>
              <p className="text-white mb-4">$50/month</p>
              <ul className="text-gold mb-6 space-y-2 text-center">
                <li>• Full access to all features</li>
                <li>• Real-time accent neutralization</li>
                <li>• 24/7 support</li>
              </ul>
              <Button className="bg-gold text-bluegray font-bold w-full">Start Free Trial</Button>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gold mb-4">Enterprise</h2>
              <p className="text-white mb-4">Custom Pricing</p>
              <ul className="text-gold mb-6 space-y-2 text-center">
                <li>• Volume licensing</li>
                <li>• Custom integrations</li>
                <li>• Dedicated account manager</li>
              </ul>
              <Button className="bg-gold text-bluegray font-bold w-full">Contact Sales</Button>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gold mb-4">Institutional</h2>
              <p className="text-white mb-4">Bundle Pricing</p>
              <ul className="text-gold mb-6 space-y-2 text-center">
                <li>• Academic & government bundles</li>
                <li>• Research partnerships</li>
                <li>• Priority onboarding</li>
              </ul>
              <Button className="bg-gold text-bluegray font-bold w-full">Request Info</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 
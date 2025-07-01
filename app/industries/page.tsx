import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-bluegray">
      <Navigation />
      <section className="py-16 bg-tan">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-gold text-bluegray mb-4">Industries We Serve</Badge>
            <h1 className="text-4xl font-bold text-white mb-6">Transforming Communication Across Sectors</h1>
            <p className="text-xl text-gold">
              Our technology brings clarity, safety, and efficiency to high-stakes industries worldwide.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-bluegray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-gold mb-4">Aviation (Primary Focus)</h2>
              <ul className="text-white space-y-2">
                <li>• Enhanced pilot-controller communication</li>
                <li>• Reduced miscommunication incidents</li>
                <li>• Cost savings through fewer delays</li>
              </ul>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-gold mb-4">Aerospace</h2>
              <ul className="text-white space-y-2">
                <li>• Mission-critical clarity for space operations</li>
                <li>• Multinational crew communication</li>
              </ul>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold">
              <h2 className="text-2xl font-bold text-gold mb-4">Defense / Military</h2>
              <ul className="text-white space-y-2">
                <li>• Secure, real-time communication</li>
                <li>• Multilingual support for coalition forces</li>
              </ul>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold">
              <h2 className="text-2xl font-bold text-gold mb-4">Healthcare</h2>
              <ul className="text-white space-y-2">
                <li>• Clear communication in emergency air transport</li>
                <li>• Reducing errors in high-stress environments</li>
              </ul>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold md:col-span-2">
              <h2 className="text-2xl font-bold text-gold mb-4">Tourism & Customer Service</h2>
              <ul className="text-white space-y-2">
                <li>• Multilingual support for global travelers</li>
                <li>• Improved guest experience and safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 
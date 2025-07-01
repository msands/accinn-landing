import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-bluegray">
      <Navigation />
      <section className="py-16 bg-tan">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-gold text-bluegray mb-4">Testimonials</Badge>
            <h1 className="text-4xl font-bold text-white mb-6">What Our Users Say</h1>
            <p className="text-xl text-gold">
              Real stories from pilots, airlines, and industry leaders.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-bluegray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-gold mb-4">Pilot Testimonial</h2>
              <p className="text-white italic mb-4">
                &quot;Accent Innovations&apos; technology made my cockpit communication crystal clear, even in the busiest airspace.&quot;
              </p>
              <p className="text-gold">— Captain A. Singh, Commercial Pilot</p>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-gold mb-4">Airline Case Study</h2>
              <p className="text-white mb-4">
                After deploying Accent Innovations, our miscommunication incidents dropped by 87% and on-time performance improved.
              </p>
              <p className="text-gold">— Operations Manager, GlobalAir</p>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold">
              <h2 className="text-2xl font-bold text-gold mb-4">FAA Endorsement</h2>
              <p className="text-white mb-4">
                This solution is a game-changer for aviation safety and compliance.
              </p>
              <p className="text-gold">— FAA Safety Board Member</p>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold">
              <h2 className="text-2xl font-bold text-gold mb-4">Case Study: Emergency Response</h2>
              <p className="text-white mb-4">
                During a critical incident, Accent Innovations enabled flawless communication between international crews.
              </p>
              <p className="text-gold">— Case Study, 2024</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-bluegray">
      <Navigation />
      <section className="py-16 bg-tan">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-gold text-bluegray mb-4">Investor Info</Badge>
            <h1 className="text-4xl font-bold text-white mb-6">Invest in the Future of Aviation Communication</h1>
            <p className="text-xl text-gold">
              Discover our market opportunity, traction, and unique advantages.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-bluegray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-gold mb-4">Market Size & Traction</h2>
              <ul className="text-white space-y-2">
                <li>• $50B+ global aviation communication market</li>
                <li>• Early adoption by major airlines</li>
                <li>• Rapidly growing user base</li>
              </ul>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-gold mb-4">Competitive Advantage</h2>
              <ul className="text-white space-y-2">
                <li>• Patent-pending AI technology</li>
                <li>• No direct competitors</li>
                <li>• Founder with deep industry expertise</li>
              </ul>
            </div>
            <div className="bg-black bg-opacity-80 rounded-lg p-8 border-l-4 border-gold md:col-span-2 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gold mb-4">Pitch Deck</h2>
              <p className="text-white mb-4">Download our latest investor pitch deck for detailed projections and strategy.</p>
              <Button className="bg-gold text-bluegray font-bold" asChild>
                <a href="/pitch-deck.pdf" target="_blank" rel="noopener noreferrer">Download Pitch Deck</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 
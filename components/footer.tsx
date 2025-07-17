import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold">Accent Innovations</span>
              </div>
              <p className="text-slate-400 mb-4">
                “Transforming unclear communication with individualized accent and speech training for clear, confident operations.”
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                  LinkedIn
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                  Twitter
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/how-it-works" className="hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-white">
                    Industries
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="hover:text-white">
                    Investors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Accent Innovations. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

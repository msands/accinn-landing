"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showWaitlist, setShowWaitlist] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpg"
              alt="Accent Innovations Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-slate-800">Accent Innovations</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-slate-600 hover:text-amber-700 font-medium">
              How It Works
            </Link>
            <Link href="/industries" className="text-slate-600 hover:text-amber-700 font-medium">
              Industries
            </Link>
            <Link href="/pricing" className="text-slate-600 hover:text-amber-700 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-amber-700 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-amber-700 font-medium">
              Contact
            </Link>
            <Link href="/investors" className="text-slate-600 hover:text-amber-700 font-medium">
              Investor Info
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-tan text-white hover:bg-tan-dark" onClick={() => setShowWaitlist(true)}>
              Join Waitlist
            </Button>

            {/* Modal Popover for Waitlist */}
            {showWaitlist && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
                  <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
                    onClick={() => setShowWaitlist(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  <h2 className="text-2xl font-bold mb-4 text-bluegray">Join the Waitlist</h2>
                  <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSfpuQlhbEW5_072bw_Mr7KR0_NfPBuu8mXm9zl9_mWfsH0j_Q/formResponse"
                    method="POST"
                    target="_blank"
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-bluegray mb-1">Name</label>
                      <input
                        name="entry.2005620554"
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tan"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bluegray mb-1">Email</label>
                      <input
                        name="entry.1045781291"
                        type="email"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tan"
                        placeholder="you@email.com"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-tan text-white hover:bg-tan-dark">
                      Join Waitlist
                    </Button>
                  </form>
                </div>
              </div>
            )}

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/how-it-works" className="text-slate-600 hover:text-amber-700 font-medium">
                How It Works
              </Link>
              <Link href="/industries" className="text-slate-600 hover:text-amber-700 font-medium">
                Industries
              </Link>
              <Link href="/pricing" className="text-slate-600 hover:text-amber-700 font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-amber-700 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-amber-700 font-medium">
                Contact
              </Link>
              <Link href="/investors" className="text-slate-600 hover:text-amber-700 font-medium">
                Investor Info
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

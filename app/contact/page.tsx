import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-amber-700 text-white mb-4">Contact Us</Badge>
            <h1 className="text-4xl font-bold text-slate-800 mb-6">Ready to Transform Your Aviation Communication?</h1>
            <p className="text-xl text-slate-600">
              Get in touch with our team to learn how we can enhance safety and efficiency in your operations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-8">Get In Touch</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Email</h3>
                      <p className="text-slate-600">info@accentinnovations.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Phone</h3>
                      <p className="text-slate-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Location</h3>
                      <p className="text-slate-600">Aviation Technology Center, USA</p>
                    </div>
                  </div>
                </div>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-slate-800 flex items-center">
                      <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                      Enterprise Inquiries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      For enterprise licensing, custom implementations, and volume pricing, contact our business
                      development team.
                    </p>
                    <Button className="bg-amber-700 hover:bg-amber-800 text-white">Schedule Enterprise Demo</Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-slate-800">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                      <Input placeholder="Your Company" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500">
                        <option>Select Industry</option>
                        <option>Commercial Aviation</option>
                        <option>General Aviation</option>
                        <option>Aerospace</option>
                        <option>Defense/Military</option>
                        <option>Healthcare</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                      <Textarea
                        placeholder="Tell us about your communication challenges and how we can help..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">Send Message</Button>
                  </form>
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

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Plane, Rocket, Shield, Truck, Ambulance } from "lucide-react"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 min-h-[450px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/industries.jpeg"
            alt="Industries we serve"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <Badge className="bg-amber-700 text-white mb-4">Industries We Serve</Badge>
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Transforming Communication Across Sectors</h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow">
              Our training brings clarity, safety, and efficiency to high-stakes industries worldwide.
            </p>
          </div>
        </div>
      </section>
      {/* Industry Cards */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Aviation */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Plane className="h-7 w-7 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Aviation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-700 mb-2">Miscommunication from Accented English Costs Lives and Billions</p>
                <ul className="list-disc list-inside text-slate-600 mb-2 space-y-1">
                  <li>Over 80% of aviation incidents involve communication breakdowns (ICAO, 2010).</li>
                  <li>Accented English is a leading cause, delaying readbacks and risking operational safety.</li>
                  <li>Airlines lose $33 billion annually due to communication errors and reroutes (Flight Safety Foundation, 2018), with each minute of delay costing $72-$100 (FAA, 2018).</li>
                  <li>This problem is only getting worse as global aviation is projected to double by 2040 (ICAO, 2019), bringing even more international pilots with diverse accents into daily operations.</li>
                </ul>
                <p className="text-xs text-slate-400 mt-2">Sources: ICAO, 2010 | Flight Safety Foundation, 2018 | FAA, 2018 | ICAO, 2019</p>
              </CardContent>
            </Card>
            {/* Aerospace */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Rocket className="h-7 w-7 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Aerospace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-700 mb-2">Accented Misunderstandings Jeopardize Multi-Billion Dollar Space Missions</p>
                <ul className="list-disc list-inside text-slate-600 mb-2 space-y-1">
                  <li>Multinational space crews operate with diverse English accents, where a single misunderstood command can risk multi-billion-dollar missions (NASA, 2015).</li>
                  <li>Astronaut training emphasizes accent clarity because communication errors during launches, docking, or EVAs can be catastrophic (Kanki et al., 2019).</li>
                  <li>This risk is growing, with over 20 new multinational space missions planned annually (NASA, 2021), increasing the number of crews with varied accents and compounding operational hazards.</li>
                </ul>
                <p className="text-xs text-slate-400 mt-2">Sources: NASA, 2015 | Kanki, Helmreich, & Anca, 2019 | NASA, 2021</p>
              </CardContent>
            </Card>
            {/* Joint Forces */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shield className="h-7 w-7 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Joint Forces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-700 mb-2">Accented English Risks Security and Mission Success</p>
                <ul className="list-disc list-inside text-slate-600 mb-2 space-y-1">
                  <li>NATO forces operate in 30+ languages (NATO, 2020).</li>
                  <li>Accented English in joint missions leads to operational confusion and delayed decisions, compromising security.</li>
                  <li>Coalition forces rely on rapid, accent-neutral communication for tactical success (Defense Language Institute, 2019).</li>
                </ul>
                <p className="text-xs text-slate-400 mt-2">Sources: NATO, 2020 | Defense Language Institute, 2019</p>
              </CardContent>
            </Card>
            {/* Commercial Trucking */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Truck className="h-7 w-7 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Commercial Trucking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-700 mb-2">Accented Miscommunication Costs the Trucking Industry Billions</p>
                <ul className="list-disc list-inside text-slate-600 mb-2 space-y-1">
                  <li>The trucking industry loses over $1.5 billion annually due to miscommunication delays (ATRI, 2018).</li>
                  <li>Drivers with accented English struggle with dispatcher instructions and DOT compliance, increasing safety violations and accident risks (FMCSA, 2021).</li>
                  <li>This problem is worsening as the US trucking workforce has become 40% more linguistically diverse over the past decade (American Trucking Associations, 2020), increasing daily risks.</li>
                </ul>
                <p className="text-xs text-slate-400 mt-2">Sources: ATRI, 2018 | FMCSA, 2021 | American Trucking Associations, 2020</p>
              </CardContent>
            </Card>
            {/* Healthcare and Emergency Transport */}
            <Card className="flex flex-col md:col-span-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Ambulance className="h-7 w-7 text-amber-700" />
                </div>
                <CardTitle className="text-slate-800">Healthcare & Emergency Transport</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-700 mb-2">Accented Speech Endangers Patients in Critical Situations</p>
                <ul className="list-disc list-inside text-slate-600 mb-2 space-y-1">
                  <li>80% of medical errors involve miscommunication (The Joint Commission, 2015).</li>
                  <li>Accented English adds confusion during high-stress handoffs and air medical transport, delaying treatment and threatening lives.</li>
                  <li>This risk is escalating because by 2030, 30% of US healthcare workers will be foreign-born (Migration Policy Institute, 2022), leading to even greater accent diversity in critical care teams.</li>
                  <li>Improving clarity can increase patient survival by up to 30% in critical transfers (Hilligoss & Cohen, 2011).</li>
                </ul>
                <p className="text-xs text-slate-400 mt-2">Sources: The Joint Commission, 2015 | Hilligoss & Cohen, 2011 | Migration Policy Institute, 2022</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 
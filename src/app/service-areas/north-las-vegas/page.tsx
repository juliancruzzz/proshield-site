import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import {
  Warehouse,
  Shield,
  Clock,
  MapPin,
  Zap,
  Home,
  Factory,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "Epoxy Flooring North Las Vegas NV | ProShield Epoxy",
  description:
    "Commercial epoxy flooring and coatings in North Las Vegas, NV. Warehouse, industrial, and commercial-grade systems. Aliante, Apex Industrial Park, chemical-resistant coatings.",
  alternates: {
    canonical: "/service-areas/north-las-vegas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/service-areas/north-las-vegas",
    images: ["/og-image.webp"],
  },
}

const northLasVegasFaqs = [
  {
    q: "What makes North Las Vegas industrial coatings different?",
    a: "North Las Vegas' industrial and warehouse operations need chemical-resistant, heavy-duty systems that residential coatings can't handle. We specialize in epoxy and polyurethane systems designed for high-traffic, chemical-exposure, and durability demands of commercial facilities.",
  },
  {
    q: "Do you work with warehouse and manufacturing facilities?",
    a: "Yes. We have extensive experience with warehouse floors, manufacturing facilities, industrial operations, and heavy-commercial spaces in North Las Vegas. We understand the demands of facilities that require durability, chemical resistance, and minimal downtime.",
  },
  {
    q: "Can you customize coatings for chemical exposure?",
    a: "Absolutely. We assess your facility's specific chemical exposure (solvents, oils, cleaners, etc.) and recommend appropriate epoxy or polyurethane systems. Each commercial project is engineered for your facility's specific requirements.",
  },
  {
    q: "How quickly can you complete a large warehouse or commercial project?",
    a: "Commercial project timelines vary based on square footage, substrate condition, and system chosen. We work closely with facility management to schedule work during off-hours or closures to minimize business disruption. Many facilities see installation in 2-5 days depending on scope.",
  },
  {
    q: "Are your commercial coatings compliant with industry standards?",
    a: "Yes. Our commercial systems meet or exceed industry standards for chemical resistance, slip resistance, and durability. We use professional-grade materials and follow proper installation protocols for commercial applications.",
  },
  {
    q: "Do you serve the Apex Industrial Park area?",
    a: "Yes, we regularly serve Apex Industrial Park and all industrial corridors in North Las Vegas. We have experience with the specific demands of that area's heavy manufacturing and logistics operations.",
  },
]

export default function NorthLasVegasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": northLasVegasFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proshieldepoxy.com/" },
              { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://proshieldepoxy.com/service-areas" },
              { "@type": "ListItem", "position": 3, "name": "North Las Vegas", "item": "https://proshieldepoxy.com/service-areas/north-las-vegas" }
            ]
          })
        }}
      />

      <PageHero
        badge="North Las Vegas, NV"
        title="Commercial & Industrial"
        highlight="Epoxy Flooring Solutions"
        subtitle="Professional-grade chemical-resistant epoxy systems for warehouses, manufacturing facilities, and industrial operations. Aliante, Apex Industrial Park, and all North Las Vegas commercial corridors."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "North Las Vegas" }]} />

      {/* Service Areas */}
      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Industrial & Commercial Corridors
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              North Las Vegas Industrial Focus
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              North Las Vegas is the industrial and logistics hub of Southern Nevada. Our commercial-grade coating systems are engineered for heavy-duty operations, chemical exposure, and long-term durability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Apex Industrial Park",
              "Aliante Commercial District",
              "Warehouse Facilities",
              "Manufacturing Plants",
              "Logistics Operations",
              "Heavy Commercial Corridors",
              "Retail & Distribution",
              "Medical & Pharma Facilities",
              "Food Processing Operations",
            ].map((area) => (
              <div key={area} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="font-medium text-gray-900">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Commercial-Grade Coating Systems
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Engineered for heavy-duty industrial and commercial operations. Chemical-resistant, durable, and built for North Las Vegas' demanding industrial environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Commercial Epoxy */}
            <Link
              href="/areas/commercial"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Factory className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Industrial Epoxy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Heavy-duty epoxy systems for warehouses, manufacturing, and industrial operations. Chemical-resistant formulations engineered for demanding environments.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Concrete Polishing */}
            <Link
              href="/areas/commercial"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Concrete Polishing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                High-performance polished concrete for retail, offices, and light-industrial spaces. Professional appearance with durability for commercial environments.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Chemical-Resistant Systems */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Chemical-Resistant Coatings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Specialized epoxy and polyurethane systems for facilities with chemical exposure. Customized for your facility's specific requirements.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Consult <span>→</span>
              </span>
            </div>

            {/* Polyurethane Systems */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Warehouse className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Polyurethane Flooring
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                High-performance polyurethane systems for maximum durability. Superior abrasion resistance for heavy-traffic warehouses and manufacturing.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Industrial Grade <span>→</span>
              </span>
            </div>

            {/* Slip-Resistant Systems */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Slip-Resistant Coatings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Safety-focused systems with high slip resistance. Critical for food processing, medical facilities, and safety-sensitive operations.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Safety First <span>→</span>
              </span>
            </div>

            {/* Specialty Applications */}
            <Link
              href="/airplane-hangar"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Factory className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Specialty Industrial
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Custom solutions for unique industrial applications. Food processing, pharmaceutical, automotive, and other specialized requirements.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Custom Solutions <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why North Las Vegas Industrial Needs Professional Coatings */}
      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Industrial Environment
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Why Industrial Facilities Need Professional Coatings
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              North Las Vegas' industrial operations face harsh demands that basic concrete can't handle. Professional commercial-grade coatings are essential for safety, durability, and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Chemical Resistance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Industrial and manufacturing operations expose concrete to solvents, oils, cleaners, and harsh chemicals. Professional epoxy and polyurethane systems provide superior chemical resistance that protects your facility investment.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Resists solvents and oils</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Handles harsh cleaning chemicals</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Extends concrete lifespan</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Heavy-Traffic Durability
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Warehouses, manufacturing plants, and distribution centers experience constant heavy foot traffic, forklifts, and equipment. Professional coatings resist abrasion and wear that bare concrete can't withstand.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Abrasion resistance</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Impact protection</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">10+ year durability</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Safety Compliance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Many industrial operations require slip-resistant, cleanable, and durable flooring for employee safety and regulatory compliance. Professional coatings meet these standards and requirements.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Slip-resistant surfaces</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Easy to sanitize</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Code compliant systems</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Operational Efficiency
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Professional coatings reduce downtime, maintenance costs, and safety risks. A coated floor is easier to clean, maintain, and operate, improving overall facility efficiency and productivity.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Reduced maintenance costs</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Minimal downtime</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Improved productivity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ProShield for Commercial */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Why North Las Vegas Facilities Choose ProShield
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Warehouse className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Industrial Experience
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We specialize in warehouse, manufacturing, and industrial operations. We understand the demands of heavy-duty commercial environments.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Scheduled Around Operations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We work with facility management to schedule projects during off-hours or closures, minimizing business disruption.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Engineered Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each project is custom-engineered for your facility's specific chemical exposure, traffic demands, and operational requirements.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <TrendingUp className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Professional-Grade Materials
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use professional-grade epoxy, polyurethane, and polyaspartic systems designed for demanding industrial environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Commercial & Industrial FAQ
            </h2>
          </div>
          <FaqAccordion faqs={northLasVegasFaqs} />
        </div>
      </section>

      <CtaSection />
    </>
  )
}

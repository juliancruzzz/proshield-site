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
  title: "Epoxy Flooring North Las Vegas NV | Commercial & Industrial | ProShield",
  description:
    "North Las Vegas epoxy flooring — warehouse, industrial & commercial coatings. Chemical-resistant systems for Apex Industrial Park & Aliante. Free estimates: 702-728-5484.",
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
    a: "A warehouse floor may need to handle forklift turns, oils and frequent cleaning. I check each of those before choosing a coating.",
  },
  {
    q: "Do you work with warehouse and manufacturing facilities?",
    a: "We offer commercial floor coatings in North Las Vegas. The appropriate system depends on traffic, chemicals, slab condition and your operating schedule. Contact us to discuss the requirements of your facility.",
  },
  {
    q: "Can you customize coatings for chemical exposure?",
    a: "Yes. Tell me which solvents, oils or cleaners you use so I can check the product specifications.",
  },
  {
    q: "How quickly can you complete a large warehouse or commercial project?",
    a: "Commercial project timelines vary based on square footage, substrate condition, and system chosen. We work closely with facility management to schedule work during off-hours or closures to minimize business disruption. Many facilities see installation in 2-5 days depending on scope.",
  },
  {
    q: "Are your commercial coatings compliant with industry standards?",
    a: "Requirements vary by facility and industry. Identify the applicable specifications, chemical exposures and slip-resistance needs before selecting a system. A coating alone does not establish code or regulatory compliance.",
  },
  {
    q: "Do you serve the Apex Industrial Park area?",
    a: "Apex Industrial Park is within our North Las Vegas service area. Contact us with the size, condition and operating requirements of your floor so we can assess the project.",
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

      <PageHero
        badge="North Las Vegas, NV"
        title="Commercial & Industrial"
        highlight="Epoxy Flooring Solutions"
        subtitle="A forklift aisle, a shop floor and a loading bay take different kinds of wear. I help North Las Vegas businesses choose a floor for the traffic and spills they see."
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
              Facilities and areas I serve
            </h2>

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

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Commercial Epoxy */}
            <Link
              href="/commercial-flooring"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Factory className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Industrial Epoxy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Epoxy coatings for warehouse aisles, work bays and production floors.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Concrete Polishing */}
            <Link
              href="/concrete-polishing"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Concrete Polishing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Polishing leaves the concrete itself as the finished surface.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Chemical-Resistant Systems */}
            <Link href="/commercial-flooring" className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Chemical-Resistant Coatings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                I check the chemicals you use against the coating manufacturer’s specifications.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Consult <span>→</span>
              </span>
            </Link>

            {/* Polyurethane Systems */}
            <Link href="/commercial-flooring" className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Warehouse className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Polyurethane Flooring
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A polyurethane topcoat can help protect high-traffic areas from wear.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Industrial Grade <span>→</span>
              </span>
            </Link>

            {/* Slip-Resistant Systems */}
            <Link href="/commercial-flooring" className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Slip-Resistant Coatings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A textured finish can add grip in work areas that get wet.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Safety First <span>→</span>
              </span>
            </Link>

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
                Food processing rooms, repair shops and production lines each need a finish suited to the work.
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
              What to check on a facility floor
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Chemical Resistance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Solvents, oils and cleaners affect coatings differently. A list of what you use helps me check the product before I quote it.
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
                Forklifts and carts wear down turning lanes and loading areas first. Point those out during the site visit.
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
                  <span className="text-gray-700">Maintenance suited to facility use</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Facility Safety Requirements
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Industrial facilities may need specific slip resistance, cleanability or chemical resistance. Review the applicable requirements and product specifications before selecting a coating. Compliance depends on the complete facility and installation, not a general coating claim.
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
                  <span className="text-gray-700">Project specifications reviewed</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Operational Efficiency
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Tell me how you wash the floor and how long it can be out of service.
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
                I work with warehouses and manufacturing facilities.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Scheduled Around Operations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I can discuss installation during an off shift or planned closure.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Choosing a coating
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I match the coating to the traffic and chemicals in each part of the building.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <TrendingUp className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Coating options
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Options include epoxy, polyurethane and polyaspartic coatings.
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

      {/* Internal links */}
      <section className="section-gray py-8 sm:py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            Explore our full{" "}
            <Link href="/services" className="text-accent hover:underline font-medium">flooring services</Link>{" "}
            in North Las Vegas, or{" "}
            <Link href="/contact" className="text-accent hover:underline font-medium">request your free quote</Link>{" "}
            today.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { Warehouse, Shield, Zap, Factory, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial and Industrial Floors in North Las Vegas | ProShield Epoxy",
  description:
    "Commercial floor coatings and concrete polishing in North Las Vegas, including Apex Industrial Park. Plan for forklift traffic, chemical exposure and reopening.",
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
    q: "Do you serve Apex Industrial Park?",
    a: "Yes. Apex Industrial Park and the Aliante area are within our North Las Vegas service area.",
  },
  {
    q: "Can a forklift use the floor as soon as installation is finished?",
    a: "The coating needs to cure before it can carry equipment. We’ll confirm when people can walk on it and when forklift traffic can resume.",
  },
  {
    q: "Can you match a coating to our cleaning chemicals?",
    a: "We can check specific cleaners, concentrations and exposure against the manufacturer’s data before recommending a system.",
  },
  {
    q: "Does a coating meet all facility requirements?",
    a: "Requirements vary by facility. We review the relevant specifications when selecting the floor. Facility compliance also depends on the installation and how the space is operated.",
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
        title="Commercial Floors"
        highlight="in North Las Vegas"
        subtitle="We offer commercial floor coatings for warehouses and shops in North Las Vegas, including Apex Industrial Park. Tell us where the forklifts run and when the floor needs to reopen so we can plan the work around your operation."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "North Las Vegas" }]} />

      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Commercial floor finishes
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
              <span aria-hidden="true" className="text-accent-text">→</span>
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
              <span aria-hidden="true" className="text-accent-text">→</span>
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
                The choice of coating depends on the oils, solvents and cleaners that touch the floor.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
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
              <span aria-hidden="true" className="text-accent-text">→</span>
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
              <span aria-hidden="true" className="text-accent-text">→</span>
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
                Hangar Floors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Hangar coatings can be selected for aircraft traffic and the fluids used on site.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-12">
            Planning work in an operating facility
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Forklift routes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Turning lanes and loading areas can wear faster than the rest of the floor. Mark those routes when planning the coating and repairs.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Spills and cleaning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A floor that sees oil needs different protection from one exposed to solvents or hot washdowns. We can check the specific products used in your facility against the coating specifications.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Wet work areas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Texture affects both traction and cleaning. The right finish depends on what gets spilled, how often the floor is washed and which requirements apply to the space.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Scheduling around a closure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Tell us when trucks, staff and equipment need access again. We can discuss whether sections can be completed separately and how long each area will need to cure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Questions about your project
            </h2>
          </div>
          <FaqAccordion faqs={northLasVegasFaqs} />
        </div>
      </section>

      {/* Internal links */}
      <section className="section-gray py-8 sm:py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link href="/services" className="text-accent hover:underline font-medium">All flooring services</Link>
            <Link href="/contact" className="text-accent hover:underline font-medium">Request a free estimate</Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

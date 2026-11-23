import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { Sparkles, Shield, Zap, Home, TrendingUp, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Garage Floors and Concrete Coatings in Pahrump | ProShield Epoxy",
  description:
    "ProShield travels to Pahrump for garage floors, shops and outdoor concrete. Find out how travel charges, slab repairs and curing affect the job.",
  alternates: {
    canonical: "/service-areas/pahrump",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/service-areas/pahrump",
    images: ["/og-image.webp"],
  },
}

const pahrumpFaqs = [
  {
    q: "Do you travel beyond central Pahrump?",
    a: "Yes. We travel to Pahrump and other parts of Nye County. Give us the project address so we can confirm coverage and any travel charge.",
  },
  {
    q: "Can you coat a shop as well as a home garage?",
    a: "Yes. A shop floor may see carts, tools or oils that a home garage rarely sees. We use those details when selecting a coating.",
  },
  {
    q: "Will a new finish hide cracks?",
    a: "Existing cracks can often be repaired before coating. If the slab moves afterward, a crack can show through the finish.",
  },
  {
    q: "What does the residential warranty cover?",
    a: "Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. Moisture-related failures are excluded.",
  },
]

export default function PahrumpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": pahrumpFaqs.map(faq => ({
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
        title="Garage Floors and Concrete Coatings"
        highlight="in Pahrump"
        subtitle="We travel from Las Vegas for garage floors, driveways and pool decks in Pahrump. If your project has a travel charge, we’ll include it in the quote."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Pahrump" }]} />

      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Finishes for homes and shops
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ProFlake */}
            <Link
              href="/proflake"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Home className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                ProFlake Garage Floors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Choose from more than 150 flake blends, from light mixes to charcoal.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* Metallic Epoxy */}
            <Link
              href="/metallic-epoxy"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Metallic Epoxy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Metallic pigments give the epoxy its reflective finish.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* VubaStone Driveways */}
            <Link
              href="/vubastone"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                VubaStone Resin Driveways
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Resin-bound stone driveways with a natural stone appearance and a choice of decorative blends.
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
                Polishing keeps the original concrete visible in a shop or office.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* Cool Deck */}
            <Link
              href="/cool-deck"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Cool Deck & Pool Decks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A textured outdoor coating can give an existing pool deck a new finish.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* Paver Sealing */}
            <Link href="/paver-sealing" className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Paver Sealing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A sealer helps keep spills from soaking into the pavers.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-12">
            What goes into your quote
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Travel to your property</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A travel fee may apply to projects 60 miles or more from Las Vegas. We’ll confirm whether it applies to your address before you book.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Preparing the slab</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A bare garage slab and one with peeling paint can take different amounts of work. We include any coating removal and crack repairs the floor needs in the estimate.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Choosing an outdoor finish</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A covered patio gets different exposure from an open driveway. Sun, rain and vehicle traffic all matter when choosing the finish.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Getting your garage back</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Installation and curing are separate. We’ll tell you when you can walk on the floor and when it can take a parked vehicle.</p>
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
          <FaqAccordion faqs={pahrumpFaqs} />
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

import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { Sparkles, Shield, Zap, Home, Mountain, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Garage Floors and Concrete Coatings in Boulder City | ProShield Epoxy",
  description:
    "Garage floors, driveways and pool decks for Boulder City homes and businesses. Compare ways to refinish existing concrete, including older slabs.",
  alternates: {
    canonical: "/service-areas/boulder-city",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/service-areas/boulder-city",
    images: ["/og-image.webp"],
  },
}

const boulderCityFaqs = [
  {
    q: "Do you work near Lake Mead?",
    a: "Yes. Our Boulder City service area includes homes near Lake Mead, Lakeview, Boulder Ridge and historic downtown.",
  },
  {
    q: "Can you polish the concrete instead of coating it?",
    a: "If the slab is suitable, yes. Polishing leaves the concrete visible. A coating gives it a new color or finish and can cover differences in the original concrete.",
  },
  {
    q: "What warranty is available for a garage?",
    a: "Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. Moisture-related failures are excluded.",
  },
  {
    q: "What is your Nevada contractor license?",
    a: "ProShield’s Nevada license is #0094652. Its C-5 classification is limited to epoxy coatings and sealants. Ask for current bond and insurance documents for your project.",
  },
]

export default function BoulderCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": boulderCityFaqs.map(faq => ({
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
        title="Garage Floors and Driveways"
        highlight="in Boulder City"
        subtitle="We install epoxy garage floors and refinish driveways and pool decks in Boulder City, from homes near Lake Mead to businesses downtown. If you’re keeping the original stone or concrete, we can plan the new finish around it."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Boulder City" }]} />

      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Options for existing concrete
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
                Flake gives a garage a speckled finish, with more than 150 blends to choose from.
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
                Metallic epoxy blends two or more colors across a seamless floor.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* VubaStone Driveways */}
            <Link
              href="/vubastone"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Mountain className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                VubaStone Resin Driveways
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Resin holds the stone together to create a textured driveway.
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
                Polishing brings out the stone in an existing concrete floor.
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
                Texture, color and the amount of shade all matter around a pool.
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
                Sealing can help keep spills from soaking into pavers.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-12">
            Refinishing an older slab
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Original stone and trim</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Identify the borders, stonework or exposed concrete you’d like to keep. That sets the edges of the work before grinding begins.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Old paint and cracks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Loose coatings need to come off. We check cracks and joints before quoting repairs because movement underneath can show through a new finish.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Moisture beneath the floor</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A slab can look dry at the surface and still have moisture below. Testing helps determine whether a coating needs a moisture vapor barrier.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Sun on a driveway or pool deck</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Choose a finish intended for the amount of sun and water the area receives. Lighter colors generally stay cooler than darker ones under the same conditions.</p>
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
          <FaqAccordion faqs={boulderCityFaqs} />
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

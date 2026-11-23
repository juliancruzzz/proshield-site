import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { Sparkles, Shield, Palette, Home, Zap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Garage Floors and Concrete Finishes in Summerlin | ProShield Epoxy",
  description:
    "Compare flake and metallic garage floors in Summerlin. Explore polished concrete for shops, plus pool deck and driveway finishes for the rest of your property.",
  alternates: {
    canonical: "/service-areas/summerlin",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/service-areas/summerlin",
    images: ["/og-image.webp"],
  },
}

const summerlinFaqs = [
  {
    q: "Which parts of Summerlin do you serve?",
    a: "We cover Summerlin, including The Ridges, Summerlin South and the shops and offices in Downtown Summerlin.",
  },
  {
    q: "Can you coat an existing garage floor?",
    a: "Often, yes. Old paint, cracks and moisture affect the preparation. The estimate sets out what the slab needs before the new finish goes on.",
  },
  {
    q: "Does the garage floor come with a warranty?",
    a: "Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. Moisture-related failures are excluded.",
  },
  {
    q: "Do you work on retail floors?",
    a: "Yes. We offer polished concrete and commercial coatings. For an occupied shop, tell us when the sales floor needs to reopen so we can discuss the schedule.",
  },
]

export default function SummerlinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": summerlinFaqs.map(faq => ({
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
        title="Garage Floors"
        highlight="in Summerlin"
        subtitle="We install epoxy and polyurea garage floors throughout Summerlin. For a speckled garage finish, ProFlake comes in more than 150 blends. We also offer metallic epoxy for custom color combinations."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Summerlin" }]} />

      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Finishes for your home or shop
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Metallic pigments spread as the floor is poured, leaving a different pattern each time.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* ProFlake */}
            <Link
              href="/proflake"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                ProFlake Garage Floors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Choose from more than 150 decorative flake blends.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* VubaStone Driveways */}
            <Link
              href="/vubastone"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                VubaStone Resin Driveways
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Stone mixed with clear resin gives a driveway a textured surface.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* Concrete Polishing */}
            <Link
              href="/concrete-polishing"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Concrete Polishing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Polishing brings out the natural variation in a shop or office floor.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* Cool Deck */}
            <Link
              href="/cool-deck"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Cool Deck & Pool Decks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A textured acrylic finish for worn concrete around the pool.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>

            {/* Paver Sealing */}
            <Link href="/paver-sealing" className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Home className="h-6 w-6 text-accent" />
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
            Choosing a garage finish
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Flake or metallic?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Flake blends give the floor an even mix of small chips. Metallic epoxy blends pigments during the pour, so two floors in the same colors will have different markings.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Keeping the concrete visible</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Polishing leaves the original slab on show. The size and color of the exposed stone depend on the concrete itself.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">A garage that opens onto a driveway</h3>
              <p className="text-gray-600 text-sm leading-relaxed">The garage and driveway get different amounts of sun and rain. You can coordinate colors while choosing a finish suited to each surface.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Time out of the garage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Allow time for preparation, installation and curing. We’ll confirm when you need to clear the garage and when you can park again.</p>
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
          <FaqAccordion faqs={summerlinFaqs} />
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

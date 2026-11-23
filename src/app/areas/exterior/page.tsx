import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ExteriorAreas } from "@/components/sections/exterior-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Exterior Surfaces Las Vegas | ProShield Epoxy",
  description: "Exterior coatings in Las Vegas — driveways, patios, pool decks and walkways. Cool deck, paver sealing and VubaStone.",
  alternates: {
    canonical: "/areas/exterior",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/areas/exterior",
    images: ["/images/vubastone/vubastone-driveway-craftsman.webp"],
  },
}

const exteriorFaqs = [
  {
    q: "Can ProFlake be used on an outdoor patio?",
    a: "Yes, on suitable concrete. We check the condition of the patio, its sun exposure and how it will be used. ProFlake uses a polyurea base and a clear polyaspartic topcoat.",
  },
  {
    q: "What's the best option for a pool deck in Las Vegas?",
    a: "Cool Deck gives concrete a textured acrylic finish. Lighter colors generally stay cooler than darker ones under the same conditions. VubaStone offers a natural stone finish. Drainage depends on the base beneath it.",
  },
  {
    q: "What affects wear on a VubaStone surface?",
    a: "Traffic, the condition of the base and regular maintenance all affect how the surface wears. A driveway sees different wear from a patio.",
  },
  {
    q: "Is Cool Deck the same as epoxy?",
    a: "No. Cool Deck (knockdown texture) is an acrylic or acrylic-modified texture system — not epoxy. It gives concrete a textured finish for pool decks and patios. Wet surfaces can still be slippery.",
  },
  {
    q: "Do I need to reseal my pavers?",
    a: "Paver sealer isn't permanent — it wears down over time from UV exposure, foot traffic, and weather. We recommend periodic maintenance reapplication to keep your pavers looking their best and protected from stains and fading.",
  },
  {
    q: "Can you install on existing concrete?",
    a: "In most cases, yes. ProFlake, Cool Deck, and VubaStone can all be applied over existing concrete substrates, as long as the surface is properly prepared. We assess substrate condition during your free consultation to confirm the best approach.",
  },
  {
    q: "How long does an exterior installation take?",
    a: "Preparation, weather and the finish you choose all affect the schedule. Your quote will distinguish installation time from when you can use the surface again.",
  },
]

export default function ExteriorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": exteriorFaqs.map(faq => ({
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
              { "@type": "ListItem", "position": 2, "name": "Exterior Surfaces", "item": "https://proshieldepoxy.com/areas/exterior" }
            ]
          })
        }}
      />

      <PageHero
        badge="Exterior Surfaces"
        title="Exterior Coatings"
        highlight="Las Vegas"
        subtitle="Compare finishes for your driveway, patio or pool deck. The best fit depends on the concrete and how you use it."
      />

      <ExteriorAreas />

      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900">Before you resurface outdoor concrete</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-heading font-semibold text-lg text-gray-900">Where does water go?</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">A permeable stone surface still needs somewhere for the water to drain. Around a pool, the slope and the height of the drain matter when a new layer goes down.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-heading font-semibold text-lg text-gray-900">How much of the deck is in direct sun?</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">A light finish generally stays cooler than a dark version of the same material. Even light colors can get hot in direct sun, and a textured surface can still be slippery when wet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Exterior FAQ
            </h2>
          </div>
          <FaqAccordion faqs={exteriorFaqs} />
        </div>
      </section>

      <CtaSection />
    </>
  )
}

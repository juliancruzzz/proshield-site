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
    a: "It depends on the system and project size. VubaStone, Cool Deck, and larger projects typically take 2–3 days or more. We'll give you a clear timeline in your proposal.",
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

      {/* Exterior Systems & Las Vegas Climate */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Outdoor Coating Systems for Every Application
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Compare finishes for pool decks, patios and driveways.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* ProFlake Exterior */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">ProFlake Exterior (Polyurea Base)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Decorative flakes cover a polyurea base for a speckled finish.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Clear polyaspartic topcoat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>150+ color options</span>
                </li>
              </ul>
            </div>

            {/* VubaStone */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">VubaStone (Driveways & Patios)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Natural stone bound with a clear polyurethane resin.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Drainage depends on the base underneath</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Natural stone appearance and texture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Ideal for modern and rustic designs</span>
                </li>
              </ul>
            </div>

            {/* Cool Deck */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Cool Deck (Pool Decks & Patios)</h3>
              <p className="text-gray-600 text-sm mb-4">
                An acrylic knockdown finish gives concrete pool decks and patios a textured surface.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Lighter colors generally stay cooler in the sun.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Wet decks can still be slippery.</span>
                </li>
              </ul>
            </div>

            {/* Paver Sealing */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Paver Sealing</h3>
              <p className="text-gray-600 text-sm mb-4">
                Protect existing pavers with professional sealing that enhances color and helps resist stains and fading.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Paver sealing protects against UV fading and stains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Wet-look and natural-look sealer options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Helps reduce weed growth between joints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Extends lifespan of existing hardscapes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Las Vegas Climate Section */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
              Sun, Rain and Wear on Outdoor Concrete
            </h3>
            <p className="text-gray-600 mb-6">
              Outdoor coatings in Las Vegas must handle extreme conditions. Our systems are engineered for:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Extreme Heat & UV Degradation</h4>
                <p className="text-gray-600 text-sm">
                  Any deck can get hot in direct sun. Color and shade both affect how hot the surface feels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Thermal Shock & Expansion</h4>
                <p className="text-gray-600 text-sm">
                  Concrete expands and contracts as temperatures change. Existing cracks and moving joints need assessment before resurfacing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Monsoon & Flash Flood Drainage</h4>
                <p className="text-gray-600 text-sm">
                  Summer monsoons bring sudden heavy rain. VubaStone&apos;s permeable surface allows water to pass through. Drainage depends on the underlying base and site conditions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dust Storm & Sand Infiltration</h4>
                <p className="text-gray-600 text-sm">
                  Sealed outdoor surfaces resist dust accumulation and are easier to maintain. A smooth, protected surface keeps your outdoor spaces cleaner longer.
                </p>
              </div>
            </div>
          </div>

          {/* Why ProShield */}
          <div className="border-t border-gray-200 mt-12 pt-12">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
              Why ProShield for Your Las Vegas Outdoor Spaces
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Tested in Desert Conditions</p>
                  <p className="text-gray-600 mt-1">Hundreds of outdoor installations across Las Vegas prove our systems handle the harshest climate in the Southwest.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">System Matching Expertise</p>
                  <p className="text-gray-600 mt-1">We assess your specific surface, climate exposure, and goals to recommend the right system—not a one-size-fits-all approach.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Professional Installation & Prep</p>
                  <p className="text-gray-600 mt-1">Proper surface prep is critical in the desert. We diamond grind, seal cracks, and ensure ideal conditions for long-term performance.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Aesthetic + Function</p>
                  <p className="text-gray-600 mt-1">Your outdoor space should be beautiful and durable. We combine stunning finishes with proven Las Vegas performance.</p>
                </div>
              </div>
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

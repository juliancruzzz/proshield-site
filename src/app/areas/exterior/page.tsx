import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ExteriorAreas } from "@/components/sections/exterior-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Exterior Surfaces Las Vegas | ProShield Epoxy",
  description: "Exterior coatings in Las Vegas — driveways, patios, pool decks, walkways. Cool deck, paver sealing, VubaStone, and artificial turf.",
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
    q: "Can epoxy flooring be installed outdoors?",
    a: "Yes — our ProFlake system (polyurea base + polyaspartic topcoat) can be applied to any exterior concrete surface, including patios, pool decks, driveways, and walkways. It provides a durable, decorative finish that holds up to the elements.",
  },
  {
    q: "What's the best option for a pool deck in Las Vegas?",
    a: "Cool Deck (knockdown texture) is the most popular choice for pool decks. It's an acrylic-based texture with lighter color options that help reduce surface temperature. VubaStone is another great option — it's fully permeable so water drains through rather than pooling on the surface.",
  },
  {
    q: "How long does VubaStone last?",
    a: "VubaStone is built to last 15–20 years with regular maintenance. It's a polyurethane resin-bound natural stone system — not an epoxy or paint — designed to handle UV exposure, foot traffic, and vehicle traffic depending on the application.",
  },
  {
    q: "Is Cool Deck the same as epoxy?",
    a: "No. Cool Deck (knockdown texture) is an acrylic or acrylic-modified texture system — not epoxy. It's specifically designed for exterior use around pools and patios where heat reduction and slip resistance matter most.",
  },
  {
    q: "Do I need to reseal my pavers?",
    a: "Paver sealer isn't permanent — it wears down over time from UV exposure, foot traffic, and weather. We recommend periodic maintenance reapplication to keep your pavers looking their best and protected from stains and fading.",
  },
  {
    q: "How does GrassMac work under artificial turf?",
    a: "GrassMac is an engineered permeable base layer installed beneath your artificial grass. It uses SRM, VubaMac resin, and a recycled rubber + aggregate blend to create proper drainage so water flows through instead of pooling under the turf.",
  },
  {
    q: "Can you install on existing concrete?",
    a: "In most cases, yes. ProFlake, Cool Deck, and VubaStone can all be applied over existing concrete substrates, as long as the surface is properly prepared. We assess substrate condition during your free consultation to confirm the best approach.",
  },
  {
    q: "How long does an exterior installation take?",
    a: "It depends on the system and project size. ProFlake on a standard residential concrete surface can often be completed in 1 day. VubaStone, Cool Deck, and larger projects typically take 2–3 days or more. We'll give you a clear timeline in your proposal.",
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
        subtitle="From driveways to patios to turf — ProShield transforms outdoor surfaces with durable, decorative systems built to handle the elements."
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
              Las Vegas outdoor spaces face intense UV exposure and extreme heat. ProShield offers systems designed for maximum durability and aesthetics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* ProFlake Exterior */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">ProFlake Exterior (Polyurea Base)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Decorative flaked finish for driveways, patios, and walkways. Polyurea base provides superior UV stability and quick curing.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Often completed in 1 day on residential concrete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Slip-resistant textures for safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>150+ color options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Excellent UV and weather resistance</span>
                </li>
              </ul>
            </div>

            {/* VubaStone */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">VubaStone (Driveways & Patios)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Polyurethane resin-bound natural stone system. Fully permeable, eco-friendly, and long-lasting.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>15–20 years lifespan with maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Fully permeable for water drainage</span>
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
                Acrylic-based knockdown texture coating. Designed to reduce surface temperature and provide superior slip resistance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Reduces surface temperature by 20+ degrees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>High slip resistance for water areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Light colors reflect heat and UV</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Most popular pool deck choice in Las Vegas</span>
                </li>
              </ul>
            </div>

            {/* Paver Sealing & GrassMac */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Paver Sealing & GrassMac Turf</h3>
              <p className="text-gray-600 text-sm mb-4">
                Protect existing pavers and create permeable bases for artificial turf. Professional-grade systems for long-term aesthetics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Paver sealing protects against UV fading and stains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>GrassMac creates proper drainage under artificial turf</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Eco-friendly, permeable options available</span>
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
              Built for Las Vegas: 115°F Summers, UV Exposure & Monsoon Rains
            </h3>
            <p className="text-gray-600 mb-6">
              Outdoor coatings in Las Vegas must handle extreme conditions. Our systems are engineered for:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Extreme Heat & UV Degradation</h4>
                <p className="text-gray-600 text-sm">
                  Surface temperatures exceed 150°F in summer. Standard coatings fade, crack, and peel. Our polyurea and polyurethane systems resist UV damage and maintain color and flexibility year after year.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Thermal Shock & Expansion</h4>
                <p className="text-gray-600 text-sm">
                  Vegas days hit 115°F while nights cool dramatically. This causes concrete to expand and contract. Our flexible coatings move with the substrate, preventing cracks and peeling.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Monsoon & Flash Flood Drainage</h4>
                <p className="text-gray-600 text-sm">
                  Summer monsoons bring sudden heavy rain. Permeable systems like VubaStone and GrassMac prevent water pooling and drainage problems, protecting your investment.
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

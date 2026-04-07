import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ExteriorAreas } from "@/components/sections/exterior-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Exterior Surfaces Las Vegas | ProShield Epoxy",
  description: "Transform your outdoor spaces — driveways, patios, pool decks, walkways, and lawns. Cool deck textures, paver sealing, VubaStone, and GrassMac turf installations in Las Vegas.",
  alternates: {
    canonical: "/areas/exterior",
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
      <PageHero
        badge="Exterior Surfaces"
        title="Elevate Your"
        highlight="Outdoor Space"
        subtitle="From driveways to patios to turf — ProShield transforms outdoor surfaces with durable, decorative systems built to handle the elements."
      />

      <ExteriorAreas />

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

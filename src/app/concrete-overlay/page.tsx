import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { OverlayStats } from "@/components/sections/overlay-stats"
import { OverlayIntro } from "@/components/sections/overlay-intro"
import { OverlayTypes } from "@/components/sections/overlay-types"
import { OverlayComparison } from "@/components/sections/overlay-comparison"
import { OverlayProcess } from "@/components/sections/overlay-process"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { RelatedServices } from "@/components/sections/related-services"
import { CtaSection } from "@/components/sections/cta-section"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Concrete Overlay & Resurfacing | Las Vegas | ProShield Epoxy",
  description: "Concrete overlay and resurfacing in Las Vegas. Transform cracked, stained concrete without tear-out. Stamped, stenciled, and decorative overlays. Free estimates.",
  keywords: "concrete overlay Las Vegas, concrete resurfacing, stamped concrete overlay, decorative concrete overlay, concrete polishing",
}

const faqs = [
  {
    q: "What exactly is a concrete overlay?",
    a: "A concrete overlay is a thin cementitious coating applied directly over existing concrete. It's not a coating like epoxy or polyaspartic — it's a resurfacing system that bonds chemically to the old concrete and becomes part of the surface. It can be as thin as 1/16 inch (microtopping) or as thick as 3/4 inch (stampable overlay).",
  },
  {
    q: "Will the overlay crack if the existing concrete is cracked?",
    a: "We repair all significant cracks before applying the overlay system. Minor hairline cracks are addressed during surface prep. The bonding agent and primer create adhesion, and the overlay itself adds structural rigidity. Most overlays perform well even over older concrete if prep is done correctly.",
  },
  {
    q: "How long does an overlay installation take?",
    a: "Most residential overlays complete in 1–2 days. Larger commercial projects might take 2–4 days depending on size and complexity. Once the overlay is applied and cured, we seal it with a polyaspartic topcoat for maximum durability and protection.",
  },
  {
    q: "What finish options do you offer?",
    a: "We offer microtoppings (smooth, polished look), stampable overlays (stone/brick/tile patterns), polishable overlays (high-gloss grind-and-polish finish), and custom decorative overlays (stencils, logos, multi-color blends, faux finishes). Colors and patterns are customizable.",
  },
  {
    q: "How much longer does an overlay last than plain concrete?",
    a: "Plain sealed concrete might last 2–5 years before the sealer wears off. Our overlays, finished with a polyaspartic topcoat, typically last 10–15+ years depending on traffic and exposure. Interior floors last longer than exterior. Maintenance (resealing every 2–3 years) extends lifespan.",
  },
]

export default function ConcreteOverlayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <PageHero
        badge="Concrete Overlay & Resurfacing"
        title="Transform Your"
        highlight="Existing Concrete"
        subtitle="No demolition required. Stamped, stenciled, or smooth finishes sealed with polyaspartic topcoat. For driveways, patios, pool decks, walkways, and more."
        backgroundImage="/images/cool-deck/pool-deck-hero.jpg"
        backgroundAlt="Stamped concrete overlay around pool deck and patio area"
      />

      <OverlayStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Decorative Overlay" }]} />

      <OverlayIntro />

      <OverlayTypes />

      <OverlayComparison />

      <OverlayProcess />

      {/* FAQ — tight accordion */}
      <section className="section-white py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight mb-6 sm:mb-8">
            Concrete Overlay FAQ
          </h2>
          <FaqAccordion faqs={faqs} />
          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="concrete-overlay" />

      <CtaSection />
    </>
  )
}

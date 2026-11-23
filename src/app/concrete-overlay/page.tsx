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
  description: "Resurface suitable concrete with a smooth, stamped or stenciled overlay. Explore patterns for patios, walkways, driveways and indoor floors.",
  keywords: "concrete overlay Las Vegas, concrete resurfacing, stamped concrete overlay, decorative concrete overlay, concrete polishing",
  openGraph: {
    url: "https://proshieldepoxy.com/concrete-overlay",
    images: ["/images/concrete-overlay/concrete-overlay-commercial-palms.webp"],
  },
  alternates: {
    canonical: "/concrete-overlay",
  },
}

const faqs = [
  {
    q: "What exactly is a concrete overlay?",
    a: "An overlay is a thin cement-based layer applied over sound concrete. A smooth skim coat changes the surface with little added height. A thicker stampable mix can take the impression of stone, brick or tile.",
  },
  {
    q: "Will the overlay crack if the existing concrete is cracked?",
    a: "A crack can show through again if the slab keeps moving. We assess the cracks and joints before quoting an overlay. Settlement or structural damage may need a different repair.",
  },
  {
    q: "How long does an overlay installation take?",
    a: "Surface prep, repairs and the finish determine the schedule. A polished overlay includes grinding after the topping sets. We’ll confirm when the space can take foot or vehicle traffic.",
  },
  {
    q: "What finish options do you offer?",
    a: "We offer smooth, stamped, stenciled and polishable overlays. Stamps add texture. Stencils and scoring let you add a border or lay out a repeating pattern.",
  },
  {
    q: "Can an overlay change the height at a doorway?",
    a: "Yes. The topping adds height to the slab. We check thresholds, steps and drains before recommending a finish or thickness.",
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
        title="Concrete Overlay & Resurfacing"
        highlight="Las Vegas"
        subtitle="Keep the concrete you have and change its finish. A suitable slab can take a smooth skim coat, a stamped stone pattern or a stenciled border."
        backgroundImage="/images/cool-deck/pool-deck-hero.webp"
        backgroundAlt="Textured concrete beside a pool and patio"
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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

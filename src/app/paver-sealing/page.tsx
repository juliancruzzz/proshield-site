import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { PaverSealingStats } from "@/components/sections/paver-sealing-stats"
import { PaverSealingIntro } from "@/components/sections/paver-sealing-intro"
import { PaverSealingProcess } from "@/components/sections/paver-sealing-process"
import { PaverSealingBenefits } from "@/components/sections/paver-sealing-benefits"
import { PaverSealingApplications } from "@/components/sections/paver-sealing-applications"
import { PaverSealingGallery } from "@/components/sections/paver-sealing-gallery"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { RelatedServices } from "@/components/sections/related-services"
import { CtaSection } from "@/components/sections/cta-section"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Paver Sealing & Restoration Las Vegas | ProShield Epoxy",
  description:
    "Paver sealing and restoration in Las Vegas. Compare cleaning, existing sealer removal, joint care and finish options with a free on-site estimate.",
  keywords: [
    "paver sealing Las Vegas",
    "paver restoration Las Vegas",
    "paver sealer",
    "polymeric sand Las Vegas",
    "paver color enhancement",
    "paver joint stabilization",
    "pool deck sealing Las Vegas",
    "driveway paver sealing",
  ],
  openGraph: {
    url: "https://proshieldepoxy.com/paver-sealing",
    images: ["/images/paver-sealing/paver-driveway-sealed.webp"],
  },
  alternates: {
    canonical: "/paver-sealing",
  },
}

const faqs = [
  {
    q: "How long does paver sealing last?",
    a: "How often resealing is needed depends on the selected product, paver condition, traffic, exposure and care. Inspect the surface periodically and confirm the maintenance guidance for the installed sealer.",
  },
  {
    q: "What's the difference between wet-look and natural-look sealer?",
    a: "Wet-look and color-enhancing products can deepen color or add sheen. Natural-look products aim for less visible change. Formulas and protection vary; compare the selected products and approve a sample area.",
  },
  {
    q: "Can you fix pavers that were sealed badly by someone else?",
    a: "Existing sealer and stains need inspection first. Removal, cleaning and resealing may be possible, but the scope depends on compatibility and surface condition. Some stains or damage may remain visible.",
  },
  {
    q: "Do I need polymeric sand?",
    a: "Joint sand needs to suit the paver system and proposed treatment. The quote should identify whether re-sanding is needed and which joint material will be used. It does not replace repairs to a moving or poorly supported surface.",
  },
  {
    q: "How long does the process take?",
    a: "The schedule depends on area, cleaning, existing sealer removal, drying conditions and the selected product. Confirm the project schedule and separate walking and vehicle return times in writing.",
  },
  {
    q: "Why not use sealer from the hardware store?",
    a: "Compare compatibility, intended use, preparation, UV information, slip considerations and care requirements for the actual products. Where a product is sold does not establish how it will perform on your pavers.",
  },
  {
    q: "Is paver sealing the same as epoxy coating?",
    a: "Paver sealing treats an existing paver surface. It differs from a layered decorative epoxy floor system. Confirm the selected sealer’s purpose and compatibility rather than assuming it has the same properties as a garage coating.",
  },
  {
    q: "Do you offer maintenance plans?",
    a: "Ask about current inspection, cleaning and resealing options when requesting an estimate. The written quote should identify what is included and any future maintenance work.",
  },
]

export default function PaverSealingPage() {
  return (
    <>
      {/* FAQ Schema for SEO */}
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

      {/* Hero */}
      <PageHero
        badge="Paver Sealing & Restoration"
        title="Paver Sealing & Restoration"
        highlight="Las Vegas"
        subtitle="I clean the pavers, check the joint sand and help you choose a natural or wet-look finish."
        backgroundImage="/images/paver-sealing/paver-driveway-sealed.webp"
        backgroundAlt="Paver walkway finish example"
      />

      <PaverSealingStats />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Paver Sealing" },
        ]}
      />

      <PaverSealingIntro />

      <PaverSealingProcess />

      <PaverSealingBenefits />

      <PaverSealingApplications />

      <PaverSealingGallery />

      {/* FAQ */}
      <section className="section-gray py-10 sm:py-16 lg:py-24 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Paver Sealing FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a Paver Sealing Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="paver-sealing" />

      <CtaSection />
    </>
  )
}

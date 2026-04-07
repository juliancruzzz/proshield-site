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
    "Professional paver sealing and restoration in Las Vegas. UV-stable, non-yellowing sealer built for desert heat. Sealing, stripping, re-sanding, stain removal, and color enhancement.",
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
  alternates: {
    canonical: "/paver-sealing",
  },
}

const faqs = [
  {
    q: "How long does paver sealing last?",
    a: "Paver sealer requires periodic reapplication. With a professional-grade, UV-stable sealer and proper maintenance, expect 3–5 years of protection in the Las Vegas climate. High-traffic areas and pool decks may need resealing sooner. We offer maintenance plans to keep your pavers protected long-term.",
  },
  {
    q: "What's the difference between wet-look and natural-look sealer?",
    a: "Wet-look (gloss) deepens and enriches paver color with a reflective finish — colors pop and surfaces look freshly wet. Natural-look (matte) provides invisible protection without changing the paver's appearance. Both use the same professional-grade formula for the same level of UV, stain, and water protection.",
  },
  {
    q: "Can you fix pavers that were sealed badly by someone else?",
    a: "Yes — paver restoration is one of our most common jobs. We strip the old sealer, deep-clean the surface, treat stains, re-sand the joints with polymeric sand, and apply a fresh coat. The result is like-new pavers without the cost of replacement.",
  },
  {
    q: "Do I need polymeric sand?",
    a: "We strongly recommend it. Polymeric sand fills joints and hardens when activated with water. It prevents weed growth, ant hills, and erosion — and keeps pavers from shifting. Skipping re-sanding is the most common reason sealed pavers develop problems.",
  },
  {
    q: "How long does the process take?",
    a: "Most residential paver sealing jobs finish in 1–2 days. Restoration that requires stripping old sealer may take 2–3 days. We recommend staying off the sealed surface for 24 hours after application.",
  },
  {
    q: "Why not use sealer from the hardware store?",
    a: "Retail sealers are typically water-based acrylics that yellow within 6–12 months in Las Vegas heat and UV. They peel, haze, and require frequent reapplication. Professional-grade sealers are engineered for UV stability and extreme heat — they outperform consumer products significantly.",
  },
  {
    q: "Is paver sealing the same as epoxy coating?",
    a: "No. Paver sealing is hardscape maintenance — a protective sealer applied to existing pavers. It's not a resinous coating system. Sealer enhances and protects your current surface — it doesn't create a new one. Different product, different purpose entirely.",
  },
  {
    q: "Do you offer maintenance plans?",
    a: "Yes. We offer annual maintenance that includes inspection, cleaning, and discounted resealing when needed. A maintenance plan extends the life of your sealer and keeps your pavers looking their best year-round.",
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
        title="Your Pavers Deserve"
        highlight="Better Protection."
        subtitle="Professional sealing, restoration, and joint stabilization — UV-stable, non-yellowing, and engineered for Las Vegas desert heat."
        backgroundImage="/images/paver-sealing/paver-driveway-sealed.webp"
        backgroundAlt="Professional sealed paver driveway"
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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

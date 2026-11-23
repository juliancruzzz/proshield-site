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
    a: "The sealer on a sunny driveway may wear differently from the same finish on a covered patio. Check high-traffic spots against a sheltered area before deciding whether to reseal.",
  },
  {
    q: "What's the difference between wet-look and natural-look sealer?",
    a: "A wet-look sealer can deepen the color of the stone. A natural-look product stays closer to the original appearance. A small test area shows how the finish looks on your own pavers.",
  },
  {
    q: "Can you fix pavers that were sealed badly by someone else?",
    a: "We check the old sealer before applying anything new. A cloudy or peeling coat may need stripping. Stains that have soaked into the pavers can remain visible.",
  },
  {
    q: "Do I need polymeric sand?",
    a: "Some joints need fresh sand before sealing. We check the gaps and the paver system first. If pavers are sinking or rocking, the base needs attention too.",
  },
  {
    q: "How long does the process take?",
    a: "Cleaning, drying and stripping old sealer all affect the schedule. We’ll confirm when you can walk on the pavers and when to bring a vehicle back.",
  },
  {
    q: "Can you seal pavers that have oil spots?",
    a: "Oil can keep a sealer from bonding. We assess the stain before cleaning and discuss any marks that may show through the finish.",
  },
  {
    q: "Is paver sealing the same as epoxy coating?",
    a: "Sealing leaves the original pavers and joints visible. A garage coating builds a new finish over a concrete slab.",
  },
  {
    q: "What will my estimate cover?",
    a: "Your estimate identifies the areas to clean, any stripping or joint work, and the sealer we’ll apply.",
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
        subtitle="Keep the natural color of your pavers or deepen it with a wet-look sealer. We clean the surface and check the joints before sealing."
        backgroundImage="/images/paver-sealing/paver-driveway-sealed.webp"
        backgroundAlt="Brown and gray pavers around a palm"
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

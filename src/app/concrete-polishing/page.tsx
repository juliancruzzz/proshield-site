import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { PolishingStats } from "@/components/sections/polishing-stats"
import { PolishingIntro } from "@/components/sections/polishing-intro"
import { PolishingServiceTypes } from "@/components/sections/polishing-service-types"
import { PolishingProcess } from "@/components/sections/polishing-process"
import { PolishingComparison } from "@/components/sections/polishing-comparison"
import { PolishingApplications } from "@/components/sections/polishing-applications"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { RelatedServices } from "@/components/sections/related-services"
import { CtaSection } from "@/components/sections/cta-section"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Concrete Polishing Las Vegas | Grind & Seal, Full Polish | ProShield Epoxy",
  description:
    "Concrete polishing in Las Vegas — grind & seal or Levels 1-4 mechanical polish for commercial, retail & residential floors. Free estimates · 702-728-5484.",
  keywords: [
    "concrete polishing Las Vegas",
    "polished concrete floors",
    "grind and seal concrete",
    "mechanically polished concrete",
    "commercial concrete polishing",
    "concrete floor polishing",
    "polished concrete contractor Las Vegas",
  ],
  openGraph: {
    url: "https://proshieldepoxy.com/concrete-polishing",
    images: ["/images/concrete-polishing/polished-concrete-aci.webp"],
  },
  alternates: {
    canonical: "/concrete-polishing",
  },
}

const faqs = [
  {
    q: "How does polished concrete differ from epoxy?",
    a: "Polishing uses diamonds to refine the concrete itself. Epoxy adds a resin coating over the concrete. If you want to see the stone already in the slab, polishing is the option to explore.",
  },
  {
    q: "What affects the schedule?",
    a: "Existing floor coverings, adhesive removal, repairs and the number of grinding passes all affect the time on site. The estimate should also say when the space can reopen.",
  },
  {
    q: "How do you care for a polished floor?",
    a: "Remove loose grit and use a cleaner suited to the installed finish. Traffic lanes may need attention sooner than the rest of the room. The recommended guard and maintenance schedule depend on use.",
  },
  {
    q: "Can my existing slab be polished?",
    a: "Old repairs, cracks and variations in the concrete can remain visible. A test area on the slab is the best way to judge its color and how much stone grinding will expose.",
  },
  {
    q: "Is polished concrete slippery when wet?",
    a: "Water, oil and cleaners can affect footing. For a space with traction requirements, check test data for the proposed finish and guard under the conditions that apply there.",
  },
  {
    q: "What if the slab cracks later?",
    a: "Polishing follows the slab and cannot prevent movement or new cracks. Ask for written coverage for the work included in your estimate.",
  },
]

export default function ConcretePolishingPage() {
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Concrete Polishing",
            "description": "Concrete polishing services in Las Vegas — grind & seal or Levels 1-4 mechanical polish for commercial, retail, and residential floors.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ProShield Epoxy",
              "telephone": "+1-702-728-5484",
              "url": "https://proshieldepoxy.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Las Vegas",
              "addressRegion": "NV"
            },
            "url": "https://proshieldepoxy.com/concrete-polishing"
          })
        }}
      />

      <PageHero
        badge="Existing concrete"
        title="Concrete Polishing"
        highlight="Las Vegas"
        subtitle="Polishing brings out the stone in your existing slab. Choose how much aggregate you want to see and whether the surface has a matte, satin or glossy finish."
        backgroundImage="/images/concrete-polishing/polished-concrete-aci.webp"
        backgroundAlt="Polished commercial warehouse floor with high-gloss finish"
      />

      <PolishingStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Concrete Polishing" }]} />

      <PolishingIntro />

      <PolishingServiceTypes />

      <PolishingProcess />

      <PolishingComparison />

      <PolishingApplications />

      {/* FAQ — tight accordion */}
      <section className="section-gray py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight mb-6 sm:mb-8">
            Concrete Polishing FAQ
          </h2>
          <FaqAccordion faqs={faqs} />
          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a Free Polishing Estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="concrete-polishing" />

      <CtaSection />
    </>
  )
}

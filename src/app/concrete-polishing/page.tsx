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
  title: "Concrete Polishing Las Vegas | Levels 1–4 | ProShield Epoxy",
  description:
    "Concrete polishing in Las Vegas — Levels 1-4 mechanical polish. Grind & seal or full polish for commercial, retail, and residential. Free estimates.",
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
    q: "How is polished concrete different from epoxy?",
    a: "Epoxy is a coating that sits on top of concrete and can eventually peel, chip, or wear through. Polished concrete is a mechanical refinement of the slab itself — there's no coating to fail. The shine and hardness come from the concrete, enhanced by a chemical densifier that permanently hardens the surface at a molecular level.",
  },
  {
    q: "How long does concrete polishing take?",
    a: "Timeline depends on the scope: a grind-and-seal project can take 1–2 days, while a full mechanical polish (3,000 grit) typically takes 3–5 days for a standard commercial space. Factors include slab condition, existing coatings that need removal, the finish level, and square footage.",
  },
  {
    q: "What maintenance does polished concrete need?",
    a: "Day-to-day: dust mop regularly to remove grit that can scratch the surface, and clean periodically with a pH-neutral cleaner. Avoid abrasive tools and harsh chemicals. The protective guard should be reapplied every 1–2 years for commercial spaces or 3–5 years for residential. Burnishing may be needed every 6–12 months in heavy-traffic commercial areas.",
  },
  {
    q: "Can any concrete slab be polished?",
    a: "Most slabs can be polished, but results depend on the concrete's condition, age, and strength. The slab should ideally have a compressive strength of 3,500 psi or higher. We assess every floor before starting — factors like cracks, moisture levels, existing coatings, and slab thickness all influence the approach and expected outcome.",
  },
  {
    q: "Is polished concrete slippery?",
    a: "Polished concrete meets the ANSI A326.3 standard requiring a minimum wet DCOF of 0.42 for interior spaces. It also meets OSHA slip-resistance requirements. With a properly applied guard, polished floors provide traction comparable to other commercial flooring. For areas with higher slip risk, we can apply guards with additional grit additives.",
  },
  {
    q: "Does ProShield offer a warranty on polished concrete?",
    a: "Yes. We provide a workmanship warranty covering the polishing process and installation quality. Because concrete polishing is a refinement of your existing slab (not a coating), the warranty covers our process and craftsmanship — we cannot guarantee the slab itself won't crack or shift due to substrate conditions, settlement, or seismic activity.",
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

      <PageHero
        badge="Mechanical Refinement — Not a Coating"
        title="Concrete Polishing"
        highlight="Las Vegas"
        subtitle="Transform your existing concrete slab into a high-performance, mirror-finish floor. From industrial warehouses to sleek retail showrooms — no coatings, no overlays, just refined concrete built to last decades."
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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

import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { HangarHero } from "@/components/sections/hangar-hero"
import { HangarStats } from "@/components/sections/hangar-stats"
import { HangarIntro } from "@/components/sections/hangar-intro"

import { HangarComparison } from "@/components/sections/hangar-comparison"
import { HangarSystemBuild } from "@/components/sections/hangar-system-build"
import { HangarTypes } from "@/components/sections/hangar-types"
import { HangarChemicals } from "@/components/sections/hangar-chemicals"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { RelatedServices } from "@/components/sections/related-services"
import { CtaSection } from "@/components/sections/cta-section"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Airplane Hangar Floor Coating | Las Vegas | ProShield Epoxy",
  description: "Airplane hangar floor coating in Las Vegas — Skydrol resistant, jet fuel resistant. Aviation-grade systems. 24-48hr return to service.",
  keywords: "airplane hangar floor coating Las Vegas, hangar floor coating near me, aircraft hangar floor coating, Skydrol resistant floor coating, hangar floor coating service Nevada, FBO floor coating",
  openGraph: {
    url: "https://proshieldepoxy.com/airplane-hangar",
    images: ["/images/hangar/hangar-floor-drone-desert.webp"],
  },
  alternates: {
    canonical: "/airplane-hangar",
  },
}

const faqs = [
  {
    q: "What is Skydrol and why does it matter for hangar floors?",
    a: "Skydrol is a phosphate ester-based hydraulic fluid used in commercial and military aircraft. It’s extremely aggressive — it destroys standard epoxy and polyaspartic coatings on contact. If a coating can’t handle Skydrol, it has no place in a hangar. Our systems are specifically formulated for phosphate ester hydraulic fluid resistance.",
  },
  {
    q: "Why can’t I just use a standard garage floor coating in my hangar?",
    a: "Standard residential coatings — including polyaspartic — are not formulated for the chemical exposure in hangars. Skydrol, jet fuel, and hydraulic oils will soften, blister, or delaminate standard coatings within months. Hangar floors require a purpose-built, multi-layer system with a chemical-resistant urethane topcoat.",
  },
  {
    q: "How long does installation take?",
    a: "Typically 2–5 days depending on hangar size, substrate condition, and your operational requirements. We phase the installation to minimize disruption — part of the hangar stays operational while we coat the other. Foot traffic is typically possible within hours; full aircraft loading in 24–48 hours.",
  },
  {
    q: "What warranty do you offer for hangar floors?",
    a: "Hangar floors receive a system-specific warranty tied to the exact system installed, substrate condition, and exposure environment. This is not a blanket consumer lifetime warranty — it’s a professional warranty covering adhesion and workmanship under the documented conditions of your facility.",
  },
  {
    q: "Do you offer ESD (electrostatic dissipative) flooring?",
    a: "Yes. For avionics bays, instrument repair areas, and any space where sensitive electronics are being handled, we install ESD-control coating systems that prevent static discharge damage. This is a specialized five-coat system with conductive properties built into the coating layers.",
  },
  {
    q: "Can you add safety line striping and markings?",
    a: "Absolutely. We install custom taxi lines, equipment zones, hazard area markings, walkways, and OSHA color-coded safety demarcation. Line striping is applied between topcoat layers for maximum durability and chemical resistance.",
  },
  {
    q: "What makes your system different from competitors?",
    a: "Most competitors in the Las Vegas area use standard epoxy for hangars. Our systems use a high-build, multi-layer approach with a moisture-tolerant primer, high-build body coats, and a chemical-resistant aliphatic urethane topcoat — not a standard residential coating. The result is superior chemical resistance, flexibility to handle thermal cycling, UV stability, and a significantly longer lifespan.",
  },
  {
    q: "How do I get started?",
    a: "Contact us for a free on-site consultation. We’ll assess your hangar’s substrate condition, chemical exposure profile, traffic patterns, and operational constraints, then recommend the right system and provide a detailed quote. Call us at (702) 728-5484 or use the form below.",
  },
]

export default function AirplaneHangarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
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
      <HangarHero title="Airplane Hangar Floor Coating" highlight="Las Vegas" />

      <HangarStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Airplane Hangar" }]} />

      <HangarIntro />

      <HangarComparison />

      <HangarSystemBuild />

      <HangarChemicals />

      <HangarTypes />


      {/* FAQ — tight accordion */}
      <section className="section-white py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight mb-6 sm:mb-8">
            Hangar Floor FAQ
          </h2>
          <FaqAccordion faqs={faqs} />
          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a Hangar Floor Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="airplane-hangar" />

      <CtaSection />
    </>
  )
}

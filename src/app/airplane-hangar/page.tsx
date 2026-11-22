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
  description: "Compare coating options for a Las Vegas hangar based on aircraft traffic, fluid exposure and when you need to reopen.",
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
    a: "Skydrol is an aircraft hydraulic fluid. If you use it, I check the proposed coating’s resistance to the specific fluid before recommending a system.",
  },
  {
    q: "Why can’t I just use a standard garage floor coating in my hangar?",
    a: "A hangar may see hydraulic fluids, fuel, jacks and heavier wheel loads. A product suitable for a home garage may be a poor fit for that work.",
  },
  {
    q: "How long does installation take?",
    a: "The schedule depends on the slab, the system and when aircraft need access. I can check whether phasing is possible and give you separate times for walking and aircraft traffic.",
  },
  {
    q: "What warranty do you offer for hangar floors?",
    a: "I’ll go over the written warranty for the proposed system, including which conditions and uses it covers.",
  },
  {
    q: "Do you offer ESD (electrostatic dissipative) flooring?",
    a: "Tell me which equipment you handle and the electrical requirements for the bay so I can check suitable static-control flooring options.",
  },
  {
    q: "Can you add safety line striping and markings?",
    a: "Yes. Mark the taxi lines, walkways and equipment zones on the plan so I can include the striping in the quote.",
  },
  {
    q: "What coating details will I see in the quote?",
    a: "The proposal lists the primer, body coats and topcoat so you can check the build and chemical resistance for your hangar.",
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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

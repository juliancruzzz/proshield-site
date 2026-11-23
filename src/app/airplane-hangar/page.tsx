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
    q: "Can the floor handle Skydrol?",
    a: "We check the proposed coating against the exact hydraulic fluid you use. The manufacturer’s resistance data should cover the expected contact time and cleanup procedure.",
  },
  {
    q: "Can we use a garage coating in a hangar?",
    a: "Aircraft tires, jacks and hydraulic fluids can put different demands on a floor than a parked car. We check the proposed system against the loads and fluids in your hangar.",
  },
  {
    q: "How long will the aircraft be out of the hangar?",
    a: "That depends on the slab preparation, the coating and cure conditions. We’ll identify when the crew needs access and when the floor can take aircraft traffic again.",
  },
  {
    q: "Which warranty applies?",
    a: "Your proposal identifies the coating system. Ask for the written warranty for that system and the intended use.",
  },
  {
    q: "What if our avionics bay requires static control?",
    a: "Send the required electrical performance and test method. We can check which systems meet that specification before including one in the quote.",
  },
  {
    q: "Can you include line markings?",
    a: "Yes. Include the walkways, parking positions and equipment zones on the plan so we can quote the striping.",
  },
  {
    q: "What belongs in a hangar floor quote?",
    a: "Look for slab preparation and repairs, the named coating layers, markings, and separate dates for walking and returning aircraft to the floor.",
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

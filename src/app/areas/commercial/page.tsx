import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CommercialAreas } from "@/components/sections/commercial-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Commercial & Industrial Floor Coatings Las Vegas | ProShield Epoxy",
  description: "Compare commercial flooring for warehouses, shops and hangars in Las Vegas. See how traffic, spills and washdowns affect the choice of finish.",
  alternates: {
    canonical: "/areas/commercial",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/areas/commercial",
    images: ["/images/commercial/commercial-floor-solid.webp"],
  },
}

const commercialFaqs = [
  {
    q: "Can the floor be installed in phases?",
    a: "We can quote the space in sections. The plan depends on which routes need to stay open and when each section can take traffic again.",
  },
  {
    q: "How do you choose a coating for a commercial kitchen?",
    a: "We start with the washdown temperature, the cleaning products and how water reaches the drains. Those details determine which product and texture to specify.",
  },
  {
    q: "Will the coating stand up to a particular chemical?",
    a: "We check the named chemical, its concentration and the expected contact time against the proposed system’s technical data.",
  },
  {
    q: "Can I get an estimate for a warehouse or shop?",
    a: "Yes. The estimate covers the measured area, preparation, repairs and proposed floor system.",
  },
]

export default function CommercialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": commercialFaqs.map(faq => ({
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proshieldepoxy.com/" },
              { "@type": "ListItem", "position": 2, "name": "Commercial Flooring", "item": "https://proshieldepoxy.com/areas/commercial" }
            ]
          })
        }}
      />

      <PageHero
        badge="Commercial & Industrial"
        title="Commercial Flooring"
        highlight="Las Vegas"
        subtitle="A shop floor takes different wear than a retail aisle. Compare finishes for foot traffic, equipment and spills."
      />

      <CommercialAreas />

      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900">What we need to quote a commercial floor</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-heading font-semibold text-lg text-gray-900">Traffic and spills</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">A forklift turning in an aisle wears the floor differently from customers walking through a showroom. For shops and hangars, the product names of the fluids used on site help us check the proposed coating against its resistance data.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-heading font-semibold text-lg text-gray-900">When the space can reopen</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">Installation and curing take separate time. Tell us which entrances, work bays and delivery routes need to stay open so we can plan the work around them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Commercial Flooring FAQ
            </h2>
          </div>
          <FaqAccordion faqs={commercialFaqs} />
        </div>
      </section>

      <CtaSection />
    </>
  )
}

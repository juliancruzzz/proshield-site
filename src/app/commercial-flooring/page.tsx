import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CommercialStats } from "@/components/sections/commercial-stats"
import { CommercialIntro } from "@/components/sections/commercial-intro"
import { CommercialSystems } from "@/components/sections/commercial-systems"
import { CommercialIndustries } from "@/components/sections/commercial-industries"
import { CommercialComparison } from "@/components/sections/commercial-comparison"
import { Credentials } from "@/components/sections/credentials"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Epoxy Flooring Las Vegas | Warehouse, Retail & Industrial | ProShield",
  description:
    "Compare resin quartz, solid-color urethane, urethane cement and decorative flake for Las Vegas warehouses, kitchens and shops.",
  openGraph: {
    title: "Commercial Epoxy Flooring Las Vegas | Warehouse, Retail & Industrial | ProShield",
    description: "Compare resin quartz, solid-color urethane, urethane cement and decorative flake for Las Vegas warehouses, kitchens and shops.",
    url: "https://proshieldepoxy.com/commercial-flooring",
    images: ["/images/commercial/commercial-floor-solid.webp"],
  },
  alternates: {
    canonical: "/commercial-flooring",
  },
}

const faqs = [
  {
    q: "Which systems should we compare?",
    a: "Start with how the floor is used. A retail aisle and a washdown area have different needs. We compare the wheel traffic, spills, cleaning routine and finish before specifying a system.",
  },
  {
    q: "When should we consider urethane cement?",
    a: "Urethane cement is worth considering for kitchens and processing areas with hot washdowns. Give us the water temperature, cleaning products and equipment loads so we can check the proposed product.",
  },
  {
    q: "Can the facility stay open during installation?",
    a: "In some spaces the crew can work in sections. Access routes, prep dust, equipment moves and curing time determine which areas can remain open. We’ll put the agreed sequence in the proposal.",
  },
  {
    q: "What if our facility has a written flooring specification?",
    a: "Send the specification with the scope. The proposed materials, details at drains and walls, and cleaning procedure need to match the requirements for that space.",
  },
  {
    q: "What is covered by warranty?",
    a: "Coverage depends on the specified commercial system and its use. Ask for the written terms with the proposal.",
  },
  {
    q: "What does your Nevada contractor license cover?",
    a: "Nevada license #0094652 is C-5, limited to epoxy coatings and sealants only, with a $200,000 monetary limit. Ask for current bond and insurance documents for your project.",
  },
]

export default function CommercialFlooringPage() {
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
      <PageHero
        badge="Commercial Resinous Flooring"
        title="Commercial Flooring"
        highlight="Las Vegas"
        subtitle="We specify floor coatings for warehouses, kitchens, workshops and retail spaces. The equipment that crosses the floor and the way it gets cleaned guide the choice."
        backgroundImage="/images/commercial/commercial-grey-yellow-stripe.webp"
        backgroundAlt="Commercial warehouse with solid color epoxy floor and safety line markings"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Epoxy Flooring",
            "description": "Commercial epoxy flooring systems for warehouses, retail, manufacturing, healthcare and industrial facilities in Las Vegas. Nevada licensed contractor.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ProShield Epoxy & Concrete LLC",
              "telephone": "+1-702-728-5484",
              "url": "https://proshieldepoxy.com",
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "license",
                "name": "Nevada State Contractor's License #0094652 (C-5 Concrete Contracting — limited to epoxy coatings and sealants only)"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Las Vegas", "addressRegion": "NV" },
              { "@type": "City", "name": "Henderson", "addressRegion": "NV" },
              { "@type": "City", "name": "North Las Vegas", "addressRegion": "NV" },
              { "@type": "City", "name": "Summerlin", "addressRegion": "NV" }
            ],
            "url": "https://proshieldepoxy.com/commercial-flooring"
          })
        }}
      />

      <CommercialStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Commercial Flooring" }]} />
      <CommercialIntro />
      <CommercialSystems />
      <CommercialComparison />
      <CommercialIndustries />

      {/* FAQ */}
      <section className="section-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Commercial Flooring FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a Commercial Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proshieldepoxy.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://proshieldepoxy.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Commercial Flooring", "item": "https://proshieldepoxy.com/commercial-flooring" }
            ]
          })
        }}
      />

      <Credentials />

      <RelatedServices variant="gray" currentService="commercial-flooring" />

      <CtaSection />
    </>
  )
}

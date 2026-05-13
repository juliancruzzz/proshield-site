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
    "Commercial epoxy flooring in Las Vegas — resin quartz, urethane cement & ProFlake for warehouses, kitchens, hangars & retail. NV Licensed #0094652. Call 702-728-5484.",
  openGraph: {
    title: "Commercial Epoxy Flooring Las Vegas | Warehouse, Retail & Industrial | ProShield",
    description: "Commercial epoxy flooring in Las Vegas — resin quartz, urethane cement & ProFlake for warehouses, kitchens, hangars & retail. NV Licensed #0094652. Call 702-728-5484.",
    url: "https://proshieldepoxy.com/commercial-flooring",
    images: ["/images/commercial/commercial-floor-solid.webp"],
  },
  alternates: {
    canonical: "/commercial-flooring",
  },
}

const faqs = [
  {
    q: "How do I know which commercial system is right for my facility?",
    a: "It depends on your environment — temperature exposure, chemical contact, traffic type, and regulatory requirements all factor in. Urethane cement handles thermal shock (kitchens, food processing). Resin quartz is ideal for heavy impact zones. Solid color urethane works for UV-exposed or branded spaces. We assess your facility and recommend the right system.",
  },
  {
    q: "What's the difference between commercial epoxy and urethane cement?",
    a: "Epoxy systems (like ProFlake) are excellent for general commercial use — retail, offices, light industrial. Urethane cement is engineered specifically for extreme conditions: thermal shock from -100°F to 220°F+, steam cleaning, aggressive chemicals. Urethane cement expands and contracts with the concrete substrate, preventing cracks that standard epoxy can't withstand.",
  },
  {
    q: "How long does commercial installation take?",
    a: "Typical commercial installations take 2–5 days depending on system type, square footage, and substrate condition. We can phase installations to minimize business disruption — working in sections or during off-hours.",
  },
  {
    q: "Are these systems compliant with food safety regulations?",
    a: "Urethane cement and resin quartz systems can meet FDA and USDA requirements for food processing and commercial kitchen environments. Specific compliance depends on the system configuration — we'll specify the right products for your regulatory needs.",
  },
  {
    q: "What kind of warranty do commercial systems carry?",
    a: "Commercial systems carry a system-specific warranty covering material defects and workmanship. Warranty terms vary by system type and environment — urethane cement systems have different parameters than decorative ProFlake systems. We'll detail your warranty coverage during the proposal.",
  },
  {
    q: "Are you licensed to perform commercial work in Nevada?",
    a: "Yes. ProShield Epoxy & Concrete LLC is a licensed Nevada contractor — License #0094652, C-5 Concrete Contracting classification — fully bonded and insured. Our $200,000 bid limit covers most commercial projects; for larger jobs we partner with licensed GCs. License is verifiable at nvcontractorsboard.com.",
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
        subtitle="Seamless resinous flooring systems matched to your facility's specific demands — from thermal shock resistance to chemical exposure to heavy rolling loads."
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
                "name": "Nevada State Contractor's License #0094652 (C-5 Concrete Contracting)"
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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

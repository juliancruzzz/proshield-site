import { ProjectCards } from "@/components/sections/project-cards"
import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { ProFlakeStats } from "@/components/sections/proflake-stats"
import { ProFlakeIntro } from "@/components/sections/proflake-intro"
import { ProFlakeSystemBuild } from "@/components/sections/proflake-system-build"
import { ProFlakeWhyChoose } from "@/components/sections/proflake-why-choose"
import { FlakeColorShowcase } from "@/components/sections/flake-color-showcase"
import { ProFlakeGallery } from "@/components/sections/proflake-gallery"
import { ProFlakeComparison } from "@/components/sections/proflake-comparison"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { RelatedServices } from "@/components/sections/related-services"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Epoxy Garage Floor Coating Las Vegas | ProFlake Flake System | ProShield",
  description: "Epoxy garage floor coating in Las Vegas — ProFlake flake system with 150+ Torginol colors and a UV-stable polyaspartic topcoat. Free quote · 702-728-5484.",
  openGraph: {
    url: "https://proshieldepoxy.com/proflake",
    images: ["/images/proflake/flake-garage-residential.webp"],
  },
  alternates: {
    canonical: "/proflake",
  },
}

const faqs = [
  {
    q: "What makes ProFlake different from epoxy?",
    a: "ProFlake uses a polyurea base, decorative flake and a polyaspartic topcoat. Confirm the named products and preparation in the project quote. Compare its flake and clear-coat finish with the actual epoxy system proposed, not a generic chemistry ranking.",
  },
  {
    q: "What is polyaspartic topcoat and why does it matter?",
    a: "Polyaspartic describes a coating chemistry used in floor systems. Component count, mixing, coverage, curing and intended use must follow the named product’s data sheet.",
  },
  {
    q: "When can I use my garage after installation?",
    a: "For ProFlake, allow 24 hours before walking and 48 hours before parking, subject to actual weather and curing conditions. Other systems have different return-to-use requirements; follow the project instructions.",
  },
  {
    q: "What is the warranty on ProFlake?",
    a: "The Peel-Free Lifetime Guarantee applies to qualifying systems under the written terms. Moisture-driven failure is excluded; a flagged moisture condition requires an appropriate moisture vapor barrier before coating. Confirm coverage for the proposed system.",
  },
  {
    q: "How do I choose a color from 150+ options?",
    a: "Compare the available Torginol blends and physical samples during the consultation. Confirm the selected blend, chip size and finish before installation.",
  },
  {
    q: "Is ProFlake resistant to hot tires and chemicals?",
    a: "Compare the named topcoat’s vehicle-use and chemical-resistance information for expected exposure. Resistance is not immunity; follow the curing and cleanup instructions.",
  },
  {
    q: "What does the installation process involve?",
    a: "Assess the concrete, moisture, contamination and existing coatings before selecting a system. Diamond grinding is part of ProShield’s preparation process; the required profile and repairs depend on the proposed products and site. ProFlake uses a polyurea base, decorative flake and a polyaspartic topcoat. Confirm the named products and preparation in the project quote.",
  },
]

export default function ProFlakePage() {
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
        badge="Our Most Popular System"
        title="ProFlake Floors."
        highlight="Las Vegas Garage Coating"
        subtitle="The upgrade from epoxy. Polyurea basecoat, polyaspartic topcoat, and 150+ Torginol color blends for residential garages in Las Vegas."
        backgroundImage="/images/proflake/flake-garage-porsche-bikes.webp"
        backgroundAlt="Garage with ProFlake flake floor coating and motorcycles"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ProFlake Garage Floor Coating",
            "description": "ProFlake polyurea flake garage floor coating with 150+ Torginol color blends and a polyaspartic topcoat in Las Vegas.",
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
            "url": "https://proshieldepoxy.com/proflake"
          })
        }}
      />

      <ProFlakeStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "ProFlake" }]} />
      <ProFlakeIntro />
      <ProFlakeWhyChoose />
      <ProFlakeComparison />
      <ProFlakeSystemBuild />
      <FlakeColorShowcase />
      <ProFlakeGallery />
      <ProjectCards service="/proflake" />

      {/* FAQ */}
      <section className="section-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              ProFlake FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="proflake" />

      <CtaSection />
    </>
  )
}

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
  title: "ProFlake Garage Floors in Las Vegas | ProShield Epoxy",
  description: "Explore more than 150 flake blends, see two finished garages and find out what the ProFlake system includes.",
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
    q: "How does ProFlake differ from an epoxy floor?",
    a: "ProFlake uses a polyurea base, a full layer of decorative flakes and a clear polyaspartic topcoat. We also install epoxy. When comparing quotes, look at the base, finish and preparation each one includes.",
  },
  {
    q: "What does the clear coat do?",
    a: "It seals the flakes and takes the everyday wear from shoes and tires.",
  },
  {
    q: "When can I walk or park on the floor?",
    a: "For planning, allow about 24 hours for walking and 48 hours for parking. Temperature and curing conditions can change both times. We’ll confirm when your floor is ready.",
  },
  {
    q: "What does the ProFlake warranty cover?",
    a: "Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. Moisture-related failures are excluded. If testing flags a moisture problem, the slab needs a suitable vapor barrier before coating. See the written terms for your floor.",
  },
  {
    q: "How do I choose a flake color?",
    a: "Look at the blend in your garage with the door both open and closed. Daylight can bring out colors that look more muted under garage lights.",
  },
  {
    q: "What if my garage doubles as a workshop?",
    a: "Tell us which oils, cleaners and solvents you use. We can check the proposed topcoat against those products and explain how to clean up spills.",
  },
  {
    q: "What happens to the existing concrete?",
    a: "We check the slab for moisture, cracks and old coatings, then prepare and repair it before applying the base coat.",
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
        badge="Flake Finish"
        title="ProFlake"
        highlight="Garage Floors"
        subtitle="Our ProFlake garage floor pairs a polyurea base with full flake coverage and a clear polyaspartic topcoat. Choose from more than 150 flake blends."
        backgroundImage="/images/proflake/flake-garage-porsche-bikes.webp"
        backgroundAlt="Light gray flake beneath a car and motorcycles"
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
              "@id": "https://proshieldepoxy.com/#business",
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
      <ProjectCards service="/proflake" heading="Two finished ProFlake garages" />
      <ProFlakeIntro />
      <ProFlakeWhyChoose />
      <ProFlakeComparison />
      <ProFlakeSystemBuild />
      <FlakeColorShowcase />
      <ProFlakeGallery />

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

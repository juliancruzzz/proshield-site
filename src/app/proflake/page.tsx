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
    a: "I use a polyurea base with colored flakes and a clear polyaspartic topcoat. If you’re comparing quotes, check which layers and prep each one includes.",
  },
  {
    q: "What is polyaspartic topcoat and why does it matter?",
    a: "It’s the clear layer over the flakes. It seals the surface and takes the wear from tires and shoes.",
  },
  {
    q: "When can I use my garage after installation?",
    a: "Plan on 24 hours before walking and 48 hours before parking. Weather can change that timing. I’ll tell you when your floor is ready.",
  },
  {
    q: "What is the warranty on ProFlake?",
    a: "Qualifying residential floors have a limited lifetime no-peel warranty. Moisture-related failure is excluded. If testing flags moisture, the slab needs a suitable vapor barrier before coating. I’ll explain the written terms.",
  },
  {
    q: "How do I choose a color from 150+ options?",
    a: "Look at physical Torginol samples in your garage light. Once you pick a blend, we can settle on the flake size and texture.",
  },
  {
    q: "Is ProFlake resistant to hot tires and chemicals?",
    a: "Let the floor cure before parking. Tell me if it will regularly see oil, solvents or other chemicals so I can check the topcoat’s resistance and give you the right cleanup instructions.",
  },
  {
    q: "What does the installation process involve?",
    a: "I check for moisture, old paint and cracks, then diamond-grind the slab and make the repairs it needs. After that come the base coat, flakes and clear coat.",
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
        subtitle="Choose from over 150 flake blends. I spread the flakes over a polyurea base, then seal them with a clear polyaspartic coat."
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
      <ProjectCards service="/proflake" heading="Two garages I’ve finished" />
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

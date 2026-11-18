import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { RubberDeckStats } from "@/components/sections/rubber-deck-stats"
import { RubberDeckIntro } from "@/components/sections/rubber-deck-intro"
import { RubberDeckBenefits } from "@/components/sections/rubber-deck-benefits"
import { RubberDeckProcess } from "@/components/sections/rubber-deck-process"
import { RubberDeckPricing } from "@/components/sections/rubber-deck-pricing"
import { RubberDeckColors } from "@/components/sections/rubber-deck-colors"
import { RubarocColorShowcase } from "@/components/sections/rubaroc-color-showcase"
import { RubberDeckComparison } from "@/components/sections/rubber-deck-comparison"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { RelatedServices } from "@/components/sections/related-services"
import { CtaSection } from "@/components/sections/cta-section"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Rubber Pool Deck Surfacing Las Vegas | ProShield Epoxy",
  description:
    "Rubber pool deck resurfacing in Las Vegas. Compare color blends, preparation and maintenance for your concrete. Request a free project estimate.",
  openGraph: {
    url: "https://proshieldepoxy.com/rubber-pool-deck",
    images: ["/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"],
  },
  alternates: {
    canonical: "/rubber-pool-deck",
  },
}

const faqs = [
  {
    q: "How much does rubber pool deck surfacing cost in Las Vegas?",
    a: "The price depends on measured area, concrete condition, removal of old coatings, repairs, access and the selected finish. Request a written project estimate that lists preparation, materials and any additional work.",
  },
  {
    q: "Is rubber pool decking slippery when wet?",
    a: "Texture can help provide traction, but wet surfaces can still be slippery. Compare the proposed finish’s slip-resistance information and keep the deck clean. Cushioning does not prevent falls or guarantee protection from injury.",
  },
  {
    q: "How long does rubber pool deck surfacing last?",
    a: "Service life depends on the selected product, substrate, installation, exposure and maintenance. Ask for the product warranty and care instructions; there is no single lifespan that applies to every pool deck.",
  },
  {
    q: "Can you install rubber decking over existing concrete or cool deck?",
    a: "Resurfacing may be possible over sound, properly prepared concrete. Existing coatings, cracks, drainage and movement must be assessed first. Unsuitable material may need removal or repair; resurfacing is not a structural repair.",
  },
  {
    q: "How do you maintain a rubber pool deck?",
    a: "Remove loose debris and follow the selected product’s cleaning instructions. Ask which cleaners and equipment are allowed and when the surface should be inspected or refreshed. Resealing needs vary by system and condition.",
  },
  {
    q: "Is rubber pool decking better than cool deck?",
    a: "Compare the proposed products, texture, color, preparation, care requirements and written prices. Rubber and textured coatings have different finishes; neither is always cooler, safer or lower maintenance than the other.",
  },
]

export default function RubberPoolDeckPage() {
  return (
    <>
      {/* JSON-LD: FAQ */}
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

      {/* JSON-LD: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Rubber Pool Deck Surfacing",
            description:
              "Rubber aggregate pool deck resurfacing for suitable prepared concrete in Las Vegas. Product and preparation specified in the project estimate.",
            provider: {
              "@type": "LocalBusiness",
              name: "ProShield Epoxy",
              url: "https://proshieldepoxy.com",
              telephone: "702-728-5484",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Las Vegas",
              addressRegion: "NV",
            },
          }),
        }}
      />

      <PageHero
        badge="Premium Pool Deck Surfacing"
        title="Rubber Pool Deck Surfacing"
        highlight="Las Vegas"
        subtitle="Rubber aggregate resurfacing for suitable concrete. Compare color blends, preparation and care requirements with a free project estimate."
        backgroundImage="/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"
        backgroundAlt="Surface example of rubber aggregate around a landscaped pool"
      />

      <RubberDeckStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Rubber Pool Deck" }]} />

      <RubberDeckIntro />

      <RubberDeckBenefits />

      <RubberDeckPricing />

      <RubberDeckProcess />

      <RubarocColorShowcase />

      <RubberDeckColors />

      <RubberDeckComparison />

      {/* Internal link bridge */}
      <section className="section-gray py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            Comparing options?{" "}
            <Link href="/blog/coolest-pool-deck-flooring-las-vegas" className="text-accent hover:underline font-medium">
              See our full pool deck surface comparison
            </Link>.{" "}
            Learn more about{" "}
            <Link href="/blog/rubber-pool-deck-las-vegas" className="text-accent hover:underline font-medium">
              rubber pool deck specs and installation details
            </Link>,{" "}
            or browse finished projects in our{" "}
            <Link href="/gallery" className="text-accent hover:underline font-medium">gallery</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Rubber Pool Deck FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get Your Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="rubber-pool-deck" />

      <CtaSection />
    </>
  )
}

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
    "Rubber pool deck surfacing in Las Vegas. Slip-resistant, cushioned, crack-bridging EPDM aggregate over existing concrete. $15–18/sq ft installed. 10–15 year lifespan. Free estimates.",
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
    a: "$15–$18 per square foot installed. For a standard 600 sq ft pool deck, that's $9,000–$10,800. Price depends on concrete condition, color selection, and deck complexity. Every job gets a free on-site estimate with a flat quote — no hidden fees.",
  },
  {
    q: "Is rubber pool decking slippery when wet?",
    a: "No — it's one of the most slip-resistant pool deck surfaces available. The textured rubber granules provide excellent traction even when wet from pool splash or rain. Our system exceeds ADA slip resistance requirements, making it a top choice for families with children and areas around spas.",
  },
  {
    q: "How long does rubber pool deck surfacing last?",
    a: "10–15 years in Las Vegas conditions with minimal maintenance. The UV-stable polyurethane binder resists fading and degradation from desert sun, and the flexible rubber membrane handles daily thermal expansion and contraction that cracks rigid coatings.",
  },
  {
    q: "Can you install rubber decking over existing concrete or cool deck?",
    a: "Yes. Rubber pool deck systems go directly over existing concrete — no demolition required. If there's an existing cool deck or acrylic coating, we remove any loose or delaminating material, but sound coatings can typically stay. The concrete needs to be structurally sound and properly prepped.",
  },
  {
    q: "How do you maintain a rubber pool deck?",
    a: "Blow or sweep debris weekly and rinse with a hose monthly. For deeper cleaning, mild soap and water with a soft brush handles sunscreen stains and pool chemical splatter. Reseal every 3–4 years — just pressure wash and roll on a clear coat.",
  },
  {
    q: "Is rubber pool decking better than cool deck?",
    a: "Rubber provides better slip resistance, cushions falls, and needs less maintenance — reseal every 3–4 years vs cool deck's 1–2 year cycle. Cool deck is more affordable at $6–9/sq ft and is a great option if budget is the top priority. We install both systems and recommend the one that fits your situation.",
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
              "Poured-in-place EPDM rubber aggregate pool deck resurfacing over existing concrete. Slip-resistant, cushioned, UV-stable surface for Las Vegas pool decks.",
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
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                priceCurrency: "USD",
                price: "15-18",
                unitText: "sq ft",
              },
            },
          }),
        }}
      />

      <PageHero
        badge="Premium Pool Deck Surfacing"
        title="Rubber Pool Deck Surfacing"
        highlight="Las Vegas"
        subtitle="Poured-in-place EPDM rubber aggregate over your existing concrete. Slip-resistant, cushioned, crack-bridging, and built for Las Vegas summers. 2–3 day install, no demolition."
        backgroundImage="/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"
        backgroundAlt="Rubber aggregate pool deck surfacing around a Las Vegas pool with landscaping and outdoor living area"
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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

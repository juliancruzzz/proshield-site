import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CoolDeckStats } from "@/components/sections/cool-deck-stats"
import { CoolDeckIntro } from "@/components/sections/cool-deck-intro"
import { CoolDeckBenefits } from "@/components/sections/cool-deck-benefits"
import { CoolDeckProcess } from "@/components/sections/cool-deck-process"
import { CoolDeckApplications } from "@/components/sections/cool-deck-applications"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { RelatedServices } from "@/components/sections/related-services"
import { CtaSection } from "@/components/sections/cta-section"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Cool Deck Coating Las Vegas | Pool Deck Resurfacing | ProShield Epoxy",
  description:
    "Pool deck resurfacing in Las Vegas for suitable patios and walkways. Compare textured finishes, preparation and care. Free estimates · 702-728-5484.",
  openGraph: {
    url: "https://proshieldepoxy.com/cool-deck",
    images: ["/images/cool-deck/cool-deck-knockdown-pool.webp"],
  },
  alternates: {
    canonical: "/cool-deck",
  },
}

const faqs = [
  {
    q: "What's the difference between cool deck and epoxy?",
    a: "Pool-deck resurfacing can use acrylic coatings or cement-based toppings. Epoxy is a different material. Confirm the exact system, texture and exterior-use requirements in the estimate.",
  },
  {
    q: "Does cool deck actually keep the surface cold?",
    a: "Any pool deck can become hot in direct sun. Temperature depends on product, color, shade and weather. Ask for test results for the proposed finish under comparable conditions; no material is guaranteed safe for bare feet.",
  },
  {
    q: "Is the knockdown texture slippery when wet?",
    a: "Texture can help provide traction, but wet surfaces can still be slippery. Compare the proposed finish’s slip-resistance information and keep the deck clean. Cushioning does not prevent falls or guarantee protection from injury.",
  },
  {
    q: "How long does cool deck last?",
    a: "Service life depends on the selected product, substrate, installation, exposure and maintenance. Ask for the product warranty and care instructions; there is no single lifespan that applies to every pool deck.",
  },
  {
    q: "How long does installation take?",
    a: "Installation and return-to-use times depend on preparation, product, weather and curing conditions. The written project schedule should state when walking, furniture and normal pool use can resume.",
  },
  {
    q: "Can cool deck be applied over existing concrete?",
    a: "Resurfacing may be possible over sound, properly prepared concrete. Existing coatings, cracks, drainage and movement must be assessed first. Unsuitable material may need removal or repair; resurfacing is not a structural repair.",
  },
  {
    q: "What colors are available?",
    a: "Ask about current product colors and compare samples outdoors. Color, shade and the selected product affect surface heat.",
  },
  {
    q: "Does cool deck need maintenance?",
    a: "Remove loose debris and follow the selected product’s cleaning instructions. Ask which cleaners and equipment are allowed and when the surface should be inspected or refreshed. Resealing needs vary by system and condition.",
  },
]

export default function CoolDeckPage() {
  return (
    <>
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
      <PageHero
        badge="Exterior Pool Deck Coating"
        title="Cool Deck & Pool Deck Coating"
        highlight="Las Vegas"
        subtitle="A textured overlay can give worn concrete a fresh surface. I check the slab first to see whether it can be resurfaced."
        backgroundImage="/images/cool-deck/pool-deck-spa.webp"
        backgroundAlt="Pool deck with cool deck knockdown texture coating around pool and spa"
      />

      <CoolDeckStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Cool Deck" }]} />

      <CoolDeckIntro />

      <CoolDeckBenefits />

      <CoolDeckProcess />

      <CoolDeckApplications />

      {/* FAQ */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Cool Deck FAQ
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

      <RelatedServices variant="gray" currentService="cool-deck" />

      <CtaSection />
    </>
  )
}

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
    "Resurface an existing pool deck with a textured acrylic finish. See when repainting is enough and when worn texture needs repair.",
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
    a: "Our knockdown finish is an acrylic coating for outdoor concrete. The texture is formed by flattening the peaks as it sets. Garage epoxy uses a different resin and gives a different finish.",
  },
  {
    q: "Does cool deck actually keep the surface cold?",
    a: "A light color can feel cooler than a dark one in the same sun. Even a pale deck can get hot in the afternoon, especially along the unshaded walk to the pool.",
  },
  {
    q: "Is the knockdown texture slippery when wet?",
    a: "Wet concrete can still be slippery. Texture, surface wear and the sealer all affect grip around the pool.",
  },
  {
    q: "How long does cool deck last?",
    a: "Sun, foot traffic and pool use wear the finish gradually. If the color has faded but the texture is still firmly attached, a repaint may be enough. Loose patches need attention first.",
  },
  {
    q: "How long does installation take?",
    a: "Repairs and drying time affect the schedule. We’ll give you separate times for walking on the deck and putting furniture back.",
  },
  {
    q: "Can cool deck be applied over existing concrete?",
    a: "Yes, when the slab and any texture that will stay are sound. Loose coatings need removal. Movement or drainage problems should be addressed before the new finish goes down.",
  },
  {
    q: "What colors are available?",
    a: "Light and dark colors look different beside the pool than they do indoors. A sample in the sun and shade helps narrow the choice.",
  },
  {
    q: "Does cool deck need maintenance?",
    a: "Sweep away debris and clean the deck with a cleaner approved for its sealer. If the texture starts lifting, have it assessed before adding a new coat.",
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
        subtitle="Keep the texture you like or give worn concrete a new knockdown finish. We resurface pool decks, patios and the paths between them."
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

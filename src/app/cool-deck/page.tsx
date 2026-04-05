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
  title: "Cool Deck & Pool Deck Coatings | ProShield Epoxy",
  description:
    "Cool deck and knockdown texture coatings for pool decks, patios, and walkways in Las Vegas. Acrylic-based, slip-resistant, heat-reflective. Not epoxy — built for exterior concrete.",
}

const faqs = [
  {
    q: "What's the difference between cool deck and epoxy?",
    a: "Cool deck is acrylic-based — designed specifically for exterior pool decks and patios. It's not epoxy. Epoxy systems like ProFlake are better suited for garage floors and interior spaces. Cool deck uses lighter colors to help reduce heat absorption and features a knockdown texture for slip resistance.",
  },
  {
    q: "Does cool deck actually keep the surface cold?",
    a: "\"Cool deck\" doesn't mean the surface stays cold — especially in a Las Vegas summer. What it does is reflect more sunlight than bare concrete, which helps reduce surface temperature. The lighter the color you choose, the more heat it reflects. It won't be cold to the touch on a 115°F day, but it will be noticeably cooler than untreated dark concrete.",
  },
  {
    q: "Is the knockdown texture slippery when wet?",
    a: "No. The knockdown texture is specifically designed to create a non-slip, textured surface. The troweled pattern provides traction even when wet, making it one of the safest options for pool decks and areas around water features.",
  },
  {
    q: "How long does cool deck last?",
    a: "With proper maintenance and periodic resealing (typically every 2–3 years), cool deck can last 5–10 years or longer depending on traffic, UV exposure, and maintenance. The sealer protects the underlying acrylic coating from wear and weather.",
  },
  {
    q: "How long does installation take?",
    a: "A standard residential pool deck typically takes 2–3 days depending on surface condition, size, and weather. This includes surface prep, primer, base coat, knockdown texture, and sealer application. We'll provide a specific timeline during your consultation.",
  },
  {
    q: "Can cool deck be applied over existing concrete?",
    a: "Yes, in most cases cool deck is applied directly over existing concrete substrates. The surface needs to be structurally sound, properly cleaned, and free of sealers or coatings that could prevent adhesion. We assess substrate condition during your free consultation.",
  },
  {
    q: "What colors are available?",
    a: "We offer a range of lighter tones designed to maximize heat reflection — including desert sand, cream, light gray, tan, and warm white. We recommend lighter colors for pool decks to get the most temperature benefit. Color samples are available during your consultation.",
  },
  {
    q: "Does cool deck need maintenance?",
    a: "Day-to-day maintenance is simple — sweep debris and hose off as needed. The main ongoing maintenance is periodic resealing every 2–3 years with an acrylic or acrylic/urethane sealer to maintain the protective topcoat, color vibrancy, and gloss.",
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
        title="Cool Deck."
        highlight="Built for the Heat."
        subtitle="Acrylic-based knockdown texture coating for pool decks, patios, and walkways. Slip-resistant, heat-reflective, and designed to handle Las Vegas summers. This is not epoxy."
        backgroundImage="/images/cool-deck/pool-deck-spa.jpg"
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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

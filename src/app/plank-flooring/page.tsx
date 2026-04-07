import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { PlankStats } from "@/components/sections/plank-stats"
import { PlankIntro } from "@/components/sections/plank-intro"
import { PlankTypes } from "@/components/sections/plank-types"
import { PlankBenefits } from "@/components/sections/plank-benefits"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Plank Flooring Las Vegas | LVP & Hardwood | ProShield",
  description:
    "Professional plank flooring installation in Las Vegas — LVP, SPC, WPC, and Engineered Hardwood. Waterproof, durable, and realistic wood-grain finishes.",
  openGraph: {
    url: "https://proshieldepoxy.com/plank-flooring",
    images: ["/images/plank/plank-luxury.webp"],
  },
  alternates: {
    canonical: "/plank-flooring",
  },
}

const faqs = [
  {
    q: "What's the difference between LVP, SPC, and WPC?",
    a: "LVP is the broadest category — a flexible vinyl plank. SPC has a rigid stone-composite core (harder, more durable, fully waterproof). WPC has a wood-polymer core (softer, more comfortable, also waterproof). SPC is best for high-traffic and commercial use; WPC is best for bedrooms and living rooms where comfort matters.",
  },
  {
    q: "Is engineered hardwood better than LVP?",
    a: "Different strengths. Engineered hardwood has a real wood surface and can be sanded and refinished — it looks and feels like solid wood. LVP/SPC/WPC are more waterproof, more scratch-resistant, and more affordable. The right choice depends on your space, budget, and style preferences.",
  },
  {
    q: "Can plank flooring go in bathrooms and kitchens?",
    a: "SPC and WPC planks are fully waterproof and work great in bathrooms, kitchens, and laundry rooms. Standard LVP is water-resistant but not fully waterproof — check the specific product rating. Engineered hardwood is not recommended for high-moisture areas.",
  },
  {
    q: "How long does installation take?",
    a: "Most rooms can be completed in 1–2 days. Whole-home installations typically take 2–5 days depending on square footage, furniture moving, and whether old flooring needs removal. Click-lock planks install faster than glue-down.",
  },
  {
    q: "Do I need underlayment?",
    a: "It depends. Many SPC and WPC planks come with pre-attached underlayment. If yours doesn't, we'll recommend and install the appropriate underlayment for sound absorption, moisture protection, and comfort.",
  },
]

export default function PlankFlooringPage() {
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
        badge="Plank Flooring"
        title="Plank Flooring"
        highlight="Las Vegas"
        subtitle="LVP, SPC, WPC, and Engineered Hardwood — professionally installed. Realistic wood-grain finishes with waterproof cores and click-lock convenience."
        backgroundImage="/images/plank/plank-room.webp"
        backgroundAlt="Living room with luxury vinyl plank flooring showcasing natural wood grain"
      />

      <PlankStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Plank Flooring" }]} />
      <PlankIntro />

      <PlankTypes />

      <PlankBenefits />

      {/* FAQ */}
      <section className="section-gray py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Plank Flooring FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a Plank Flooring Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices currentService="plank-flooring" />

      <CtaSection />
    </>
  )
}

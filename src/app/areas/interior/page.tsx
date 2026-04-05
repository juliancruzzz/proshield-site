import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { InteriorAreas } from "@/components/sections/interior-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Interior Flooring Las Vegas | ProShield Epoxy",
  description:
    "Professional interior floor systems — metallic epoxy, concrete polishing, tile, plank flooring, and decorative overlays for homes, offices, showrooms, and retail spaces in Las Vegas.",
}

const interiorFaqs = [
  {
    q: "What\u2019s the best flooring for a Las Vegas kitchen?",
    a: "Tile and metallic epoxy are both excellent for kitchens. Tile offers classic water resistance and scratch protection. Metallic epoxy creates a seamless, stunning surface that\u2019s easy to clean. We\u2019ll help you decide based on your style, budget, and usage.",
  },
  {
    q: "Can metallic epoxy be installed inside my home?",
    a: "Absolutely. Metallic epoxy is one of our most popular interior systems. It works beautifully in kitchens, bathrooms, living areas, and showrooms. The flowing pearlescent finish creates a truly unique look in any room.",
  },
  {
    q: "What\u2019s the difference between LVP, SPC, and WPC plank flooring?",
    a: "LVP (Luxury Vinyl Plank) is flexible and budget-friendly. SPC (Stone Polymer Composite) has a rigid core for extra stability and dent resistance. WPC (Wood Polymer Composite) adds a foam layer for a softer feel underfoot. All three are waterproof and look like real wood.",
  },
  {
    q: "Is concrete polishing a coating?",
    a: "No. Concrete polishing is a mechanical refinement process \u2014 we grind and polish your existing concrete to create a smooth, glossy surface. There\u2019s nothing applied on top that can peel or delaminate. It\u2019s the concrete itself, refined to a finish.",
  },
  {
    q: "How do I choose between so many options?",
    a: "That\u2019s what the free consultation is for. We\u2019ll look at your space, discuss your goals and budget, and recommend the right system. Most customers narrow it down to 1\u20132 options quickly once they understand the tradeoffs.",
  },
  {
    q: "Do you install flooring in occupied homes?",
    a: "Yes. We work room by room when needed and take care to protect your existing finishes. For larger projects, we\u2019ll provide a phased timeline so you always know what to expect.",
  },
]

export default function InteriorPage() {
  return (
    <>
      <PageHero
        badge="Interior Spaces"
        title="Elevate Your"
        highlight="Indoor Floors"
        subtitle="From metallic epoxy showpieces to hardwood-look plank flooring — we match the right system to your interior space, style, and budget."
      />

      <InteriorAreas />

      {/* FAQ */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Interior Flooring FAQ
            </h2>
          </div>
          <FaqAccordion faqs={interiorFaqs} />
        </div>
      </section>

      {/* Help CTA */}
      <section className="section-gray py-14 sm:py-20 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-gray-900">
            Not Sure Which System Is Right for Your Space?
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
            Every room is different. Tell us about yours and we&apos;ll recommend the best flooring &mdash; free consultation, no obligation.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

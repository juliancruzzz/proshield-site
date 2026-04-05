import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { GarageAreas } from "@/components/sections/garage-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Garage Floor Coatings | ProShield Epoxy",
  description: "Premium garage floor coatings — ProFlake, metallic epoxy, and solid color systems. Our standard residential flake systems are often completed in 1 day. Limited lifetime warranty on qualifying residential systems.",
}

const garageFaqs = [
  {
    q: "How long does a garage floor coating take to install?",
    a: "Our standard residential ProFlake system can often be completed in 1 day (subject to substrate condition, weather, and repair requirements). Metallic epoxy systems typically take 2\u20133 days due to the multi-layer application and curing process.",
  },
  {
    q: "When can I park on my new garage floor?",
    a: "Walk-on traffic is allowed the same day or next day. Drive-on is recommended 24\u201372 hours after installation depending on conditions and expected traffic. We\u2019ll provide specific guidelines based on weather and curing conditions.",
  },
  {
    q: "Will epoxy stick to my old, cracked garage floor?",
    a: "In most cases, yes. We prep every surface with professional diamond grinding and repair any cracks, spalls, or damage before coating. We assess your substrate during the free consultation and will let you know if there are any concerns.",
  },
  {
    q: "What\u2019s the difference between ProFlake and metallic epoxy?",
    a: "ProFlake is a chip-based system \u2014 durable, decorative, and fast to install. Metallic epoxy creates a one-of-a-kind flowing finish with pearlescent depth. ProFlake is our most popular for everyday garages; metallic is the premium option for showroom-level aesthetics.",
  },
  {
    q: "Is garage floor coating worth it?",
    a: "Absolutely. A coated garage floor protects your concrete from stains, cracks, and moisture damage. It\u2019s easier to clean, looks incredible, and adds real value to your home. Most homeowners wish they\u2019d done it sooner.",
  },
  {
    q: "Do you offer a warranty?",
    a: "ProFlake comes with a limited lifetime warranty on qualifying residential systems. This covers material defects and workmanship \u2014 not wear from abuse, neglect, or incompatible chemicals. We\u2019ll explain the full warranty details during your consultation.",
  },
  {
    q: "How do I maintain my new garage floor?",
    a: "Just sweep and mop. Our coated surfaces are sealed and smooth, so dirt, dust, and spills wipe right up. No special cleaners needed \u2014 mild soap and water is all it takes.",
  },
  {
    q: "Can you match my garage floor to my home\u2019s style?",
    a: "Yes! ProFlake offers 150+ Torginol color blends, and metallic epoxy comes in dozens of pearlescent tones. We provide color samples and digital mockups during your consultation to help you find the perfect match.",
  },
]

export default function GaragePage() {
  return (
    <>
      <PageHero
        badge="Garage Floors"
        title="Your Garage,"
        highlight="Transformed"
        subtitle="Turn your garage into a showroom-quality space. Our standard residential flake garage floor systems are often completed in 1 day, subject to substrate condition, weather, and repair requirements."
      />

      <GarageAreas />

      {/* FAQ */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Garage Floor FAQ
            </h2>
          </div>
          <FaqAccordion faqs={garageFaqs} />
        </div>
      </section>

      {/* Help CTA */}
      <section className="section-gray py-14 sm:py-20 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-gray-900">
            Not Sure Which System Is Right for Your Garage?
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
            Every garage is different. Tell us about yours and we&apos;ll recommend the best system &mdash; free consultation, no obligation.
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

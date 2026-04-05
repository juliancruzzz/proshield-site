import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CommercialAreas } from "@/components/sections/commercial-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Flooring Las Vegas | ProShield Epoxy",
  description: "Heavy-duty commercial and industrial flooring for warehouses, retail, manufacturing, and more. Systems matched to your environment. 2\u20135 day typical installation.",
}

const commercialFaqs = [
  {
    q: "Can you install during business hours?",
    a: "We work around your schedule. Many commercial installations happen over weekends, holidays, or in phases to minimize disruption. We\u2019ll coordinate timing as part of your project plan.",
  },
  {
    q: "What\u2019s the most durable commercial flooring system?",
    a: "For maximum chemical and impact resistance, urethane cement is the top choice \u2014 it handles thermal shock, heavy traffic, and aggressive chemicals. For general warehouse and retail use, resin quartz and ProFlake systems offer excellent durability at a better price point.",
  },
  {
    q: "Do you handle large-scale projects?",
    a: "Yes. We\u2019ve coated warehouses, aircraft hangars, retail floors, and manufacturing facilities. We can phase installations to work with your operations and timeline.",
  },
  {
    q: "What about slip resistance for safety compliance?",
    a: "All of our commercial systems can include anti-slip aggregates and textures. We\u2019ll recommend the right finish for your environment \u2014 whether it\u2019s a wet kitchen, a forklift aisle, or a customer-facing showroom.",
  },
  {
    q: "How long will a commercial floor last?",
    a: "With the right system and proper maintenance, commercial resinous floors last 10\u201320+ years. Urethane cement and resin quartz systems are built to handle the most demanding environments over the long haul.",
  },
  {
    q: "Do you offer free estimates for commercial projects?",
    a: "Absolutely. We offer free on-site consultations for commercial projects. We\u2019ll assess your space, discuss your needs, and provide a detailed proposal with system recommendations and pricing.",
  },
]

export default function CommercialPage() {
  return (
    <>
      <PageHero
        badge="Commercial & Industrial"
        title="Built for"
        highlight="Business"
        subtitle="Heavy-duty floor systems for warehouses, retail, manufacturing, and more. Systems matched to your specific environment — with slip-resistant textures to support safer walking-working surfaces."
      />

      <CommercialAreas />

      {/* FAQ */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Commercial Flooring FAQ
            </h2>
          </div>
          <FaqAccordion faqs={commercialFaqs} />
        </div>
      </section>

      {/* Help CTA */}
      <section className="section-gray py-14 sm:py-20 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-gray-900">
            Need a Flooring Solution for Your Business?
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
            Free on-site consultations for commercial projects. Tell us about your space and we&apos;ll recommend the right system.
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

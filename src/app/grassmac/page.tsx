import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { GrassMacStats } from "@/components/sections/grassmac-stats"
import { GrassMacIntro } from "@/components/sections/grassmac-intro"
import { GrassMacPetDrainage } from "@/components/sections/grassmac-pet-drainage"
import { GrassMacSystem } from "@/components/sections/grassmac-system"
import { GrassMacComparison } from "@/components/sections/grassmac-comparison"
import { GrassMacBenefits } from "@/components/sections/grassmac-benefits"
import { GrassMacUseCases } from "@/components/sections/grassmac-use-cases"
import { GrassMacProcess } from "@/components/sections/grassmac-process"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "GrassMac Turf System — Premium Drainable Artificial Turf Base | ProShield Epoxy",
  description:
    "Professional GrassMac artificial turf installation in Las Vegas. Vuba resin-bound base with instant drainage, pet-friendly design, and 100% recycled materials. No shifting, no sinking, no odor.",
}

const faqs = [
  {
    q: "What is GrassMac and how is it different from a regular turf install?",
    a: "GrassMac is an engineered base system by Vuba designed specifically for artificial turf. Instead of the traditional sand or crusher-run base that shifts and sinks over time, GrassMac uses recycled rubber and aggregate bound with resin to create a fully permeable, dimensionally stable foundation. Turf installs on top of this base — it doesn't move, doesn't settle, and drains instantly.",
  },
  {
    q: "Does GrassMac help with pet urine odor?",
    a: "Yes — this is one of the biggest advantages. Traditional sand bases trap urine underneath the turf, where bacteria multiply and create ammonia smell. GrassMac is fully permeable, so liquid drains straight through the base into the subgrade. Combined with antimicrobial infill, this dramatically reduces the odor buildup that makes pet turf areas smell in hot weather.",
  },
  {
    q: "How long does installation take?",
    a: "The GrassMac base cures in approximately 2 to 4 hours, and artificial turf can be laid the same day. Total project timeline depends on the area size, excavation needs, and complexity — but the resin-bound base process is faster than traditional multi-day base preparation.",
  },
  {
    q: "Is GrassMac environmentally friendly?",
    a: "Yes. The system uses 100% recycled rubber and aggregate materials, and is SUDS compliant (Sustainable Urban Drainage Systems). Materials can be stored and reused, reducing waste. It's an eco-friendly alternative to virgin quarried materials used in traditional bases.",
  },
  {
    q: "What temperature range works for installation?",
    a: "GrassMac is recommended for installation in temperatures between 41°F and 86°F for optimal performance and curing.",
  },
  {
    q: "Can the turf be removed for cleaning?",
    a: "Yes — this is a key feature. The artificial turf sits on top of the GrassMac base and can be lifted out for direct cleaning or replacement. The resin-bound base stays perfectly intact underneath. Traditional installs typically glue or pin the turf down, making maintenance access difficult.",
  },
  {
    q: "Does GrassMac get hot in Las Vegas summers?",
    a: "The GrassMac base itself is topped with artificial turf, which stays comfortable underfoot even in hot conditions. The semi-flexible rubber composition also doesn't retain and radiate heat the way a rigid concrete or compacted stone base does.",
  },
]

export default function GrassMacPage() {
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
        badge="Vuba GrassMac System"
        title="Premium Turf."
        highlight="Engineered Base."
        subtitle="The next generation of artificial turf installation. Eco-friendly, resin-bound base that never shifts, never sinks, and drains instantly — including pet waste."
        backgroundImage="/images/grassmac/turf-backyard-pool.jpg"
        backgroundAlt="Lush artificial turf backyard with pool and GrassMac engineered base"
      />

      <GrassMacStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "GrassMac" }]} />

      <GrassMacIntro />

      <GrassMacPetDrainage />

      <GrassMacSystem />

      <GrassMacComparison />

      <GrassMacBenefits />

      <GrassMacUseCases />

      <GrassMacProcess />

      {/* FAQ */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              GrassMac FAQ
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
              Get a GrassMac Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="grassmac" />

      <CtaSection />
    </>
  )
}

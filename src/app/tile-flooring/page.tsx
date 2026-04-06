import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { TileStats } from "@/components/sections/tile-stats"
import { TileIntro } from "@/components/sections/tile-intro"
import { TileTypes } from "@/components/sections/tile-types"
import { TileBenefits } from "@/components/sections/tile-benefits"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tile Flooring Installation | ProShield Epoxy",
  description:
    "Professional tile flooring installation in Las Vegas — porcelain, ceramic, and natural stone tile for kitchens, bathrooms, entryways, and commercial spaces.",
}

const faqs = [
  {
    q: "How long does tile installation take?",
    a: "Typical residential tile installation takes 2–5 days depending on the area size, substrate condition, and tile type. Larger format tiles and natural stone may require additional prep time.",
  },
  {
    q: "Can you install tile over existing flooring?",
    a: "In some cases, yes — tile can be installed over existing tile or concrete if the surface is structurally sound and level. We assess each project during the consultation to determine the best approach.",
  },
  {
    q: "What grout options are available?",
    a: "We offer standard sanded grout, unsanded grout for narrow joints, and premium epoxy grout for maximum stain resistance. Grout color is customizable to complement your tile selection.",
  },
  {
    q: "Do you handle large-format tile installation?",
    a: "Yes. Large-format tiles (24×24 and larger) require specialized techniques and a perfectly level substrate. We use leveling systems and proper thinset to ensure a flat, lippage-free installation.",
  },
]

export default function TileFlooringPage() {
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
        badge="Tile Installation"
        title="Professional"
        highlight="Tile Flooring"
        subtitle="Porcelain, ceramic, and natural stone tile — professionally installed for kitchens, bathrooms, entryways, and commercial spaces throughout Las Vegas."
        backgroundImage="/images/tile/tile-luxury-interior.webp"
        backgroundAlt="Luxury marble tile flooring in a modern bathroom interior"
      />

      <TileStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Tile Flooring" }]} />
      <TileIntro />

      <TileTypes />

      <TileBenefits />

      {/* FAQ */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Tile Flooring FAQ
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
              Get a Tile Flooring Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="tile-flooring" />

      <CtaSection />
    </>
  )
}

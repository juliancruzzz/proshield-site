import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { InteriorAreas } from "@/components/sections/interior-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Interior Flooring Las Vegas | ProShield Epoxy",
  description:
    "Interior flooring systems in Las Vegas — metallic epoxy, polished concrete and decorative overlays for homes, offices and retail spaces.",
  alternates: {
    canonical: "/areas/interior",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/areas/interior",
    images: ["/images/metallic/metallic-epoxy-blue-ocean-garage.webp"],
  },
}

const interiorFaqs = [
  {
    q: "Will patches show through polished concrete?",
    a: "They can. Polishing works with the existing slab, so repairs and changes in aggregate may still be visible.",
  },
  {
    q: "How do I choose between metallic epoxy and an overlay?",
    a: "Choose metallic epoxy for a marbled color pattern. If you want a textured or stamped surface, consider a decorative overlay.",
  },
  {
    q: "Can you work in an occupied home?",
    a: "We can discuss doing the work room by room. Doorways, furniture and the time the finish needs to cure all affect access.",
  },
]

export default function InteriorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": interiorFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proshieldepoxy.com/" },
              { "@type": "ListItem", "position": 2, "name": "Interior Flooring", "item": "https://proshieldepoxy.com/areas/interior" }
            ]
          })
        }}
      />

      <PageHero
        badge="Interior Spaces"
        title="Interior Flooring"
        highlight="Las Vegas"
        subtitle="See how a metallic coating, polished concrete and a decorative overlay look indoors."
      />

      <InteriorAreas />

      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900">What will the concrete look like?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-heading font-semibold text-lg text-gray-900">If you want to see the original slab</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">Polishing reveals the stone in the concrete. Old patches can remain visible, and a deeper grind exposes more aggregate.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-heading font-semibold text-lg text-gray-900">If you want a new color or pattern</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">Metallic epoxy adds a pigmented surface. An overlay can change the texture as well, from a smooth finish to a stamped design.</p>
            </div>
          </div>
        </div>
      </section>

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

      <CtaSection />
    </>
  )
}

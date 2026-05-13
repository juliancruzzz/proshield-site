import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { ProFlakeStats } from "@/components/sections/proflake-stats"
import { ProFlakeIntro } from "@/components/sections/proflake-intro"
import { ProFlakeSystemBuild } from "@/components/sections/proflake-system-build"
import { ProFlakeWhyChoose } from "@/components/sections/proflake-why-choose"
import { FlakeColorShowcase } from "@/components/sections/flake-color-showcase"
import { ProFlakeGallery } from "@/components/sections/proflake-gallery"
import { ProFlakeComparison } from "@/components/sections/proflake-comparison"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { RelatedServices } from "@/components/sections/related-services"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Epoxy Garage Floor Coating Las Vegas | ProFlake Flake System | ProShield",
  description: "Epoxy garage floor coating in Las Vegas — ProFlake flake system with 150+ Torginol colors, UV-stable polyaspartic topcoat & 1-day install. Free quote · 702-728-5484.",
  openGraph: {
    url: "https://proshieldepoxy.com/proflake",
    images: ["/images/proflake/flake-garage-residential.webp"],
  },
  alternates: {
    canonical: "/proflake",
  },
}

const faqs = [
  {
    q: "What makes ProFlake different from epoxy?",
    a: "ProFlake uses a polyurea basecoat instead of epoxy, topped with a polyaspartic clear coat — delivering UV stability, chemical resistance, and hot tire performance that standard epoxy can't match. Combined with 150+ Torginol color options and full-broadcast decorative chip, it's our most customizable and durable residential garage solution.",
  },
  {
    q: "What is polyaspartic topcoat and why does it matter?",
    a: "Polyaspartic is a fast-curing, single-component topcoat that hardens quickly while remaining flexible and UV-stable. It resists chemicals, hot tire marks, and maintains its gloss better than standard epoxy topcoats over time.",
  },
  {
    q: "Can I really have a 1-day installation?",
    a: "ProFlake qualifies for 1-day installation in residential garages when substrate condition, weather, and repair requirements align. We'll assess your garage during the consultation — if it doesn't qualify for 1-day, we'll explain the timeline and options.",
  },
  {
    q: "When can I use my garage after installation?",
    a: "Walk-on traffic is allowed after 24 hours. Drive-on is recommended after 48 hours. We'll provide specific guidelines based on weather and curing conditions.",
  },
  {
    q: "What is the warranty on ProFlake?",
    a: "ProFlake comes with a limited lifetime warranty on qualifying residential systems. This covers material defects and workmanship — not wear from abuse, neglect, or incompatible chemicals.",
  },
  {
    q: "How do I choose a color from 150+ options?",
    a: "We provide color samples and digital mockups during your consultation. Many customers choose neutral tones (grays, blacks, tans) or vibrant colors that complement their home. Each blend can be customized with chip colors and ratios.",
  },
  {
    q: "Is ProFlake resistant to hot tires and chemicals?",
    a: "Yes. The polyaspartic topcoat resists tire marks from hot tires, oil stains, gasoline, and common garage chemicals. For spills, clean immediately — while ProFlake resists chemicals, prolonged exposure to harsh solvents can damage it.",
  },
  {
    q: "What does the installation process involve?",
    a: "Concrete prep → polyurea primer → polyurea base coat → chip broadcast → polyaspartic topcoat. Total time depends on substrate condition and environmental factors. We handle surface grinding, patching, and sealing.",
  },
]

export default function ProFlakePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
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
      <PageHero
        badge="Our Most Popular System"
        title="ProFlake Floors."
        highlight="Las Vegas Garage Coating"
        subtitle="The upgrade from epoxy. Polyurea basecoat, polyaspartic topcoat, 150+ Torginol color blends, and 1-day installation for qualifying residential garages in Las Vegas."
        backgroundImage="/images/proflake/flake-garage-porsche-bikes.webp"
        backgroundAlt="Garage with ProFlake flake floor coating and motorcycles"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ProFlake Garage Floor Coating",
            "description": "ProFlake polyurea flake garage floor coating with 150+ Torginol color blends, polyaspartic topcoat, and 1-day installation in Las Vegas.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ProShield Epoxy",
              "telephone": "+1-702-728-5484",
              "url": "https://proshieldepoxy.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Las Vegas",
              "addressRegion": "NV"
            },
            "url": "https://proshieldepoxy.com/proflake"
          })
        }}
      />

      <ProFlakeStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "ProFlake" }]} />
      <ProFlakeIntro />
      <ProFlakeWhyChoose />
      <ProFlakeComparison />
      <ProFlakeSystemBuild />
      <FlakeColorShowcase />
      <ProFlakeGallery />

      {/* FAQ */}
      <section className="section-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              ProFlake FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="proflake" />

      <CtaSection />
    </>
  )
}

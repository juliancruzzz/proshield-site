import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { VubaStoneStats } from "@/components/sections/vubastone-stats"
import { VubaStoneIntro } from "@/components/sections/vubastone-intro"
import { VubaStoneColorShowcase } from "@/components/sections/vubastone-color-showcase"
import { VubaStoneProcess } from "@/components/sections/vubastone-process"
import { VubaStoneApplications } from "@/components/sections/vubastone-applications"
import { ServiceGallery } from "@/components/sections/service-gallery"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "VubaStone Resin-Bound Stone Las Vegas | ProShield Epoxy",
  description: "Resin-bound stone for driveways, patios and pool surrounds in Las Vegas. Compare stone blends and see how the base affects drainage and installation depth.",
  openGraph: {
    url: "https://proshieldepoxy.com/vubastone",
    images: ["/images/vubastone/vubastone-driveway-craftsman.webp"],
  },
  alternates: {
    canonical: "/vubastone",
  },
}

const depths = [
  { use: "Pedestrian Areas", depth: "1/2\"", detail: "Walkways, paths, patios" },
  { use: "Driveways", depth: "5/8\"", detail: "Light vehicle access" },
  { use: "Heavy Traffic", depth: "3/4\"", detail: "Turning areas, frequent use" },
]

const galleryImages = [
  { src: "/images/vubastone/vubastone-driveway-stone-columns.webp", alt: "Stone driveway between entrance columns", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/vubastone/vubastone-pool-deck-pergola.webp", alt: "Stone pool surround beneath a pergola", span: "" },
  { src: "/images/vubastone/vubastone-patio-firepit.webp", alt: "Stone patio around a fire pit", span: "" },
  { src: "/images/vubastone/vubastone-steps-contrast.webp", alt: "Steps with contrasting stone borders", span: "md:col-span-2" },
  { src: "/images/vubastone/vubastone-pool-deck-closeup.webp", alt: "Close-up of the stone texture", span: "" },
  { src: "/images/vubastone/vubastone-driveway-landscaping.webp", alt: "Stone driveway beside planted beds", span: "" },
]

const faqs = [
  {
    q: "Is VubaStone epoxy?",
    a: "VubaStone uses a clear polyurethane resin to hold small stones together. The individual stones stay visible in the finished surface.",
  },
  {
    q: "Will water drain through a resin-bound driveway?",
    a: "Water can pass between the stones. Where it goes next depends on the base and the slope. A stone layer over existing concrete still needs a route for runoff.",
  },
  {
    q: "What warranty does VubaStone come with?",
    a: "The base matters. Vuba publishes different warranty terms for installations over existing concrete or asphalt and installations over its VubaMac base. Confirm the coverage that applies to your installation in writing.",
  },
  {
    q: "Can VubaStone go over an existing driveway?",
    a: "Yes, over suitable concrete or asphalt. We check movement, drainage and the height at the garage door before recommending a build.",
  },
  {
    q: "What gives the finish its color?",
    a: "The blend of stones gives the surface its color. Compare a blend next to the pavers, walls or pool edge it will meet.",
  },
  {
    q: "How long until I can walk or drive on it?",
    a: "Foot traffic and vehicles have different return times. We’ll confirm both for the resin and weather conditions on your job.",
  },
  {
    q: "What maintenance does VubaStone require?",
    a: "Sweep away leaves and loose debris. Use Vuba’s cleaning instructions for your finish before pressure washing or treating a stain.",
  },
  {
    q: "What should my estimate include?",
    a: "Look for the stone blend, base preparation, finished depth and how the edges meet the garage or patio doors.",
  },
]

export default function VubaStonePage() {
  return (
    <>
      {/* FAQ Schema for SEO */}
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

      {/* Hero — hangar-style image background */}
      <PageHero
        badge="Outdoor stone surfacing"
        title="VubaStone Resin-Bound Stone"
        highlight="Las Vegas"
        subtitle="VubaStone combines small pieces of marble with a clear resin. You can use it on driveways, patios, walkways and around pools."
        backgroundImage="/images/vubastone/vubastone-driveway-stone-columns.webp"
        backgroundAlt="Stone driveway between entrance columns"
      />

      {/* Stats bar */}
      <VubaStoneStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "VubaStone" }]} />

      {/* Intro — two-column with image + highlights */}
      <VubaStoneIntro />

      {/* Applications — expandable accordion cards */}
      <VubaStoneApplications />

      {/* Color Blends — grid with clickable detail panel */}
      <VubaStoneColorShowcase />

      {/* The System */}
      <VubaStoneProcess />

      {/* Specs */}
      <section className="bg-warm-dark py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Specifications
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                Recommended stone depths
              </h2>
              <p className="mt-3 text-gray-300">
                These depths come from <a href="https://vuba-stone.com/pages/vuba-stone" className="underline">Vuba’s US installation guidance</a>. The base and traffic on your site determine the final specification.
              </p>
            </div>
          </ScrollReveal>

          {/* Specs row — responsive grid: 1 col mobile, 3 tablet, 5 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto mt-8 sm:mt-10">
            {depths.map((item) => (
              <ScrollReveal key={item.use} delay={0.2}>
                <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 sm:p-5 lg:p-6 flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0 sm:text-center hover:border-accent/20 hover:bg-white/[0.06] transition-all duration-300 h-full">
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-accent shrink-0">{item.depth}</span>
                  <div className="sm:mt-3">
                    <p className="text-sm font-medium text-white/80">{item.use}</p>
                    <p className="mt-0.5 sm:mt-1 text-xs text-white/35">{item.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — masonry */}
      <section className="section-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Finish ideas
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Stone finishes outdoors
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Compare the stone in a broad driveway with the narrow borders on a set of steps.
              </p>
            </div>
          </ScrollReveal>

          <ServiceGallery images={galleryImages} />

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-gray-700 hover:border-accent hover:text-accent transition-all duration-200 shadow-sm"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certified Installer callout */}
      <section className="section-gray py-14 sm:py-20 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <img
                src="/images/logos/vubastone-logo-teal-bg.webp"
                alt="Vuba Stone"
                className="h-24 sm:h-28 md:h-32 rounded-xl shrink-0"
              />
              <div>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 tracking-tight">
                  Planning a driveway or patio?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
                  Tell us how you use the space and what’s there now. We’ll price the base preparation and stone finish together.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  Get a stone surfacing estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Internal link bridge */}
      <section className="section-white py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            Planning a pool surround?{" "}
            <Link href="/blog/best-pool-deck-coatings-las-vegas" className="text-accent hover:underline font-medium">
              Compare pool deck coating options
            </Link>{" "}
            or see our other{" "}
            <Link href="/services" className="text-accent hover:underline font-medium">concrete finishes</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Questions
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                VubaStone FAQ
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a VubaStone Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices variant="gray" currentService="vubastone" />

      <CtaSection />
    </>
  )
}

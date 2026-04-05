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
import { ServiceGallery } from "@/components/sections/service-gallery"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "VubaStone Resin-Bound Stone | Certified Installers Las Vegas | ProShield Epoxy",
  description: "VubaStone certified installers in Las Vegas. Resin-bound Spanish marble for driveways, patios, and pool decks. 850 L/min drainage, UV-stable. Free estimates.",
}

const applications = [
  {
    title: "Driveways",
    description: "Vehicle-rated, fully permeable, and built to handle Las Vegas heat without cracking or fading.",
    image: "/images/vubastone/vubastone-driveway-stone-columns.jpg",
  },
  {
    title: "Patios & Terraces",
    description: "A seamless, low-maintenance surface that elevates outdoor living and entertaining areas.",
    image: "/images/vubastone/vubastone-patio-firepit.webp",
  },
  {
    title: "Walkways & Paths",
    description: "Non-slip, weed-resistant, and permeable. Designed to complement your landscape architecture.",
    image: "/images/vubastone/vubastone-walkway-wood-inlay.jpg",
  },
  {
    title: "Pool Surrounds",
    description: "Fast-draining and slip-resistant. The ideal surface around water — cool, safe, and beautiful.",
    image: "/images/cool-deck/cool-deck-pool-spa-vegas.jpg",
  },
]

const depths = [
  { use: "Pedestrian Areas", depth: "3/8\"", detail: "Walkways, paths, patios" },
  { use: "Driveways", depth: "5/8\"", detail: "Light vehicle access" },
  { use: "Heavy Traffic", depth: "3/4\"", detail: "Turning areas, frequent use" },
]

const galleryImages = [
  { src: "/images/vubastone/vubastone-driveway-stone-columns.jpg", alt: "VubaStone driveway with grand stone column entrance", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/vubastone/vubastone-pool-deck-pergola.jpg", alt: "VubaStone pool deck with pergola shade structure", span: "" },
  { src: "/images/vubastone/vubastone-patio-firepit.webp", alt: "VubaStone patio surrounding a fire pit", span: "" },
  { src: "/images/vubastone/vubastone-steps-contrast.jpg", alt: "VubaStone steps with contrast color borders", span: "md:col-span-2" },
  { src: "/images/vubastone/vubastone-pool-deck-closeup.webp", alt: "VubaStone surface close-up — natural marble texture detail", span: "" },
  { src: "/images/vubastone/vubastone-driveway-landscaping.webp", alt: "VubaStone driveway integrated with landscaping", span: "" },
]

const faqs = [
  {
    q: "Is VubaStone epoxy?",
    a: "No. VubaStone is a polyurethane resin-bound stone system — not epoxy. The UV-stable polyurethane resin binds natural crushed Spanish marble into a permeable, durable outdoor surface. It's a completely different product from interior epoxy coatings.",
  },
  {
    q: "How permeable is VubaStone?",
    a: "VubaStone drains at 850 litres per minute per square metre, making it fully permeable and SUDS compliant. Water passes through the surface into the VubaMac base layer — no standing water, no puddles.",
  },
  {
    q: "What warranty does VubaStone come with?",
    a: "VubaStone carries a 5-year manufacturer's warranty as standard. When installed over Vuba's patented VubaMac permeable base, the warranty is upgraded to 10 years.",
  },
  {
    q: "How long does VubaStone last?",
    a: "When professionally installed and properly maintained, VubaStone surfaces can last 15–20+ years. The polyurethane resin is flexible and UV-stable, resisting cracking and color fade better than concrete or traditional paving.",
  },
  {
    q: "What is binding quartz and why does it matter?",
    a: "Binding quartz is a translucent additive mixed into the VubaStone system. It increases the surface strength by up to 30% without discoloring the finished stone — something standard resin-bound systems don't include.",
  },
  {
    q: "How long until I can walk or drive on it?",
    a: "Do not walk on your new VubaStone surface for 24–48 hours after installation. Do not drive on it for 48–72 hours. Curing times may vary with temperature and humidity.",
  },
  {
    q: "What maintenance does VubaStone require?",
    a: "VubaStone is low-maintenance. Regular sweeping and occasional rinsing with a garden hose is typically all that's needed. Avoid high-pressure washing and harsh chemicals.",
  },
  {
    q: "What makes ProShield different from other VubaStone installers?",
    a: "ProShield Epoxy is a Vuba Stone certified installer. We've completed hands-on training directly with Vuba's team and follow their manufacturer-specified installation process. Your warranty is backed by both Vuba and our commitment to quality.",
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
        badge="Vuba Stone Certified Installers — Las Vegas"
        title="Resin-Bound"
        highlight="Stone Surfaces"
        subtitle="Natural Spanish marble bound in UV-stable polyurethane resin. Fully permeable, color-stable, and engineered to last. The premium outdoor surface for driveways, patios, pool decks, and walkways."
        backgroundImage="/images/vubastone/vubastone-driveway-stone-columns.jpg"
        backgroundAlt="VubaStone resin-bound stone driveway with grand stone column entrance"
      />

      {/* Stats bar */}
      <VubaStoneStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "VubaStone" }]} />

      {/* Intro — two-column with image + highlights */}
      <VubaStoneIntro />

      {/* Applications — image overlay cards */}
      <section className="section-gray py-10 sm:py-16 lg:py-24 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Applications
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Driveways, Patios, Pool Decks & More
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                VubaStone is designed for any outdoor surface that needs to look premium, drain properly, and hold up to real use.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {applications.map((app, i) => (
              <ScrollReveal key={app.title} delay={i * 0.1}>
                <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 hover:border-accent/30 transition-colors duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={app.image}
                      alt={`VubaStone ${app.title}`}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="font-heading font-semibold text-lg text-white">{app.title}</h3>
                    <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{app.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

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
                Built to Spec
              </h2>
            </div>
          </ScrollReveal>

          {/* Specs row — 5 equal cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-5xl mx-auto mt-8 sm:mt-10">
            {[
              ...depths.map((d) => ({ label: d.use, detail: d.detail, value: d.depth })),
              { label: "Binding Quartz", detail: "Increases surface strength", value: "30%" },
              { label: "UV-Stable Resin", detail: "Won\u2019t yellow or discolor", value: "\u2713" },
            ].map((item) => (
              <ScrollReveal key={item.label} delay={0.2}>
                <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 sm:p-6 text-center hover:border-accent/20 hover:bg-white/[0.06] transition-all duration-300 h-full">
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-accent">{item.value}</span>
                  <p className="mt-3 text-sm font-medium text-white/80">{item.label}</p>
                  <p className="mt-1 text-xs text-white/35">{item.detail}</p>
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
                Our Work
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                VubaStone Installations
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Real projects across Las Vegas — driveways, pool decks, walkways, and outdoor living spaces.
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
                src="/images/logos/vubastone-logo-teal-bg.png"
                alt="VubaStone Certified Installer"
                className="h-24 sm:h-28 md:h-32 rounded-xl shrink-0"
              />
              <div>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 tracking-tight">
                  Vuba Stone Certified Installers
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
                  ProShield Epoxy is a Vuba Stone certified installer in Las Vegas. We&apos;ve completed hands-on training directly with Vuba&apos;s team and follow their manufacturer-specified installation process. Your warranty is backed by Vuba — one of over 270+ certified installers across the Americas.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  Schedule Your Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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

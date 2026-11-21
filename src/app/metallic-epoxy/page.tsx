import { ProjectCards } from "@/components/sections/project-cards"
import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { MetallicStats } from "@/components/sections/metallic-stats"
import { MetallicIntro } from "@/components/sections/metallic-intro"
import { MetallicColorShowcase } from "@/components/sections/metallic-color-showcase"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { MetallicProcess } from "@/components/sections/metallic-process"
import { ServiceGallery } from "@/components/sections/service-gallery"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Metallic Epoxy Flooring Las Vegas | Stunning 3D Finishes | ProShield Epoxy",
  description: "Metallic epoxy flooring in Las Vegas — custom 3D liquid-metal floors for showrooms, luxury homes & designer garages. Free design consultation · 702-728-5484.",
  openGraph: {
    url: "https://proshieldepoxy.com/metallic-epoxy",
    images: ["/images/metallic/metallic-epoxy-blue-ocean-garage.webp"],
  },
  alternates: {
    canonical: "/metallic-epoxy",
  },
}

const idealSpaces = [
  {
    title: "Luxury Showrooms",
    description: "Automotive, retail, and product display spaces where the floor becomes part of the brand experience.",
    image: "/images/metallic/metallic-epoxy-chopshop-porsche.webp",
  },
  {
    title: "High-End Residences",
    description: "Living rooms, entertainment spaces, and custom home builds that demand flooring as distinctive as the home itself.",
    image: "/images/metallic/metallic-epoxy-silver-kitchen-real.webp",
  },
  {
    title: "Designer Garages",
    description: "Collector garages and personal showrooms — where your vehicles deserve a floor that matches.",
    image: "/images/metallic/metallic-epoxy-red-black-swirl.webp",
  },
]

const metallicGallery = [
  { src: "/images/metallic/metallic-epoxy-red-black-swirl.webp", alt: "Metallic epoxy garage — red and black swirl custom pour", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/metallic/metallic-epoxy-red-black-angle2.webp", alt: "Metallic epoxy — red and black angle view detail", span: "" },
  { src: "/images/metallic/metallic-epoxy-silver-kitchen-real.webp", alt: "Metallic epoxy kitchen — silver finish residential application", span: "" },
  { src: "/images/metallic/metallic-epoxy-blue-ocean-garage.webp", alt: "Metallic epoxy garage — deep blue ocean wave design", span: "md:col-span-2" },
  { src: "/images/metallic/metallic-epoxy-chopshop-porsche.webp", alt: "Metallic epoxy showroom — Porsche collector showroom space", span: "" },
  { src: "/images/metallic/metallic-epoxy-pink-magenta-salon.webp", alt: "Metallic epoxy salon — custom pink and magenta commercial floor", span: "" },
]

const faqs = [
  {
    q: "What makes metallic epoxy different from flake or standard epoxy?",
    a: "Metallic epoxy uses pigments in resin to create flowing color and visual depth. Flake systems use decorative chips for a different finish. Samples and reference images show a direction; the installed pattern varies.",
  },
  {
    q: "Can I choose my exact colors and design?",
    a: "Discuss pigment colors, movement and clear-coat finish before installation. The final pattern is hand-worked and will not exactly duplicate a sample or reference photo.",
  },
  {
    q: "Is metallic epoxy suitable for high-traffic commercial spaces?",
    a: "Suitability depends on the intended traffic, slab and selected clear coat. Confirm the named products and their abrasion, chemical and traction information for the project.",
  },
  {
    q: "How long does installation take?",
    a: "Application time and return-to-use time are different. Preparation, repairs, product selection and site conditions affect the schedule. Confirm when walking, furniture and vehicles are permitted before using the floor.",
  },
  {
    q: "What about UV stability and long-term care?",
    a: "Light exposure can affect coating appearance. Compare the selected base and topcoat’s published UV data and intended use; a UV-resistant topcoat is not a promise that the entire floor will never change color. Remove loose dirt and follow the installed finish’s cleaning instructions. Confirm the cleaner, dilution, equipment and stain-removal method before use. Do not assume every resin floor accepts the same products.",
  },
  {
    q: "What warranty is included?",
    a: "The Peel-Free Lifetime Guarantee applies to qualifying systems under the written terms. Moisture-driven failure is excluded; a flagged moisture condition requires an appropriate moisture vapor barrier before coating. Confirm coverage for the proposed system.",
  },
]

export default function MetallicEpoxyPage() {
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

      {/* Hero with image background */}
      <PageHero
        badge="Custom Luxury Flooring"
        title="Metallic Epoxy Floors"
        highlight="Las Vegas"
        subtitle="Hand-crafted liquid-metal floors with real depth and movement. Every pour is an original — designed, blended, and installed specifically for your Las Vegas space."
        ctaText="Book a Design Consultation"
        backgroundImage="/images/gallery/metallic-epoxy-vegas-room.webp"
        backgroundAlt="Metallic epoxy floor with 3D liquid-metal depth and swirl patterns"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Metallic Epoxy Flooring",
            "description": "Custom metallic epoxy floors with 3D liquid-metal finishes for luxury showrooms, residences, and designer spaces in Las Vegas.",
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
            "url": "https://proshieldepoxy.com/metallic-epoxy"
          })
        }}
      />

      {/* Stats bar */}
      <MetallicStats />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Metallic Epoxy" }]} />

      {/* Intro — two-column with image + highlights */}
      <MetallicIntro />

      {/* Ideal Spaces */}
      <section className="section-gray py-10 sm:py-16 lg:py-24 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Built For
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Showrooms, Residences, and Custom Spaces
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Metallic epoxy is the floor of choice for clients who treat their space as a reflection of their standards.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {idealSpaces.map((space, i) => (
              <ScrollReveal key={space.title} delay={i * 0.1}>
                <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 hover:border-accent/30 transition-colors duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="font-heading font-semibold text-lg text-white">{space.title}</h3>
                    <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{space.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Book a Design Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Metallic Pigment Color Showcase */}
      <MetallicColorShowcase />

      {/* The Process */}
      <MetallicProcess />

      {/* Gallery — masonry-style layout with 6 images */}
      <section className="section-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Finish Ideas
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Metallic Installations
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Every metallic floor is one-of-a-kind. See how we transform real spaces.
              </p>
            </div>
          </ScrollReveal>

          {/* Masonry-ish grid with clickable lightbox */}
          <ServiceGallery images={metallicGallery} />

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

      {/* FAQ */}
      <ProjectCards service="/metallic-epoxy" />
      <section className="section-gray py-10 sm:py-16 lg:py-24 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Questions
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Metallic Epoxy FAQ
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
              Book Your Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices currentService="metallic-epoxy" />

      <CtaSection />
    </>
  )
}

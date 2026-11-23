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
  title: "Metallic Epoxy Floors in Las Vegas | ProShield Epoxy",
  description: "See a silver and charcoal showroom floor, compare metallic colors and plan a custom epoxy finish for your space.",
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
    title: "Showrooms",
    description: "Silver and charcoal give the showroom pictured here a neutral floor beneath the displays.",
    image: "/images/metallic/metallic-epoxy-chopshop-porsche.webp",
  },
  {
    title: "Homes",
    description: "Related colors give an open room a quieter look. Contrasting pigments make the markings easier to see.",
    image: "/images/metallic/metallic-epoxy-silver-kitchen-real.webp",
  },
  {
    title: "Garages",
    description: "For a garage used for both display and parking, plan for vehicle traffic when choosing the clear coat.",
    image: "/images/metallic/metallic-epoxy-red-black-swirl.webp",
  },
]

const metallicGallery = [
  { src: "/images/metallic/metallic-epoxy-red-black-swirl.webp", alt: "Red and silver streaks across a black floor", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/metallic/metallic-epoxy-red-black-angle2.webp", alt: "Silver streaks through dark metallic epoxy", span: "" },
  { src: "/images/metallic/metallic-epoxy-silver-kitchen-real.webp", alt: "Silver and charcoal in a white kitchen", span: "" },
  { src: "/images/metallic/metallic-epoxy-blue-ocean-garage.webp", alt: "Blue and white metallic garage floor", span: "md:col-span-2" },
  { src: "/images/metallic/metallic-epoxy-chopshop-porsche.webp", alt: "Silver and charcoal showroom floor", span: "" },
  { src: "/images/metallic/metallic-epoxy-pink-magenta-salon.webp", alt: "Pink and burgundy with white accents", span: "" },
]

const faqs = [
  {
    q: "How does metallic epoxy differ from a flake floor?",
    a: "Flake floors have a speckled finish. In metallic epoxy the color comes from pigments worked into wet resin, so the pattern changes across the room.",
  },
  {
    q: "Can you match a floor in a photo?",
    a: "A photo helps us match the overall color and contrast you like. The markings form during the pour and will vary from one floor to the next.",
  },
  {
    q: "Can metallic epoxy go in a showroom or shop?",
    a: "Yes, where the coating suits the traffic and materials used there. Let us know if the floor will see vehicles, cleaning chemicals or wheeled equipment so we can specify the clear coat.",
  },
  {
    q: "When can we move furniture or vehicles back?",
    a: "The installation schedule includes preparation, repairs, coating and cure time. We’ll confirm when people, furniture and vehicles can return to your floor.",
  },
  {
    q: "How should I clean the finish?",
    a: "Sweep away loose grit before mopping. Use the cleaner and dilution recommended for the clear coat on your floor.",
  },
  {
    q: "What warranty comes with metallic epoxy?",
    a: "Check the written terms for the metallic system in your estimate. The limited lifetime no-peel warranty shown for qualifying residential ProFlake floors applies to that system.",
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
        badge="Custom epoxy"
        title="Metallic Epoxy Floors"
        highlight="Las Vegas"
        subtitle="Our silver and charcoal showroom project shows how two colors look across an entire room. We also pour metallic epoxy for homes, shops and garages."
        ctaText="Book a Design Consultation"
        backgroundImage="/images/metallic/metallic-epoxy-chopshop-porsche.webp"
        backgroundAlt="Silver and charcoal metallic epoxy on a showroom floor"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Metallic Epoxy Flooring",
            "description": "Custom metallic epoxy floors for homes, garages and showrooms in Las Vegas.",
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
                A change in color or contrast can make the same finish look quite different in a kitchen, showroom or garage.
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
                Metallic Finish Examples
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Compare the color combinations across kitchens, garages and showrooms.
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

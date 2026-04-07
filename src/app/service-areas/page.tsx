import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Service Areas | ProShield Epoxy - Las Vegas Valley",
  description:
    "ProShield Epoxy serves Henderson, Summerlin, North Las Vegas, Boulder City, and Pahrump. Professional epoxy flooring & coatings throughout Southern Nevada.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/service-areas",
    images: ["/og-image.webp"],
  },
}

const serviceAreas = [
  {
    name: "Henderson",
    slug: "henderson",
    description:
      "Green Valley, Anthem, MacDonald Highlands, and Lake Las Vegas. We serve all of Henderson, including specialized hangar services at Henderson Executive Airport.",
    highlights: ["Green Valley & Anthem", "MacDonald Highlands", "Lake Las Vegas", "Henderson Executive Airport hangar coatings"],
    neighborhoods: "Green Valley, Anthem, MacDonald Highlands, Lake Las Vegas, Inspirada",
  },
  {
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Red Rock Canyon proximity, The Ridges, Summerlin South, and Downtown Summerlin. Premium coatings for Summerlin's luxury properties.",
    highlights: ["The Ridges", "Summerlin South", "Downtown Summerlin", "Red Rock proximity"],
    neighborhoods: "The Ridges, Summerlin South, Downtown Summerlin, Centennial, Canyon Gate",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description:
      "Aliante, commercial district, and Apex Industrial Park. We specialize in commercial flooring, warehouse coatings, and industrial applications.",
    highlights: ["Aliante", "Apex Industrial Park", "Commercial warehouse spaces", "Industrial facilities"],
    neighborhoods: "Aliante, Las Vegas Motor Speedway area, North Valley, Commercial corridors",
  },
  {
    name: "Boulder City",
    slug: "boulder-city",
    description:
      "Historic small-town character near Hoover Dam and Lake Mead. We serve residential and commercial properties throughout Boulder City.",
    highlights: ["Hoover Dam area", "Lake Mead proximity", "Historic properties", "Small-town community"],
    neighborhoods: "Historic downtown, Lakeview, Boulder Ridge, all Boulder City residential",
  },
  {
    name: "Pahrump",
    slug: "pahrump",
    description:
      "Growing retirement and relocation community 60 miles from Vegas. Professional coatings for homes and businesses in Nye County.",
    highlights: ["Nye County", "Retirement community", "Residential properties", "Growing commercial"],
    neighborhoods: "Downtown Pahrump, residential areas, commercial properties, all Nye County",
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proshieldepoxy.com/" },
              { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://proshieldepoxy.com/service-areas" }
            ]
          })
        }}
      />

      <PageHero
        badge="Service Areas"
        title="Epoxy Flooring &"
        highlight="Coatings Across Southern Nevada"
        subtitle="ProShield serves Henderson, Summerlin, North Las Vegas, Boulder City, and Pahrump. Professional-grade systems for residential, commercial, and specialized applications throughout the Las Vegas Valley."
      />

      <Breadcrumbs items={[{ label: "Service Areas" }]} />

      {/* Service Areas Grid */}
      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Where We Serve
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Each community has unique needs. We customize our approach to match local climate, architectural styles, and lifestyle requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-accent transition-colors">
                      {area.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {area.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2">
                        <span className="text-accent font-bold text-sm mt-0.5">✓</span>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Local Expertise
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-6">
              Why Local Service Matters
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Every area in Southern Nevada faces different challenges. Desert heat, intense UV exposure, and mineral-rich groundwater require systems tailored to local conditions. That's why we don't just apply a generic coating—we engineer solutions specific to your community.
              </p>

              <p>
                Henderson's growing tech and luxury residential market demands premium finishes. Summerlin's architectural precision calls for exacting workmanship. North Las Vegas' industrial operations need chemical-resistant, commercial-grade systems. Boulder City's historic character and Pahrump's rural growth require attention to local building practices and customer preferences.
              </p>

              <p>
                We're based here, we know these communities, and we show up when we say we will. You get a local contractor who understands your neighborhood and stands behind every floor we install.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-3">
                5+
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                Service Areas
              </h3>
              <p className="text-gray-600 text-sm">
                Covering Southern Nevada from Boulder City to Pahrump
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-3">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                Same-Day Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Call 702-728-5484 for a free quote in your area
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-3">
                24hr
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                Fast Installation
              </h3>
              <p className="text-gray-600 text-sm">
                Many systems completed in 1 day, subject to conditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start */}
      <section className="section-white py-14 sm:py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 sm:p-10 lg:p-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Find your service area above to explore location-specific options, FAQs, and neighborhoods we serve. Or call us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17027285484"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call 702-728-5484
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent text-accent font-medium hover:bg-accent/5 transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

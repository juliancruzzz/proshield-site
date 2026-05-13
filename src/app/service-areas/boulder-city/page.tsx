import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import {
  Sparkles,
  Shield,
  Clock,
  MapPin,
  Zap,
  Home,
  Mountain,
  Heart
} from "lucide-react"

export const metadata: Metadata = {
  title: "Epoxy Flooring Boulder City NV | Garage & Driveway Coatings | ProShield",
  description:
    "Boulder City epoxy flooring & coatings — garage floors, VubaStone driveways, metallic epoxy & concrete polishing. Serving Hoover Dam & Lake Mead areas. Free estimates: 702-728-5484.",
  alternates: {
    canonical: "/service-areas/boulder-city",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/service-areas/boulder-city",
    images: ["/og-image.webp"],
  },
}

const boulderCityFaqs = [
  {
    q: "Does ProShield serve Boulder City?",
    a: "Yes, we serve all of Boulder City, including historic downtown, residential neighborhoods, and surrounding areas. We understand the unique character of this small-town community and are committed to providing the same professional service we offer throughout the Las Vegas Valley.",
  },
  {
    q: "Why would a Boulder City homeowner choose professional epoxy?",
    a: "Boulder City's proximity to Hoover Dam and Lake Mead means unique environmental factors—moisture, mineral-rich groundwater, and temperature fluctuations from the dam's effects. Professional epoxy protects concrete from these specific conditions and the desert climate.",
  },
  {
    q: "What services do you offer in Boulder City?",
    a: "We offer ProFlake garage coatings, metallic epoxy showroom finishes, VubaStone resin-bound driveways, concrete polishing, commercial flooring for local businesses, cool deck and pool deck coatings, and paver sealing.",
  },
  {
    q: "How do you handle historic properties in Boulder City?",
    a: "Historic properties require care and respect. We'll work with you to understand the character of your home, recommend finishes that complement the original architecture, and ensure our work respects the property's historical significance.",
  },
  {
    q: "What's the timeline for a Boulder City project?",
    a: "Most ProFlake residential systems are completed in 1 day, subject to substrate condition, weather, and repair requirements. Metallic epoxy typically takes 2–3 days. We'll provide a specific timeline during your free consultation and work with your schedule.",
  },
  {
    q: "Are you licensed to work in Boulder City?",
    a: "Yes. ProShield is licensed by the State of Nevada (License #0094652, C-5 Concrete Contracting classification). We're fully bonded and insured, and we carry a limited lifetime warranty on qualifying residential systems.",
  },
]

export default function BoulderCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": boulderCityFaqs.map(faq => ({
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
        badge="Boulder City, NV"
        title="Epoxy Flooring &"
        highlight="Coatings in Boulder City"
        subtitle="Professional-grade epoxy and resin systems for historic and residential Boulder City properties. Near Hoover Dam and Lake Mead, serving this unique small-town community with care and expertise."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Boulder City" }]} />

      {/* About Boulder City */}
      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              A Unique Community
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Boulder City: Character & Heritage
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Boulder City is a unique small-town community with genuine character. Founded as a New Deal project during the construction of Hoover Dam, Boulder City has maintained its distinctive heritage while embracing modern amenities. We're proud to serve this community with the same professionalism and care we provide throughout Southern Nevada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Historic Downtown",
              "Lakeview Properties",
              "Boulder Ridge",
              "Residential Neighborhoods",
              "Local Commercial",
              "Historic Homes",
              "Lakefront Properties",
              "Community Centers",
              "All Boulder City Areas",
            ].map((area) => (
              <div key={area} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="font-medium text-gray-900">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Flooring Solutions for Boulder City
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From residential garages to historic property restoration, we provide professional epoxy coatings customized for Boulder City's unique environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ProFlake */}
            <Link
              href="/areas/garage"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Home className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                ProFlake Garage Floors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Decorative, durable residential garage coatings. 150+ color options to match your home's style. Often completed in 1 day with limited lifetime warranty.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Metallic Epoxy */}
            <Link
              href="/areas/garage"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Metallic Epoxy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Premium showroom finish with flowing pearlescent depth. Creates stunning visual impact for showcase garages and luxury homes.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Premium Option <span>→</span>
              </span>
            </Link>

            {/* VubaStone Driveways */}
            <Link
              href="/areas/exterior"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Mountain className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                VubaStone Resin Driveways
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Beautiful resin-bound stone driveways with natural stone appearance. Perfect for curb appeal and durability.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Driveway System <span>→</span>
              </span>
            </Link>

            {/* Concrete Polishing */}
            <Link
              href="/areas/commercial"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Concrete Polishing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Polished concrete for retail, offices, and community spaces in Boulder City. Modern, professional appearance.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Commercial <span>→</span>
              </span>
            </Link>

            {/* Cool Deck */}
            <Link
              href="/areas/exterior"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Cool Deck & Pool Decks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Reflective, UV-resistant coatings for pool and patio areas. Keep surfaces cooler and safer for family enjoyment.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Outdoor <span>→</span>
              </span>
            </Link>

            {/* Paver Sealing */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Paver Sealing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Protect natural stone pavers from dust, UV fading, and staining. Maintains beauty and longevity of your outdoor spaces.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Maintenance <span>→</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Boulder City Environment */}
      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Environmental Factors
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Unique Boulder City Environmental Conditions
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Boulder City's location near Hoover Dam and Lake Mead creates unique environmental factors that affect concrete. Professional epoxy coatings protect against these specific challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Moisture & Mineral-Rich Groundwater
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Boulder City's proximity to Lake Mead and the Colorado River means mineral-rich groundwater can wick up through concrete, causing efflorescence (white salt deposits) and surface deterioration. Professional epoxy seals out this moisture and prevents damage.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Seals out groundwater</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Prevents salt deposits</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Protects long-term</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Temperature Fluctuations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Hoover Dam's water management creates temperature variations that affect concrete expansion and contraction. Professional coatings prevent thermal cracking and spalling that bare concrete experiences.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Prevents thermal cracking</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Handles temperature swings</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Long-lasting protection</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Desert Climate & UV Exposure
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Boulder City still experiences desert heat and intense UV radiation. Professional epoxy resists UV yellowing and fading, keeping your floors looking great for years.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">UV-resistant topcoats</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Prevents fading</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Maintains color integrity</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Historic Property Preservation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Boulder City's historic properties deserve care and respect. We work with property owners to recommend finishes that preserve character while providing modern protection.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Respect historic character</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Period-appropriate finishes</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Preservation expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why ProShield */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Why Boulder City Homeowners Trust ProShield
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Quick, Professional Service
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most systems completed in 1 day. You're back to normal use fast without weeks of disruption.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Warranty Backed
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Limited lifetime warranty on qualifying residential systems. Real protection for your investment.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Mountain className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Local Commitment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're proud to serve Boulder City. We show up on time, do the work right, and genuinely care about your satisfaction.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Zap className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nevada License #0094652. Fully bonded and insured for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Boulder City Service Area FAQ
            </h2>
          </div>
          <FaqAccordion faqs={boulderCityFaqs} />
        </div>
      </section>

      {/* Internal links */}
      <section className="section-gray py-8 sm:py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            See our full{" "}
            <Link href="/services" className="text-accent hover:underline font-medium">flooring services</Link>{" "}
            available in Boulder City, or{" "}
            <Link href="/contact" className="text-accent hover:underline font-medium">get a free estimate</Link>{" "}
            for your project.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

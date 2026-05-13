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
  TrendingUp,
  Heart
} from "lucide-react"

export const metadata: Metadata = {
  title: "Epoxy Flooring Pahrump NV | ProShield Epoxy",
  description:
    "Professional epoxy flooring and coatings in Pahrump, NV. ProFlake, metallic epoxy, VubaStone driveways, concrete polishing. Serving Nye County from Las Vegas.",
  alternates: {
    canonical: "/service-areas/pahrump",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/service-areas/pahrump",
    images: ["/og-image.webp"],
  },
}

const pahrumpFaqs = [
  {
    q: "Does ProShield serve Pahrump?",
    a: "Yes, we serve all of Pahrump and Nye County. While Pahrump is about 60 miles from Las Vegas, we're committed to providing the same professional service and quality we deliver throughout Southern Nevada. We're one of the few local contractors willing to serve the entire region.",
  },
  {
    q: "Why should Pahrump homeowners choose professional epoxy?",
    a: "Pahrump experiences extreme desert conditions—intense heat, low humidity, intense UV exposure, and mineral-rich soil. Professional epoxy protects concrete from UV damage, heat deterioration, and the unique environmental challenges of rural Nevada. It's an investment in your property's long-term health.",
  },
  {
    q: "What services do you offer in Pahrump?",
    a: "We offer ProFlake garage coatings, metallic epoxy showroom finishes, VubaStone resin-bound driveways, concrete polishing, commercial flooring for local businesses, cool deck and pool deck coatings, and paver sealing.",
  },
  {
    q: "How do you handle projects in remote areas?",
    a: "We treat Pahrump and Nye County projects with the same professionalism and attention as any Las Vegas Valley project. We provide detailed consultations, clear timelines, and professional installation. We may request a travel fee for projects 60+ miles from Las Vegas, which we'll discuss upfront.",
  },
  {
    q: "Is Pahrump a good market for property improvements?",
    a: "Absolutely. Pahrump is a growing retirement and relocation community. Property improvements like professional epoxy flooring increase home value and appeal to buyers. It's a smart investment for current enjoyment and future resale.",
  },
  {
    q: "What's the timeline for a Pahrump project?",
    a: "Most ProFlake residential systems are completed in 1 day, subject to substrate condition, weather, and repair requirements. Metallic epoxy typically takes 2–3 days. We'll provide a detailed timeline during your free consultation and can coordinate scheduling to work with your schedule.",
  },
]

export default function PahrumpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": pahrumpFaqs.map(faq => ({
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
        badge="Pahrump, NV"
        title="Epoxy Flooring &"
        highlight="Coatings in Pahrump"
        subtitle="Professional epoxy and resin systems for Pahrump and all of Nye County. Premium coatings for growing residential and commercial properties 60 miles south of Las Vegas."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Pahrump" }]} />

      {/* About Pahrump */}
      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Growing Community
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Pahrump & Nye County: A Growing Community
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Pahrump is a thriving rural community about 60 miles south of Las Vegas. Known for its retirement community appeal, natural beauty, and growing commercial development, Pahrump is attracting families, retirees, and entrepreneurs seeking a quieter lifestyle while still being within reach of Las Vegas amenities. ProShield is proud to serve this dynamic community with professional-grade epoxy coatings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Downtown Pahrump",
              "Residential Communities",
              "Nye County",
              "Retirement Communities",
              "Commercial Properties",
              "Growing Neighborhoods",
              "Rural Residential",
              "Local Businesses",
              "All Pahrump Areas",
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
              Flooring Solutions for Pahrump Properties
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you're a homeowner looking to upgrade your garage or a business owner seeking commercial solutions, we provide professional epoxy coatings customized for Pahrump's unique environment.
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
                Decorative, durable residential garage coatings with 150+ color blends. Perfect for Pahrump homes. Often completed in 1 day with limited lifetime warranty.
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
                Premium showroom finish with flowing pearlescent depth. Creates stunning visual impact for showcase garages and premium homes.
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
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                VubaStone Resin Driveways
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Beautiful resin-bound stone driveways with natural stone appearance. Enhances curb appeal and property value.
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
                Polished concrete for retail, offices, and commercial spaces in Pahrump. Professional, modern appearance.
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
                Reflective, UV-resistant coatings for pool and patio areas. Essential for Pahrump's extreme desert heat.
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
                Protect natural stone pavers from dust, UV fading, and staining. Maintains beauty for years.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Maintenance <span>→</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pahrump Environment */}
      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Desert Conditions
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Why Pahrump Concrete Needs Professional Protection
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Pahrump's extreme rural desert environment presents unique challenges to unprotected concrete. Professional epoxy and polyaspartic coatings are essential investments in your property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Extreme Heat & UV Damage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Pahrump experiences even more intense heat and UV exposure than Las Vegas. Unprotected concrete expands, cracks, and spalls rapidly. Professional coatings reflect UV light and protect against thermal damage.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Prevents UV yellowing</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Reduces surface heat</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Prevents thermal cracking</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Dust & Mineral-Rich Soil
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Pahrump's rural location means heavy dust storms and mineral-rich soil. Unprotected concrete absorbs dust and minerals, leading to discoloration and damage. Professional sealers prevent this infiltration.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Seals out dust</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Blocks minerals</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Easy to clean</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Low Humidity & Thermal Shock
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Pahrump's low humidity and extreme temperature swings create thermal shock conditions. Professional coatings prevent the concrete cracking and spalling that results from these rapid temperature changes.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Handles thermal shock</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Prevents stress cracking</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Long-term durability</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Property Value & Curb Appeal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Pahrump is a growing community with increasing property values. A professionally coated garage, driveway, or commercial space significantly increases curb appeal and resale value.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Enhances curb appeal</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Increases property value</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Smart investment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ProShield */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Why Pahrump Residents Choose ProShield
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Willing to Travel
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're one of the few contractors willing to serve Pahrump and Nye County. We believe in expanding our service area to help growing communities.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Warranty Protection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Limited lifetime warranty on qualifying residential systems, backed by professional craftsmanship and genuine commitment.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <TrendingUp className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Professional Quality
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We bring Las Vegas-quality workmanship and materials to Pahrump. Same professional standards, regardless of distance.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Heart className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Local Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We treat Pahrump with the same respect and commitment we give every market. You're not an afterthought—you're valued.
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
              Pahrump Service Area FAQ
            </h2>
          </div>
          <FaqAccordion faqs={pahrumpFaqs} />
        </div>
      </section>

      {/* Internal links */}
      <section className="section-gray py-8 sm:py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            Browse our full{" "}
            <Link href="/services" className="text-accent hover:underline font-medium">flooring services</Link>{" "}
            available in Pahrump, or{" "}
            <Link href="/contact" className="text-accent hover:underline font-medium">get your free estimate</Link>{" "}
            today.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

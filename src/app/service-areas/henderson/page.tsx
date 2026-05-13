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
  Package,
  Warehouse,
  Home
} from "lucide-react"

export const metadata: Metadata = {
  title: "Epoxy Flooring Henderson NV | Garage, Commercial & Pool Deck | ProShield",
  description:
    "Henderson's top-rated epoxy flooring company. Garage coatings, metallic epoxy, pool decks & hangar floors in Green Valley, Anthem & Lake Las Vegas. Free estimates: 702-728-5484.",
  alternates: {
    canonical: "/service-areas/henderson",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/service-areas/henderson",
    images: ["/og-image.webp"],
  },
}

const hendersonFaqs = [
  {
    q: "Does ProShield serve all of Henderson?",
    a: "Yes, we serve the entire Henderson area including Green Valley, Anthem, MacDonald Highlands, Lake Las Vegas, Inspirada, and all neighborhoods throughout the city. We also specialize in airplane hangar coatings at Henderson Executive Airport.",
  },
  {
    q: "Why does Henderson need professional epoxy coatings?",
    a: "Henderson experiences extreme summer heat (115°F+), intense UV exposure, and occasional thermal shock from temperature swings. Professional epoxy and polyaspartic coatings protect concrete from UV yellowing, heat damage, moisture intrusion, and the harsh desert climate. Without proper coatings, concrete cracks, spalls, and deteriorates rapidly.",
  },
  {
    q: "What services do you offer in Henderson?",
    a: "We offer ProFlake garage coatings, metallic epoxy showroom finishes, VubaStone resin-bound driveways, concrete polishing, commercial flooring systems, cool deck and pool deck coatings, paver sealing, and specialized airplane hangar coatings at Henderson Executive Airport.",
  },
  {
    q: "How quickly can you complete a Henderson project?",
    a: "Many ProFlake residential garage systems are completed in 1 day, subject to substrate condition, weather, and repair requirements. Metallic epoxy typically takes 2–3 days due to multi-layer application and curing. Commercial projects vary by scope. We'll provide a timeline during your free consultation.",
  },
  {
    q: "Are you licensed and bonded in Henderson?",
    a: "Yes. ProShield is licensed by the State of Nevada (License #0094652, C-5 Concrete Contracting classification). We're bonded, insured, and carry a limited lifetime warranty on qualifying residential systems.",
  },
  {
    q: "Can you serve Green Valley, Anthem, and Lake Las Vegas?",
    a: "Absolutely. We regularly serve all these Henderson neighborhoods. These communities demand premium finishes, and we specialize in high-end residential coatings that match the quality of those neighborhoods.",
  },
]

export default function HendersonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": hendersonFaqs.map(faq => ({
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
        badge="Henderson, NV"
        title="Epoxy Flooring &"
        highlight="Coatings in Henderson"
        subtitle="Professional-grade epoxy and polyaspartic systems for residential, commercial, and specialized applications throughout Henderson, including Green Valley, Anthem, MacDonald Highlands, and Lake Las Vegas."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Henderson" }]} />

      {/* Neighborhoods Served */}
      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Neighborhoods We Serve
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Henderson & Surrounding Communities
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From the premium neighborhoods of The Ridges to the family-friendly communities of Anthem, ProShield serves all of Henderson's diverse residential and commercial properties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Green Valley",
              "Anthem",
              "MacDonald Highlands",
              "Lake Las Vegas",
              "Inspirada",
              "Meridian",
              "Seven Hills",
              "Summerlin South (East)",
              "Downtown Henderson",
            ].map((neighborhood) => (
              <div key={neighborhood} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="font-medium text-gray-900">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Services for Every Space
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              ProShield offers comprehensive coating solutions for residential, commercial, and specialized applications throughout Henderson.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ProFlake Garage */}
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
                Decorative, durable residential garage coatings with 150+ color options. Often completed in 1 day with a limited lifetime warranty.
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
                Showroom-quality pearlescent finishes with flowing depth. Premium option for showcase garages in luxury neighborhoods like Anthem and MacDonald Highlands.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* VubaStone Driveways */}
            <Link
              href="/areas/exterior"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Package className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                VubaStone Resin Driveways
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Decorative resin-bound stone driveways and patios. Perfect for curb appeal in Green Valley, Lake Las Vegas, and other premium communities.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Concrete Polishing */}
            <Link
              href="/areas/commercial"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Concrete Polishing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Polished concrete flooring for retail, offices, and showrooms. High-tech and modern aesthetic for Henderson's commercial districts.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Cool Deck */}
            <Link
              href="/areas/exterior"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Cool Deck & Pool Decks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Reflective, UV-resistant coatings for pool decks and patios. Keep surfaces cooler and safer in Henderson's extreme desert heat.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Airplane Hangar */}
            <Link
              href="/airplane-hangar"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Warehouse className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Airplane Hangar Coatings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Chemical-resistant, professional-grade systems for Henderson Executive Airport hangars. Industrial durability and performance.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Henderson Needs Professional Coatings */}
      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Desert Climate Protection
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Why Henderson Concrete Needs Protection
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Henderson's extreme desert climate poses unique challenges to unprotected concrete. Professional epoxy and polyaspartic coatings are essential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Extreme Heat & UV Damage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Henderson summers regularly exceed 115°F with intense UV radiation. Unprotected concrete absorbs this heat, expanding and contracting, which causes cracks and spalling. Professional coatings reflect UV light, prevent thermal damage, and keep your floors protected year-round.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Prevents UV yellowing and fading</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Reduces surface temperature</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Eliminates thermal shock cracking</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Moisture & Efflorescence
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Concrete wicks moisture from groundwater and subsurface sources. In Henderson's dry climate, this often leads to efflorescence—white salt deposits that degrade surface integrity. Professional sealers prevent moisture intrusion and stop this damaging process.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Seals out groundwater and salts</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Eliminates white salt deposits</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Extends concrete lifespan</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Staining & Chemical Damage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Desert dust, pollen, automotive fluids, and harsh pool chemicals stain and damage bare concrete. Professional epoxy systems are resistant to tire marks, oil stains, pool chlorine, and cleaning chemicals.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Resists tire marks and oil stains</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Handles pool chemicals safely</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Easy to clean and maintain</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Long-Term Durability
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Properly coated concrete lasts decades in Henderson's climate. Unprotected concrete deteriorates rapidly. Professional-grade epoxy and polyaspartic systems withstand extreme conditions and come with real warranties.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Limited lifetime warranty on residential</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Proven performance in desert climates</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Low maintenance for 10+ years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Why Henderson Homeowners Trust ProShield
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Local Expertise, Professional Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Fast Turnaround
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Many ProFlake systems completed in 1 day. You're back to normal use fast, without weeks of disruption.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Warranty Backed
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Limited lifetime warranty on qualifying residential systems, backed by our professional workmanship.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <MapPin className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Local Business
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Founded by Julian Cruz. We're your neighbor. We show up on time and stand behind every floor.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Zap className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nevada License #0094652, C-5 Concrete Contracting. Fully bonded and insured for your protection.
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
              Henderson Service Area FAQ
            </h2>
          </div>
          <FaqAccordion faqs={hendersonFaqs} />
        </div>
      </section>

      {/* Internal links */}
      <section className="section-gray py-8 sm:py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            View our full{" "}
            <Link href="/services" className="text-accent hover:underline font-medium">list of flooring services</Link>{" "}
            available in Henderson, or{" "}
            <Link href="/contact" className="text-accent hover:underline font-medium">request your free estimate</Link>{" "}
            today.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

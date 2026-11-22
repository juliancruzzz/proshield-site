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
    a: "Yes. I travel to Pahrump and other parts of Nye County.",
  },
  {
    q: "Can the same coating go inside and outside?",
    a: "For Pahrump garages and outdoor areas, the right finish depends on sun exposure, slab condition and how the space is used. Outdoor systems need a suitable UV-resistant finish; coatings do not prevent underlying concrete from moving or cracking.",
  },
  {
    q: "What services do you offer in Pahrump?",
    a: "We offer ProFlake garage coatings, metallic epoxy showroom finishes, VubaStone resin-bound driveways, concrete polishing, commercial flooring for local businesses, cool deck and pool deck coatings, and paver sealing.",
  },
  {
    q: "How do you handle projects in remote areas?",
    a: "For projects 60 miles or more from Las Vegas, a travel fee may apply. I’ll discuss that with you up front.",
  },
  {
    q: "Is Pahrump a good market for property improvements?",
    a: "A finished garage or patio can improve appearance and make cleaning easier. Choose a finish for how you use the space. A coating does not guarantee a higher resale value.",
  },
  {
    q: "What's the timeline for a Pahrump project?",
    a: "Timelines depend on substrate condition, weather, and how much repair the slab needs. Metallic epoxy typically takes 2–3 days. We'll provide a detailed timeline during your free consultation and can coordinate scheduling to work with your schedule.",
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
        subtitle="I travel to Pahrump for garage floors, pool decks, driveways and commercial floors. I’ll confirm any travel charge when I quote the job."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Pahrump" }]} />

      {/* About Pahrump */}
      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Service area
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Pahrump & Nye County: A Service area
            </h2>

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

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ProFlake */}
            <Link
              href="/proflake"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Home className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                ProFlake Garage Floors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Choose from more than 150 flake blends, from light mixes to charcoal.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Metallic Epoxy */}
            <Link
              href="/metallic-epoxy"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Metallic Epoxy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Metallic epoxy has a flowing pattern that changes with the light.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Premium Option <span>→</span>
              </span>
            </Link>

            {/* VubaStone Driveways */}
            <Link
              href="/vubastone"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                VubaStone Resin Driveways
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Resin-bound stone driveways with a natural stone appearance and a choice of decorative blends.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Driveway System <span>→</span>
              </span>
            </Link>

            {/* Concrete Polishing */}
            <Link
              href="/concrete-polishing"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Concrete Polishing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Polishing keeps the original concrete visible in a shop or office.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Commercial <span>→</span>
              </span>
            </Link>

            {/* Cool Deck */}
            <Link
              href="/cool-deck"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Cool Deck & Pool Decks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A textured outdoor coating can give an existing pool deck a new finish.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Outdoor <span>→</span>
              </span>
            </Link>

            {/* Paver Sealing */}
            <Link href="/paver-sealing" className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Paver Sealing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A sealer helps keep spills from soaking into the pavers.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Maintenance <span>→</span>
              </span>
            </Link>
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

          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Extreme Heat & UV Damage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Pahrump outdoor surfaces face desert sun and heat. UV resistance and surface temperature depend on the finish and color. A coating does not stop movement or cracking in the slab.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">UV-resistant outdoor finishes</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Cool-deck options for exposed areas</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Slab repairs assessed before coating</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Dust & Surface Care
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Dust collects on outdoor surfaces. A suitable finish and routine cleaning can help keep the surface easier to maintain. Cleaning products and care depend on the selected system.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Routine dust removal</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Finish-specific cleaning guidance</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Easy to clean</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Concrete Movement & Repairs
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Concrete can move as temperatures change. Existing cracks and joints need assessment before coating, and a finished surface can reflect later movement. The system and repair plan depend on the condition of the slab.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Existing joints assessed</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Crack repairs planned for the slab</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Long-term durability</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Appearance & Curb Appeal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A finished garage, driveway or commercial floor can improve appearance and make cleaning easier. The right system depends on use and slab condition; a coating does not guarantee a higher resale value.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Enhances curb appeal</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Easier routine cleaning</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Finish selected for your space</span>
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
                I travel from Las Vegas to Pahrump and across Nye County.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Warranty Protection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. Moisture-related failures are excluded.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <TrendingUp className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Checking the slab
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I check the existing slab before quoting preparation and repairs.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Heart className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Using the floor afterward
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If your floor needs time to cure, I’ll tell you when you can walk or park on it.
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

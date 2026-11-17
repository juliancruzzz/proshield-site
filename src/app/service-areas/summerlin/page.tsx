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
  Palette,
  Home,
  Zap,
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "Epoxy Flooring Summerlin NV | ProShield Epoxy",
  description:
    "Premium epoxy flooring and coatings in Summerlin, NV. Metallic epoxy, ProFlake, VubaStone driveways, concrete polishing. The Ridges, Summerlin South, Downtown Summerlin.",
  alternates: {
    canonical: "/service-areas/summerlin",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/service-areas/summerlin",
    images: ["/og-image.webp"],
  },
}

const summerlinFaqs = [
  {
    q: "Does ProShield serve all of Summerlin?",
    a: "Yes, we serve all Summerlin neighborhoods including The Ridges, Summerlin South, Downtown Summerlin, Centennial, Canyon Gate, and all surrounding areas. Summerlin's architectural precision and luxury properties demand expert installation—that's our specialty.",
  },
  {
    q: "What epoxy finishes work best for Summerlin luxury homes?",
    a: "Metallic epoxy offers a decorative finish for Summerlin interiors. The flowing pearlescent finish complements modern architecture and creates stunning visual depth. For a more understated look, ProFlake with premium color blends offers timeless elegance. Limited lifetime warranty coverage applies to qualifying residential systems; moisture-related failures are excluded.",
  },
  {
    q: "How do you match epoxy to Summerlin architecture?",
    a: "We can discuss color samples and finish options during your consultation. The right choice depends on your home's style, the condition of the slab and how the space is used.",
  },
  {
    q: "Why should I choose professional coatings for my Summerlin home?",
    a: "A suitable coating can improve the appearance and cleanability of a garage or patio. The system depends on sun exposure, slab moisture and use. Coatings do not prevent underlying concrete movement or replace moisture treatment where required.",
  },
  {
    q: "Can you handle specialty projects like commercial spaces in Downtown Summerlin?",
    a: "Absolutely. We serve both residential and commercial properties throughout Summerlin, including retail, office, and restaurant spaces in Downtown Summerlin. Our concrete polishing and commercial-grade epoxy systems are perfect for retail environments.",
  },
  {
    q: "How long does installation take in Summerlin?",
    a: "Timelines depend on substrate condition, weather, and how much repair the slab needs. Metallic epoxy typically takes 2–3 days due to multi-layer application and curing. We work around your schedule and minimize disruption to your luxury home.",
  },
]

export default function SummerlinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": summerlinFaqs.map(faq => ({
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
        badge="Summerlin, NV"
        title="Premium Epoxy Flooring &"
        highlight="Coatings in Summerlin"
        subtitle="High-end residential and commercial coatings for Summerlin's luxury properties. Metallic epoxy, ProFlake, VubaStone resin driveways, and concrete polishing for homes and businesses."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Summerlin" }]} />

      {/* Neighborhoods Served */}
      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Premium Communities Served
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Summerlin & The Ridges
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              ProShield specializes in luxury residential and commercial properties throughout Summerlin. From The Ridges to Summerlin South, we provide premium coatings that match the architectural excellence of these communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "The Ridges",
              "Summerlin South",
              "Downtown Summerlin",
              "Centennial",
              "Canyon Gate",
              "Summerlin Parkway",
              "Red Rock Proximity Areas",
              "Championship Golf Communities",
              "Desert Foothills",
            ].map((neighborhood) => (
              <div key={neighborhood} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="font-medium text-gray-900">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Premium Finishes for Luxury Properties
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Summerlin demands excellence. Our high-end coating systems deliver showroom-quality results that complement your home's architecture and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Premium showroom finish with flowing pearlescent depth. Each installation is one-of-a-kind. Perfect for Summerlin's architectural excellence and modern luxury homes.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Premium Finish <span>→</span>
              </span>
            </Link>

            {/* ProFlake */}
            <Link
              href="/proflake"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                ProFlake Garage Floors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Elegant decorative chip system with 150+ premium color blends. Timeless aesthetic that enhances any Summerlin home style.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* VubaStone Driveways */}
            <Link
              href="/vubastone"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                VubaStone Resin Driveways
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Luxurious resin-bound stone driveways. Decorative, durable, and stunning curb appeal for Summerlin's premium properties.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Premium Driveway <span>→</span>
              </span>
            </Link>

            {/* Concrete Polishing */}
            <Link
              href="/concrete-polishing"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Concrete Polishing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Polished concrete for retail, offices, and commercial spaces in Downtown Summerlin. High-tech, modern aesthetic.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Cool Deck */}
            <Link
              href="/cool-deck"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Cool Deck & Pool Decks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Reflective UV-resistant coatings for pool decks and outdoor entertaining spaces. Keep surfaces cooler and safer.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Paver Sealing */}
            <Link href="/paver-sealing" className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Home className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Paver Sealing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Protect natural stone pavers from desert dust, UV fading, and staining. Maintains color and enhances appearance for years.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Maintenance <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Summerlin Needs Professional Coatings */}
      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Investment Protection
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Protect Your Summerlin Property Investment
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A coating can improve the appearance and cleanability of your floor. Preparation, the selected system and ongoing care determine how it performs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Appearance & Surface Care
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A finished garage or driveway can improve curb appeal and make routine cleaning easier. Choose a system for the intended use; a coating does not guarantee a higher resale value or prevent moisture-related failures.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Enhanced curb appeal</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Showroom-quality presentation</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Finish selected for your home</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Architectural Harmony
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Summerlin homes demand precision and quality. Our color consultations and design expertise ensure your coating matches your home's architectural style and personal aesthetic perfectly.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Custom color matching</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Color samples for comparison</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Professional design consultation</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Desert Climate Resilience
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Summerlin outdoor surfaces face desert sun and heat. UV resistance depends on the selected system and topcoat; choose an outdoor finish for exposed areas. Coatings do not stop slab movement or thermal cracking.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">UV-resistant topcoats</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Heat protection</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Care suited to the selected finish</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Minimal Disruption
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                For Summerlin luxury homes, we understand the importance of minimal disruption. Most projects are completed in 1–3 days with professional, considerate service that respects your lifestyle.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Quick turnaround (1-3 days)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Professional crew</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Flexible scheduling</span>
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
              Why Summerlin Homeowners Choose ProShield
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Award className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Premium Quality Standards
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use professional-grade materials and techniques that match Summerlin's high standards. No shortcuts, no compromises.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Efficient Project Management
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We respect your time. Most projects completed in 1–3 days with professional scheduling and minimal disruption.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Warranty Protection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Limited lifetime warranty on qualifying residential systems, backed by professional craftsmanship and genuine care.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Sparkles className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Design Expertise
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Color consultation and finish options to help you choose a system for your home.
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
              Summerlin Service Area FAQ
            </h2>
          </div>
          <FaqAccordion faqs={summerlinFaqs} />
        </div>
      </section>

      {/* Internal links */}
      <section className="section-gray py-8 sm:py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            View our complete{" "}
            <Link href="/services" className="text-accent hover:underline font-medium">flooring services</Link>{" "}
            available in Summerlin, or{" "}
            <Link href="/contact" className="text-accent hover:underline font-medium">schedule your free estimate</Link>.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

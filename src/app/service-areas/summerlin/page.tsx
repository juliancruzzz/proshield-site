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
    a: "Metallic epoxy is our most popular choice for Summerlin's high-end residential properties. The flowing pearlescent finish complements modern architecture and creates stunning visual depth. For a more understated look, ProFlake with premium color blends offers timeless elegance. Both come with limited lifetime warranty coverage.",
  },
  {
    q: "How do you match epoxy to Summerlin architecture?",
    a: "We provide color samples, digital mockups, and install-site consultations to ensure your coating matches your home's aesthetic. Whether your style is contemporary minimalist, Mediterranean villa, or traditional Summerlin luxury, we'll find the right system and finish.",
  },
  {
    q: "Why should I choose professional coatings for my Summerlin home?",
    a: "Summerlin homes represent significant investments. Professional epoxy protects that investment by preventing UV damage, heat deterioration, moisture intrusion, and staining. It also adds real curb appeal and can increase property value. A properly coated floor is a showroom-quality selling point.",
  },
  {
    q: "Can you handle specialty projects like commercial spaces in Downtown Summerlin?",
    a: "Absolutely. We serve both residential and commercial properties throughout Summerlin, including retail, office, and restaurant spaces in Downtown Summerlin. Our concrete polishing and commercial-grade epoxy systems are perfect for retail environments.",
  },
  {
    q: "How long does installation take in Summerlin?",
    a: "Most residential ProFlake garage systems are completed in 1 day. Metallic epoxy typically takes 2–3 days due to multi-layer application and curing. We work around your schedule and minimize disruption to your luxury home.",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proshieldepoxy.com/" },
              { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://proshieldepoxy.com/service-areas" },
              { "@type": "ListItem", "position": 3, "name": "Summerlin", "item": "https://proshieldepoxy.com/service-areas/summerlin" }
            ]
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
                Premium showroom finish with flowing pearlescent depth. Each installation is one-of-a-kind. Perfect for Summerlin's architectural excellence and modern luxury homes.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Premium Finish <span>→</span>
              </span>
            </Link>

            {/* ProFlake */}
            <Link
              href="/areas/garage"
              className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                ProFlake Garage Floors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Elegant decorative chip system with 150+ premium color blends. Timeless aesthetic that enhances any Summerlin home style. Often completed in 1 day.
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
                Polished concrete for retail, offices, and commercial spaces in Downtown Summerlin. High-tech, modern aesthetic.
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
                Reflective UV-resistant coatings for pool decks and outdoor entertaining spaces. Keep surfaces cooler and safer.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
              </span>
            </Link>

            {/* Paver Sealing */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-accent/50 transition-all">
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
            </div>
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
              Summerlin properties represent significant investments in luxury and lifestyle. Professional epoxy coatings protect and enhance that investment for decades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Preserve Property Value
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Professional coatings protect concrete from UV damage, heat deterioration, and moisture intrusion. A well-maintained, beautifully coated garage or driveway increases property value and appeal to buyers.
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
                  <span className="text-gray-700">Attracts discerning buyers</span>
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
                  <span className="text-gray-700">Digital mockups for visualization</span>
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
                Summerlin's proximity to Red Rock Canyon and open desert means intense UV exposure and heat. Professional coatings resist fading, yellowing, and thermal damage that unprotected concrete can't withstand.
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
                  <span className="text-gray-700">10+ years durability</span>
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
                Professional color consultation, digital mockups, and design guidance to ensure perfect aesthetic match for your home.
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

      <CtaSection />
    </>
  )
}

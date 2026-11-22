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
    a: "Yes. I work throughout Summerlin, including The Ridges, Summerlin South and Downtown Summerlin.",
  },
  {
    q: "What is the difference between metallic and flake?",
    a: "Metallic epoxy has a swirled, reflective finish. Flake gives a more even, speckled look. Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty that excludes moisture-related failures.",
  },
  {
    q: "Can I see colors before choosing?",
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
    a: "Timelines depend on substrate condition, weather, and how much repair the slab needs. Metallic epoxy typically takes 2–3 days due to multi-layer application and curing. I’ll confirm when you can use the floor again.",
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
        subtitle="I coat garages, refinish pool decks and polish concrete in Summerlin. Choose a flake floor for a speckled look or metallic epoxy for a flowing pattern."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Summerlin" }]} />

      {/* Neighborhoods Served */}
      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Neighborhoods
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Summerlin & The Ridges
            </h2>

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
              Floor finishes
            </h2>

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
                Metallic pigments spread as the floor is poured, leaving a different pattern each time.
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
                Choose from more than 150 decorative flake blends.
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
                Stone mixed with clear resin gives a driveway a textured surface.
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
                Polishing brings out the natural variation in a shop or office floor.
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
                Choose a texture intended for wet pool decks and a color suited to the amount of sun.
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
                A sealer helps keep spills from soaking into the pavers.
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
              Choosing a finish
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
                Matching the color
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                I can show you samples next to your walls and trim so you can see the colors together.
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
                Outdoor surfaces
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
                I’ll tell you when I need the space clear and when you can use it again.
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
              Planning your project
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Award className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Checking the concrete
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Before coating, I check for moisture, cracks and old finishes.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Scheduling
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I’ll give you the installation schedule after I see the slab.
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

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
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
    a: "Yes. I work throughout Henderson, including Green Valley, Anthem, Inspirada and Lake Las Vegas.",
  },
  {
    q: "Can I use a garage coating on a patio?",
    a: "A patio gets direct sunlight and rain. I check the exposure and the slab before recommending an outdoor finish.",
  },
  {
    q: "What services do you offer in Henderson?",
    a: "We offer ProFlake garage coatings, metallic epoxy showroom finishes, VubaStone resin-bound driveways, concrete polishing, commercial flooring systems, cool deck and pool deck coatings, paver sealing, and specialized airplane hangar coatings at Henderson Executive Airport.",
  },
  {
    q: "How quickly can you complete a Henderson project?",
    a: "Timelines depend on substrate condition, weather, and how much repair the slab needs. Metallic epoxy typically takes 2–3 days due to multi-layer application and curing. Commercial projects vary by scope. We'll provide a timeline during your free consultation.",
  },
  {
    q: "Are you licensed and bonded in Henderson?",
    a: "Yes. ProShield is licensed by the State of Nevada (License #0094652, C-5 Concrete Contracting classification, limited to epoxy coatings and sealants only). We're bonded, insured, and carry a limited lifetime warranty on qualifying residential systems.",
  },
  {
    q: "Can you serve Green Valley, Anthem, and Lake Las Vegas?",
    a: "Yes. I work in all three neighborhoods.",
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
        subtitle="I coat garage floors, pool decks and hangar floors in Henderson. The Shoreline garage below shows how a light flake blend looks across a whole floor."
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
              "Whitney Ranch",
              "Downtown Henderson",
            ].map((neighborhood) => (
              <div key={neighborhood} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="font-medium text-gray-900">{neighborhood}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="font-heading font-semibold text-2xl text-gray-900">Henderson Garage Project</h3>
            <p className="mt-3 text-gray-600">A ProFlake garage floor in Henderson, with a closer look at the flake finish.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { src: "/images/service-areas/henderson/henderson-proflake-garage.jpg", alt: "ProFlake garage floor in Henderson" },
                { src: "/images/service-areas/henderson/henderson-proflake-flake-detail.jpg", alt: "Close-up of the flake finish on the Henderson garage floor" },
              ].map(photo => <div key={photo.src} className="relative aspect-square overflow-hidden rounded-xl border border-gray-200">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>)}
            </div>
            <Link href="/proflake" className="inline-block mt-5 text-accent-text font-medium underline">View the ProFlake garage system</Link>
            <Link href="/projects/shoreline-garage-henderson" className="block mt-4 text-accent-text font-medium underline">View the Henderson Garage Project</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Floors and outdoor finishes
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ProFlake Garage */}
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
                Choose from more than 150 flake blends for a speckled garage floor.
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
                Metallic pigments make swirls in the floor. Each pour has a different pattern.
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
                <Package className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                VubaStone Resin Driveways
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Natural stone mixed with resin gives driveways and patios a textured finish.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View System <span>→</span>
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
                I can polish the existing concrete in a shop, office or showroom.
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
                For a pool deck or patio, I look at the texture, color and hours of direct sun.
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
                For a hangar at Henderson Executive Airport, the coating needs to suit the fluids and traffic on the floor.
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
              What I look for in the slab
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Extreme Heat & UV Damage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A pool deck in direct sun needs a different finish from a shaded garage. I check where the sun falls before recommending an outdoor coating.
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
                  <span className="text-gray-700">System selected for the exposure</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                Moisture & Efflorescence
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                White salt deposits can point to moisture moving through the slab. I check for moisture before deciding whether the floor needs a vapor barrier.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Moisture assessment before coating</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">Surface preparation matched to the slab</span>
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
                Tell me which cleaners, oils or pool chemicals touch the concrete so I can check that the finish can handle them.
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
                The topcoat takes most of the wear. How you clean it and how much traffic it gets both matter.
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
              Planning your project
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Fast Turnaround
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Installation and return-to-use timing depend on your chosen system and slab. We confirm both before work begins.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Warranty
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. Moisture-related failures are excluded.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <MapPin className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Local Business
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I’m Julian Cruz, the owner of ProShield Epoxy.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <Zap className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nevada License #0094652, C-5 Concrete Contracting — limited to epoxy coatings and sealants only. Fully bonded and insured for your protection.
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

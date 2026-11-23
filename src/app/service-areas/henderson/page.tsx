import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { Sparkles, Shield, Zap, Package, Warehouse, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Garage Floors and Concrete Coatings in Henderson | ProShield Epoxy",
  description:
    "See a finished Shoreline garage floor in Henderson. Explore epoxy and polyurea garage floors, pool deck finishes and coatings for hangars.",
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
    q: "Which parts of Henderson do you serve?",
    a: "We serve Henderson, including Green Valley, Anthem, MacDonald Highlands, Lake Las Vegas, Inspirada, Seven Hills and Whitney Ranch.",
  },
  {
    q: "Which finish is on the garage in the photos?",
    a: "Shoreline, a light ProFlake blend with dark accent flakes. The close-up shows the individual flakes on the same floor.",
  },
  {
    q: "What does the garage floor warranty cover?",
    a: "Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. Moisture-related failures are excluded. The written terms come with the estimate.",
  },
  {
    q: "What does your Nevada license cover?",
    a: "Nevada license #0094652 is limited to epoxy coatings and sealants under the C-5 classification. Ask for current bond and insurance documents for your project.",
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
        title="Garage Floors"
        highlight="in Henderson"
        subtitle="We install epoxy and polyurea garage floors in Henderson. We also refinish pool decks and coat commercial floors, including aircraft hangars."
      />

      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: "Henderson" }]} />

      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-12">
            A Shoreline garage in Henderson
          </h2>
          <p className="mt-3 text-gray-600">We used Shoreline for this floor. The dark flakes stand out against the light background in the close-up.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { src: "/images/service-areas/henderson/henderson-proflake-garage.jpg", alt: "ProFlake garage floor in Henderson" },
              { src: "/images/service-areas/henderson/henderson-proflake-flake-detail.jpg", alt: "Close-up of the flake finish on the Henderson garage floor" },
            ].map(photo => <div key={photo.src} className="relative aspect-square overflow-hidden rounded-xl border border-gray-200">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
            </div>)}
          </div>
          <Link href="/proflake" className="inline-block mt-5 text-accent-text font-medium underline">View the ProFlake garage system</Link>
          <Link href="/projects/shoreline-garage-henderson" className="block mt-4 text-accent-text font-medium underline">See the Shoreline garage</Link>

        </div>
      </section>

      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Garage, patio and commercial floors
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
              <span aria-hidden="true" className="text-accent-text">→</span>
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
              <span aria-hidden="true" className="text-accent-text">→</span>
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
              <span aria-hidden="true" className="text-accent-text">→</span>
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
                Polishing leaves the original concrete visible in a shop, office or showroom.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
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
                A textured acrylic finish for concrete pool decks and patios.
              </p>
              <span aria-hidden="true" className="text-accent-text">→</span>
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
              <span aria-hidden="true" className="text-accent-text">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-12">
            Before you choose a coating
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Parking in a newly coated garage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">The floor may be ready to walk on before it can take the weight of a car. We’ll confirm both dates for your garage.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">An outdoor patio</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Direct sun and rain change how a coating wears. An exposed patio needs a finish made for outdoor use.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Moisture in the concrete</h3>
              <p className="text-gray-600 text-sm leading-relaxed">White deposits on bare concrete can be a sign of moisture moving through the slab. Moisture testing helps determine whether the floor needs a vapor barrier.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">Working hangars</h3>
              <p className="text-gray-600 text-sm leading-relaxed">At Henderson Executive Airport, a hangar floor may see fuel, hydraulic fluids and heavy wheel loads. Those details help determine which coating belongs in the quote.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Questions about your project
            </h2>
          </div>
          <FaqAccordion faqs={hendersonFaqs} />
        </div>
      </section>

      {/* Internal links */}
      <section className="section-gray py-8 sm:py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link href="/services" className="text-accent hover:underline font-medium">All flooring services</Link>
            <Link href="/contact" className="text-accent hover:underline font-medium">Request a free estimate</Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

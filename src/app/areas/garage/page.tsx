import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { GarageAreas } from "@/components/sections/garage-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Garage Floor Coatings Las Vegas | ProShield Epoxy",
  description: "Professional garage floor coatings in Las Vegas — ProFlake, metallic epoxy, solid color. Often completed in 1 day. Limited lifetime warranty.",
  alternates: {
    canonical: "/areas/garage",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/areas/garage",
    images: ["/images/proflake/flake-garage-residential.webp"],
  },
}

const garageFaqs = [
  {
    q: "How long does a garage floor coating take to install?",
    a: "Our standard residential ProFlake system can often be completed in 1 day (subject to substrate condition, weather, and repair requirements). Metallic epoxy systems typically take 2\u20133 days due to the multi-layer application and curing process.",
  },
  {
    q: "When can I park on my new garage floor?",
    a: "Walk-on traffic is allowed after 24 hours. Drive-on is recommended after 48 hours. We\u2019ll provide specific guidelines based on weather and curing conditions.",
  },
  {
    q: "Will epoxy stick to my old, cracked garage floor?",
    a: "In most cases, yes. We prep every surface with professional diamond grinding and repair any cracks, spalls, or damage before coating. We assess your substrate during the free consultation and will let you know if there are any concerns.",
  },
  {
    q: "What\u2019s the difference between ProFlake and metallic epoxy?",
    a: "ProFlake is a chip-based system \u2014 durable, decorative, and fast to install. Metallic epoxy creates a one-of-a-kind flowing finish with pearlescent depth. ProFlake is our most popular for everyday garages; metallic is the premium option for showroom-level aesthetics.",
  },
  {
    q: "Is garage floor coating worth it?",
    a: "Absolutely. A coated garage floor protects your concrete from stains, cracks, and moisture damage. It\u2019s easier to clean, looks incredible, and adds real value to your home. Most homeowners wish they\u2019d done it sooner.",
  },
  {
    q: "Do you offer a warranty?",
    a: "ProFlake comes with a limited lifetime warranty on qualifying residential systems. This covers material defects and workmanship \u2014 not wear from abuse, neglect, or incompatible chemicals. We\u2019ll explain the full warranty details during your consultation.",
  },
  {
    q: "How do I maintain my new garage floor?",
    a: "Just sweep and mop. Our coated surfaces are sealed and smooth, so dirt, dust, and spills wipe right up. No special cleaners needed \u2014 mild soap and water is all it takes.",
  },
  {
    q: "Can you match my garage floor to my home\u2019s style?",
    a: "Yes! ProFlake offers 150+ Torginol color blends, and metallic epoxy comes in dozens of pearlescent tones. We provide color samples and digital mockups during your consultation to help you find the perfect match.",
  },
]

export default function GaragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": garageFaqs.map(faq => ({
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
              { "@type": "ListItem", "position": 2, "name": "Garage Floors", "item": "https://proshieldepoxy.com/areas/garage" }
            ]
          })
        }}
      />

      <PageHero
        badge="Garage Floors"
        title="Garage Floor Coatings"
        highlight="Las Vegas"
        subtitle="Turn your garage into a showroom-quality space. Our standard residential flake garage floor systems are often completed in 1 day, subject to substrate condition, weather, and repair requirements."
      />

      <GarageAreas />

      {/* Garage Systems & Las Vegas Content */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Garage Coating Systems: What Works Best?
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Every garage is different. ProShield offers three main systems, each with unique benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* ProFlake */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">ProFlake Epoxy</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our most popular residential system. Decorative flakes create a timeless, speckled finish that hides dust and marks naturally.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Often completed in 1 day on qualifying systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>150+ color blend options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Limited lifetime warranty on qualifying residential systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Slip-resistant textures for safety</span>
                </li>
              </ul>
            </div>

            {/* Metallic Epoxy */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Metallic Epoxy</h3>
              <p className="text-gray-600 text-sm mb-4">
                Premium showroom finish with flowing pearlescent depth. Each coat is one-of-a-kind and creates stunning visual effects.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Flowing, high-impact pearlescent finish</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>2–3 days typical installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Customizable tones and effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Ideal for showcase garages and showrooms</span>
                </li>
              </ul>
            </div>

            {/* Solid Color */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Solid Color Epoxy</h3>
              <p className="text-gray-600 text-sm mb-4">
                Clean, uniform finish in classic or modern colors. Minimal maintenance and straightforward application.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Minimalist, cohesive aesthetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Easy to maintain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Cost-effective option</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Works with any home style</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Las Vegas Heat & UV Section */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
              Protecting Your Garage from Las Vegas Heat & UV
            </h3>
            <p className="text-gray-600 mb-6">
              Las Vegas summers exceed 115°F, and intense UV exposure can damage unprotected concrete. Professional epoxy and polyurea coatings provide:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">UV & Heat Protection</h4>
                <p className="text-gray-600 text-sm">
                  Our polyaspartic topcoats resist fading and yellowing from the desert sun. The sealed surface prevents heat damage, thermal shock, and concrete spalling that occurs when moisture beneath the surface freezes and thaws.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tire Stain & Chemical Resistance</h4>
                <p className="text-gray-600 text-sm">
                  Hot tires release oils that stain uncoated concrete. Our coatings resist tire marks, oil stains, and the harsh chemicals in modern automotive fluids—so your garage stays pristine year-round.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Moisture & Efflorescence Prevention</h4>
                <p className="text-gray-600 text-sm">
                  Concrete in Las Vegas can trap moisture beneath the surface, leading to efflorescence (white salt deposits). Our sealed coatings stop this process, protecting your investment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Easy Las Vegas Lifestyle Maintenance</h4>
                <p className="text-gray-600 text-sm">
                  Dust storms are common in Vegas. A coated garage floor is sealed against dust infiltration and easy to clean. Just sweep and mop—no special treatments needed.
                </p>
              </div>
            </div>
          </div>

          {/* Why ProShield */}
          <div className="border-t border-gray-200 mt-12 pt-12">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
              Why Choose ProShield for Your Garage?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Installation & Warranty Support</p>
                  <p className="text-gray-600 mt-1">Limited lifetime warranty on qualifying residential systems, backed by professional craftsmanship and genuine care.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Proven Las Vegas Track Record</p>
                  <p className="text-gray-600 mt-1">We've installed hundreds of garage floors across the Las Vegas valley, withstanding the harshest desert conditions.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Quick Turnaround</p>
                  <p className="text-gray-600 mt-1">Our standard residential ProFlake systems are often completed in 1 day, so you're back to using your garage fast.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Customizable Aesthetics</p>
                  <p className="text-gray-600 mt-1">150+ color blends to match your home's style. From modern minimalist to vibrant showroom, we've got you covered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Garage Floor FAQ
            </h2>
          </div>
          <FaqAccordion faqs={garageFaqs} />
        </div>
      </section>

      <CtaSection />
    </>
  )
}

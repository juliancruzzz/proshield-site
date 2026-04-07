import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { InteriorAreas } from "@/components/sections/interior-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Interior Flooring Las Vegas | ProShield Epoxy",
  description:
    "Interior flooring systems in Las Vegas — metallic epoxy, polished concrete, tile, and plank flooring for homes, offices, and retail spaces.",
  alternates: {
    canonical: "/areas/interior",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/areas/interior",
    images: ["/images/metallic/metallic-epoxy-blue-ocean-garage.webp"],
  },
}

const interiorFaqs = [
  {
    q: "What\u2019s the best flooring for a Las Vegas kitchen?",
    a: "Tile and metallic epoxy are both excellent for kitchens. Tile offers classic water resistance and scratch protection. Metallic epoxy creates a seamless, stunning surface that\u2019s easy to clean. We\u2019ll help you decide based on your style, budget, and usage.",
  },
  {
    q: "Can metallic epoxy be installed inside my home?",
    a: "Absolutely. Metallic epoxy is one of our most popular interior systems. It works beautifully in kitchens, bathrooms, living areas, and showrooms. The flowing pearlescent finish creates a truly unique look in any room.",
  },
  {
    q: "What\u2019s the difference between LVP, SPC, and WPC plank flooring?",
    a: "LVP (Luxury Vinyl Plank) is flexible and budget-friendly. SPC (Stone Polymer Composite) has a rigid core for extra stability and dent resistance. WPC (Wood Polymer Composite) adds a foam layer for a softer feel underfoot. All three are waterproof and look like real wood.",
  },
  {
    q: "Is concrete polishing a coating?",
    a: "No. Concrete polishing is a mechanical refinement process \u2014 we grind and polish your existing concrete to create a smooth, glossy surface. There\u2019s nothing applied on top that can peel or delaminate. It\u2019s the concrete itself, refined to a finish.",
  },
  {
    q: "How do I choose between so many options?",
    a: "That\u2019s what the free consultation is for. We\u2019ll look at your space, discuss your goals and budget, and recommend the right system. Most customers narrow it down to 1\u20132 options quickly once they understand the tradeoffs.",
  },
  {
    q: "Do you install flooring in occupied homes?",
    a: "Yes. We work room by room when needed and take care to protect your existing finishes. For larger projects, we\u2019ll provide a phased timeline so you always know what to expect.",
  },
]

export default function InteriorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": interiorFaqs.map(faq => ({
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
              { "@type": "ListItem", "position": 2, "name": "Interior Flooring", "item": "https://proshieldepoxy.com/areas/interior" }
            ]
          })
        }}
      />

      <PageHero
        badge="Interior Spaces"
        title="Interior Flooring"
        highlight="Las Vegas"
        subtitle="From metallic epoxy showpieces to hardwood-look plank flooring — we match the right system to your interior space, style, and budget."
      />

      <InteriorAreas />

      {/* Interior Systems & Design Flexibility */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Interior Flooring Systems for Every Style
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              From modern epoxy showpieces to classic plank flooring, ProShield offers flexible interior solutions for homes, offices, and retail spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Metallic Epoxy */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Metallic Epoxy (Premium Showpiece)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Flowing pearlescent finish with one-of-a-kind depth and movement. Creates stunning visual impact in any interior space.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Unique pearlescent flowing patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Perfect for kitchens, living areas, showrooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Seamless, easy-to-clean surface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Customizable tones and effects</span>
                </li>
              </ul>
            </div>

            {/* Concrete Polishing */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Concrete Polishing (Modern Minimalist)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Mechanical refinement of existing concrete. Smooth, glossy finish with the concrete itself—nothing applied on top.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>No coating to peel or delaminate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Contemporary, clean aesthetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Cost-effective upgrade to existing concrete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Works beautifully in modern lofts and offices</span>
                </li>
              </ul>
            </div>

            {/* Tile Flooring */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Tile Flooring (Classic Durability)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional tile installation for kitchens, bathrooms, and living spaces. Water-resistant, scratch-resistant, timeless.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Superior water resistance in wet areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Scratch-resistant and durable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Endless color and pattern options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Easy to maintain and clean</span>
                </li>
              </ul>
            </div>

            {/* Plank Flooring */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Plank Flooring (Waterproof Wood-Look)</h3>
              <p className="text-gray-600 text-sm mb-4">
                LVP, SPC, or WPC plank in hardwood finishes. Warm, inviting aesthetic with waterproof and durable performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Realistic wood appearance without maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Fully waterproof and scratch-resistant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Budget-friendly compared to real hardwood</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Works in any room, including kitchens and bathrooms</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Design Flexibility Section */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
              Design Flexibility: Match Your Style & Budget
            </h3>
            <p className="text-gray-600 mb-6">
              Your interior flooring should reflect your home's personality and withstand everyday life. ProShield offers solutions across every style and price point:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Modern & Contemporary</h4>
                <p className="text-gray-600 text-sm">
                  Metallic epoxy creates flowing, pearlescent surfaces that are the centerpiece of modern interiors. Concrete polishing delivers minimalist, polished aesthetics.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Classic & Timeless</h4>
                <p className="text-gray-600 text-sm">
                  Tile flooring in neutral tones never goes out of style. Plank flooring mimics traditional hardwood while offering superior durability and waterproofing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Budget-Conscious</h4>
                <p className="text-gray-600 text-sm">
                  Plank flooring and concrete polishing deliver premium aesthetics at a fraction of the cost of real hardwood or expensive tile.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Wet Areas & Heavy Use</h4>
                <p className="text-gray-600 text-sm">
                  Tile and waterproof plank flooring handle kitchens and bathrooms flawlessly. Metallic epoxy can include protective topcoats for resilience.
                </p>
              </div>
            </div>
          </div>

          {/* Why ProShield */}
          <div className="border-t border-gray-200 mt-12 pt-12">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
              Why Choose ProShield for Your Interior Flooring
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Consultation & Design Guidance</p>
                  <p className="text-gray-600 mt-1">We listen to your vision and recommend the system that matches your style, budget, and lifestyle needs.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Professional Installation in Occupied Homes</p>
                  <p className="text-gray-600 mt-1">We work room by room, protect your existing finishes, and provide phased timelines for minimal disruption.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Premium Materials & Craftsmanship</p>
                  <p className="text-gray-600 mt-1">We use high-quality flooring systems and installation techniques that stand the test of time.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Tailored Options for Every Space</p>
                  <p className="text-gray-600 mt-1">Whether it's a stunning kitchen centerpiece or a practical bathroom floor, we have the right solution.</p>
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
              Interior Flooring FAQ
            </h2>
          </div>
          <FaqAccordion faqs={interiorFaqs} />
        </div>
      </section>

      <CtaSection />
    </>
  )
}

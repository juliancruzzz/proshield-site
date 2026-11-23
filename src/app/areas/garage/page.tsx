import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { ProjectCards } from "@/components/sections/project-cards"
import { GarageAreas } from "@/components/sections/garage-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"
import { Credentials } from "@/components/sections/credentials"

export const metadata: Metadata = {
  title: "Epoxy Garage Floor Coatings Las Vegas | ProShield Epoxy",
  description: "Epoxy garage floor coatings in Las Vegas — ProFlake, metallic & solid color systems. See finished Las Vegas and Henderson garages and request an estimate.",
  alternates: {
    canonical: "/areas/garage",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/areas/garage",
    images: [{ url: "/images/projects/nightfall-garage.webp", alt: "Nightfall flake floor in a Las Vegas garage" }],
  },
}

const garageFaqs = [
  {
    q: "How long does a garage floor coating take to install?",
    a: "I check the slab for cracks, moisture and old coatings before I give you a schedule. A metallic floor needs extra time between coats.",
  },
  {
    q: "When can I park on my new garage floor?",
    a: "For ProFlake, plan on 24 hours before walking and 48 hours before parking. Weather affects curing, so check with me before moving the car back in.",
  },
  {
    q: "Will epoxy stick to my old, cracked garage floor?",
    a: "Often, yes. I check for loose coatings and moisture first. I’ll point out which cracks can be repaired and which joints will still show.",
  },
  {
    q: "What\u2019s the difference between ProFlake and metallic epoxy?",
    a: "ProFlake has a speckled finish. Metallic epoxy has swirls and a smoother look. The project photos show what the flakes look like across a whole garage.",
  },
  {
    q: "Is garage floor coating worth it?",
    a: "A sealed floor is easier to sweep and mop than bare concrete. The estimate will show what the prep, repairs and finish cost.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. Moisture-related failure is excluded. I’ll explain the written terms for your floor.",
  },
  {
    q: "How do I maintain my new garage floor?",
    a: "Sweep out grit, clean up spills promptly and mop with a cleaner approved for your topcoat.",
  },
  {
    q: "Can you match my garage floor to my home\u2019s style?",
    a: "Yes. I can show you flake samples or help you pick the colors for a metallic floor.",
  },
  {
    q: "Are you licensed to install epoxy flooring in Nevada?",
    a: "Yes. ProShield Epoxy & Concrete LLC holds Nevada State Contractor's License #0094652 with a C-5 Concrete Contracting classification, limited to epoxy coatings and sealants only. We are fully bonded and insured, with a $200,000 bid limit. License status is verifiable at nvcontractorsboard.com.",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Garage Floor Coatings",
            "description": "Epoxy garage floor coatings in Las Vegas — ProFlake, metallic epoxy, and solid color systems. Nevada licensed contractor.",
            "provider": {
              "@id": "https://proshieldepoxy.com/#business",
              "@type": "LocalBusiness",
              "name": "ProShield Epoxy",
              "legalName": "ProShield Epoxy & Concrete LLC",
              "telephone": "+1-702-728-5484",
              "url": "https://proshieldepoxy.com",
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "license",
                "name": "Nevada State Contractor's License #0094652 (C-5 Concrete Contracting — limited to epoxy coatings and sealants only)"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Las Vegas", "addressRegion": "NV" },
              { "@type": "City", "name": "Henderson", "addressRegion": "NV" },
              { "@type": "City", "name": "North Las Vegas", "addressRegion": "NV" },
              { "@type": "Place", "name": "Summerlin", "addressRegion": "NV" }
            ],
            "url": "https://proshieldepoxy.com/areas/garage"
          })
        }}
      />

      <PageHero
        badge="Garage Floors"
        title="Garage Floor Coatings"
        highlight="Las Vegas"
        subtitle="Choose a flake finish, a metallic swirl or one solid color for your garage. Qualifying residential ProFlake floors come with a limited lifetime no-peel warranty."
      />

      <ProjectCards service="/proflake" heading="Two garages I’ve finished" />
      <GarageAreas />

      {/* Garage Systems & Las Vegas Content */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Which finish fits your garage?
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Flake helps hide dust and tire marks. Metallic gives the floor a marbled look. Solid color keeps it simple.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* ProFlake */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">ProFlake</h3>
              <p className="text-gray-600 text-sm mb-4">
                I spread colored flakes over a polyurea base, then seal them with a clear polyaspartic topcoat. The speckled finish helps hide dust.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Peel-free lifetime guarantee on qualifying systems</span>
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
                  <span>Texture options for added traction</span>
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
                  <span>Installation schedule confirmed in the estimate</span>
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
              Choosing a Coating for a Las Vegas Garage
            </h3>
            <p className="text-gray-600 mb-6">
              Before choosing a finish, look at where sunlight reaches the slab, where tires sit, and whether the concrete shows moisture or loose patches.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Sunlight at the Garage Door</h4>
                <p className="text-gray-600 text-sm">
                  If the garage door stays open during the day, ask which topcoat will cover the sunlit part of the floor and how it holds up to UV exposure.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tire Stain & Chemical Resistance</h4>
                <p className="text-gray-600 text-sm">
                  Wait for the installer’s go-ahead before parking. For dark tire marks or oil spills, use a cleaner approved for the installed topcoat.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">White Deposits or Damp Spots</h4>
                <p className="text-gray-600 text-sm">
                  Point out white deposits, damp spots or peeling paint during the estimate. The cause matters when deciding whether the slab needs moisture testing or additional preparation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dust and Grit</h4>
                <p className="text-gray-600 text-sm">
                  Sweep up sand and grit before mopping so abrasive particles are lifted off the finish.
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
                  <p className="font-semibold text-gray-900">Licensed Nevada Contractor</p>
                  <p className="text-gray-600 mt-1">NV State License #0094652, C-5 Concrete Contracting — limited to epoxy coatings and sealants only. Fully bonded and insured. Verifiable at nvcontractorsboard.com.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Quick Turnaround</p>
                  <p className="text-gray-600 mt-1">We confirm your schedule at the consultation.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Limited Lifetime Warranty</p>
                  <p className="text-gray-600 mt-1">Qualifying residential ProFlake floors have limited lifetime coverage against peeling.</p>
                </div>
              </div>
            </div>

            {/* Commercial cross-link */}
            <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold text-gray-900">Need a commercial garage floor?</span>{" "}
                For a shop, warehouse or hangar, compare the{" "}
                <Link href="/commercial-flooring" className="text-teal font-semibold underline-offset-2 hover:underline">
                  commercial floor finishes
                </Link>
                .
              </p>
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

      <Credentials />

      <CtaSection />
    </>
  )
}

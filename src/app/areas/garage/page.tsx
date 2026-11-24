import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/phone"
import { PageHero } from "@/components/sections/page-hero"
import { ProjectCards } from "@/components/sections/project-cards"
import { GarageAreas } from "@/components/sections/garage-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"
import { Credentials } from "@/components/sections/credentials"

export const metadata: Metadata = {
  title: "Epoxy Garage Floor Coatings Las Vegas | ProShield Epoxy",
  description: "Compare epoxy and polyurea garage floors and see completed flake finishes in Las Vegas and Henderson.",
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
    q: "Do you install both epoxy and polyurea garage floors?",
    a: "Yes. We offer metallic and solid-color epoxy floors. Our ProFlake system uses a polyurea base, decorative flakes and a clear polyaspartic topcoat.",
  },
  {
    q: "Can you coat a garage floor that already has cracks?",
    a: "Often, yes. Loose coatings need removal and some cracks can be repaired. Moving joints may remain visible.",
  },
  {
    q: "When can I park in the garage?",
    a: "For ProFlake, 24 hours before walking and 48 before parking are planning estimates. The coating and curing conditions determine when your garage is ready.",
  },
  {
    q: "What does the ProFlake warranty cover?",
    a: "Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. Moisture-related failures are excluded. The written terms come with the estimate.",
  },
  {
    q: "How do I clean the floor?",
    a: "Sweep out grit, clean up spills promptly and use a cleaner approved for the installed topcoat.",
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
            "description": "Epoxy and polyurea garage floors in Las Vegas, including ProFlake, metallic epoxy and solid-color finishes.",
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
        secondaryAction={
          <a href={PHONE_HREF} className="inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white sm:text-base">
            Call {PHONE_DISPLAY}
          </a>
        }
        title="Garage Floor Coatings"
        highlight="Las Vegas"
        subtitle="We install epoxy and polyurea garage floors in Las Vegas. Choose a flake, metallic or solid-color finish."
      />

      <ProjectCards service="/proflake" heading="Completed garage floors">
        <Link href="/blog/epoxy-garage-floor-cost-las-vegas" className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-text hover:underline">
          What does a garage floor coating cost in Las Vegas?
          <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </Link>
      </ProjectCards>
      <GarageAreas />

      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900">Before you park on a new garage floor</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-heading font-semibold text-lg text-gray-900">Getting the garage back in use</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">A floor can be ready for foot traffic before it is ready for a vehicle. We confirm both times for your coating and the conditions on the day.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-heading font-semibold text-lg text-gray-900">Coating over an older floor</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">Peeling paint, cracks or damp patches can change the preparation your garage needs. Your estimate will identify any removal and repairs.</p>
            </div>
          </div>
          <Link href="/commercial-flooring" className="mt-6 inline-block font-semibold text-teal hover:underline">Commercial garage floors</Link>
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

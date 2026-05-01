import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CommercialAreas } from "@/components/sections/commercial-areas"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Commercial & Industrial Floor Coatings Las Vegas | ProShield Epoxy",
  description: "Heavy-duty commercial and industrial flooring for warehouses, retail, manufacturing, and more. Systems matched to your environment. 2\u20135 day typical installation.",
  alternates: {
    canonical: "/areas/commercial",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/areas/commercial",
    images: ["/images/commercial/commercial-floor-solid.webp"],
  },
}

const commercialFaqs = [
  {
    q: "Can you install during business hours?",
    a: "We work around your schedule. Many commercial installations happen over weekends, holidays, or in phases to minimize disruption. We\u2019ll coordinate timing as part of your project plan.",
  },
  {
    q: "What\u2019s the most durable commercial flooring system?",
    a: "For maximum chemical and impact resistance, urethane cement is the top choice \u2014 it handles thermal shock, heavy traffic, and aggressive chemicals. For general warehouse and retail use, resin quartz and ProFlake systems offer excellent durability at a better price point.",
  },
  {
    q: "Do you handle large-scale projects?",
    a: "Yes. We\u2019ve coated warehouses, aircraft hangars, retail floors, and manufacturing facilities. We can phase installations to work with your operations and timeline.",
  },
  {
    q: "What about slip resistance for safety compliance?",
    a: "All of our commercial systems can include anti-slip aggregates and textures. We\u2019ll recommend the right finish for your environment \u2014 whether it\u2019s a wet kitchen, a forklift aisle, or a customer-facing showroom.",
  },
  {
    q: "How long will a commercial floor last?",
    a: "With the right system and proper maintenance, commercial resinous floors last 10\u201320+ years. Urethane cement and resin quartz systems are built to handle the most demanding environments over the long haul.",
  },
  {
    q: "Do you offer free estimates for commercial projects?",
    a: "Absolutely. We offer free on-site consultations for commercial projects. We\u2019ll assess your space, discuss your needs, and provide a detailed proposal with system recommendations and pricing.",
  },
]

export default function CommercialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": commercialFaqs.map(faq => ({
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
              { "@type": "ListItem", "position": 2, "name": "Commercial Flooring", "item": "https://proshieldepoxy.com/areas/commercial" }
            ]
          })
        }}
      />

      <PageHero
        badge="Commercial & Industrial"
        title="Commercial Flooring"
        highlight="Las Vegas"
        subtitle="Heavy-duty floor systems for warehouses, retail, manufacturing, and more. Systems matched to your specific environment — with slip-resistant textures to support safer walking-working surfaces."
      />

      <CommercialAreas />

      {/* Commercial Systems & Industry Solutions */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Commercial Flooring Systems Built to Perform
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              From warehouse operations to retail showrooms, ProShield matches high-performance systems to your specific industry demands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Urethane Cement */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Urethane Cement (Maximum Durability)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Top-tier system for extreme environments. Handles thermal shock, heavy chemical exposure, and intense foot/vehicle traffic.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Superior chemical resistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Handles thermal shock and temperature cycling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>10–20+ years lifespan in demanding environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Recommended for manufacturing, commercial kitchens, industrial spaces</span>
                </li>
              </ul>
            </div>

            {/* Resin Quartz */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">Resin Quartz (Balanced Performance)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Excellent durability at a better price point. Ideal for general warehouse, retail, and mid-level commercial use.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Strong impact and abrasion resistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Good chemical resistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>10–20 years typical lifespan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Popular for warehouses, showrooms, retail floors</span>
                </li>
              </ul>
            </div>

            {/* ProFlake Industrial */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">ProFlake (Cost-Effective & Decorative)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Durable, decorative system suitable for customer-facing commercial spaces and lighter industrial applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Professional appearance with brand flexibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>150+ color options to match branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Faster installation timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>Ideal for retail, showrooms, offices</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Industry-Specific Solutions */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-6">
              Industry-Specific Solutions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg bg-gray-50 p-6">
                <h4 className="font-heading font-semibold text-lg text-gray-900 mb-3">Warehouses & Distribution Centers</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Heavy forklift traffic, vehicle loads, and dust infiltration. Resin quartz and urethane cement systems provide maximum durability with slip-resistant aggregates for safe operations. We phase installations to minimize downtime.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h4 className="font-heading font-semibold text-lg text-gray-900 mb-3">Retail & Showrooms</h4>
                <p className="text-gray-600 text-sm mb-4">
                  High foot traffic and customer-facing aesthetics. ProFlake systems with decorative finishes create professional appearances while handling daily wear. Custom colors can match brand identity.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h4 className="font-heading font-semibold text-lg text-gray-900 mb-3">Commercial Kitchens & Food Service</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Wet environments, chemical cleaners, and heat exposure. Urethane cement with slip-resistant textures provides safety, durability, and cleanability. Anti-microbial options available.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h4 className="font-heading font-semibold text-lg text-gray-900 mb-3">Manufacturing & Production Facilities</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Chemical exposure, equipment vibration, and thermal cycling. Urethane cement is engineered to handle aggressive industrial environments and provide long-term reliability.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h4 className="font-heading font-semibold text-lg text-gray-900 mb-3">Aircraft Hangars & Industrial Garages</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Large-scale projects with heavy equipment and vehicles. We've coated entire hangars and can phase installations around operations and maintenance schedules.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h4 className="font-heading font-semibold text-lg text-gray-900 mb-3">Offices & Professional Spaces</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Professional appearance with moderate foot traffic. Polished concrete or decorative systems create modern, clean aesthetics while minimizing maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Safety & Compliance */}
          <div className="border-t border-gray-200 mt-12 pt-12">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-6">
              Safety, Compliance & Performance Standards
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Slip Resistance & Worker Safety</h4>
                <p className="text-gray-600 text-sm">
                  All commercial systems can include anti-slip aggregates and textures. We recommend appropriate finishes for wet areas, chemical exposure zones, and high-traffic aisles to support safer walking-working surfaces.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Chemical & Impact Resistance</h4>
                <p className="text-gray-600 text-sm">
                  We assess your specific chemical exposures and equipment loads. Urethane cement handles aggressive industrial chemicals; resin quartz works well for moderate exposure.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Durability & Long-Term Performance</h4>
                <p className="text-gray-600 text-sm">
                  With the right system and proper maintenance, commercial resinous floors last 10–20+ years. We provide maintenance guidelines to maximize lifespan.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Minimal Operational Disruption</h4>
                <p className="text-gray-600 text-sm">
                  We coordinate installation timing around your operations—weekends, holidays, or phased schedules. Large-scale projects are managed to keep your business running.
                </p>
              </div>
            </div>
          </div>

          {/* Why ProShield */}
          <div className="border-t border-gray-200 mt-12 pt-12">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
              Why ProShield for Your Commercial Project
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Proven Track Record on Large Projects</p>
                  <p className="text-gray-600 mt-1">We've completed warehouses, hangars, retail locations, and manufacturing facilities across Las Vegas. We understand the scale and complexity of commercial work.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">System Expertise & Industry-Specific Solutions</p>
                  <p className="text-gray-600 mt-1">We match the right system to your environment—whether it's chemical exposure, heavy traffic, or aesthetic requirements.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Flexible Installation Scheduling</p>
                  <p className="text-gray-600 mt-1">We work around your operations with weekend/holiday installation or phased approaches to minimize business disruption.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-teal font-bold text-lg">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Free On-Site Commercial Consultations</p>
                  <p className="text-gray-600 mt-1">We assess your space, discuss your needs, and provide detailed proposals with system recommendations and timelines.</p>
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
              Commercial Flooring FAQ
            </h2>
          </div>
          <FaqAccordion faqs={commercialFaqs} />
        </div>
      </section>

      <CtaSection />
    </>
  )
}

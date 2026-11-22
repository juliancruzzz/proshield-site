import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "How to clean a coated floor | ProShield",
  description:
    "Care for your garage floor coating with product-compatible cleaners, equipment and mats. Learn what to check before repair or a topcoat refresh.",
  alternates: {
    canonical: "/blog/epoxy-floor-maintenance-tips",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/epoxy-floor-maintenance-tips",
    images: ["/images/proflake/flake-garage-residential.webp"],
  },
}

export default function EpoxyMaintenancePost() {
  const schema = blogPostingSchema({
    title: "How to clean a coated floor",
    description: "Care for your garage floor coating with product-compatible cleaners, equipment and mats. Learn what to check before repair or a topcoat refresh.",
    slug: "epoxy-floor-maintenance-tips",
    datePublished: "2026-04-07",
    dateModified: "2026-11-21",
    image: "https://proshieldepoxy.com/images/proflake/flake-garage-residential.webp",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the best way to clean epoxy flooring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Remove loose dirt and follow the installed finish’s cleaning instructions. Confirm the cleaner, dilution, equipment and stain-removal method before use. Do not assume every resin floor accepts the same products."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use bleach or vinegar on epoxy floors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bleach and vinegar have different chemistry. Use a cleaner only where the installed coating’s instructions permit it, at the stated dilution, and never mix products."
        }
      },
      {
        "@type": "Question",
        "name": "How often do I need to reseal an epoxy floor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Inspect the floor’s condition and follow the selected product’s maintenance plan. Ask whether a compatible refresh coat is needed; no fixed lifespan or extra years of service are promised."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do about oil spills on epoxy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Follow the installed coating’s cleanup instructions for oil and compatible cleaners. For repeated exposure, confirm any protective mat is approved for both the finish and intended use."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proshieldepoxy.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://proshieldepoxy.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Epoxy Floor Maintenance Tips", "item": "https://proshieldepoxy.com/blog/epoxy-floor-maintenance-tips" }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Julian Cruz",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "Organization",
              "name": "ProShield Epoxy",
              "url": "https://proshieldepoxy.com"
            },
            "url": "https://proshieldepoxy.com/about"
          })
        }}
      />
      <section className="bg-gray-900 pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </Link>
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent mb-4">
            Maintenance Guide
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            How to clean a coated floor
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-04-07">April 7, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Updated <time dateTime="2026-11-21">November 21, 2026</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 8 min read
            </span>
          </div>
        </div>
      </section>

      <article className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">Sweep up grit before mopping so you don’t drag it across the finish. For oil, tire marks or a stubborn spill, check which cleaner is safe for your topcoat.</p>

            {/* Table of Contents */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#daily-and-weekly-cleaning" className="text-accent hover:underline">Daily and Weekly Cleaning</a>
                  </li>
                  <li>
                    <a href="#what-not-to-use" className="text-accent hover:underline">What NOT to Use on Epoxy</a>
                  </li>
                  <li>
                    <a href="#handling-spills" className="text-accent hover:underline">Handling Spills and Stains</a>
                  </li>
                  <li>
                    <a href="#seasonal-maintenance-vegas" className="text-accent hover:underline">Seasonal Maintenance for Las Vegas</a>
                  </li>
                  <li>
                    <a href="#system-specific-care" className="text-accent hover:underline">System-Specific Maintenance</a>
                  </li>
                  <li>
                    <a href="#signs-of-wear" className="text-accent hover:underline">Signs Your Epoxy Needs Attention</a>
                  </li>
                  <li>
                    <a href="#when-to-reseal-refresh" className="text-accent hover:underline">When to Reseal or Refresh the Topcoat</a>
                  </li>
                  <li>
                    <a href="#frequently-asked-questions" className="text-accent hover:underline">Frequently Asked Questions</a>
                  </li>
                </ul>
              </nav>
            </div>

            <h2 id="daily-and-weekly-cleaning" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Daily and Weekly Cleaning
            </h2>
            <p className="text-gray-600 leading-relaxed">Regular removal of loose dirt and compatible cleaning help maintain a resin floor. The texture, soil and product instructions determine the appropriate method.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Daily: Dust Mop or Sweep
            </h3>
            <p className="text-gray-600 leading-relaxed">Use compatible sweeping or vacuuming equipment to remove loose grit before cleaning. Keep wheels and cleaning tools free of trapped debris that could mark the finish.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Routine Cleaning: Compatible Products
            </h3>
            <p className="text-gray-600 leading-relaxed">Use the cleaner, dilution and cleaning equipment allowed for the installed finish. Textured floors may need a suitable brush or scrubber rather than mopping alone. Remove cleaner residue as directed.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Stains and Heavier Soil
            </h3>
            <p className="text-gray-600 leading-relaxed">For marks that routine cleaning does not remove, identify the type of soil and ask for a compatible stain-removal method. Test any permitted cleaner as directed before wider use.</p>

            <h2 id="what-not-to-use" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What NOT to Use on Your Epoxy Floor
            </h2>
            <p className="text-gray-600 leading-relaxed">Confirm compatibility before using a cleaner or tool; a household label alone does not establish that it suits the finish.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Harsh Chemicals &amp; Acid-Based Cleaners
            </h3>
            <p className="text-gray-600 leading-relaxed">Do not treat bleach and vinegar as the same chemical. Use either only if the installed floor’s instructions allow it at the specified dilution. Never mix cleaning products.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Abrasive Scrubbing Pads &amp; Tools
            </h3>
            <p className="text-gray-600 leading-relaxed">Choose the brush or pad specified for the finish. Aggressive scrubbing or abrasive tools can change its appearance; ask before using them for a difficult mark.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Citrus-Based Degreasers (On Metallic Finishes)
            </h3>
            <p className="text-gray-600 leading-relaxed">Check the actual cleaner and dilution for compatibility with the coating. Citrus, solvent or degreaser labels do not establish suitability for every metallic topcoat.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              High-Pressure Washers
            </h3>
            <p className="text-gray-600 leading-relaxed">Pressure-washing suitability depends on the installed system, substrate, equipment and technique. Follow the product’s limits; this guide does not provide a universal pressure or nozzle-distance setting.</p>

            <h2 id="handling-spills" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Handling Spills and Stains
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Epoxy is stain-resistant but not stain-proof. The key is quick action.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Oil &amp; Grease Spills
            </h3>
            <p className="text-gray-600 leading-relaxed">For oil or grease, use the coating manufacturer’s permitted cleanup method and compatible absorbent or cleaner. Do not assume that an automotive-fluid-resistant finish cannot stain.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Chemical Spills
            </h3>
            <p className="text-gray-600 leading-relaxed">For a hazardous chemical spill, keep people away and follow the chemical’s safety instructions and site spill procedure. Confirm coating compatibility and cleanup with the relevant product guidance rather than diluting an unknown chemical.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Wine &amp; Food Spills
            </h3>
            <p className="text-gray-600 leading-relaxed">Clean food and drink spills using the compatible method for the installed finish. Stain resistance varies by product and contact time.</p>

            <h2 id="seasonal-maintenance-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Seasonal Maintenance for Las Vegas Heat
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Plan care around the actual exposure and use of your floor:
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Summer: Manage Garage Door Exposure
            </h3>
            <p className="text-gray-600 leading-relaxed">Consider direct sun, water brought in by vehicles and changing conditions when planning cleaning. Keep the floor within the product’s use and care requirements.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Summer: Protect Hot Spots
            </h3>
            <p className="text-gray-600 leading-relaxed">Check which mat backings are safe for your finish. Wait until the coating has cured, and lift the mat regularly to clear out grit and moisture.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Dust &amp; Debris Control
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Las Vegas dust storms are common. After a dust storm, sweep or vacuum your epoxy floor more frequently to prevent fine dust from settling and dulling the finish. Dust also mixes with moisture and creates a mild abrasive that can scratch over time.
            </p>

            <h2 id="system-specific-care" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              System-Specific Maintenance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Different coating systems have slightly different care needs:
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake</Link> (Polyurea + Flake + Polyaspartic)
            </h3>
            <p className="text-gray-600 leading-relaxed">ProFlake’s flake and clear topcoat still require appropriate care. Confirm the actual product instructions, including cleaners and equipment suitable for its texture.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              <Link href="/metallic-epoxy" className="text-accent hover:underline font-medium">Metallic Epoxy</Link>
            </h3>
            <p className="text-gray-600 leading-relaxed">Metallic floors need care appropriate to the selected clear coat and texture. Ask which cleaners and equipment are permitted; do not assume all metallic floors use the same topcoat.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              <Link href="/concrete-polishing" className="text-accent hover:underline font-medium">Polished Concrete</Link>
            </h3>
            <p className="text-gray-600 leading-relaxed">Polished concrete is a mechanically finished concrete surface, not the same as a resin coating. Follow the densifier or guard manufacturer’s care instructions and assess wear before scheduling repolishing.</p>

            <h2 id="signs-of-wear" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Signs That Your Epoxy Needs Attention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Even with proper care, watch for these warning signs:
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Minor Scuffs &amp; Wear Marks
            </h3>
            <p className="text-gray-600 leading-relaxed">Assess visible scuffs before applying a polishing compound or buffing the floor. A treatment that suits one finish can change the gloss or texture of another.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Yellowing or Chalking (Assess the Cause)
            </h3>
            <p className="text-gray-600 leading-relaxed">Discoloration or a change in gloss needs assessment. It may have more than one cause; do not assume a particular age or symptom establishes UV damage or that recoating is always the remedy.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Delamination or Peeling Edges
            </h3>
            <p className="text-gray-600 leading-relaxed">Loose, peeling or blistered areas need assessment before repair. Their location alone does not establish the cause; moisture, contamination, preparation and other factors may need investigation.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              High-Traffic Wear Areas
            </h3>
            <p className="text-gray-600 leading-relaxed">Inspect worn areas and determine whether cleaning, local repair or a compatible refresh coat is appropriate. Age alone does not establish that the finish needs replacement.</p>

            <h2 id="when-to-reseal-refresh" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              When to Reseal or Refresh the Topcoat
            </h2>
            <p className="text-gray-600 leading-relaxed">Refresh requirements depend on condition, use and the installed system. There is no universal resealing interval or guaranteed life extension for every epoxy floor.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              When a Topcoat Refresh Makes Sense
            </h3>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 my-4"><li>Have worn, dull, loose or damaged areas assessed.</li><li>Confirm that any refresh product is compatible with the existing finish.</li><li>Ask which repairs and preparation are needed.</li></ul>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              When a Refresh Is NOT Necessary
            </h3>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 my-4"><li>Do not schedule a recoat based on age alone.</li><li>Confirm the cause of peeling or discoloration before treatment.</li><li>Use the installed finish’s care instructions.</li></ul>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-6 sm:p-8 my-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Pro Tip: Protective Mats in High-Wear Areas
              </h3>
              <p className="text-gray-600 leading-relaxed">Check which mat backings are safe for your finish. Wait until the coating has cured, and lift the mat regularly to clear out grit and moisture.</p>
            </div>

            <h2 id="frequently-asked-questions" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              What&apos;s the best way to clean epoxy flooring?
            </h3>
            <p className="text-gray-600 leading-relaxed">Remove loose dirt and follow the installed finish’s cleaning instructions. Confirm the cleaner, dilution, equipment and stain-removal method before use. Do not assume every resin floor accepts the same products.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can I use bleach or vinegar on epoxy floors?
            </h3>
            <p className="text-gray-600 leading-relaxed">Bleach and vinegar have different chemistry. Use a cleaner only where the installed coating’s instructions permit it, at the stated dilution, and never mix products.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How often do I need to reseal an epoxy floor?
            </h3>
            <p className="text-gray-600 leading-relaxed">Inspect the floor’s condition and follow the selected product’s maintenance plan. Ask whether a compatible refresh coat is needed; no fixed lifespan or extra years of service are promised.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              What should I do about oil spills on epoxy?
            </h3>
            <p className="text-gray-600 leading-relaxed">Follow the installed coating’s cleanup instructions for oil and compatible cleaners. For repeated exposure, confirm any protective mat is approved for both the finish and intended use.</p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Keep Your Epoxy Looking Perfect
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                Have questions about maintaining your epoxy floor? Our team can provide specific guidance for your system type and help with topcoat refreshes when the time comes.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Get Maintenance Guidance <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="section-white pb-12 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">JC</span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-gray-900">Julian Cruz</h3>
                <p className="text-sm text-accent font-medium">Founder, ProShield Epoxy</p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Julian Cruz owns ProShield Epoxy in Las Vegas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts currentSlug="epoxy-floor-maintenance-tips" />

      <CtaSection />
    </>
  )
}

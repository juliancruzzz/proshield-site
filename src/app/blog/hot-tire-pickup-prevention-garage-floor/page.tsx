import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Why is my garage floor peeling under the tires? | ProShield",
  description:
    "Tire-related garage floor damage: compare coating requirements, cure instructions and repair options before choosing a system in Las Vegas.",
  alternates: {
    canonical: "/blog/hot-tire-pickup-prevention-garage-floor",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/hot-tire-pickup-prevention-garage-floor",
    images: ["/images/proflake/flake-garage-porsche-bikes.webp"],
  },
}

export default function HotTirePickupPost() {
  const schema = blogPostingSchema({
    title: "Why is my garage floor peeling under the tires?",
    description: "Tire-related garage floor damage: compare coating requirements, cure instructions and repair options before choosing a system in Las Vegas.",
    slug: "hot-tire-pickup-prevention-garage-floor",
    datePublished: "2026-03-28",
    dateModified: "2026-11-21",
    image: "https://proshieldepoxy.com/images/proflake/flake-garage-porsche-bikes.webp",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I fix hot tire pickup with a new topcoat over the existing coating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recoating depends on whether the existing material is sound, compatible and suitable for preparation. A topcoat cannot correct an underlying bond problem; assess removal and repairs first."
        }
      },
      {
        "@type": "Question",
        "name": "Will parking on mats or tire pads prevent hot tire pickup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check which mat backings are safe for your finish. Wait until the coating has cured, and lift the mat regularly to clear out grit and moisture."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can hot tire pickup happen with a cheap coating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timing of damage varies with product, preparation, cure and use. A fixed number of weeks or summers does not establish when an individual floor will fail."
        }
      },
      {
        "@type": "Question",
        "name": "Does hot tire pickup happen with polyaspartic coatings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compare the selected product’s vehicle-use information, cure schedule and warranty. ProFlake uses a polyurea base, decorative flake and a polyaspartic topcoat. Confirm the named products and preparation in the project quote. Resistance is not immunity to every tire mark or exposure."
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
      { "@type": "ListItem", "position": 3, "name": "Hot Tire Pickup Prevention", "item": "https://proshieldepoxy.com/blog/hot-tire-pickup-prevention-garage-floor" }
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
            Garage Floors
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Why is my garage floor peeling under the tires?
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-03-28">March 28, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Updated <time dateTime="2026-11-21">November 21, 2026</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 7 min read
            </span>
          </div>
        </div>
      </section>

      <article className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">If a tire leaves a dark mark, check whether the coating is still there. A black scuff on a smooth floor is different from a patch where the coating lifted and bare concrete shows.</p>

            {/* Table of Contents */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#what-exactly-is-hot-tire-pickup" className="text-accent hover:underline">What Exactly Is Hot Tire Pickup?</a>
                  </li>
                  <li>
                    <a href="#why-its-worse-in-las-vegas" className="text-accent hover:underline">Garage Conditions to Consider</a>
                  </li>
                  <li>
                    <a href="#what-makes-a-coating-vulnerable" className="text-accent hover:underline">What Makes a Coating Vulnerable?</a>
                  </li>
                  <li>
                    <a href="#how-to-prevent-it-the-right-system" className="text-accent hover:underline">How to Prevent It: The Right System</a>
                  </li>
                  <li>
                    <a href="#coatings-ranked-by-hot-tire-resistance" className="text-accent hover:underline">Coating Requirements to Compare</a>
                  </li>
                  <li>
                    <a href="#what-if-you-already-have-hot-tire-damage" className="text-accent hover:underline">What If You Already Have Hot Tire Damage?</a>
                  </li>
                  <li>
                    <a href="#frequently-asked-questions" className="text-accent hover:underline">Frequently Asked Questions</a>
                  </li>
                </ul>
              </nav>
            </div>

            <h2 id="what-exactly-is-hot-tire-pickup" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Exactly Is Hot Tire Pickup?
            </h2>
            <p className="text-gray-600 leading-relaxed">Tire and floor conditions vary with driving, weather and the garage. Evaluate the selected product’s vehicle-use and return-to-service instructions rather than using one temperature range for every situation.</p>
            <p className="text-gray-600 leading-relaxed">Tire contact can stress a coating or leave marks. The actual system, its cure and the condition of the concrete bond need assessment before diagnosing damage.</p>
            <p className="text-gray-600 leading-relaxed">The appropriate repair depends on the cause and extent of the damage. A local repair, recoating or removal may be needed; an inspection should establish the scope.</p>

            <h2 id="why-its-worse-in-las-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Garage Conditions to Consider
            </h2>
            <p className="text-gray-600 leading-relaxed">Heat, sun exposure, moisture and vehicle use can affect a garage coating. Confirm that the complete system is specified for the actual site and traffic.</p>
            <p className="text-gray-600 leading-relaxed">Do not assume a coating succeeds or fails solely because of the city where it is installed. Compare product requirements and actual conditions.</p>

            <h2 id="what-makes-a-coating-vulnerable" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Makes a Coating Vulnerable?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Not all coatings are equally susceptible. The primary factors that
              determine hot tire pickup resistance are:
            </p>
            <p className="text-gray-600 leading-relaxed"><strong>Coating system:</strong> Compare the named base and topcoat products and their intended vehicle use. A chemistry label or purchase location alone does not establish heat performance.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Topcoat:</strong> Ask for applicable tire-contact and chemical-resistance information. Tire marks and damage depend on the actual product, cure and exposure.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Layer build:</strong> Follow the selected system’s specified coverage and thickness. Do not infer an exact film build or heat resistance from price alone.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Preparation:</strong> I check for moisture, oil and loose paint before diamond-grinding the concrete and making the repairs the slab needs.</p>

            <h2 id="how-to-prevent-it-the-right-system" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How to Prevent It: The Right System
            </h2>
            <p className="text-gray-600 leading-relaxed">Compare the entire proposed system, its preparation and its return-to-use instructions:</p>
            <p className="text-gray-600 leading-relaxed"><strong>Surface profile:</strong> Prepare the concrete to the selected coating’s specification. There is no single profile that applies to every product and substrate.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Base layer:</strong> ProFlake uses a polyurea base, decorative flake and a polyaspartic topcoat. Confirm the named products and preparation in the project quote.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Flake:</strong> Decorative flake provides color and texture within the selected system; it is not a separate guarantee against tire damage.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Clear coat and cure:</strong> For ProFlake, allow 24 hours before walking and 48 hours before parking, subject to actual weather and curing conditions. Other systems have different return-to-use requirements; follow the project instructions.</p>

            <h2 id="coatings-ranked-by-hot-tire-resistance" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Coating Requirements to Compare
            </h2>

            <div className="overflow-x-auto -mx-4 sm:mx-0 my-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden"><thead><tr className="bg-gray-50"><th className="text-left px-5 py-3.5 font-semibold text-gray-900">System</th><th className="text-left px-5 py-3.5 font-semibold text-gray-900">What to confirm</th><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Before traffic</th></tr></thead><tbody><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">ProFlake</td><td className="px-5 py-3 text-gray-600">Polyurea base, flake, polyaspartic topcoat</td><td className="px-5 py-3 text-gray-600">24h walk / 48h park; conditions apply</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Full polyaspartic system</td><td className="px-5 py-3 text-gray-600">Manufacturer-specified layer build</td><td className="px-5 py-3 text-gray-600">Product-specific cure instructions</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Epoxy system</td><td className="px-5 py-3 text-gray-600">Named base and topcoat; intended vehicle use</td><td className="px-5 py-3 text-gray-600">Product-specific cure instructions</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Retail kit</td><td className="px-5 py-3 text-gray-600">Substrate, preparation and coverage requirements</td><td className="px-5 py-3 text-gray-600">Kit-specific traffic instructions</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Sealer or paint</td><td className="px-5 py-3 text-gray-600">Whether the product permits vehicle use</td><td className="px-5 py-3 text-gray-600">Product-specific traffic instructions</td></tr></tbody></table>
            </div>

            <h2 id="what-if-you-already-have-hot-tire-damage" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What If You Already Have Hot Tire Damage?
            </h2>
            <p className="text-gray-600 leading-relaxed">Have the failed floor assessed before choosing a patch or complete replacement. Loose or incompatible coating may need removal, but the extent cannot be determined from a photograph alone.</p>
            <p className="text-gray-600 leading-relaxed">Ask for the cause, repair scope, products and written warranty. A repair or replacement is not a promise of lifetime immunity to every type of tire damage.</p>

            <h2 id="frequently-asked-questions" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can I fix hot tire pickup with a new topcoat over the existing
              coating?
            </h3>
            <p className="text-gray-600 leading-relaxed">Recoating depends on whether the existing material is sound, compatible and suitable for preparation. A topcoat cannot correct an underlying bond problem; assess removal and repairs first.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Will parking on mats or tire pads prevent hot tire pickup?
            </h3>
            <p className="text-gray-600 leading-relaxed">Check which mat backings are safe for your finish. Wait until the coating has cured, and lift the mat regularly to clear out grit and moisture.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How quickly can hot tire pickup happen with a cheap coating?
            </h3>
            <p className="text-gray-600 leading-relaxed">The timing of damage varies with product, preparation, cure and use. A fixed number of weeks or summers does not establish when an individual floor will fail.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Does hot tire pickup happen with polyaspartic coatings?
            </h3>
            <p className="text-gray-600 leading-relaxed">Compare the selected product’s vehicle-use information, cure schedule and warranty. ProFlake uses a polyurea base, decorative flake and a polyaspartic topcoat. Confirm the named products and preparation in the project quote. Resistance is not immunity to every tire mark or exposure.</p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Tired of Your Coating Peeling?
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">Request a free garage-floor assessment and project quote.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
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

      <RelatedPosts currentSlug="hot-tire-pickup-prevention-garage-floor" />

      <CtaSection />
    </>
  )
}

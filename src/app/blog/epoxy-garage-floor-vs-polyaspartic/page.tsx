import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Epoxy vs Polyaspartic Coatings | ProShield Epoxy",
  description:
    "Compare epoxy, polyurea and polyaspartic floor systems: product specifications, layer build, preparation, curing and use in a Las Vegas garage.",
  alternates: {
    canonical: "/blog/epoxy-garage-floor-vs-polyaspartic",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/epoxy-garage-floor-vs-polyaspartic",
    images: ["/images/proflake/flake-garage-wide-clean.webp"],
  },
}

export default function EpoxyVsPolyasparticPost() {
  const schema = blogPostingSchema({
    title: "Epoxy vs. Polyaspartic Garage Floor Coatings — What's the Difference?",
    description: "Compare epoxy, polyurea and polyaspartic floor systems: product specifications, layer build, preparation, curing and use in a Las Vegas garage.",
    slug: "epoxy-garage-floor-vs-polyaspartic",
    datePublished: "2026-04-01",
    dateModified: "2026-11-21",
    image: "https://proshieldepoxy.com/images/proflake/flake-garage-wide-clean.webp",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is polyaspartic better than epoxy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neither chemistry is universally better. Compare the actual products, layer build, substrate preparation, curing and intended use."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a polyaspartic garage floor last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Service life depends on the specified products, concrete condition, installation, traffic and care. Ask for the written product and installation warranty rather than treating a lifespan estimate as a guarantee."
        }
      },
      {
        "@type": "Question",
        "name": "Can you apply polyaspartic without an epoxy base?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some systems use polyaspartic in more than one layer. Compare the manufacturer’s specified build and substrate requirements instead of assuming that the chemistry name establishes bond strength or thickness."
        }
      },
      {
        "@type": "Question",
        "name": "Why do some \"one-day epoxy\" companies use polyaspartic instead?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An installation-duration claim is separate from the product’s cure and return-to-use requirements. Ask which products are applied and when walking and vehicles are permitted."
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
      { "@type": "ListItem", "position": 3, "name": "Epoxy vs. Polyaspartic", "item": "https://proshieldepoxy.com/blog/epoxy-garage-floor-vs-polyaspartic" }
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
            Epoxy vs. Polyaspartic Garage Floor Coatings — What&apos;s the
            Difference?
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-04-01">April 1, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Updated <time dateTime="2026-11-21">November 21, 2026</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 6 min read
            </span>
          </div>
        </div>
      </section>

      <article className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              If you&apos;re shopping for a garage floor coating in Las Vegas,
              you&apos;ll hear two terms constantly: epoxy and polyaspartic. Both
              are resinous coatings that go over concrete. Both look great when
              done right. But they&apos;re different chemistries with different
              strengths — and in the Las Vegas climate, those differences
              actually matter.
            </p>

            {/* Table of Contents */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#what-is-epoxy" className="text-accent hover:underline">What Is Epoxy?</a>
                  </li>
                  <li>
                    <a href="#what-is-polyaspartic" className="text-accent hover:underline">What Is Polyaspartic?</a>
                  </li>
                  <li>
                    <a href="#head-to-head-comparison" className="text-accent hover:underline">Head-to-Head Comparison</a>
                  </li>
                  <li>
                    <a href="#why-we-use-both-together" className="text-accent hover:underline">The ProFlake Layer Build</a>
                  </li>
                  <li>
                    <a href="#what-about-one-day-epoxy-companies" className="text-accent-text hover:underline">What About &quot;One-Day Epoxy&quot; Companies?</a>
                  </li>
                  <li>
                    <a href="#the-bottom-line" className="text-accent hover:underline">The Bottom Line</a>
                  </li>
                  <li>
                    <a href="#frequently-asked-questions" className="text-accent hover:underline">Frequently Asked Questions</a>
                  </li>
                </ul>
              </nav>
            </div>

            <h2 id="what-is-epoxy" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Is Epoxy?
            </h2>
            <p className="text-gray-600 leading-relaxed">Epoxy coatings combine resin and hardener and are applied to a prepared substrate. Formulations and system layers vary; compare the named products and their intended use.</p>
            <p className="text-gray-600 leading-relaxed">Working time, recoating and return to traffic depend on the product, thickness, temperature and other conditions. Use the specified schedule rather than a universal cure time for all epoxy.</p>

            <h2 id="what-is-polyaspartic" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Is Polyaspartic?
            </h2>
            <p className="text-gray-600 leading-relaxed">Polyaspartic floor coatings are used in a range of resinous systems, including topcoats. Component count, cure time and performance must be checked for the actual product.</p>
            <p className="text-gray-600 leading-relaxed">ProFlake uses a polyurea base, decorative flake and a polyaspartic topcoat. Confirm the named products and preparation in the project quote. For ProFlake, allow 24 hours before walking and 48 hours before parking, subject to actual weather and curing conditions. Other systems have different return-to-use requirements; follow the project instructions.</p>

            <h2 id="head-to-head-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Head-to-Head Comparison
            </h2>

            {/* Comparison table */}
            <div className="overflow-x-auto -mx-4 sm:mx-0 my-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden"><thead><tr className="bg-gray-50"><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Compare</th><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Epoxy</th><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Polyaspartic</th></tr></thead><tbody><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Formulation</td><td className="px-5 py-3 text-gray-600">Check resin and hardener requirements</td><td className="px-5 py-3 text-gray-600">Check components and mixing requirements</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">System role</td><td className="px-5 py-3 text-gray-600">Primer, body or finish as specified</td><td className="px-5 py-3 text-gray-600">Layer role as specified</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Cure and working time</td><td className="px-5 py-3 text-gray-600">Product and conditions</td><td className="px-5 py-3 text-gray-600">Product and conditions</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">UV, abrasion and chemicals</td><td className="px-5 py-3 text-gray-600">Check product-specific tests</td><td className="px-5 py-3 text-gray-600">Check product-specific tests</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Vehicle use</td><td className="px-5 py-3 text-gray-600">Complete system and cure requirements</td><td className="px-5 py-3 text-gray-600">Complete system and cure requirements</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Price</td><td className="px-5 py-3 text-gray-600">Compare complete written scope</td><td className="px-5 py-3 text-gray-600">Compare complete written scope</td></tr></tbody></table>
            </div>

            <h2 id="why-we-use-both-together" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              The ProFlake Layer Build
            </h2>
            <p className="text-gray-600 leading-relaxed">ProFlake uses a polyurea base, decorative flake and a polyaspartic topcoat. Confirm the named products and preparation in the project quote.</p>
            <p className="text-gray-600 leading-relaxed">The flake is broadcast into the base layer and the clear coat covers the decorative finish. Texture and appearance depend on the chosen build; product data and site conditions determine performance.</p>

            <h2 id="what-about-one-day-epoxy-companies" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What About &quot;One-Day Epoxy&quot; Companies?
            </h2>
            <p className="text-gray-600 leading-relaxed">An advertised installation speed does not identify the products used or when traffic can resume. Ask for the complete layer build and curing instructions.</p>
            <p className="text-gray-600 leading-relaxed">
              Ask your installer what products they use — brand, chemistry, and
              number of coats. A reputable company will tell you exactly what
              goes on your floor.
            </p>

            <h2 id="the-bottom-line" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-gray-600 leading-relaxed">Choose a complete system suited to the slab, intended traffic, light exposure and care needs. ProFlake uses a polyurea base, decorative flake and a polyaspartic topcoat. Confirm the named products and preparation in the project quote.</p>

            <p className="text-sm text-gray-400 italic mt-8">
              *Subject to substrate condition, weather, and repair
              requirements.
            </p>

            <h2 id="frequently-asked-questions" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is polyaspartic better than epoxy?
            </h3>
            <p className="text-gray-600 leading-relaxed">Neither chemistry is universally better. Compare the actual products, layer build, substrate preparation, curing and intended use.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does a polyaspartic garage floor last?
            </h3>
            <p className="text-gray-600 leading-relaxed">Service life depends on the specified products, concrete condition, installation, traffic and care. Ask for the written product and installation warranty rather than treating a lifespan estimate as a guarantee.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can you apply polyaspartic without an epoxy base?
            </h3>
            <p className="text-gray-600 leading-relaxed">Some systems use polyaspartic in more than one layer. Compare the manufacturer’s specified build and substrate requirements instead of assuming that the chemistry name establishes bond strength or thickness.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Why do some &quot;one-day epoxy&quot; companies use polyaspartic
              instead?
            </h3>
            <p className="text-gray-600 leading-relaxed">An installation-duration claim is separate from the product’s cure and return-to-use requirements. Ask which products are applied and when walking and vehicles are permitted.</p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Ready to Coat Your Garage Floor?
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                Get a free consultation and see our ProFlake system options —
                150+ color blends available.
              </p>
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
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Julian is the founder of ProShield Epoxy, serving the Las Vegas metro area with garage coatings, commercial flooring and specialty surface services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts currentSlug="epoxy-garage-floor-vs-polyaspartic" />

      <CtaSection />
    </>
  )
}

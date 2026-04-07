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
    "Epoxy vs polyaspartic garage coatings — cure times, durability, UV stability, and cost comparison for Las Vegas garages. Professional breakdown.",
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
    description: "Comparing epoxy and polyaspartic garage floor coatings — cure times, durability, UV stability, cost, and which is better for Las Vegas garages. Honest breakdown from a professional installer.",
    slug: "epoxy-garage-floor-vs-polyaspartic",
    datePublished: "2026-04-01",
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
          "text": "Neither is universally \"better\" — they have different strengths. Epoxy provides superior bonding and build thickness. Polyaspartic offers faster cure times and better UV stability. The best garage floor systems use both together: a polyurea base for adhesion and a polyaspartic topcoat for protection."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a polyaspartic garage floor last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professionally installed polyurea base with polyaspartic topcoat — like our ProFlake system — lasts 15–20+ years in a residential garage. The key factors are surface preparation quality, coating thickness, and environmental exposure."
        }
      },
      {
        "@type": "Question",
        "name": "Can you apply polyaspartic without an epoxy base?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, polyaspartic-only systems exist. Some companies use them for fast, single-day installs. However, a polyurea base provides more build thickness and a stronger mechanical bond to the concrete. The combination of polyurea base + polyaspartic topcoat gives you the advantages of both chemistries."
        }
      },
      {
        "@type": "Question",
        "name": "Why do some \"one-day epoxy\" companies use polyaspartic instead?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "True epoxy requires 24–72 hours to cure, so it can't be completed in one day on its own. Companies advertising \"one-day epoxy\" are typically using polyaspartic or polyurea systems that cure in 2–6 hours. This isn't necessarily bad — just ask what products are actually being applied so you know what you're getting."
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
              <Calendar className="h-3.5 w-3.5" /> April 1, 2026
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
                    <a href="#why-we-use-both-together" className="text-accent hover:underline">Why We Use Both — Together</a>
                  </li>
                  <li>
                    <a href="#what-about-one-day-epoxy-companies" className="text-accent hover:underline">What About "One-Day Epoxy" Companies?</a>
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
            <p className="text-gray-600 leading-relaxed">
              Epoxy is a two-part resin system — a resin and a hardener that
              chemically react to form a hard, durable coating. It&apos;s been
              the standard for garage floors for decades. Epoxy bonds strongly
              to properly prepped concrete, resists chemicals and abrasion, and
              creates a smooth, seamless surface.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The main trade-off with epoxy is cure time. Full-strength epoxy
              systems need 24–72 hours of cure time before you can walk on them
              and 5–7 days before parking vehicles. Temperature and humidity
              affect cure speed — Las Vegas heat can actually accelerate cure
              time but also narrows your working window during installation.
            </p>

            <h2 id="what-is-polyaspartic" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Is Polyaspartic?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Polyaspartic is a type of polyurea — a newer chemistry developed
              as a topcoat for industrial and commercial flooring. It cures much
              faster than epoxy (2–6 hours per coat), has excellent UV
              stability, and is more flexible, which means it resists cracking
              better in environments with temperature swings.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The fast cure time is the biggest practical advantage. A
              polyaspartic topcoat over a polyurea base allows us to complete
              qualifying residential ProFlake garage floors in a single day
              &mdash; you can walk on it after 24 hours and park on it after
              48 hours.*
            </p>

            <h2 id="head-to-head-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Head-to-Head Comparison
            </h2>

            {/* Comparison table */}
            <div className="overflow-x-auto -mx-4 sm:mx-0 my-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Factor
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Epoxy
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Polyaspartic
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Cure Time
                    </td>
                    <td className="px-5 py-3 text-gray-600">24–72 hours</td>
                    <td className="px-5 py-3 text-gray-600">2–6 hours</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      UV Stability
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Can yellow over time
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Excellent — won&apos;t yellow
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Abrasion Resistance
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Excellent
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Excellent
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Chemical Resistance
                    </td>
                    <td className="px-5 py-3 text-gray-600">Very good</td>
                    <td className="px-5 py-3 text-gray-600">Very good</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Flexibility
                    </td>
                    <td className="px-5 py-3 text-gray-600">Rigid</td>
                    <td className="px-5 py-3 text-gray-600">
                      More flexible
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Hot Tire Pickup
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Possible with low-grade epoxy
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Resistant
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Cost
                    </td>
                    <td className="px-5 py-3 text-gray-600">Lower</td>
                    <td className="px-5 py-3 text-gray-600">Higher</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Installation Time
                    </td>
                    <td className="px-5 py-3 text-gray-600">2–3 days</td>
                    <td className="px-5 py-3 text-gray-600">1 day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="why-we-use-both-together" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Why We Use Both — Together
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake system</Link> uses a polyurea base coat for its superior
              bonding and build thickness, combined with a polyaspartic topcoat
              for UV stability, fast cure, and hot-tire resistance. You get the
              strengths of both chemistries in a single system.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The polyurea base goes down first and gets the decorative flake
              broadcast. Then the polyaspartic topcoat locks everything in,
              creating a smooth, glossy, UV-stable surface that handles Las
              Vegas garage temperatures without yellowing or lifting.
            </p>

            <h2 id="what-about-one-day-epoxy-companies" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What About &quot;One-Day Epoxy&quot; Companies?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Some companies advertise &quot;one-day epoxy&quot; garage floor
              coatings. In most cases, these are actually polyaspartic or
              polyurea systems — not true epoxy. The marketing uses
              &quot;epoxy&quot; because it&apos;s the more recognized term.
              There&apos;s nothing inherently wrong with polyaspartic-only
              systems, but you should know what you&apos;re actually getting.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ask your installer what products they use — brand, chemistry, and
              number of coats. A reputable company will tell you exactly what
              goes on your floor.
            </p>

            <h2 id="the-bottom-line" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For Las Vegas garages, the best system combines a polyurea base
              with a polyaspartic topcoat. You get the bonding strength and
              build of polyurea plus the UV stability, fast cure, and hot-tire
              resistance of polyaspartic. That&apos;s what our <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake system</Link>
              delivers.
            </p>

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
            <p className="text-gray-600 leading-relaxed">
              Neither is universally &quot;better&quot; &mdash; they have
              different strengths. Epoxy provides superior bonding and build
              thickness. Polyaspartic offers faster cure times and better UV
              stability. The best garage floor systems use both together:
              a polyurea base for adhesion and a polyaspartic topcoat for
              protection.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does a polyaspartic garage floor last?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A professionally installed polyurea base with polyaspartic topcoat
              &mdash; like our ProFlake system &mdash; lasts 15&ndash;20+
              years in a residential garage. The key factors are surface
              preparation quality, coating thickness, and environmental
              exposure.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can you apply polyaspartic without an epoxy base?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, polyaspartic-only systems exist. Some companies use them
              for fast, single-day installs. However, a polyurea base provides
              more build thickness and a stronger mechanical bond to the
              concrete. The combination of polyurea base + polyaspartic topcoat
              gives you the advantages of both chemistries.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Why do some &quot;one-day epoxy&quot; companies use polyaspartic
              instead?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              True epoxy requires 24&ndash;72 hours to cure, so it can&apos;t
              be completed in one day on its own. Companies advertising
              &quot;one-day epoxy&quot; are typically using polyaspartic or
              polyurea systems that cure in 2&ndash;6 hours. This isn&apos;t
              necessarily bad &mdash; just ask what products are actually being
              applied so you know what you&apos;re getting.
            </p>

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
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Julian is the founder of ProShield Epoxy, a professional floor coating company
                  serving the Las Vegas metro area. He specializes in residential garage coatings,
                  commercial resinous flooring, and specialty systems including metallic epoxy,
                  VubaStone, and concrete polishing. Every article is written from hands-on
                  installation experience — not recycled from the internet.
                </p>
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

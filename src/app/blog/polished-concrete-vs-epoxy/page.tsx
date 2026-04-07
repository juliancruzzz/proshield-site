import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Polished Concrete vs Epoxy Flooring | ProShield Epoxy",
  description:
    "Polished concrete vs epoxy flooring comparison — durability, cost, maintenance, and total cost of ownership. Las Vegas flooring guide from professional installer.",
  alternates: {
    canonical: "/blog/polished-concrete-vs-epoxy",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/polished-concrete-vs-epoxy",
    images: ["/images/concrete-polishing/polished-floor-showroom.webp"],
  },
}

export default function PolishedConcreteVsEpoxyPost() {
  const schema = blogPostingSchema({
    title: "Polished Concrete vs. Epoxy Flooring: Which Is Right for Your Space?",
    description: "Compare polished concrete and epoxy flooring — installation, durability, cost, maintenance, and long-term value. Which system wins for your warehouse, retail, garage, or office? Las Vegas flooring guide.",
    slug: "polished-concrete-vs-epoxy",
    datePublished: "2026-03-18",
    image: "https://proshieldepoxy.com/images/concrete-polishing/polished-floor-showroom.webp",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is more durable: polished concrete or epoxy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both are durable, but in different ways. Polished concrete is harder and lasts longer without maintenance (25–40+ years). Epoxy is more flexible and chemically protected but may need topcoat refresh after 10–15 years. Polished concrete is the more durable choice for permanence; epoxy is more resilient to chemical damage."
        }
      },
      {
        "@type": "Question",
        "name": "Which is cheaper: polished concrete or epoxy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upfront, polished concrete runs $6–$12/sq ft compared to $3.50–$6+/sq ft for epoxy. Over 25 years, polished concrete is cheaper because you never pay for recoats. For garages and smaller residential projects, epoxy's faster installation and design options often win despite higher total cost."
        }
      },
      {
        "@type": "Question",
        "name": "Can you polish over old epoxy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. If you want to switch from epoxy to polished concrete, you must remove the epoxy coating first through mechanical methods (grinding, shot blasting, scarification). Only then can polishing begin. This is why long-term planning is important—choose a system that fits your vision for the next 25 years."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better for a garage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For residential garages, epoxy wins—specifically our ProFlake system. It installs in one day, comes in 150+ color blends, resists hot tire pickup, and won't yellow under the desert sun. The base coat is epoxy, the topcoat is polyaspartic, which gives you durability, beauty, and UV stability combined. All qualifying residential systems come with a limited lifetime warranty."
        }
      },
      {
        "@type": "Question",
        "name": "How long does polished concrete take to install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Polished concrete is not a one-day process. Typical timelines are 3–7 days depending on concrete condition, square footage, and site accessibility. Each grinding stage takes time, and the densification chemical must be allowed to cure properly. Rushing the process compromises the final finish."
        }
      },
      {
        "@type": "Question",
        "name": "What if my concrete has cracks or damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For polished concrete, cracks in the concrete remain visible after polishing (though they're less pronounced). Epoxy systems can fill and hide cracks better because the coating builds up over the surface. If your concrete has significant damage, epoxy may be the better choice unless you're willing to repair the concrete before polishing."
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
      { "@type": "ListItem", "position": 3, "name": "Polished Concrete vs. Epoxy", "item": "https://proshieldepoxy.com/blog/polished-concrete-vs-epoxy" }
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
      <section className="section-white pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </Link>
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-4">
            Flooring Comparison
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight">
            Polished Concrete vs. Epoxy Flooring: Which Is Right for Your
            Space?
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
            <span>By <span className="font-medium text-gray-700">Julian Cruz</span></span>
            <span className="text-gray-300">|</span>
            <time dateTime="2026-03-18">March 18, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> March 18, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 10 min read
            </span>
          </div>
        </div>
      </section>

      <article className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Both polished concrete and epoxy flooring are excellent commercial
              flooring solutions. Both look professional, perform well under
              heavy traffic, and can last for decades. But they&apos;re
              fundamentally different: one is the concrete itself refined
              through mechanical diamond grinding, the other is a protective
              coating system applied on top. Understanding how they work, what
              they cost, and where they excel is essential to choosing the right
              system for your space.
            </p>

            {/* Table of Contents */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#how-they-work-the-fundamental-difference" className="text-accent hover:underline">How They Work: The Fundamental Difference</a>
                  </li>
                  <li>
                    <a href="#head-to-head-comparison" className="text-accent hover:underline">Head-to-Head Comparison</a>
                  </li>
                  <li>
                    <a href="#when-to-choose-polished-concrete" className="text-accent hover:underline">When to Choose Polished Concrete</a>
                  </li>
                  <li>
                    <a href="#when-to-choose-epoxy" className="text-accent hover:underline">When to Choose Epoxy</a>
                  </li>
                  <li>
                    <a href="#the-cost-comparison-nobody-talks-about" className="text-accent hover:underline">The Cost Comparison Nobody Talks About</a>
                  </li>
                  <li>
                    <a href="#can-you-have-both" className="text-accent hover:underline">Can You Have Both?</a>
                  </li>
                  <li>
                    <a href="#las-vegas-considerations" className="text-accent hover:underline">Las Vegas Considerations</a>
                  </li>
                  <li>
                    <a href="#frequently-asked-questions" className="text-accent hover:underline">Frequently Asked Questions</a>
                  </li>
                </ul>
              </nav>
            </div>

            <h2 id="how-they-work-the-fundamental-difference" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How They Work: The Fundamental Difference
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              <Link href="/concrete-polishing" className="text-accent hover:underline font-medium">Polished Concrete</Link>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Polished concrete is mechanical refinement of the concrete surface
              itself. Diamond grinding pads progressively grind down the surface,
              exposing the aggregate and creating a smooth, reflective finish.
              The process typically involves 6&ndash;9 grinding stages, starting
              with coarse grits and moving to fine polishing grits (diamonds up
              to 3000+ grit). A densification chemical is then applied, which
              hardens the top layer of concrete and closes surface pores. No
              coating is added—the durability comes from the concrete itself.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Epoxy Flooring
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Epoxy is a layered coating system applied on top of properly
              prepared concrete. The process begins with thorough surface
              preparation (grinding, shot blasting, or scarification). Then a
              primer coat bonds to the concrete, followed by one or more body
              coats for thickness and color, and a topcoat for protection and
              aesthetics. A residential garage system like our <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake</Link> includes
              a polyurea base coat with decorative flakes and a polyaspartic
              topcoat for UV stability and fast cure. All layers work together
              to create a durable, sealed surface.
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
                      Polished Concrete
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Epoxy
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Installation Time
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      3&ndash;7 days (varies with concrete condition)
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      1&ndash;3 days (system dependent)
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Upfront Cost
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      $6–$12 per sq ft
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      $3.50–$6+ per sq ft
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Lifespan
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      25&ndash;40+ years (no recoat cycle)
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      15&ndash;25+ years (may need topcoat refresh)
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Maintenance
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Low—sweep and wet mop
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Low—avoid harsh chemicals
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Design Options
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Neutral gray; aggregate color exposed
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      100+ colors, metallics, flakes, patterns
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      UV Resistance
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Excellent—no coating to yellow
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Good (polyaspartic topcoat won&apos;t yellow)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Chemical Resistance
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Moderate—etching possible
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Excellent—sealed surface
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Slip Resistance
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      High (aggregate texture)
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Moderate to high (can add additives)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Repair Process
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Simple if minor; re-polishing small areas
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      More involved; patch may be visible
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      25-Year Total Cost
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Lower (no recoats)
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Higher (maintenance/refresh)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="when-to-choose-polished-concrete" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              When to Choose Polished Concrete
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Polished concrete excels in environments where you want
              decades&ndash;long durability with minimal maintenance and no
              coating to reapply. It&apos;s ideal for:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>
                <strong>Warehouses and industrial facilities</strong>—heavy
                traffic, long equipment life, no aesthetic concerns
              </li>
              <li>
                <strong>Retail showrooms and galleries</strong>—the light
                reflectivity enhances the space and reduces lighting costs
              </li>
              <li>
                <strong>Offices and corporate spaces</strong>—professional
                appearance with minimal upkeep
              </li>
              <li>
                <strong>Facilities planning for 25+ years ahead</strong>—the
                total cost of ownership wins long-term
              </li>
              <li>
                <strong>Outdoor or semi-outdoor spaces</strong>—polished
                concrete won&apos;t yellow under UV exposure
              </li>
            </ul>

            <h2 id="when-to-choose-epoxy" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              When to Choose Epoxy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Epoxy flooring gives you design flexibility, faster installation,
              and superior chemical protection. It&apos;s the right choice for:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>
                <strong>Residential garages</strong>—our <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake system</Link> combines
                beauty, durability, and one-day installation with polyurea base and
                polyaspartic topcoat
              </li>
              <li>
                <strong>Spaces needing custom colors, metallics, or decorative
                  flakes</strong>—epoxy offers 100+ design combinations
              </li>
              <li>
                <strong>Chemical-heavy environments</strong>—printing facilities,
                labs, loading docks where acid, oil, or solvent exposure is
                frequent
              </li>
              <li>
                <strong>Areas requiring specific texture or grip</strong>—epoxy
                can be customized for anti-slip properties
              </li>
              <li>
                <strong>Quick turnaround projects</strong>—epoxy can be completed
                in 1&ndash;3 days versus 3&ndash;7 for polishing
              </li>
            </ul>

            <h2 id="the-cost-comparison-nobody-talks-about" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              The Cost Comparison Nobody Talks About
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Upfront cost tells only half the story. When you look at total
              cost of ownership over 25 years, polished concrete wins—but
              let&apos;s break down the math.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Polished Concrete Example (10,000 sq ft warehouse)
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>Initial installation: $6/sq ft × 10,000 = $60,000</li>
              <li>Maintenance (25 years): periodic sweeping, wet mopping = ~$2,000</li>
              <li>Recoating: None required</li>
              <li className="font-semibold text-gray-900">
                25-Year Total: ~$62,000
              </li>
            </ul>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Epoxy Flooring Example (10,000 sq ft warehouse)
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>Initial installation: $4/sq ft × 10,000 = $40,000</li>
              <li>
                Maintenance (25 years): cleaning, minor repairs = ~$5,000
              </li>
              <li>
                Topcoat refresh (every 10&ndash;12 years): 2 cycles = ~$20,000
              </li>
              <li className="font-semibold text-gray-900">
                25-Year Total: ~$65,000
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-6">
              The difference: polished concrete costs roughly $3,000 less over a
              25-year period in this example—but the real savings is in
              zero recoating cycles and near-zero maintenance. For smaller spaces
              or shorter timelines, epoxy&apos;s lower upfront cost makes it very
              competitive.
            </p>

            <h2 id="can-you-have-both" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Can You Have Both?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Absolutely. Many larger facilities use both systems strategically:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>
                <strong>Main warehouse floor</strong>—polished concrete for
                longevity and low maintenance
              </li>
              <li>
                <strong>Loading docks and chemical storage</strong>—epoxy for
                chemical resistance and sealing
              </li>
              <li>
                <strong>Office areas within the facility</strong>—epoxy with
                color and design for aesthetics
              </li>
              <li>
                <strong>Specialized zones</strong>—epoxy with anti-slip additives
                where safety is critical
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              ProShield can help you design a hybrid approach that maximizes
              durability and performance for each zone of your facility.
            </p>

            <h2 id="las-vegas-considerations" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Las Vegas Considerations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Desert heat, intense UV, and dust present unique flooring
              challenges. Here&apos;s how each system performs in Las Vegas:
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Polished Concrete
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Polished concrete handles Las Vegas conditions beautifully. The
              concrete surface won&apos;t yellow or degrade under intense UV
              because there&apos;s no coating to fail. Heat can actually improve
              cure of the densification chemical. The main concern is dust
              accumulation on the reflective surface—but regular wet mopping
              solves this easily and is part of normal maintenance anyway.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Epoxy Flooring
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A polyaspartic topcoat (like the one in our <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake system</Link>)
              excels in Las Vegas. Polyaspartic is UV-stable and won&apos;t
              yellow, making it perfect for the desert sun. It also resists hot
              tire pickup—important for garages and parking areas where hot
              asphalt meets coating. Standard epoxy-only systems can yellow
              slightly over time in intense UV, so polyaspartic is the better
              choice for outdoor or semi-outdoor facilities.
            </p>

            <h2 id="frequently-asked-questions" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Which is more durable: polished concrete or epoxy?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Both are durable, but in different ways. Polished concrete is
              harder and lasts longer without maintenance (25&ndash;40+ years).
              Epoxy is more flexible and chemically protected but may need
              topcoat refresh after 10&ndash;15 years. Polished concrete is the
              more durable choice for permanence; epoxy is more resilient to
              chemical damage.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Which is cheaper: polished concrete or epoxy?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Upfront, polished concrete runs $6–$12/sq ft compared to
              $3.50–$6+/sq ft for epoxy. Over 25 years, polished
              concrete is cheaper because you never pay for recoats. For garages
              and smaller residential projects, epoxy&apos;s faster installation
              and design options often win despite higher total cost.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can you polish over old epoxy?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              No. If you want to switch from epoxy to polished concrete, you
              must remove the epoxy coating first through mechanical methods
              (grinding, shot blasting, scarification). Only then can polishing
              begin. This is why long-term planning is important—choose a system
              that fits your vision for the next 25 years.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Which is better for a garage?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For residential garages, epoxy wins—specifically our <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake
              system</Link>. It installs in one day, comes in 150+ color blends,
              resists hot tire pickup, and won&apos;t yellow under the desert
              sun. The base coat is epoxy, the topcoat is polyaspartic, which
              gives you durability, beauty, and UV stability combined. All
              qualifying residential systems come with a limited lifetime
              warranty.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does polished concrete take to install?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Polished concrete is not a one-day process. Typical timelines are
              3&ndash;7 days depending on concrete condition, square footage, and
              site accessibility. Each grinding stage takes time, and the
              densification chemical must be allowed to cure properly. Rushing
              the process compromises the final finish.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              What if my concrete has cracks or damage?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For polished concrete, cracks in the concrete remain visible after
              polishing (though they&apos;re less pronounced). Epoxy systems can
              fill and hide cracks better because the coating builds up over the
              surface. If your concrete has significant damage, epoxy may be the
              better choice unless you&apos;re willing to repair the concrete
              before polishing.
            </p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Ready to Choose the Right Floor?
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                Talk to a ProShield flooring specialist. We&apos;ll assess your
                space, timeline, and goals—then recommend polished concrete,
                epoxy, or a hybrid approach.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
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

      <RelatedPosts currentSlug="polished-concrete-vs-epoxy" />

      <CtaSection />
    </>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "How Long Does Epoxy Flooring Last? Lifespan by System Type | ProShield",
  description:
    "Professional epoxy flooring lasts 15–40+ years depending on system type, climate, and maintenance. Learn lifespan for ProFlake, metallic, polished concrete, and more.",
  alternates: {
    canonical: "/blog/how-long-does-epoxy-flooring-last",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/how-long-does-epoxy-flooring-last",
    images: ["/images/proflake/flake-garage-wide-clean.webp"],
  },
}

export default function EpoxyFloorsLifespanPost() {
  const schema = blogPostingSchema({
    title: "How Long Does Epoxy Flooring Last? Lifespan by System Type",
    description: "Professional epoxy flooring lasts 15–40+ years depending on system type, climate, and maintenance. Learn lifespan for ProFlake, metallic, polished concrete, and more.",
    slug: "how-long-does-epoxy-flooring-last",
    datePublished: "2026-04-07",
    image: "https://proshieldepoxy.com/images/proflake/flake-garage-wide-clean.webp",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does epoxy flooring last in Las Vegas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional epoxy systems in Las Vegas typically last 15–20+ years for residential applications like ProFlake and metallic epoxy. Extreme heat (140–160°F surface temps) and intense UV radiation (300+ days of sun annually) make UV-stable topcoats essential. Polished concrete, which is a mechanical process rather than a coating, can last 20–40+ years under proper care."
        }
      },
      {
        "@type": "Question",
        "name": "Does epoxy flooring need to be resealed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High-quality professional epoxy systems like ProFlake don't require resealing during their lifespan. However, in high-traffic commercial areas or if the topcoat shows significant wear after 10–15 years, a fresh topcoat application can extend the life another 5–10 years. Regular maintenance (sweeping, mild cleaning) keeps coatings looking new for much longer."
        }
      },
      {
        "@type": "Question",
        "name": "Is DIY epoxy flooring durable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DIY epoxy kits typically last only 1–3 years, especially in Las Vegas garages where heat and UV exposure are intense. Water-based and thin-film DIY epoxies lack the thickness and UV stability of professional systems. They're often applied over acid-etched concrete (inadequate surface prep) and fail by peeling within 1–2 years in our climate."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between polished concrete and epoxy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Polished concrete is a mechanical surface treatment—not a coating. It uses progressively finer diamond abrasives to smooth and densify the concrete's top layer. It can last 20–40+ years with proper care. Epoxy coatings sit on top of concrete and create a different aesthetic and durability profile. Polished concrete is NOT a coating and has different maintenance needs than epoxy."
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
      { "@type": "ListItem", "position": 3, "name": "How Long Does Epoxy Flooring Last?", "item": "https://proshieldepoxy.com/blog/how-long-does-epoxy-flooring-last" }
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
            Flooring Guide
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            How Long Does Epoxy Flooring Last? Lifespan by System Type
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-04-07">April 7, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> April 7, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 9 min read
            </span>
          </div>
        </div>
      </section>

      <article className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              The lifespan of epoxy flooring depends entirely on which system you choose, how well the concrete was prepared, and how much abuse it takes. Professional epoxy systems typically last <strong>15–20+ years</strong> in residential settings, while polished concrete can exceed <strong>20–40+ years</strong>. DIY kits, by contrast, often fail within <strong>1–3 years</strong> in Las Vegas's extreme heat. Below we break down expected lifespan by system type, the factors that determine whether your floor reaches 20 years or fails in 3, and the Las Vegas-specific climate challenges that demand UV-stable topcoats.
            </p>

            {/* Table of Contents */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#lifespan-by-system-type" className="text-accent hover:underline">Lifespan by System Type</a>
                  </li>
                  <li>
                    <a href="#proflake-residential-epoxy" className="text-accent hover:underline">ProFlake (Epoxy + Polyaspartic)</a>
                  </li>
                  <li>
                    <a href="#metallic-epoxy-systems" className="text-accent hover:underline">Metallic Epoxy Systems</a>
                  </li>
                  <li>
                    <a href="#polished-concrete-not-a-coating" className="text-accent hover:underline">Polished Concrete (Not a Coating)</a>
                  </li>
                  <li>
                    <a href="#commercial-resinous-flooring" className="text-accent hover:underline">Commercial Resinous Flooring</a>
                  </li>
                  <li>
                    <a href="#factors-affecting-lifespan" className="text-accent hover:underline">Factors Affecting Lifespan</a>
                  </li>
                  <li>
                    <a href="#las-vegas-climate-challenges" className="text-accent hover:underline">Las Vegas Climate Challenges</a>
                  </li>
                  <li>
                    <a href="#frequently-asked-questions" className="text-accent hover:underline">Frequently Asked Questions</a>
                  </li>
                </ul>
              </nav>
            </div>

            <h2 id="lifespan-by-system-type" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Lifespan by System Type
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The type of coating you install is the single largest factor determining how many years you'll get out of your floor. Below is what you can realistically expect from each system type when installed properly and maintained with basic care.
            </p>

            <div className="overflow-x-auto -mx-4 sm:mx-0 my-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      System Type
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Expected Lifespan
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Warranty*
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake</Link> (Epoxy + Polyaspartic)
                    </td>
                    <td className="px-5 py-3 text-gray-600">15–20+ years residential</td>
                    <td className="px-5 py-3 text-gray-600">Limited lifetime</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      <Link href="/metallic-epoxy" className="text-accent hover:underline font-medium">Metallic Epoxy</Link>
                    </td>
                    <td className="px-5 py-3 text-gray-600">15–20+ years residential</td>
                    <td className="px-5 py-3 text-gray-600">Limited lifetime</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      <Link href="/concrete-polishing" className="text-accent hover:underline font-medium">Polished Concrete</Link>
                    </td>
                    <td className="px-5 py-3 text-gray-600">20–40+ years (not a coating)</td>
                    <td className="px-5 py-3 text-gray-600">N/A (mechanical process)</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Commercial Urethane Cement
                    </td>
                    <td className="px-5 py-3 text-gray-600">10–15 years (heavy traffic)</td>
                    <td className="px-5 py-3 text-gray-600">Limited commercial</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Commercial Resin Quartz
                    </td>
                    <td className="px-5 py-3 text-gray-600">10–20 years (heavy traffic)</td>
                    <td className="px-5 py-3 text-gray-600">Limited commercial</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      DIY Epoxy Kits
                    </td>
                    <td className="px-5 py-3 text-gray-600">1–3 years (Las Vegas climate)</td>
                    <td className="px-5 py-3 text-gray-600">Usually none</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400 italic">
              *Warranties on qualifying residential systems cover adhesion/delamination defects under normal use and maintenance. They do not cover all issues, environmental damage, or improper application. Read warranty terms carefully.
            </p>

            <h2 id="proflake-residential-epoxy" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              ProFlake (Epoxy + Polyaspartic): 15–20+ Years
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our ProFlake system is an epoxy base coat with full decorative flake broadcast, topped with a polyaspartic clear coat. In residential settings like garages and basements, this system reliably lasts <strong>15–20+ years</strong> with normal use and maintenance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Polyaspartic topcoats are the key advantage. Unlike standard clear epoxy, polyaspartic doesn't yellow under UV exposure, which is critical in Las Vegas where garages get constant direct sunlight. The flake layer also provides decorative appeal while the system resists hot tire pickup, chemical spills, and thermal cycling that would crack lesser coatings.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Important note on "1-day install":</strong> Our 1-day installation applies only to qualifying residential ProFlake systems with favorable substrate conditions. Complex repairs, moisture mitigation, or removal of old coatings may extend the timeline. The fast turnaround is possible because polyaspartic topcoats cure rapidly and can handle light foot traffic within 24 hours.
            </p>

            <h2 id="metallic-epoxy-systems" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Metallic Epoxy Systems: 15–20+ Years
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Metallic epoxy is prized for its stunning, flowing finish. Like ProFlake, metallic epoxy systems last <strong>15–20+ years</strong> in residential applications. The longevity depends heavily on the <strong>topcoat type</strong> you choose.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Metallic systems can be finished with three different topcoat options, each with different UV stability characteristics:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 my-4">
              <li><strong>Polyaspartic topcoat:</strong> UV-stable, won't yellow, ideal for high-sun exposure. Extends lifespan to 15–20+ years. Faster cure time.</li>
              <li><strong>Polyurethane topcoat:</strong> Good UV stability, slight yellowing possible over 10+ years in intense Las Vegas sun. Lifespan 12–18 years. Slightly slower cure.</li>
              <li><strong>Clear epoxy topcoat:</strong> Not UV-stable. Will yellow and chalk within months in Las Vegas if the garage door is frequently open. Lifespan 3–8 years. <strong>Not recommended for Las Vegas residential applications.</strong></li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              The choice of topcoat dramatically affects real-world durability in our climate. For Las Vegas, polyaspartic is the clear winner for metallic systems that will maintain their appearance and performance for 15–20+ years.
            </p>

            <h2 id="polished-concrete-not-a-coating" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Polished Concrete: 20–40+ Years (Not a Coating)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Polished concrete is fundamentally different from epoxy and other coatings—it's a <strong>mechanical process, not a coating</strong>. Diamond abrasives progressively grind and smooth the concrete's surface, densifying the top layer and creating a glossy finish.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Because there's no coating to peel or delaminate, polished concrete can last <strong>20–40+ years</strong> with proper maintenance. The concrete itself is being modified, not covered. Polished concrete is resistant to thermal cycling, UV exposure (because there's no coating to fade), and the extreme heat in Las Vegas garages.
            </p>
            <p className="text-gray-600 leading-relaxed">
              However, polished concrete requires different care than epoxy. It's more porous than sealed epoxy and can stain from oils or chemicals. Regular sweeping, neutral pH cleaners, and periodic repolishing every 3–5 years maintains its appearance. It's slicker than textured epoxy, which some homeowners prefer and others find less practical for workbenches.
            </p>

            <h2 id="commercial-resinous-flooring" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Commercial Resinous Flooring: 10–20 Years (Traffic-Dependent)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Commercial-grade resinous systems include urethane cement flooring and resin quartz systems designed for warehouses, manufacturing facilities, and high-traffic commercial spaces. These are engineered to withstand forklift traffic, chemical exposure, and extreme wear.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Urethane cement:</strong> 10–15 years under heavy traffic, longer in light commercial settings. Thick, durable, and self-leveling. Designed for chemical resistance in industrial environments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Resin quartz:</strong> 10–20 years depending on traffic levels and maintenance. Aggregate-based systems with excellent durability. Often used in food processing, pharmaceutical, and automotive facilities where chemical resistance is critical.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lifespan in commercial settings depends heavily on traffic intensity. A lightly used commercial space might see 15–20 years, while a high-traffic warehouse might see 10–12 years before needing refresh.
            </p>

            <h2 id="factors-affecting-lifespan" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Factors That Determine Whether You Get 15 Years or 3 Years
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Two garages with the same epoxy system can have wildly different lifespans. These are the critical factors:
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Surface Preparation Quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This is the single most important factor. Professional diamond grinding creates a surface profile that allows mechanical bonding. Acid etching (used in DIY kits) is shallow and often fails under Las Vegas heat. Improper surface prep is the #1 reason coatings peel within 1–3 years.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Concrete Condition
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cracks, spalling, moisture, and existing failed coatings shorten lifespan. Moisture-laden concrete is a primary cause of delamination. Professional assessment catches these issues before installation so remediation ensures the coating bonds properly.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              UV Exposure &amp; Topcoat Type
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In Las Vegas, UV stability is non-negotiable. Clear epoxy topcoats fail within months in high-sun garages. Polyaspartic topcoats (polyurea variants) are inherently UV-stable and are the difference between a floor that looks new at year 15 versus yellowed and chalked by year 5.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Maintenance &amp; Care
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Regular sweeping, mild soap cleaning, and avoiding harsh chemicals and abrasive scrubbing pads extend lifespan significantly. Neglect and improper cleaning (citrus-based degreasers on metallic finishes, for example) can shorten lifespan by half.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Traffic &amp; Use Intensity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A garage with a few family cars sees different wear than a commercial lot. Residential systems last 15–20+ years under normal use. High-traffic commercial spaces see faster wear and may need refreshing or repairs after 10–15 years.
            </p>

            <h2 id="las-vegas-climate-challenges" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Why Las Vegas Climate Demands Specific Systems
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Las Vegas is not a typical climate for flooring coatings. Summer surface temperatures on exposed concrete floors regularly reach <strong>140–160°F</strong>. Add to that over <strong>300 days of direct sunshine annually</strong> and some of the most intense UV radiation in the country. Standard systems that work in milder climates often fail here within 1–3 years.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Extreme Heat &amp; Thermal Cycling
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The constant expansion and contraction from 140°F days to 60°F nights creates stress on coatings. Professional systems engineered for high-heat environments use flexible, tough chemistries that move with the concrete rather than cracking. DIY water-based epoxies become brittle and fail under this thermal stress.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Intense UV Radiation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Clear epoxy topcoats are inherently vulnerable to UV. In Las Vegas, they chalk and yellow within months if the garage door is left open. Polyaspartic topcoats don't have this problem—they're formulated to resist photodegradation. If your epoxy system won't be sealed (indoors only) or will see sun exposure, polyaspartic is not optional; it's essential for any lifespan beyond 3–5 years.
            </p>

            <div className="rounded-xl bg-blue-50 border border-blue-200 p-6 sm:p-8 my-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Understanding Our Warranty
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                We offer a <strong>limited lifetime warranty</strong> on qualifying residential systems. This covers adhesion and delamination defects under normal use, proper maintenance, and the terms outlined in the warranty agreement. It does NOT cover environmental damage, improper cleaning, chemical damage, abuse, or systems outside the specified scope.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The "limited" scope is important: we're covering manufacturing defects and workmanship, not wear-and-tear over decades. Read your warranty terms before installation to understand what's covered.
              </p>
            </div>

            <h2 id="frequently-asked-questions" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does epoxy flooring last in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Professional epoxy systems like ProFlake and metallic epoxy typically last 15–20+ years in residential settings. Polished concrete lasts 20–40+ years. Las Vegas's extreme heat and UV radiation make UV-stable topcoats (polyaspartic) essential. DIY kits often fail within 1–3 years due to inadequate surface prep and thin coatings.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Does epoxy flooring need to be resealed?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              High-quality professional epoxy systems don't require resealing during their lifespan if properly installed and maintained. After 10–15 years in high-traffic areas, a fresh topcoat application can extend life another 5–10 years. Regular maintenance—sweeping and mild soap cleaning—keeps coatings in excellent condition for their entire lifespan.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is DIY epoxy flooring durable?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              DIY epoxy kits are not durable in Las Vegas's climate. Most last 1–3 years before peeling. Water-based and thin-film DIY products lack the coating thickness (professional systems are 15–25+ mils; DIY kits are 3–5 mils) and UV stability of professional systems. DIY acid-etched surface prep is also inadequate for lasting adhesion under Las Vegas heat.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              What's the difference between polished concrete and epoxy?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Polished concrete is a mechanical surface treatment using diamond abrasives—it's not a coating. It lasts 20–40+ years because nothing is sitting on top of the concrete to peel or delaminate. Epoxy is a liquid coating that cures and sits atop concrete. The two have different aesthetics, maintenance needs, and performance profiles. Polished concrete is not a coating.
            </p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Want a Flooring System That Lasts 15–20+ Years?
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                We'll assess your concrete, recommend the right system for Las Vegas's climate, and explain exactly what to expect. No guesswork, no surprises.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Get Your Free Consultation <ArrowRight className="h-4 w-4" />
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

      <RelatedPosts currentSlug="how-long-does-epoxy-flooring-last" />

      <CtaSection />
    </>
  )
}

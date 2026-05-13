import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Coolest Pool Deck Flooring for Las Vegas (2026) | Compare Every Option | ProShield",
  description:
    "Compare every pool deck surface for Las Vegas heat — cool deck, travertine, pavers, and rubber aggregate. Real surface temps, costs ($6–30/sq ft), lifespan, slip ratings, and maintenance from a crew that installs them all.",
  alternates: {
    canonical: "/blog/coolest-pool-deck-flooring-las-vegas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/coolest-pool-deck-flooring-las-vegas",
    images: ["/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"],
  },
}

/* ------------------------------------------------------------------ */
/*  Inline SVG Infographics                                           */
/* ------------------------------------------------------------------ */

function TempComparisonChart() {
  const surfaces = [
    { name: "Bare Concrete", temp: 170, color: "#dc2626", pct: 100 },
    { name: "Pavers", temp: 155, color: "#ea580c", pct: 88 },
    { name: "Travertine", temp: 140, color: "#f59e0b", pct: 76 },
    { name: "Cool Deck", temp: 130, color: "#eab308", pct: 70 },
    { name: "Rubber Deck", temp: 110, color: "#22c55e", pct: 56 },
  ]
  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <h3 className="font-heading font-bold text-lg text-gray-900 mb-1 text-center">
        Peak Surface Temperature by Material
      </h3>
      <p className="text-sm text-gray-500 text-center mb-6">
        Measured in direct Las Vegas sun, July afternoon (ambient 115&deg;F)
      </p>
      <div className="space-y-4">
        {surfaces.map((s) => (
          <div key={s.name} className="flex items-center gap-3">
            <span className="w-28 sm:w-32 text-sm font-medium text-gray-700 text-right shrink-0">
              {s.name}
            </span>
            <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden relative">
              <div
                className="h-full rounded-full flex items-center justify-end pr-3 transition-all duration-700"
                style={{
                  width: `${s.pct}%`,
                  backgroundColor: s.color,
                }}
              >
                <span className="text-xs font-bold text-white drop-shadow">
                  {s.temp}&deg;F
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center italic">
        Data based on infrared surface readings. Actual temps vary by color, shade, and time of day.
      </p>
    </div>
  )
}

function MaterialComparisonTable() {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0 my-10">
      <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left px-4 py-3.5 font-heading font-semibold text-gray-900">Feature</th>
            <th className="text-center px-4 py-3.5 font-heading font-semibold text-gray-900">Cool Deck</th>
            <th className="text-center px-4 py-3.5 font-heading font-semibold text-gray-900">Travertine</th>
            <th className="text-center px-4 py-3.5 font-heading font-semibold text-gray-900">Pavers</th>
            <th className="text-center px-4 py-3.5 font-heading font-semibold text-gray-900">Rubber Deck</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-3 text-gray-700 font-medium">Surface Temp (peak)</td>
            <td className="px-4 py-3 text-center text-yellow-600">~130&deg;F</td>
            <td className="px-4 py-3 text-center text-orange-500">~140&deg;F</td>
            <td className="px-4 py-3 text-center text-red-500">~155&deg;F</td>
            <td className="px-4 py-3 text-center text-green-600 font-semibold">~110&deg;F</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="px-4 py-3 text-gray-700 font-medium">Slip Resistance (wet)</td>
            <td className="px-4 py-3 text-center text-yellow-600">Good</td>
            <td className="px-4 py-3 text-center text-orange-500">Fair</td>
            <td className="px-4 py-3 text-center text-yellow-600">Good</td>
            <td className="px-4 py-3 text-center text-green-600 font-semibold">Excellent</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-gray-700 font-medium">Comfort Underfoot</td>
            <td className="px-4 py-3 text-center text-gray-500">Hard</td>
            <td className="px-4 py-3 text-center text-gray-500">Hard</td>
            <td className="px-4 py-3 text-center text-gray-500">Hard</td>
            <td className="px-4 py-3 text-center text-green-600 font-semibold">Cushioned</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="px-4 py-3 text-gray-700 font-medium">Impact Safety</td>
            <td className="px-4 py-3 text-center text-gray-500">Low</td>
            <td className="px-4 py-3 text-center text-gray-500">Low</td>
            <td className="px-4 py-3 text-center text-gray-500">Low</td>
            <td className="px-4 py-3 text-center text-green-600 font-semibold">High</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-gray-700 font-medium">Lifespan</td>
            <td className="px-4 py-3 text-center">10&ndash;15 yrs</td>
            <td className="px-4 py-3 text-center">15&ndash;20 yrs</td>
            <td className="px-4 py-3 text-center">15&ndash;20 yrs</td>
            <td className="px-4 py-3 text-center font-medium">10&ndash;15 yrs</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="px-4 py-3 text-gray-700 font-medium">Cost / Sq Ft</td>
            <td className="px-4 py-3 text-center">$6&ndash;$9</td>
            <td className="px-4 py-3 text-center">$15&ndash;$27</td>
            <td className="px-4 py-3 text-center">$10&ndash;$20</td>
            <td className="px-4 py-3 text-center font-medium">$15&ndash;$18</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-gray-700 font-medium">Crack Bridging</td>
            <td className="px-4 py-3 text-center text-red-500">No</td>
            <td className="px-4 py-3 text-center text-red-500">No</td>
            <td className="px-4 py-3 text-center text-yellow-600">Partial</td>
            <td className="px-4 py-3 text-center text-green-600 font-semibold">Yes</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="px-4 py-3 text-gray-700 font-medium">Maintenance</td>
            <td className="px-4 py-3 text-center text-orange-500">Reseal every 1&ndash;2 yrs</td>
            <td className="px-4 py-3 text-center text-orange-500">Seal annually</td>
            <td className="px-4 py-3 text-center text-orange-500">Re-sand joints</td>
            <td className="px-4 py-3 text-center">Reseal every 3&ndash;4 yrs</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function CostBreakdownChart() {
  const systems = [
    { name: "Cool Deck", low: 6, high: 9, color: "#94a3b8" },
    { name: "Rubber Deck", low: 15, high: 18, color: "#22c55e" },
    { name: "Pavers", low: 10, high: 20, color: "#f59e0b" },
    { name: "Travertine", low: 15, high: 27, color: "#ef4444" },
  ]
  const max = 30
  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <h3 className="font-heading font-bold text-lg text-gray-900 mb-1 text-center">
        Pool Deck Flooring Cost per Square Foot
      </h3>
      <p className="text-sm text-gray-500 text-center mb-6">
        Installed price range, Las Vegas market (2026)
      </p>
      <div className="space-y-5">
        {systems.map((s) => (
          <div key={s.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{s.name}</span>
              <span className="text-sm font-semibold text-gray-900">
                ${s.low}&ndash;${s.high}/sq ft
              </span>
            </div>
            <div className="h-6 bg-gray-100 rounded-full overflow-hidden relative">
              <div
                className="absolute h-full rounded-full opacity-90"
                style={{
                  left: `${(s.low / max) * 100}%`,
                  width: `${((s.high - s.low) / max) * 100}%`,
                  backgroundColor: s.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-3 text-xs text-gray-400">
        <span>$0</span>
        <span>$10</span>
        <span>$20</span>
        <span>$30</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function CoolestPoolDeckFlooringPost() {
  const schema = blogPostingSchema({
    title: "Coolest Pool Deck Flooring for Las Vegas: 2026 Comparison Guide",
    description:
      "Compare every pool deck surface for Las Vegas heat — cool deck, travertine, pavers, and rubber aggregate. Real surface temps, costs, lifespan, and maintenance from a crew that installs them all.",
    slug: "coolest-pool-deck-flooring-las-vegas",
    datePublished: "2026-05-01",
    dateModified: "2026-05-03",
    image: "https://proshieldepoxy.com/images/blog/rubber-deck/rubber-deck-pool-wide.jpg",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the coolest pool deck surface for Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rubber aggregate pool deck systems stay the coolest in Las Vegas heat, reaching approximately 110°F in peak summer sun compared to 170°F for bare concrete. Cool deck coatings are also effective and more affordable at $6–9 per square foot. Travertine stays cooler than pavers but still reaches around 140°F. For maximum heat reduction, rubber decking is the top performer.",
        },
      },
      {
        "@type": "Question",
        name: "How much does pool deck resurfacing cost in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pool deck resurfacing costs vary by material: cool deck coatings run $6–9 per square foot installed, rubber aggregate systems cost $15–18 per square foot, pavers run $10–20 per square foot, and travertine costs $15–27 per square foot. For a 600 sq ft pool deck, that's $3,600–$16,200+ depending on the material you choose.",
        },
      },
      {
        "@type": "Question",
        name: "How long does cool deck last in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A properly maintained cool deck coating lasts 10–15 years in Las Vegas conditions. It does require resealing every 1–2 years due to the intense desert UV exposure, which adds to the long-term cost. Without regular resealing, the coating can fade, chalk, and lose its heat-reflective properties faster.",
        },
      },
      {
        "@type": "Question",
        name: "Is rubber pool decking worth the cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Las Vegas homeowners, rubber pool decking offers the best combination of heat reduction, slip resistance, cushioned comfort, and low maintenance. It costs more upfront than cool deck ($15–18 vs $6–9 per sq ft) but only needs resealing every 3–4 years compared to cool deck's 1–2 year cycle — and it's just a pressure wash and clear coat roll-on. It's the best overall value for homeowners who prioritize comfort and safety.",
        },
      },
      {
        "@type": "Question",
        name: "Can you resurface a pool deck without removing existing concrete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cool deck coatings and rubber aggregate systems are both applied directly over existing concrete with no demolition required. The concrete needs to be structurally sound and properly prepped, but there's no need to rip out and repour your pool deck. This keeps costs down and reduces installation time to 2–3 days for most pool decks.",
        },
      },
      {
        "@type": "Question",
        name: "Does travertine get hot around a pool in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Travertine stays cooler than standard concrete or pavers thanks to its natural porosity and lighter color, but it still reaches around 140°F in peak Las Vegas summer sun. It's walkable for short periods but not truly comfortable barefoot during the hottest months. Cool deck and rubber aggregate both stay significantly cooler.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proshieldepoxy.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://proshieldepoxy.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Coolest Pool Deck Flooring for Las Vegas",
        item: "https://proshieldepoxy.com/blog/coolest-pool-deck-flooring-las-vegas",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Julian Cruz",
            jobTitle: "Founder",
            worksFor: {
              "@type": "Organization",
              name: "ProShield Epoxy",
              url: "https://proshieldepoxy.com",
            },
            url: "https://proshieldepoxy.com/about",
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gray-900 pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-8">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </Link>
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent mb-4">
            Pool Deck Flooring
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Coolest Pool Deck Flooring for Las Vegas: Every Option Compared
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>
              By <span className="font-medium text-gray-200">Julian Cruz</span>
            </span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-05-01">May 1, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Updated May 3, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 10 min read
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">

            {/* Hero Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"
                alt="Gray rubber aggregate pool deck around a Las Vegas pool — one of several cool deck flooring options compared"
                width={1200}
                height={823}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Every Las Vegas homeowner with a pool knows the drill: walk
              outside barefoot in July, sprint across the deck, and hope you
              make it to the water before your feet blister. Bare concrete
              hits <strong>150&ndash;170&deg;F</strong> under direct sun.
              So what actually keeps a pool deck cool enough to walk on?
              We install{" "}
              <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck</Link>,{" "}
              <Link href="/rubber-pool-deck" className="text-accent hover:underline font-medium">rubber aggregate</Link>,
              and coatings across the Las Vegas valley every week &mdash;
              here&apos;s how every major pool deck surface stacks up on
              temperature, cost, lifespan, and maintenance so you can pick
              the right one for your backyard.
            </p>

            {/* TOC */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li><a href="#why-surface-temp-matters" className="text-accent hover:underline">Why Surface Temperature Matters in Las Vegas</a></li>
                  <li><a href="#temperature-comparison" className="text-accent hover:underline">Temperature Comparison: Every Pool Deck Material</a></li>
                  <li><a href="#cool-deck" className="text-accent hover:underline">Cool Deck Coatings</a></li>
                  <li><a href="#travertine" className="text-accent hover:underline">Travertine</a></li>
                  <li><a href="#pavers" className="text-accent hover:underline">Pavers</a></li>
                  <li><a href="#rubber-deck" className="text-accent hover:underline">Rubber Aggregate Pool Decking</a></li>
                  <li><a href="#material-comparison" className="text-accent hover:underline">Side-by-Side Comparison Table</a></li>
                  <li><a href="#cost-comparison" className="text-accent hover:underline">Cost Comparison</a></li>
                  <li><a href="#our-recommendation" className="text-accent hover:underline">Our Recommendation</a></li>
                  <li><a href="#faq" className="text-accent hover:underline">Frequently Asked Questions</a></li>
                </ul>
              </nav>
            </div>

            {/* -------- Section: Why Temp Matters -------- */}
            <h2 id="why-surface-temp-matters" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Why Surface Temperature Matters in Las Vegas
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Las Vegas averages <strong>110&ndash;117&deg;F</strong> air
              temperatures from June through September. But air temp is
              only half the story. Hard surfaces absorb solar radiation all
              day and re-emit it as radiant heat, making the surface itself
              significantly hotter than the surrounding air. Dark concrete
              can exceed air temperature by 50&ndash;60&deg;F. That&apos;s
              the difference between uncomfortable and dangerous.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Two things determine whether you can walk on a surface
              barefoot: how hot the material gets, and how quickly it
              transfers that heat to your skin. Materials with low thermal
              conductivity (like rubber) transfer heat slowly, even when
              the surface is warm. Materials with high thermal conductivity
              (concrete, natural stone, pavers) dump heat into your skin
              almost instantly. Both factors matter when you&apos;re
              choosing a pool deck surface for Las Vegas.
            </p>

            {/* -------- Temp Comparison -------- */}
            <h2 id="temperature-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Temperature Comparison: Every Pool Deck Material
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We&apos;ve measured surface temperatures across dozens of
              pool deck installations in the Las Vegas valley using
              infrared thermometers during peak summer conditions.
              Here&apos;s how the major materials stack up:
            </p>

            <TempComparisonChart />

            <p className="text-gray-600 leading-relaxed">
              The ranking is clear: rubber aggregate stays the coolest,
              followed by cool deck coatings, then travertine, then pavers.
              Bare concrete is the worst by a wide margin. But temperature
              is only one factor &mdash; let&apos;s break down each option.
            </p>

            {/* -------- Cool Deck -------- */}
            <h2 id="cool-deck" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Cool Deck Coatings
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <Link href="/cool-deck" className="text-accent hover:underline font-medium">Cool deck</Link>{" "}
              is the most common pool deck resurfacing option in Las Vegas
              and for good reason &mdash; it works, it&apos;s affordable,
              and it can be applied over existing concrete without tearing
              anything out. The spray-applied acrylic coating creates a
              textured, light-colored surface that reflects sunlight and
              reduces surface temps to around <strong>130&deg;F</strong>{" "}
              in peak conditions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At <strong>$6&ndash;$9 per square foot</strong> installed,
              it&apos;s the most budget-friendly option on this list. For a
              standard 600 sq ft pool deck, you&apos;re looking at
              $3,600&ndash;$5,400. The tradeoff is maintenance &mdash; Las
              Vegas UV is brutal on acrylic coatings, so you&apos;ll need
              to <strong>reseal every 1&ndash;2 years</strong> to keep the
              coating protected and performing. With proper upkeep, a cool
              deck coating lasts <strong>10&ndash;15 years</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cool deck is a solid choice if budget is your top priority
              and you&apos;re willing to stay on top of the resealing
              schedule. We install cool deck across the valley and it&apos;s
              a great system at its price point.
            </p>

            {/* -------- Travertine -------- */}
            <h2 id="travertine" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Travertine
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Travertine is a natural stone that&apos;s popular around Las
              Vegas pools for its upscale look. Its natural porosity and
              lighter color help it stay cooler than concrete or pavers,
              reaching around <strong>140&deg;F</strong> in peak sun. It
              looks great and lasts <strong>15&ndash;20 years</strong> with
              proper care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The downsides are cost and maintenance. Travertine runs{" "}
              <strong>$15&ndash;$27 per square foot</strong> installed
              &mdash; the most expensive option on this list. It also needs
              annual sealing to prevent staining and water damage, and it
              can be slippery when wet depending on the finish. The surface
              is hard with no give, so falls on travertine hurt.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If aesthetics are the top priority and budget isn&apos;t a
              concern, travertine is a beautiful option. But it doesn&apos;t
              solve the heat problem as well as cool deck or rubber, and
              the ongoing sealing adds up over time.
            </p>

            {/* -------- Pavers -------- */}
            <h2 id="pavers" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Pavers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Concrete and brick pavers are a common hardscape choice
              around pools. They&apos;re durable, come in a variety of
              styles, and last <strong>15&ndash;20 years</strong>. However,
              they&apos;re one of the hotter surfaces you can choose,
              reaching around <strong>155&deg;F</strong> in direct Las
              Vegas sun &mdash; only bare concrete is worse.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cost runs <strong>$10&ndash;$20 per square foot</strong>{" "}
              installed depending on the style and whether you need a
              concrete base. Maintenance is relatively low &mdash; you may
              need to re-sand joints periodically and address any shifting
              or settling. The surface is rigid with no cushion, and wet
              pavers can be slippery depending on the texture.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Pavers are a solid choice if you want a traditional hardscape
              look and heat isn&apos;t your primary concern. But if
              barefoot comfort in summer is important, they&apos;re not the
              best fit for Las Vegas.
            </p>

            {/* -------- Rubber Deck -------- */}
            <h2 id="rubber-deck" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Rubber Aggregate Pool Decking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <Link href="/rubber-pool-deck" className="text-accent hover:underline font-medium">Rubber pool decking</Link>{" "}
              is a poured-in-place system made from EPDM rubber granules
              bound with UV-stable polyurethane resin. It&apos;s hand-troweled
              over existing concrete to create a seamless, textured surface
              that&apos;s typically 3/8-inch to 1/2-inch thick. It&apos;s
              the coolest surface on this list by a significant margin,
              staying around <strong>110&deg;F</strong> in peak conditions
              &mdash; roughly <strong>60&deg;F cooler</strong> than bare
              concrete and <strong>20&deg;F cooler</strong> than cool deck.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-hottub.jpg"
                alt="Close-up of gray two-tone rubber aggregate pool deck around a pool and hot tub"
                width={1200}
                height={823}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Close-up of rubber pool deck texture &mdash; the aggregate finish provides built-in slip resistance
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The reason rubber stays so much cooler isn&apos;t just color
              &mdash; it&apos;s physics. The rubber layer creates actual
              insulation between your feet and the hot concrete below,
              blocking heat transfer in a way that rigid coatings and hard
              surfaces can&apos;t match. On top of that, rubber has low
              thermal conductivity, so even when the surface is warm it
              doesn&apos;t burn your skin the way concrete or stone does
              at the same temperature.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond temperature, rubber decking checks every other box:
              excellent wet slip resistance (exceeds ADA standards),
              cushioned impact protection for falls, and crack bridging
              that spans hairline concrete cracks up to 1/8-inch. It costs{" "}
              <strong>$15&ndash;$18 per square foot</strong> installed and
              lasts <strong>10&ndash;15 years</strong> with minimal
              maintenance &mdash; just reseal every 3&ndash;4 years with
              a pressure wash and clear coat roll-on. Way less than cool
              deck&apos;s 1&ndash;2 year cycle.
            </p>
            <p className="text-gray-600 leading-relaxed">
              It&apos;s our most-requested premium pool deck system, and
              for Las Vegas specifically, we think it&apos;s the best
              all-around option. Goes directly over existing concrete in
              2&ndash;3 days, no demolition needed.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-slide.jpg"
                alt="Completed rubber pool deck with slide and pergola in a Las Vegas backyard"
                width={1200}
                height={671}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Completed rubber pool deck &mdash; seamless finish from pool edge to outdoor living area
                </p>
              </div>
            </div>

            {/* -------- Material Comparison -------- */}
            <h2 id="material-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Side-by-Side Comparison Table
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Here&apos;s every major factor that matters for a Las Vegas
              pool deck, side by side. No single material wins every
              category, but the overall picture is pretty clear:
            </p>

            <MaterialComparisonTable />

            {/* -------- Cost Comparison -------- */}
            <h2 id="cost-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Cost Comparison
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Here&apos;s how all four options compare on installed cost
              per square foot in the Las Vegas market. For a typical 600
              sq ft pool deck, multiply these numbers to get your ballpark:
            </p>

            <CostBreakdownChart />

            <p className="text-gray-600 leading-relaxed">
              Cool deck is the clear budget winner. Rubber sits in the
              middle &mdash; more than cool deck, significantly less than
              travertine or premium pavers. Keep in mind that ongoing
              maintenance costs differ: cool deck needs resealing every
              1&ndash;2 years, travertine needs annual sealing, while
              rubber only needs a reseal every 3&ndash;4 years.
            </p>

            {/* -------- Our Recommendation -------- */}
            <h2 id="our-recommendation" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Our Recommendation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We install cool deck and rubber aggregate pool decking across
              the Las Vegas valley, so we don&apos;t have a reason to push
              one over the other &mdash; we get paid either way. But after
              installing hundreds of pool decks in this climate, our honest
              recommendation for most homeowners is{" "}
              <Link href="/rubber-pool-deck" className="text-accent hover:underline font-semibold">rubber aggregate pool decking</Link>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              It&apos;s the coolest surface you can stand on barefoot in
              July. It&apos;s the safest if you have kids or elderly
              family. It doesn&apos;t need resealing every year. And at
              $15&ndash;$18 per square foot, it sits right in the middle of
              the price range &mdash; more than cool deck, way less than
              travertine. For most Las Vegas pools, it&apos;s the best
              balance of comfort, safety, durability, and long-term value.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If budget is the top priority,{" "}
              <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck</Link>{" "}
              is an excellent starting point &mdash; it still drops surface
              temps by 40&deg;F and it&apos;s the most affordable option.
              Just stay on top of the resealing.
            </p>

            {/* Mid-article CTA */}
            <div className="my-10 rounded-xl bg-accent/5 border border-accent/20 p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed text-base">
                <strong className="text-gray-900">Not sure which system is right for your pool deck?</strong>{" "}
                We&apos;ll come out, look at your deck, talk through your
                options, and give you pricing for any system that makes
                sense &mdash; free, no obligation.{" "}
                <Link href="/contact" className="text-accent font-semibold hover:underline">
                  Get a free estimate →
                </Link>
              </p>
            </div>

            {/* -------- FAQ -------- */}
            <h2 id="faq" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              What is the coolest pool deck surface for Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Rubber aggregate pool decking is the coolest pool deck
              surface available, reaching approximately{" "}
              <strong>110&deg;F</strong> in peak summer sun compared to
              170&deg;F for bare concrete.{" "}
              <Link href="/cool-deck" className="text-accent hover:underline font-medium">Cool deck coatings</Link>{" "}
              are also effective at around 130&deg;F and cost less
              upfront. For maximum heat reduction, rubber decking is the
              top performer thanks to the insulating rubber layer between
              your feet and the concrete.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How much does pool deck resurfacing cost in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              It depends on the material: cool deck runs{" "}
              <strong>$6&ndash;$9/sq ft</strong>, rubber aggregate{" "}
              <strong>$15&ndash;$18/sq ft</strong>, pavers{" "}
              <strong>$10&ndash;$20/sq ft</strong>, and travertine{" "}
              <strong>$15&ndash;$27/sq ft</strong>. For a standard 600 sq
              ft pool deck, that&apos;s anywhere from $3,600 to $16,200+
              depending on the system.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does cool deck last in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With proper maintenance, a cool deck coating lasts{" "}
              <strong>10&ndash;15 years</strong> in Las Vegas. The key is
              staying on top of resealing &mdash; the desert UV is hard on
              acrylic coatings, so you&apos;ll need to reseal every
              1&ndash;2 years to keep it protected. Without regular
              resealing, the coating will fade and lose its heat-reflective
              properties faster.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is rubber pool decking worth the cost?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For Las Vegas, we think so. It&apos;s the coolest surface,
              the safest (slip resistance + cushioned falls), and requires
              minimal maintenance (reseal every 3&ndash;4 years) over
              its 10&ndash;15 year lifespan.
              It costs more than cool deck upfront but you&apos;re not
              paying for resealing every year or two. For homeowners who
              prioritize comfort and safety around the pool, it&apos;s the
              best value overall.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can you resurface a pool deck without removing existing concrete?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes. Both cool deck coatings and rubber aggregate systems go
              directly over existing concrete &mdash; no demolition, no
              jackhammering. The concrete needs to be structurally sound
              and properly prepped, but you don&apos;t need to rip
              anything out. Most pool deck resurfacing jobs are done in
              2&ndash;3 days.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Does travertine get hot around a pool in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Travertine stays cooler than regular concrete and pavers
              thanks to its porosity and lighter color, but it still
              reaches around <strong>140&deg;F</strong> in peak Las Vegas
              summer. It&apos;s walkable for short stretches but not truly
              comfortable barefoot during the hottest months. Cool deck
              and rubber both stay meaningfully cooler.
            </p>

            {/* CTA Box */}
            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Ready to Cool Down Your Pool Deck?
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                We&apos;ll come out, walk your deck, measure it, talk
                through your options, and give you a flat price &mdash;
                free, no obligation.
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
                  commercial resinous flooring, pool deck systems, and specialty surfaces including
                  rubber aggregate, metallic epoxy, and concrete polishing. Every article is written
                  from hands-on installation experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts currentSlug="coolest-pool-deck-flooring-las-vegas" />

      <CtaSection />
    </>
  )
}

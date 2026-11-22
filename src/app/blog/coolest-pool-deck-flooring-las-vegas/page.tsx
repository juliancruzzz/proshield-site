import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Which pool deck feels cooler in the sun? | ProShield",
  description:
    "Compare pool deck surfaces for Las Vegas: textured coatings, rubber surfacing, pavers and travertine. Review heat, costs, lifespan and maintenance.",
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
  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <h3 className="font-heading font-bold text-lg text-gray-900 mb-1 text-center">
        Compare Temperatures Under the Same Conditions
      </h3>
      <p className="text-sm text-gray-600 text-center mt-4">
        Ask for test results for the proposed product and color. Compare
        readings taken under the same sun exposure, air temperature and
        time of day. A surface temperature alone does not establish that
        a deck is safe to walk on barefoot.
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
        <tbody className="divide-y divide-gray-200"><tr><td className="px-4 py-3 text-gray-700 font-medium">Surface format</td><td className="px-4 py-3 text-center">Textured coating or topping</td><td className="px-4 py-3 text-center">Natural stone units</td><td className="px-4 py-3 text-center">Individual paving units</td><td className="px-4 py-3 text-center">Troweled rubber aggregate</td></tr><tr className="bg-gray-50/50"><td className="px-4 py-3 text-gray-700 font-medium">Underfoot feel</td><td className="px-4 py-3 text-center">Hard finish</td><td className="px-4 py-3 text-center">Hard stone</td><td className="px-4 py-3 text-center">Hard units</td><td className="px-4 py-3 text-center">Softer rubber finish</td></tr><tr><td className="px-4 py-3 text-gray-700 font-medium">Preparation to confirm</td><td className="px-4 py-3 text-center">Existing coating and substrate</td><td className="px-4 py-3 text-center">Installation base</td><td className="px-4 py-3 text-center">Installation base</td><td className="px-4 py-3 text-center">Existing coating and substrate</td></tr><tr className="bg-gray-50/50"><td className="px-4 py-3 text-gray-700 font-medium">Joints to plan</td><td className="px-4 py-3 text-center">Existing joints and transitions</td><td className="px-4 py-3 text-center">Stone layout and joints</td><td className="px-4 py-3 text-center">Joint material and layout</td><td className="px-4 py-3 text-center">Existing joints and transitions</td></tr><tr><td className="px-4 py-3 text-gray-700 font-medium">Care to confirm</td><td className="px-4 py-3 text-center">Coating-specific instructions</td><td className="px-4 py-3 text-center">Stone-specific instructions</td><td className="px-4 py-3 text-center">Surface and joint care</td><td className="px-4 py-3 text-center">Binder and topcoat instructions</td></tr><tr className="bg-gray-50/50"><td className="px-4 py-3 text-gray-700 font-medium">Price to compare</td><td className="px-4 py-3 text-center">Written project quote</td><td className="px-4 py-3 text-center">Written project quote</td><td className="px-4 py-3 text-center">Written project quote</td><td className="px-4 py-3 text-center">Written project quote</td></tr></tbody>
      </table>
    </div>
  )
}

function CostBreakdownChart() {
  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <h3 className="font-heading font-bold text-lg text-gray-900 mb-1 text-center">Compare the Full Project Price</h3>
      <ul className="mt-6 space-y-3 text-sm text-gray-600">
        <li>Measured area and selected finish</li>
        <li>Existing coating removal and concrete preparation</li>
        <li>Repairs, drainage, edges and access</li>
        <li>Written inclusions, exclusions and future care</li>
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function CoolestPoolDeckFlooringPost() {
  const schema = blogPostingSchema({
    title: "Which pool deck feels cooler in the sun?",
    description:
      "Compare pool deck surfaces for Las Vegas: textured coatings, rubber surfacing, pavers and travertine. Review heat, costs, lifespan and maintenance.",
    slug: "coolest-pool-deck-flooring-las-vegas",
    datePublished: "2026-05-01",
    dateModified: "2026-11-21",
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
          text: "Any deck can get too hot for bare feet. If a finish comes with a temperature claim, ask which color was tested and whether it was in full sun.",
        },
      },
      {
        "@type": "Question",
        name: "How much does pool deck resurfacing cost in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The size of the deck is only part of the price. Check whether your estimate includes stripping the old finish, fixing the concrete and getting materials around the pool.",
        },
      },
      {
        "@type": "Question",
        name: "How long does cool deck last in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wear depends on the finish, the condition of the concrete and how much use and sun the deck gets. Ask what the warranty covers and how to care for the finish.",
        },
      },
      {
        "@type": "Question",
        name: "Is rubber pool decking worth the cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask to feel a sample of each finish. Rubber and textured coatings feel different underfoot, and both can get hot in the sun. Compare the care instructions and quotes for your deck.",
        },
      },
      {
        "@type": "Question",
        name: "Can you resurface a pool deck without removing existing concrete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Resurfacing may be possible over sound, properly prepared concrete. Existing coatings, cracks, drainage and movement must be assessed first. Unsuitable material may need removal or repair; resurfacing is not a structural repair. Installation and return-to-use times depend on preparation, product, weather and curing conditions. The written project schedule should state when walking, furniture and normal pool use can resume.",
        },
      },
      {
        "@type": "Question",
        name: "Does travertine get hot around a pool in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any deck can get too hot for bare feet. If a finish comes with a temperature claim, ask which color was tested and whether it was in full sun.",
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
            Which pool deck feels cooler in the sun?
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
              <Calendar className="h-3.5 w-3.5" /> Updated <time dateTime="2026-11-18">November 18, 2026</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 5 min read
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
                alt="Example of gray rubber aggregate around a pool — one of the pool deck surfaces compared"
                width={1200}
                height={823}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">Surface example: rubber aggregate around a pool.</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">A light pool deck in afternoon shade can feel very different from a dark one in full sun. Two options I install are <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck resurfacing</Link> and <Link href="/rubber-pool-deck" className="text-accent hover:underline font-medium">rubber surfacing</Link>. Ask for temperature test results for the finish and color you’re considering.</p>

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
            <p className="text-gray-600 leading-relaxed">Sun exposure, shade, surface color and weather affect how hot a deck gets. A product’s test conditions matter when comparing heat claims.</p>
            <p className="text-gray-600 leading-relaxed">Any deck can get too hot for bare feet. If a finish comes with a temperature claim, ask which color was tested and whether it was in full sun.</p>

            {/* -------- Temp Comparison -------- */}
            <h2 id="temperature-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Temperature Comparison: Every Pool Deck Material
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Surface temperature varies with the selected product,
              color, weather and shade. Before choosing a surface, ask
              for comparable test conditions rather than relying on a
              single temperature figure.
            </p>

            <TempComparisonChart />

            <p className="text-gray-600 leading-relaxed">
              Temperature is one factor to compare alongside preparation,
              cost and maintenance. Here are the main material options.
            </p>

            {/* -------- Cool Deck -------- */}
            <h2 id="cool-deck" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Cool Deck Coatings
            </h2>
            <p className="text-gray-600 leading-relaxed"><Link href="/cool-deck" className="text-accent hover:underline font-medium">Cool deck resurfacing</Link> covers a range of textured pool-deck finishes. Confirm the product name and application requirements; generic acrylic coatings and branded cement-based toppings are not the same system.</p>
            <p className="text-gray-600 leading-relaxed">The size of the deck is only part of the price. Check whether your estimate includes stripping the old finish, fixing the concrete and getting materials around the pool. Wear depends on the finish, the condition of the concrete and how much use and sun the deck gets. Ask what the warranty covers and how to care for the finish.</p>
            <p className="text-gray-600 leading-relaxed">Ask whether the proposed coating suits the existing concrete and how it should be maintained.</p>

            {/* -------- Travertine -------- */}
            <h2 id="travertine" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Travertine
            </h2>
            <p className="text-gray-600 leading-relaxed">Travertine is a natural stone finish. Compare the selected stone, color, texture, installation method and exterior-use guidance rather than assuming every travertine deck performs alike.</p>
            <p className="text-gray-600 leading-relaxed">Ask a stone installer about substrate preparation, joints, cleaning and whether sealing is recommended for the selected stone. Wet traction depends on the finish and conditions.</p>
            <p className="text-gray-600 leading-relaxed">Consider samples and a site-specific quote if you prefer a stone finish. ProShield’s resurfacing services should not be taken as an offer to install every material in this comparison.</p>

            {/* -------- Pavers -------- */}
            <h2 id="pavers" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Pavers
            </h2>
            <p className="text-gray-600 leading-relaxed">Pavers form a surface from individual units. Product choice, installation base, drainage, joints and transitions all need consideration around a pool.</p>
            <p className="text-gray-600 leading-relaxed">Ask the paver installer for the full installation scope, maintenance requirements and how movement or settlement would be addressed.</p>
            <p className="text-gray-600 leading-relaxed">Compare the proposed paver color and texture in outdoor conditions. There is no single temperature or lifespan for every paver system.</p>

            {/* -------- Rubber Deck -------- */}
            <h2 id="rubber-deck" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Rubber Aggregate Pool Decking
            </h2>
            <p className="text-gray-600 leading-relaxed"><Link href="/rubber-pool-deck" className="text-accent hover:underline font-medium">Rubber pool decking</Link> combines rubber granules and a binder over a prepared substrate. Confirm the selected system’s blend, application thickness and compatible finish.</p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-hottub.jpg"
                alt="Example of gray two-tone rubber aggregate around a pool and hot tub"
                width={1200}
                height={823}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Surface example: rubber aggregate texture around a pool.
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">Any deck can get too hot for bare feet. If a finish comes with a temperature claim, ask which color was tested and whether it was in full sun.</p>
            <p className="text-gray-600 leading-relaxed">Texture can help provide traction, but wet surfaces can still be slippery. Compare the proposed finish’s slip-resistance information and keep the deck clean. Cushioning does not prevent falls or guarantee protection from injury. Wear depends on the finish, the condition of the concrete and how much use and sun the deck gets. Ask what the warranty covers and how to care for the finish.</p>
            <p className="text-gray-600 leading-relaxed">Resurfacing may be possible over sound, properly prepared concrete. Existing coatings, cracks, drainage and movement must be assessed first. Unsuitable material may need removal or repair; resurfacing is not a structural repair. Installation and return-to-use times depend on preparation, product, weather and curing conditions. The written project schedule should state when walking, furniture and normal pool use can resume.</p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-slide.jpg"
                alt="Example of rubber pool deck surfacing beside a slide and pergola"
                width={1200}
                height={671}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Surface example: rubber decking beside a slide and pergola.
                </p>
              </div>
            </div>

            {/* -------- Material Comparison -------- */}
            <h2 id="material-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Side-by-Side Comparison Table
            </h2>
            <p className="text-gray-600 leading-relaxed">Use this checklist to compare the actual proposed products. These entries are questions to resolve, not tested performance rankings.</p>

            <MaterialComparisonTable />

            {/* -------- Cost Comparison -------- */}
            <h2 id="cost-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Cost Comparison
            </h2>
            <p className="text-gray-600 leading-relaxed">A useful price comparison covers the same measured area and preparation scope for each suitable option.</p>

            <CostBreakdownChart />

            <p className="text-gray-600 leading-relaxed">The size of the deck is only part of the price. Check whether your estimate includes stripping the old finish, fixing the concrete and getting materials around the pool.</p>

            {/* -------- Our Recommendation -------- */}
            <h2 id="our-recommendation" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Our Recommendation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Compare cool deck coatings with{" "}
              <Link href="/rubber-pool-deck" className="text-accent hover:underline font-semibold">rubber aggregate pool decking</Link>.
            </p>
            <p className="text-gray-600 leading-relaxed">Ask to feel a sample of each finish. Rubber and textured coatings feel different underfoot, and both can get hot in the sun. Compare the care instructions and quotes for your deck.</p>
            <p className="text-gray-600 leading-relaxed">For <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck resurfacing</Link>, ask which finish is proposed, how the concrete will be prepared and what cleaning or future refresh work it needs.</p>

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
            <p className="text-gray-600 leading-relaxed">Any deck can get too hot for bare feet. If a finish comes with a temperature claim, ask which color was tested and whether it was in full sun.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How much does pool deck resurfacing cost in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">The size of the deck is only part of the price. Check whether your estimate includes stripping the old finish, fixing the concrete and getting materials around the pool.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does cool deck last in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">Wear depends on the finish, the condition of the concrete and how much use and sun the deck gets. Ask what the warranty covers and how to care for the finish.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is rubber pool decking worth the cost?
            </h3>
            <p className="text-gray-600 leading-relaxed">Ask to feel a sample of each finish. Rubber and textured coatings feel different underfoot, and both can get hot in the sun. Compare the care instructions and quotes for your deck.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can you resurface a pool deck without removing existing concrete?
            </h3>
            <p className="text-gray-600 leading-relaxed">Resurfacing may be possible over sound, properly prepared concrete. Existing coatings, cracks, drainage and movement must be assessed first. Unsuitable material may need removal or repair; resurfacing is not a structural repair. Installation and return-to-use times depend on preparation, product, weather and curing conditions. The written project schedule should state when walking, furniture and normal pool use can resume.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Does travertine get hot around a pool in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">Any deck can get too hot for bare feet. If a finish comes with a temperature claim, ask which color was tested and whether it was in full sun.</p>

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
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Julian is the founder of ProShield Epoxy, a professional floor coating company
                  serving the Las Vegas metro area. He specializes in residential garage coatings,
                  commercial resinous flooring, pool deck systems, and specialty surfaces including
                  rubber aggregate, metallic epoxy, and concrete polishing.
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

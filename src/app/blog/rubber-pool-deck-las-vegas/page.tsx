import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Rubber Pool Deck Flooring in Las Vegas | Cost, Process & What to Expect | ProShield",
  description:
    "Rubber pool deck surfacing in Las Vegas: review installation steps, color options, maintenance and costs, plus questions to ask before resurfacing.",
  alternates: {
    canonical: "/blog/rubber-pool-deck-las-vegas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/rubber-pool-deck-las-vegas",
    images: ["/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"],
  },
}

export default function RubberPoolDeckLasVegasPost() {
  const schema = blogPostingSchema({
    title: "Rubber Pool Deck Flooring in Las Vegas: What It Costs, How It's Installed & What to Expect",
    description:
      "Rubber pool deck surfacing in Las Vegas: review installation steps, color options, maintenance and costs, plus questions to ask before resurfacing.",
    slug: "rubber-pool-deck-las-vegas",
    datePublished: "2026-05-03",
    dateModified: "2026-11-18",
    image: "https://proshieldepoxy.com/images/blog/rubber-deck/rubber-deck-pool-wide.jpg",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a rubber pool deck cost in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price depends on measured area, concrete condition, removal of old coatings, repairs, access and the selected finish. Request a written project estimate that lists preparation, materials and any additional work.",
        },
      },
      {
        "@type": "Question",
        name: "How long does rubber pool decking last in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Service life depends on the selected product, substrate, installation, exposure and maintenance. Ask for the product warranty and care instructions; there is no single lifespan that applies to every pool deck.",
        },
      },
      {
        "@type": "Question",
        name: "Is rubber pool decking slippery when wet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Texture can help provide traction, but wet surfaces can still be slippery. Compare the proposed finish’s slip-resistance information and keep the deck clean. Cushioning does not prevent falls or guarantee protection from injury.",
        },
      },
      {
        "@type": "Question",
        name: "How hot does rubber pool decking get in Las Vegas summer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any pool deck can become hot in direct sun. Temperature depends on product, color, shade and weather. Ask for test results for the proposed finish under comparable conditions; no material is guaranteed safe for bare feet.",
        },
      },
      {
        "@type": "Question",
        name: "Can you install rubber decking over existing concrete or cool deck?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Resurfacing may be possible over sound, properly prepared concrete. Existing coatings, cracks, drainage and movement must be assessed first. Unsuitable material may need removal or repair; resurfacing is not a structural repair.",
        },
      },
      {
        "@type": "Question",
        name: "How do you maintain a rubber pool deck?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Remove loose debris and follow the selected product’s cleaning instructions. Ask which cleaners and equipment are allowed and when the surface should be inspected or refreshed. Resealing needs vary by system and condition.",
        },
      },
      {
        "@type": "Question",
        name: "How long does installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Installation and return-to-use times depend on preparation, product, weather and curing conditions. The written project schedule should state when walking, furniture and normal pool use can resume.",
        },
      },
      {
        "@type": "Question",
        name: "Is rubber pool decking better than cool deck?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Compare the proposed products, texture, color, preparation, care requirements and written prices. Rubber and textured coatings have different finishes; neither is always cooler, safer or lower maintenance than the other.",
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
        name: "Rubber Pool Deck Flooring in Las Vegas",
        item: "https://proshieldepoxy.com/blog/rubber-pool-deck-las-vegas",
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
            Rubber Pool Deck Flooring in Las Vegas: What It Costs, How It&apos;s Installed &amp; What to Expect
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>
              By <span className="font-medium text-gray-200">Julian Cruz</span>
            </span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-05-03">May 3, 2026</time>
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
                alt="Example of rubber aggregate pool deck flooring around a pool with landscaping and a gazebo"
                width={1200}
                height={823}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">Surface example: rubber aggregate around a pool.</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">ProShield Epoxy offers rubber pool deck surfacing across the Las Vegas valley. This guide explains what to compare before resurfacing: the existing concrete, selected product, color, preparation, price and maintenance.</p>

            {/* TOC */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li><a href="#what-is-rubber-pool-decking" className="text-accent hover:underline">What Is Rubber Pool Deck Flooring?</a></li>
                  <li><a href="#why-it-works-in-vegas" className="text-accent hover:underline">What to Check Before Choosing Rubber Surfacing</a></li>
                  <li><a href="#cost-in-las-vegas" className="text-accent hover:underline">How Much Does It Cost in Las Vegas?</a></li>
                  <li><a href="#installation-process" className="text-accent hover:underline">How We Install Rubber Pool Decking</a></li>
                  <li><a href="#colors-and-finishes" className="text-accent hover:underline">Colors &amp; Design Options</a></li>
                  <li><a href="#maintenance" className="text-accent hover:underline">Maintenance &amp; Longevity</a></li>
                  <li><a href="#rubber-vs-cool-deck" className="text-accent hover:underline">Rubber Deck vs. Cool Deck</a></li>
                  <li><a href="#honest-downsides" className="text-accent hover:underline">Honest Downsides</a></li>
                  <li><a href="#faq" className="text-accent hover:underline">Frequently Asked Questions</a></li>
                </ul>
              </nav>
            </div>

            {/* -------- What Is It -------- */}
            <h2 id="what-is-rubber-pool-decking" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Is Rubber Pool Deck Flooring?
            </h2>
            <p className="text-gray-600 leading-relaxed">Rubber pool decking combines rubber granules with a binder and is troweled onto a prepared surface. The specified blend, thickness, primer and topcoat depend on the selected system and site.</p>
            <p className="text-gray-600 leading-relaxed">Rubber surfacing and <Link href="/cool-deck" className="text-accent hover:underline font-medium">textured pool-deck coatings</Link> offer different finishes. Compare samples, product specifications and the preparation each needs. Existing concrete must be assessed before deciding whether it can be resurfaced.</p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-hottub.jpg"
                alt="Example of gray two-tone rubber aggregate surfacing around a pool and hot tub"
                width={1200}
                height={823}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Surface example: two-tone gray rubber around a pool and spa.
                </p>
              </div>
            </div>

            {/* -------- Why Vegas -------- */}
            <h2 id="why-it-works-in-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What to Check Before Choosing Rubber Surfacing
            </h2>
            <p className="text-gray-600 leading-relaxed">Sun exposure, pool water, wear and the condition of the concrete all matter when choosing a pool-deck finish. Compare the proposed system against the conditions at your home.</p>

            <p className="text-gray-600 leading-relaxed"><strong>Heat:</strong> Any pool deck can become hot in direct sun. Temperature depends on product, color, shade and weather. Ask for test results for the proposed finish under comparable conditions; no material is guaranteed safe for bare feet.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Cracks:</strong> Existing cracks and movement need assessment. A flexible finish does not repair structural damage or guarantee that cracks will stay hidden.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Wet traction:</strong> Texture can help provide traction, but wet surfaces can still be slippery. Compare the proposed finish’s slip-resistance information and keep the deck clean. Cushioning does not prevent falls or guarantee protection from injury.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Underfoot feel:</strong> Rubber has a softer feel than a hard finish. Ask to see a sample; comfort is not a safety certification.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Sun and pool chemicals:</strong> Ask for the selected binder and topcoat’s exterior-use and chemical-exposure guidance. Do not assume concentrated pool chemicals or acid are harmless to the finish.</p>

            {/* -------- Cost -------- */}
            <h2 id="cost-in-las-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How Much Does Rubber Pool Decking Cost in Las Vegas?
            </h2>
            <p className="text-gray-600 leading-relaxed">The price depends on measured area, concrete condition, removal of old coatings, repairs, access and the selected finish. Request a written project estimate that lists preparation, materials and any additional work.</p>
            <p className="text-gray-600 leading-relaxed">A square-foot rate alone does not show the full job cost. Compare quotes for the same measured area and scope, including coating removal, crack repairs, edges and drainage work.</p>
            <p className="text-gray-600 leading-relaxed">Ask which repairs and preparation are included, what is excluded and how any additional work would be priced before it starts.</p>
            <p className="text-gray-600 leading-relaxed">Comparing <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck resurfacing</Link> with rubber, pavers or stone? Use written quotes for the same site and compare future care requirements. This guide does not publish a verified current market price range.</p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-5 sm:p-6 my-8">
              <p className="text-gray-700 font-medium">For a price for your deck, <Link href="/contact" className="text-accent hover:underline font-medium">request a free estimate</Link>.</p>
            </div>

            {/* -------- Installation -------- */}
            <h2 id="installation-process" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How We Install Rubber Pool Decking
            </h2>
            <p className="text-gray-600 leading-relaxed">Resurfacing may be possible over sound, properly prepared concrete. Existing coatings, cracks, drainage and movement must be assessed first. Unsuitable material may need removal or repair; resurfacing is not a structural repair. Installation and return-to-use times depend on preparation, product, weather and curing conditions. The written project schedule should state when walking, furniture and normal pool use can resume.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Surface preparation:</strong> Assess the concrete, existing coatings, cracks and drainage. Remove unsuitable material and prepare the substrate to the selected system’s requirements.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Primer and application:</strong> Follow the specified primer, mixing ratios and application thickness. Detail edges, drains and joints according to the product requirements and site conditions.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Finish and cure:</strong> Apply any specified topcoat and protect the surface while it cures. Confirm the product-specific return-to-use instructions before walking on the deck or replacing furniture.</p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-installation.jpg"
                alt="Example of hand-troweling rubber aggregate onto a pool deck surface"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Application example: hand-troweling rubber aggregate.
                </p>
              </div>
            </div>

            {/* -------- Colors -------- */}
            <h2 id="colors-and-finishes" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Colors &amp; Design Options
            </h2>
            <p className="text-gray-600 leading-relaxed">Rubber surfacing is available in different color blends. Confirm the current options and product availability before choosing a finish; the examples here do not establish an exact color match.</p>
            <p className="text-gray-600 leading-relaxed">Ask to see the proposed color sample in your outdoor lighting before selecting it.</p>
            <p className="text-gray-600 leading-relaxed">Discuss borders, transitions and any multi-color design during the estimate so the written scope reflects the layout you want.</p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-terracotta.jpg"
                alt="Example of terracotta-colored rubber aggregate with warm copper tones around a pool"
                width={1200}
                height={876}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Color example: terracotta and copper rubber aggregate.
                </p>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-slide.jpg"
                alt="Example of gray rubber pool deck surfacing beside a slide and pergola"
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

            {/* -------- Maintenance -------- */}
            <h2 id="maintenance" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Maintenance &amp; Longevity
            </h2>
            <p className="text-gray-600 leading-relaxed">Maintenance should follow the selected system’s instructions rather than a fixed schedule for every rubber surface.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Debris:</strong> Keep the deck clear of loose dirt and leaves.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Cleaning:</strong> Use the cleaners, tools and methods allowed by the product manufacturer. Ask how to handle stains and pool-chemical spills.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Inspection and refresh coats:</strong> Ask which signs of wear need attention and whether the proposed system requires a refresh coat. Do not assume a universal resealing interval.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Service life:</strong> Service life depends on the selected product, substrate, installation, exposure and maintenance. Ask for the product warranty and care instructions; there is no single lifespan that applies to every pool deck.</p>

            {/* -------- Existing Deck Assessment -------- */}
            <div className="my-10 rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed">
                Before choosing rubber surfacing, check the condition of
                your existing coating, drainage and the required
                preparation. Compare the proposed system&apos;s maintenance
                instructions and ask which repairs are included in the
                estimate.
              </p>
            </div>

            {/* -------- vs Cool Deck -------- */}
            <h2 id="rubber-vs-cool-deck" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Rubber Deck vs. Cool Deck
            </h2>
            <p className="text-gray-600 leading-relaxed">ProShield offers rubber surfacing and textured pool-deck coatings. Compare the actual proposed systems before choosing.</p>
            <p className="text-gray-600 leading-relaxed"><Link href="/cool-deck" className="text-accent hover:underline font-medium">Cool deck resurfacing</Link> provides a textured finish. Confirm the named product, color, surface preparation and care requirements in the estimate.</p>
            <p className="text-gray-600 leading-relaxed">Compare the proposed products, texture, color, preparation, care requirements and written prices. Rubber and textured coatings have different finishes; neither is always cooler, safer or lower maintenance than the other.</p>
            <p className="text-gray-600 leading-relaxed">Ask for the price and maintenance requirements for each suitable option for your deck.</p>

            {/* -------- Honest Downsides -------- */}
            <h2 id="honest-downsides" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Honest Downsides
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We&apos;re not going to pretend rubber pool decking is
              perfect. Here&apos;s what you should know:
            </p>
            <p className="text-gray-600 leading-relaxed"><strong>Project cost:</strong> Removal, repairs, access and design can change the price. Compare the full scope of each quote rather than assuming one material is always cheaper.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Damage:</strong> Protect the finish when moving furniture and follow the product’s guidance for heavy objects and sharp edges.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Installation:</strong> Preparation, mixing and curing requirements matter. Ask which product will be used and whether the installer meets its requirements.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Appearance:</strong> Ask about color change, wear and compatible refresh products for the selected finish. Do not assume a refresh coat repairs every type of damage.</p>

            {/* -------- FAQ -------- */}
            <h2 id="faq" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How much does a rubber pool deck cost in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">The price depends on measured area, concrete condition, removal of old coatings, repairs, access and the selected finish. Request a written project estimate that lists preparation, materials and any additional work.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does rubber pool decking last in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">Service life depends on the selected product, substrate, installation, exposure and maintenance. Ask for the product warranty and care instructions; there is no single lifespan that applies to every pool deck.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is rubber pool decking slippery when wet?
            </h3>
            <p className="text-gray-600 leading-relaxed">Texture can help provide traction, but wet surfaces can still be slippery. Compare the proposed finish’s slip-resistance information and keep the deck clean. Cushioning does not prevent falls or guarantee protection from injury.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How hot does rubber pool decking get in Las Vegas summer?
            </h3>
            <p className="text-gray-600 leading-relaxed">Any pool deck can become hot in direct sun. Temperature depends on product, color, shade and weather. Ask for test results for the proposed finish under comparable conditions; no material is guaranteed safe for bare feet.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can you install rubber decking over existing concrete or cool deck?
            </h3>
            <p className="text-gray-600 leading-relaxed">Resurfacing may be possible over sound, properly prepared concrete. Existing coatings, cracks, drainage and movement must be assessed first. Unsuitable material may need removal or repair; resurfacing is not a structural repair.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How do you maintain a rubber pool deck?
            </h3>
            <p className="text-gray-600 leading-relaxed">Remove loose debris and follow the selected product’s cleaning instructions. Ask which cleaners and equipment are allowed and when the surface should be inspected or refreshed. Resealing needs vary by system and condition.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does installation take?
            </h3>
            <p className="text-gray-600 leading-relaxed">Installation and return-to-use times depend on preparation, product, weather and curing conditions. The written project schedule should state when walking, furniture and normal pool use can resume.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is rubber pool decking better than cool deck?
            </h3>
            <p className="text-gray-600 leading-relaxed">Compare the proposed products, texture, color, preparation, care requirements and written prices. Rubber and textured coatings have different finishes; neither is always cooler, safer or lower maintenance than the other.</p>

            {/* CTA Box */}
            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Ready to Upgrade Your Pool Deck?
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">Request a free estimate for your pool deck. The project quote should identify the proposed finish, preparation and any repairs.</p>
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

      <RelatedPosts currentSlug="rubber-pool-deck-las-vegas" />

      <CtaSection />
    </>
  )
}

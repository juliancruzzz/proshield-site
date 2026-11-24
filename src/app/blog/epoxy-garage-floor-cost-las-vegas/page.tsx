import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "What goes into a garage floor quote? | ProShield",
  description:
    "Compare garage floor coating quotes in Las Vegas: measured area, concrete preparation, repairs, moisture treatment and the selected system.",
  alternates: {
    canonical: "/blog/epoxy-garage-floor-cost-las-vegas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/epoxy-garage-floor-cost-las-vegas",
    images: ["/images/proflake/flake-garage-residential.webp"],
  },
}

export default function EpoxyGarageFloorCostPost() {
  const schema = blogPostingSchema({
    title: "What goes into a garage floor quote?",
    description: "Compare garage floor coating quotes in Las Vegas: measured area, concrete preparation, repairs, moisture treatment and the selected system.",
    slug: "epoxy-garage-floor-cost-las-vegas",
    datePublished: "2026-04-03",
    dateModified: "2026-11-23",
    image: "https://proshieldepoxy.com/images/proflake/flake-garage-residential.webp",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to epoxy a 2-car garage in Las Vegas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I measure the floor and check for old coatings, cracks and moisture. If you’re comparing quotes, make sure they include the same repairs and finish."
        }
      },
      {
        "@type": "Question",
        "name": "Is epoxy flooring worth the cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look at what the price includes and how you use the garage. Paying for a decorative finish makes more sense if you want that look and are willing to care for it."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For ProFlake, allow 24 hours before walking and 48 hours before parking, subject to actual weather and curing conditions. Other systems have different return-to-use requirements; follow the project instructions. Application time and return-to-use time are different. Preparation, repairs, product selection and site conditions affect the schedule. Confirm when walking, furniture and vehicles are permitted before using the floor."
        }
      },
      {
        "@type": "Question",
        "name": "Does the price include concrete repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Read the repair line on the quote. Ask whether it covers crack repair, stripping an old coating or treating moisture, and what happens if more work shows up during preparation."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between epoxy and polyaspartic coatings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Epoxy, polyurea and polyaspartic describe coating families. The actual formulation and complete layer build determine working time, intended use and performance; do not compare chemistry labels alone."
        }
      },
      {
        "@type": "Question",
        "name": "Can I park on my new garage floor the same day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For ProFlake, allow 24 hours before walking and 48 hours before parking, subject to actual weather and curing conditions. Other systems have different return-to-use requirements; follow the project instructions."
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
      { "@type": "ListItem", "position": 3, "name": "Epoxy Garage Floor Cost in Las Vegas", "item": "https://proshieldepoxy.com/blog/epoxy-garage-floor-cost-las-vegas" }
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
            Pricing Guide
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            What goes into a garage floor quote?
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-04-03">April 3, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Updated <time dateTime="2026-11-23">November 23, 2026</time>
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
            <p className="text-lg text-gray-600 leading-relaxed">Two garages can have the same square footage and different prices. If one has peeling paint or cracks to repair, that extra work goes into the quote before the first coat goes down.</p>

            {/* Key Takeaways — featured snippet target */}
            <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">Key Takeaways</p>
              <ul className="space-y-2 text-sm text-gray-700"><li>Measure the floor rather than assume garage size.</li><li>Compare the same preparation, repairs and named products.</li><li>Separate application time from return-to-use instructions.</li><li>Read the written warranty and moisture conditions.</li></ul>
            </div>

            {/* Table of Contents */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#cost-by-coating-system" className="text-accent hover:underline">Cost by Coating System</a>
                  </li>
                  <li>
                    <a href="#what-affects-your-total-price" className="text-accent hover:underline">What Affects Your Total Price?</a>
                  </li>
                  <li>
                    <a href="#diy-kits-vs-professional-installation" className="text-accent hover:underline">DIY Kits vs. Professional Installation</a>
                  </li>
                  <li>
                    <a href="#epoxy-vs-polyaspartic-vs-polyurea" className="text-accent hover:underline">Epoxy vs. Polyaspartic vs. Polyurea</a>
                  </li>
                  <li>
                    <a href="#why-las-vegas-pricing-can-be-different" className="text-accent hover:underline">Why Las Vegas Pricing Can Be Different</a>
                  </li>
                  <li>
                    <a href="#how-to-get-an-accurate-quote" className="text-accent hover:underline">How to Get an Accurate Quote</a>
                  </li>
                  <li>
                    <a href="#frequently-asked-questions" className="text-accent hover:underline">Frequently Asked Questions</a>
                  </li>
                </ul>
              </nav>
            </div>

            <h2 id="cost-by-coating-system" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Cost by Coating System
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The biggest factor in price is the type of system you choose. Each
              has a different material cost, number of coats, and installation
              complexity.
            </p>

            <div className="overflow-x-auto -mx-4 sm:mx-0 my-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden"><thead><tr className="bg-gray-50"><th className="text-left px-5 py-3.5 font-semibold text-gray-900">System</th><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Finish</th><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Quote scope</th><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Schedule</th></tr></thead><tbody><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600"><Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake</Link></td><td className="px-5 py-3 text-gray-600">Decorative flake</td><td className="px-5 py-3 text-gray-600">Measured area and specified layers</td><td className="px-5 py-3 text-gray-600">Confirm after assessment</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600"><Link href="/metallic-epoxy" className="text-accent hover:underline font-medium">Metallic</Link></td><td className="px-5 py-3 text-gray-600">Flowing pigment effect</td><td className="px-5 py-3 text-gray-600">Preparation, resin and clear coat</td><td className="px-5 py-3 text-gray-600">Confirm after assessment</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Solid color</td><td className="px-5 py-3 text-gray-600">Uniform resin finish</td><td className="px-5 py-3 text-gray-600">Preparation, color and topcoat</td><td className="px-5 py-3 text-gray-600">Confirm after assessment</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600"><Link href="/concrete-polishing" className="text-accent hover:underline font-medium">Polished concrete</Link></td><td className="px-5 py-3 text-gray-600">Refined concrete</td><td className="px-5 py-3 text-gray-600">Slab condition and selected finish</td><td className="px-5 py-3 text-gray-600">Confirm after assessment</td></tr></tbody></table>
            </div>
            <p className="text-sm text-gray-500 italic">
              Install time depends on the slab. Substrate condition, weather,
              and how much repair the concrete needs all move it, which is why
              we quote the timeline after we have seen the floor.
            </p>

            <h2 id="what-affects-your-total-price" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Affects Your Total Price?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Two garages of the same size can end up with very different quotes.
              These are the factors that move the needle:
            </p>
            <p className="text-gray-600 leading-relaxed">Concrete repairs, old coating removal and moisture treatment can add work before a new system is installed. Ask for these items to be identified in the written quote.</p>
            <p className="text-gray-600 leading-relaxed">Assess the concrete, moisture, contamination and existing coatings before selecting a system. Diamond grinding is part of ProShield’s preparation process; the required profile and repairs depend on the proposed products and site.</p>
            <p className="text-gray-600 leading-relaxed">Measure the floor rather than assuming an area from the number of parked cars. Layout, access, steps, edges and minimum project charges can affect a quote.</p>
            <p className="text-gray-600 leading-relaxed">ProFlake uses a polyurea base, decorative flake and a polyaspartic topcoat. Confirm the named products and preparation in the project quote. Extra layers, texture choices or different topcoats need to be specified in the scope.</p>

            <h2 id="diy-kits-vs-professional-installation" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              DIY Kits vs. Professional Installation
            </h2>
            <p className="text-gray-600 leading-relaxed">A retail coating kit and an installed coating quote cover different work. Compare the actual preparation, products, tools and labor before judging the totals.</p>
            <p className="text-gray-600 leading-relaxed">DIY and installed systems vary in chemistry, build and application requirements. Price or purchase location alone does not establish lifespan, thickness or failure risk.</p>
            <p className="text-gray-600 leading-relaxed">A kit’s preparation instructions may differ from an installed system. Check the substrate profile, moisture limits and tools required by the product you are comparing.</p>

            <div className="overflow-x-auto -mx-4 sm:mx-0 my-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden"><thead><tr className="bg-gray-50"><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Compare</th><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Retail kit</th><th className="text-left px-5 py-3.5 font-semibold text-gray-900">Installed project</th></tr></thead><tbody><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Full price</td><td className="px-5 py-3 text-gray-600">Materials plus tools and own labor</td><td className="px-5 py-3 text-gray-600">Written preparation and installation quote</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Preparation</td><td className="px-5 py-3 text-gray-600">Follow named kit instructions</td><td className="px-5 py-3 text-gray-600">Specified substrate preparation</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Layer build</td><td className="px-5 py-3 text-gray-600">Check stated coverage and thickness</td><td className="px-5 py-3 text-gray-600">Named products and specified layers</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Service life</td><td className="px-5 py-3 text-gray-600">Product, substrate and use dependent</td><td className="px-5 py-3 text-gray-600">Product, substrate and use dependent</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Warranty</td><td className="px-5 py-3 text-gray-600">Read product terms</td><td className="px-5 py-3 text-gray-600">Confirm qualifying system and written exclusions</td></tr><tr className="border-b border-gray-200"><td className="px-5 py-3 text-gray-600">Vehicle use</td><td className="px-5 py-3 text-gray-600">Follow cure and use instructions</td><td className="px-5 py-3 text-gray-600">Follow project return-to-use instructions</td></tr></tbody></table>
            </div>
            <p className="text-sm text-gray-400 italic">Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty. The written terms exclude moisture-related failures. If testing finds a moisture problem, the concrete needs a suitable vapor barrier before coating.</p>

            <h2 id="epoxy-vs-polyaspartic-vs-polyurea" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What do the coating names on a quote mean?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The name on the can tells you only part of the story. A floor may use one coating against the concrete and a different one on top.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Epoxy</strong> can be a primer, a colored coat or a finish. Check which layer the quote includes.</li>
              <li><strong>Polyurea</strong> forms the base of a ProFlake floor. The flakes go into it while it is wet.</li>
              <li><strong>Polyaspartic</strong> is the clear topcoat on ProFlake. It covers the flakes and takes the wear from tires and traffic.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">For ProFlake, plan on 24 hours before walking and 48 hours before parking. Weather can change the cure time, so follow the instructions for your floor.</p>
            <p className="text-gray-600 leading-relaxed">For an example of a flake finish, see the <Link href="/projects/nightfall-garage-las-vegas" className="text-accent hover:underline font-medium">Nightfall garage I coated in Las Vegas</Link>. The close view shows where the finish continues up the edges.</p>

            <h2 id="why-las-vegas-pricing-can-be-different" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Why Las Vegas Pricing Can Be Different
            </h2>
            <p className="text-gray-600 leading-relaxed">Sun exposure, slab temperature, moisture and use affect product selection and application. Ask how the proposed system suits the conditions at your garage.</p>
            <p className="text-gray-600 leading-relaxed">Sunlight can change the color over time. If the garage gets direct sun, ask how the base coat and topcoat hold up to UV light.</p>

            <h2 id="how-to-get-an-accurate-quote" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How to Get an Accurate Quote
            </h2>
            <p className="text-gray-600 leading-relaxed">A site assessment can establish measured area, concrete condition, moisture concerns and required preparation. Ask for the proposed <Link href="/services" className="text-accent hover:underline font-medium">coating system</Link> and written inclusions and exclusions.</p>
            <p className="text-gray-600 leading-relaxed">Compare quotes for the same measured area and scope: product names, preparation, layer build, repairs, topcoat and written warranty. A price alone does not establish quality or lifespan.</p>

            <h2 id="frequently-asked-questions" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How much does it cost to epoxy a 2-car garage in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">I measure the floor and check for old coatings, cracks and moisture. If you’re comparing quotes, make sure they include the same repairs and finish.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is epoxy flooring worth the cost?
            </h3>
            <p className="text-gray-600 leading-relaxed">Look at what the price includes and how you use the garage. Paying for a decorative finish makes more sense if you want that look and are willing to care for it.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does the installation take?
            </h3>
            <p className="text-gray-600 leading-relaxed">For ProFlake, allow 24 hours before walking and 48 hours before parking, subject to actual weather and curing conditions. Other systems have different return-to-use requirements; follow the project instructions. Application time and return-to-use time are different. Preparation, repairs, product selection and site conditions affect the schedule. Confirm when walking, furniture and vehicles are permitted before using the floor.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Does the price include concrete repair?
            </h3>
            <p className="text-gray-600 leading-relaxed">Read the repair line on the quote. Ask whether it covers crack repair, stripping an old coating or treating moisture, and what happens if more work shows up during preparation.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              What&apos;s the difference between epoxy and polyaspartic coatings?
            </h3>
            <p className="text-gray-600 leading-relaxed">Epoxy, polyurea and polyaspartic describe coating families. The actual formulation and complete layer build determine working time, intended use and performance; do not compare chemistry labels alone.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can I park on my new garage floor the same day?
            </h3>
            <p className="text-gray-600 leading-relaxed">For ProFlake, allow 24 hours before walking and 48 hours before parking, subject to actual weather and curing conditions. Other systems have different return-to-use requirements; follow the project instructions.</p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Get Your Free On-Site Estimate
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                We&apos;ll measure your garage, assess the concrete, and give
                you an exact price &mdash; no guesswork, no surprise charges.
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
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Julian Cruz owns ProShield Epoxy in Las Vegas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts currentSlug="epoxy-garage-floor-cost-las-vegas" />

      <CtaSection />
    </>
  )
}

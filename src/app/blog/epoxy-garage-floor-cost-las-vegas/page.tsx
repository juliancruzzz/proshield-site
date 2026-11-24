import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

const title = "What does a garage floor coating cost in Las Vegas?"
const description = "See what two Las Vegas Valley homeowners paid for ProFlake garage floors, what each price included and how the size and finish affected the total."
const quoteLink = "/contact?from=garage-cost-guide#request-quote"

export const metadata: Metadata = {
  title,
  description,
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
    title,
    description,
    slug: "epoxy-garage-floor-cost-las-vegas",
    datePublished: "2026-04-03",
    dateModified: "2026-11-24",
    image: "https://proshieldepoxy.com/images/proflake/flake-garage-residential.webp",
  })

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
            {title}
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-04-03">April 3, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Updated <time dateTime="2026-11-24">November 24, 2026</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 2 min read
            </span>
          </div>
        </div>
      </section>

      <article className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Two homeowners in the Las Vegas Valley chose our ProFlake <Link href="/areas/garage" className="text-accent-text hover:underline font-medium">garage floor</Link> in August 2026.
              One paid $2,310 for 440 square feet. The other paid $3,126.75 for 567 square feet
              with a premium flake blend. Here’s what each price covered.
            </p>

            <h2 id="cost-by-coating-system" className="font-heading font-bold text-2xl text-gray-900 mt-10 mb-3">
              Coyote flake · 440 square feet · $2,310
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We diamond-ground the concrete, applied a polyurea base coat, covered it with
              Coyote flakes and sealed the floor with a clear polyaspartic topcoat.
              Coyote was a standard color, so the total came to $5.25 per square foot.
            </p>

            <h2 className="font-heading font-bold text-2xl text-gray-900 mt-10 mb-3">
              Dolerite flake · 567 square feet · $3,126.75
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The ProFlake floor was $2,976.75 before the color upgrade. This homeowner chose
              Dolerite, a premium blend that added $150 after a discount. The work also included
              an extra clear coat over the flakes before the final topcoat.
            </p>

            <h2 id="what-affects-your-total-price" className="font-heading font-bold text-2xl text-gray-900 mt-10 mb-3">
              What would change the price for your garage?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In these two garages, the extra 127 square feet accounted for $666.75 of the
              difference. The color upgrade accounted for the other $150. Peeling paint that needs grinding off, cracks that need
              repair or moisture in the slab can change what your garage needs.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you’re comparing estimates, check the measured area, which repairs are included
              and whether the price covers the finish you picked. For a closer look at the layers,
              see <Link href="/blog/epoxy-garage-floor-vs-polyaspartic" className="text-accent hover:underline font-medium">how epoxy, polyurea and polyaspartic are used in a garage floor</Link>.
            </p>

            <h2 className="font-heading font-bold text-2xl text-gray-900 mt-10 mb-3">
              When can you park again?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake</Link>,
              plan on 24 hours after the final coat before walking on the floor and 48 hours before
              parking. Weather can change the timing. We’ll let you know when your floor is ready for the car.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Qualifying residential ProFlake floors carry a limited lifetime no-peel warranty.
              The written warranty excludes moisture-related failures.
            </p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Get Your Free On-Site Estimate
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                Tell us the approximate size of your garage and whether the concrete is bare or already coated.
              </p>
              <Link
                href={quoteLink}
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

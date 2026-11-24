import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Epoxy or polyaspartic for a garage floor? | ProShield",
  description:
    "Comparing garage floor quotes? See where epoxy, polyurea and polyaspartic go on a floor, what to look for in the estimate and when you can park again.",
  alternates: {
    canonical: "/blog/epoxy-garage-floor-vs-polyaspartic",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/epoxy-garage-floor-vs-polyaspartic",
    images: ["/images/proflake/flake-garage-wide-clean.webp"],
  },
}

const questions = [
  {
    question: "Will cracks or joints show through the finish?",
    answer: "Some cracks can be repaired before coating. A joint that moves may still be visible. Ask which repairs are included if a particular spot concerns you.",
  },
  {
    question: "How long will a coated garage floor last?",
    answer: "That depends on the condition of the concrete, how the floor was installed and how you use it. If a quote mentions a lifetime warranty, ask for the written terms so you can see which failures it covers.",
  },
]

export default function EpoxyVsPolyasparticPost() {
  const schema = blogPostingSchema({
    title: "Epoxy or polyaspartic for a garage floor?",
    description: "Comparing garage floor quotes? See where epoxy, polyurea and polyaspartic go on a floor, what to look for in the estimate and when you can park again.",
    slug: "epoxy-garage-floor-vs-polyaspartic",
    datePublished: "2026-04-01",
    dateModified: "2026-11-23",
    image: "https://proshieldepoxy.com/images/proflake/flake-garage-wide-clean.webp",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
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
            Epoxy or polyaspartic for a garage floor?
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-04-01">April 1, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Updated <time dateTime="2026-11-23">November 23, 2026</time>
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
            <p className="text-lg text-gray-600 leading-relaxed">If one garage floor quote says “epoxy” and another says “polyaspartic,” ask which coat each installer means. An epoxy floor can have a clear polyaspartic coat on top. The two quotes may have more in common than their names suggest.</p>

            <h2 id="head-to-head-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-10 mb-4">What goes on the concrete?</h2>
            <p id="what-is-epoxy" className="text-gray-600 leading-relaxed">Epoxy is a resin mixed with a hardener. It can form the base coat or give the floor its color. At ProShield, we install both solid-color and metallic epoxy garage floors.</p>
            <p id="what-is-polyaspartic" className="mt-4 text-gray-600 leading-relaxed">Polyaspartic is often the clear topcoat. It seals the finish underneath. Seeing it on an estimate tells you about that coat, but you still need to know what the installer will put down first.</p>

            <div id="why-we-use-both-together" className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">How we build a ProFlake floor</h3>
              <p className="text-gray-600 leading-relaxed">For our upgraded flake finish, we start with a polyurea base. We cover the wet base with decorative flakes, then seal them with a clear polyaspartic topcoat.</p>
              <Link href="/proflake" className="inline-flex items-center gap-1 mt-3 font-semibold text-accent-text hover:underline">See ProFlake finishes <ArrowRight className="size-4" /></Link>
            </div>

            <h2 id="the-bottom-line" className="font-heading font-bold text-2xl text-gray-900 mt-10 mb-4">What’s included in the price?</h2>
            <p className="text-gray-600 leading-relaxed">Look for the work on the concrete itself. If your garage has cracks or an old coating, does the price include repairs or removal? If removal is extra, ask for that price before you compare totals.</p>

            <h2 id="what-about-one-day-epoxy-companies" className="font-heading font-bold text-2xl text-gray-900 mt-10 mb-4">When can you park again?</h2>
            <p className="text-gray-600 leading-relaxed">“One-day installation” describes the crew’s time in your garage. The floor still needs to cure after the last coat. For ProFlake, plan on about 24 hours before walking on it and 48 hours before parking. Temperature can change that timing. We’ll confirm when your floor is ready for the car.</p>

            <h2 id="frequently-asked-questions" className="font-heading font-bold text-2xl text-gray-900 mt-10 mb-4">Garage floor questions</h2>
            {questions.map(({ question, answer }) => (
              <div key={question}>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mt-6 mb-2">{question}</h3>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
              </div>
            ))}

            <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-200 p-6 sm:p-8">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Garage floors we install</h3>
              <p className="text-gray-600 mb-4">See finished garages and compare flake, metallic and solid-color floors.</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href="/areas/garage" className="inline-flex items-center gap-2 font-semibold text-accent-text hover:underline">Explore garage floors <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact" className="inline-flex items-center rounded-lg bg-accent px-5 py-3 font-semibold text-navy hover:bg-accent-hover">Get a Free Quote</Link>
              </div>
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

import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { CtaSection } from "@/components/sections/cta-section"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog — Flooring Tips, Guides & Industry Insights | ProShield Epoxy",
  description:
    "Expert flooring guides from ProShield Epoxy — epoxy vs. polyaspartic, garage floor coatings, pricing, and more. Las Vegas flooring tips from working professionals.",
}

const posts = [
  {
    slug: "epoxy-garage-floor-cost-las-vegas",
    title: "Epoxy Garage Floor Cost in Las Vegas: 2026 Pricing Guide",
    excerpt:
      "Professional epoxy garage floor coating in Las Vegas typically costs $3.50–$12 per square foot. See 2026 pricing by system type, garage size, DIY vs. pro comparison, and what drives the final number.",
    date: "April 3, 2026",
    category: "Pricing Guide",
    image: "/images/proflake/flake-garage-residential.webp",
  },
  {
    slug: "epoxy-garage-floor-vs-polyaspartic",
    title: "Epoxy vs. Polyaspartic Garage Floor Coatings — What's the Difference?",
    excerpt:
      "Both go on garage floors. Both look great. But epoxy and polyaspartic are different chemistries with different strengths. Here's what actually matters when choosing between them for your Las Vegas garage.",
    date: "April 1, 2026",
    category: "Garage Floors",
    image: "/images/proflake/flake-garage-porsche-bikes.webp",
  },
  {
    slug: "hot-tire-pickup-prevention-garage-floor",
    title: "How to Prevent Hot Tire Pickup on Your Garage Floor",
    excerpt:
      "Hot tire pickup is the #1 reason garage floor coatings fail in Las Vegas. Learn what causes it, which coatings are vulnerable, and how the right system prevents it permanently.",
    date: "April 3, 2026",
    category: "Garage Floors",
    image: "/images/proflake/flake-garage-porsche-bikes.webp",
  },
  {
    slug: "polished-concrete-vs-epoxy",
    title: "Polished Concrete vs. Epoxy Flooring: Which Is Right for Your Space?",
    excerpt:
      "Both are excellent commercial flooring solutions, but they solve different problems. Compare cost, lifespan, maintenance, and 25-year total cost of ownership to find the right fit.",
    date: "April 4, 2026",
    category: "Flooring Comparison",
    image: "/images/metallic/metallic-epoxy-garage.webp",
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Flooring Tips &"
        highlight="Expert Guides"
        subtitle="Practical advice from the crew that installs floors every day. No fluff — just what you need to know before, during, and after your flooring project."
      />

      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-heading font-semibold text-lg text-gray-900 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-accent">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

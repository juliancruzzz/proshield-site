import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Epoxy Flooring Blog | Las Vegas Guides & Tips | ProShield Epoxy",
  description:
    "Expert epoxy flooring guides — garage floor costs, epoxy vs polyaspartic, pool deck coatings, maintenance tips & more. Las Vegas flooring advice from licensed pros.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog",
    images: ["/og-image.webp"],
  },
}

const posts = [
  {
    slug: "rubber-pool-deck-las-vegas",
    title: "What to know before resurfacing a pool deck with rubber",
    excerpt:
      "How rubber feels underfoot, what goes beneath it and which repairs can change the quote.",
    date: "May 3, 2026",
    category: "Pool Deck Flooring",
    image: "/images/blog/rubber-deck/rubber-deck-pool-wide.jpg",
  },
  {
    slug: "metallic-epoxy-flooring-las-vegas",
    title: "How metallic epoxy gets its swirled finish",
    excerpt:
      "What the pigments look like in different light and how to compare finish samples.",
    date: "May 3, 2026",
    category: "Metallic Epoxy",
    image: "/images/metallic-hero-poster.jpg",
  },
  {
    slug: "coolest-pool-deck-flooring-las-vegas",
    title: "Which pool deck feels cooler in the sun?",
    excerpt:
      "Why color and shade matter, and what to ask before relying on a temperature claim.",
    date: "May 1, 2026",
    category: "Pool Deck Flooring",
    image: "/images/vubastone/vubastone-pool-deck-mansion.webp",
  },
  {
    slug: "epoxy-floor-maintenance-tips",
    title: "How to clean a coated floor",
    excerpt:
      "What to use for dust and spills, and when to ask about a worn topcoat.",
    date: "April 7, 2026",
    category: "Maintenance Guide",
    image: "/images/proflake/flake-garage-residential.webp",
  },
  {
    slug: "best-pool-deck-coatings-las-vegas",
    title: "How to choose a finish for your pool deck",
    excerpt:
      "Compare the texture and upkeep of a coated deck with poured rubber surfacing.",
    date: "April 6, 2026",
    category: "Pool Deck Coatings",
    image: "/images/cool-deck/cool-deck-pool-spa-vegas.webp",
  },
  {
    slug: "epoxy-garage-floor-cost-las-vegas",
    title: "What goes into a garage floor quote?",
    excerpt:
      "A two-car garage with peeling paint can cost more to prep than a bare slab the same size.",
    date: "April 3, 2026",
    category: "Pricing Guide",
    image: "/images/proflake/flake-garage-residential.webp",
  },
  {
    slug: "epoxy-garage-floor-vs-polyaspartic",
    title: "Epoxy or polyaspartic for a garage floor?",
    excerpt:
      "What each coat does and what to ask before parking on a new floor.",
    date: "April 1, 2026",
    category: "Garage Floors",
    image: "/images/proflake/flake-garage-wide-clean.webp",
  },
  {
    slug: "hot-tire-pickup-prevention-garage-floor",
    title: "Why is my garage floor peeling under the tires?",
    excerpt:
      "How to tell a tire mark from a coating that has lifted off the concrete.",
    date: "March 28, 2026",
    category: "Garage Floors",
    image: "/images/proflake/flake-garage-porsche-bikes.webp",
  },
  {
    slug: "polished-concrete-vs-epoxy",
    title: "Should you polish the concrete or coat it?",
    excerpt:
      "How the slab, the look you want and the traffic it gets affect the choice.",
    date: "March 18, 2026",
    category: "Flooring Comparison",
    image: "/images/concrete-polishing/polished-floor-showroom.webp",
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Flooring Tips &"
        highlight="Project Guides"
        subtitle="How to compare finishes, read a quote and take care of your floor."
      />

      <Breadcrumbs items={[{ label: "Blog" }]} />

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

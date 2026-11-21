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
    title: "Rubber Pool Deck Flooring in Las Vegas: What It Costs, How It's Installed & What to Expect",
    excerpt:
      "Compare rubber pool deck preparation, color blends, project cost factors and product-specific care in Las Vegas.",
    date: "May 3, 2026",
    category: "Pool Deck Flooring",
    image: "/images/blog/rubber-deck/rubber-deck-pool-wide.jpg",
  },
  {
    slug: "metallic-epoxy-flooring-las-vegas",
    title: "Metallic Epoxy Flooring in Las Vegas: What It Costs, How It's Done & What to Expect",
    excerpt:
      "Compare metallic finishes, concrete preparation, project quotes and care.",
    date: "May 3, 2026",
    category: "Metallic Epoxy",
    image: "/images/metallic-hero-poster.jpg",
  },
  {
    slug: "coolest-pool-deck-flooring-las-vegas",
    title: "Coolest Pool Deck Flooring for Las Vegas: Every Option Compared",
    excerpt:
      "Compare pool deck surfaces, product test conditions, preparation, project quotes and care requirements for Las Vegas.",
    date: "May 1, 2026",
    category: "Pool Deck Flooring",
    image: "/images/vubastone/vubastone-pool-deck-mansion.webp",
  },
  {
    slug: "epoxy-floor-maintenance-tips",
    title: "Epoxy Floor Maintenance Tips: Keep Your Coating Looking New",
    excerpt:
      "Product-compatible cleaning, equipment and care for your installed finish.",
    date: "April 7, 2026",
    category: "Maintenance Guide",
    image: "/images/proflake/flake-garage-residential.webp",
  },
  {
    slug: "best-pool-deck-coatings-las-vegas",
    title: "Best Pool Deck Coatings for Las Vegas Heat: 2026 Guide",
    excerpt:
      "Compare textured coatings, rubber surfacing, preparation and product-specific maintenance for your Las Vegas pool deck.",
    date: "April 6, 2026",
    category: "Pool Deck Coatings",
    image: "/images/cool-deck/cool-deck-pool-spa-vegas.webp",
  },
  {
    slug: "epoxy-garage-floor-cost-las-vegas",
    title: "Epoxy Garage Floor Cost in Las Vegas: 2026 Pricing Guide",
    excerpt:
      "Compare measured area, preparation, repairs and coating scope in a garage quote.",
    date: "April 3, 2026",
    category: "Pricing Guide",
    image: "/images/proflake/flake-garage-residential.webp",
  },
  {
    slug: "epoxy-garage-floor-vs-polyaspartic",
    title: "Epoxy vs. Polyaspartic Garage Floor Coatings — What's the Difference?",
    excerpt:
      "Compare named coating products, layer builds, cure requirements and intended use.",
    date: "April 1, 2026",
    category: "Garage Floors",
    image: "/images/proflake/flake-garage-wide-clean.webp",
  },
  {
    slug: "hot-tire-pickup-prevention-garage-floor",
    title: "How to Prevent Hot Tire Pickup on Your Garage Floor",
    excerpt:
      "Assess tire-related coating damage, preparation, cure and repair options.",
    date: "April 3, 2026",
    category: "Garage Floors",
    image: "/images/proflake/flake-garage-porsche-bikes.webp",
  },
  {
    slug: "polished-concrete-vs-epoxy",
    title: "Polished Concrete vs. Epoxy Flooring: Which Is Right for Your Space?",
    excerpt:
      "Compare the slab, finish, traffic, care requirements and written project scope.",
    date: "April 4, 2026",
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
        highlight="Expert Guides"
        subtitle="Practical advice from the crew that installs floors every day. No fluff — just what you need to know before, during, and after your flooring project."
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

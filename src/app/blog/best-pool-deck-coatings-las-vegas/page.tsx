import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "How to choose a finish for your pool deck | ProShield",
  description: "Compare repainting with full resurfacing. See how acrylic knockdown, decorative overlays and rubber differ, and what to look for in a pool deck estimate.",
  alternates: {
    canonical: "/blog/best-pool-deck-coatings-las-vegas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/best-pool-deck-coatings-las-vegas",
    images: ["/images/cool-deck/cool-deck-pool-spa-vegas.webp"],
  },
}

const questions = [
  {
    question: "Does an old knockdown deck need grinding before repainting?",
    answer: "Its condition matters more than its age. Check for loose texture and confirm that the new coating can bond to the old one. Ask which areas need grinding before you agree on a price.",
  },
  {
    id: "cool-deck-vs-knockdown-texture",
    question: "Does “knockdown” tell me which product I’m getting?",
    answer: "Knockdown describes how the texture is flattened with a trowel. Mortex makes a specific cement-based topping called Kool Deck. A textured acrylic coating can have a similar appearance, so ask for the product name in the estimate.",
  },
]

export default function BestPoolDeckCoatingsPost() {
  const schema = blogPostingSchema({
    title: "How to choose a finish for your pool deck",
    description: "Compare repainting with full resurfacing. See how acrylic knockdown, decorative overlays and rubber differ, and what to look for in a pool deck estimate.",
    slug: "best-pool-deck-coatings-las-vegas",
    datePublished: "2026-04-06",
    dateModified: "2026-11-23",
    image: "https://proshieldepoxy.com/images/cool-deck/cool-deck-pool-spa-vegas.webp",
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
      { "@type": "ListItem", "position": 3, "name": "How to choose a finish for your pool deck", "item": "https://proshieldepoxy.com/blog/best-pool-deck-coatings-las-vegas" }
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
            Pool Deck Coatings
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            How to choose a finish for your pool deck
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-04-06">April 6, 2026</time>
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
            <p className="text-lg text-gray-600 leading-relaxed">If you like the texture around your pool and the color has faded, you may only need a repaint. If the finish is coming loose or you want a different feel underfoot, it’s worth comparing resurfacing options before you choose a color.</p>

            <nav aria-label="In this article" className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In this article</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#why-pool-deck-coatings-matter-in-las-vegas" className="text-accent hover:underline">Keep the texture or replace it?</a></li>
                <li><a href="#pool-deck-coating-systems-compared" className="text-accent hover:underline">Which finish suits your deck?</a></li>
                <li><a href="#cost-breakdown-by-system" className="text-accent hover:underline">How to compare two estimates</a></li>
                <li><a href="#frequently-asked-questions" className="text-accent hover:underline">Questions homeowners ask</a></li>
              </ul>
            </nav>

            <h2 id="why-pool-deck-coatings-matter-in-las-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Keep the texture or replace it?</h2>
            <p className="text-gray-600 leading-relaxed">
              ProShield quotes repainting and full resurfacing separately.
              A repaint keeps the existing texture.
              For that to work, the old finish has to be firmly attached to the concrete and compatible with the new coating.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Where the surface is lifting, the loose material has to come off.
              A new finish also adds an opportunity to change the texture or pattern.
              If the slab has shifted or water collects against the house, address that before deciding what goes on top.
            </p>

            <h2 id="pool-deck-coating-systems-compared" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Which finish suits your deck?</h2>
            <p className="text-gray-600 leading-relaxed">
              For a hard surface with a subtle, troweled texture, consider an <Link href="/cool-deck" className="text-accent hover:underline font-medium">acrylic knockdown finish</Link>.
              A decorative overlay gives you more choice of pattern.
              Stain with a compatible sealer changes the color while keeping the character of the concrete visible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For a softer surface, consider <Link href="/rubber-pool-deck" className="text-accent hover:underline font-medium">rubber surfacing</Link>.
              Bound rubber granules give it a different feel from a coating on concrete.
              Our <Link href="/blog/rubber-pool-deck-las-vegas" className="text-accent hover:underline font-medium">guide to rubber pool decks</Link> covers how that extra layer meets steps, drains and the pool edge.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If your biggest concern is the walk from the patio to the pool on a summer afternoon, <Link href="/blog/coolest-pool-deck-flooring-las-vegas" className="text-accent hover:underline font-medium">compare colors and sun exposure</Link> before settling on a material.
            </p>

            <h2 id="cost-breakdown-by-system" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">How to compare two estimates</h2>
            <p className="text-gray-600 leading-relaxed">
              A repaint and a new textured finish can cover exactly the same number of square feet.
              One price may include stripping and repairs while the other assumes the old finish stays in place.
            </p>
            <p id="what-to-look-for-in-a-contractor" className="text-gray-600 leading-relaxed">
              Look for three things in each estimate: which areas get stripped or repaired, which areas keep their texture, and the name of the finish that goes back down.
              Check the steps and edges too.
              That makes it easier to see what the difference in price pays for.
            </p>

            <h2 id="frequently-asked-questions" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Questions homeowners ask</h2>
            {questions.map(({ id, question, answer }) => (
              <div key={question} id={id}>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">{question}</h3>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
              </div>
            ))}

            <p className="text-gray-600 leading-relaxed">
              See the <Link href="https://www.mortex.com/products/kd.html" className="text-accent hover:underline font-medium">Mortex Kool Deck product details</Link> if that topping is specified in your quote.
            </p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Compare finishes for your pool deck
              </h3>
              <Link
                href="/contact?project=pool-deck#request-quote"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Get a Pool Deck Quote <ArrowRight className="h-4 w-4" />
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
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Julian is the founder of ProShield Epoxy, serving the Las Vegas metro area with residential garage coatings, commercial resinous flooring and specialty surface services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts currentSlug="best-pool-deck-coatings-las-vegas" />

      <CtaSection />
    </>
  )
}

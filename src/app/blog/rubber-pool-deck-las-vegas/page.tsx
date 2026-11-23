import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "What to know before resurfacing a pool deck with rubber | ProShield",
  description: "See how poured rubber feels, which concrete can be resurfaced and what to check at the coping, steps and drains before choosing a rubber pool deck.",
  alternates: {
    canonical: "/blog/rubber-pool-deck-las-vegas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/rubber-pool-deck-las-vegas",
    images: ["/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"],
  },
}

const questions = [
  {
    question: "Can rubber be installed over an old pool deck coating?",
    answer: "Sometimes. The existing finish must be sound and compatible with the rubber system. An installer needs to check which areas can stay and where the old coating needs to come off.",
  },
  {
    id: "cost-in-las-vegas",
    question: "What should a rubber deck quote include?",
    answer: "Look for the preparation and repairs, the rubber blend and binder, and how steps, edges and drains will be finished. If you want a second color around the pool, have the border included in the same quote.",
  },
]

export default function RubberPoolDeckLasVegasPost() {
  const schema = blogPostingSchema({
    title: "What to know before resurfacing a pool deck with rubber",
    description: "See how poured rubber feels, which concrete can be resurfaced and what to check at the coping, steps and drains before choosing a rubber pool deck.",
    slug: "rubber-pool-deck-las-vegas",
    datePublished: "2026-05-03",
    dateModified: "2026-11-23",
    image: "https://proshieldepoxy.com/images/blog/rubber-deck/rubber-deck-pool-wide.jpg",
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
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proshieldepoxy.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://proshieldepoxy.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "What to know before resurfacing a pool deck with rubber",
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
            What to know before resurfacing a pool deck with rubber
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
              <Calendar className="h-3.5 w-3.5" /> Updated <time dateTime="2026-11-23">November 23, 2026</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 2 min read
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

            <p id="what-is-rubber-pool-decking" className="text-lg text-gray-600 leading-relaxed">Rubber pool decking has a little give underfoot. That’s the main reason to consider it over a hard, textured coating. The granules are mixed with a binder and troweled in place, so the finished deck follows the shape of the pool instead of being laid out in tiles.</p>

            <nav aria-label="In this article" className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In this article</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#why-it-works-in-vegas" className="text-accent hover:underline">Can your existing deck take a rubber finish?</a></li>
                <li><a href="#installation-process" className="text-accent hover:underline">How the rubber is installed</a></li>
                <li><a href="#colors-and-finishes" className="text-accent hover:underline">Choosing a color blend</a></li>
                <li><a href="#maintenance" className="text-accent hover:underline">Living with a rubber deck</a></li>
                <li><a href="#faq" className="text-accent hover:underline">Questions homeowners ask</a></li>
              </ul>
            </nav>

            <h2 id="why-it-works-in-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Can your existing deck take a rubber finish?</h2>
            <p className="text-gray-600 leading-relaxed">
              Start with the concrete and whatever is already bonded to it.
              Loose paint or a failing coating needs attention before rubber goes down.
              A crack that is still moving can show up again through the new surface.
            </p>
            <p id="honest-downsides" className="text-gray-600 leading-relaxed">
              Look closely at the drain covers, door thresholds and coping, the finished edge around the pool.
              The rubber adds thickness.
              An estimate should explain how those edges will meet and how water will reach the drains afterward.
              If water already pools on the deck, flag those spots before work starts.
            </p>

            <h2 id="installation-process" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">How the rubber is installed</h2>
            <p className="text-gray-600 leading-relaxed">
              Once the base is ready, the installer mixes the granules with binder and spreads them by hand.
              Troweling shapes the finish around the curves, steps and edges.
              The binder needs time to cure before the deck goes back into use.
              Confirm when furniture can go back and when people can walk on it.
            </p>
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

            <h2 id="colors-and-finishes" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Choosing a color blend</h2>
            <p className="text-gray-600 leading-relaxed">
              Look closely at the individual granules, then step back to see the overall color.
              Two gray blends can look quite different if one includes more dark granules.
              Choose any contrasting border before the quote so the layout and its cost are clear.
            </p>
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
            <p className="text-gray-600 leading-relaxed">
              You can see more color blends on the <Link href="/rubber-pool-deck" className="text-accent hover:underline font-medium">rubber pool deck service page</Link>.
            </p>

            <h2 id="maintenance" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Living with a rubber deck</h2>
            <p className="text-gray-600 leading-relaxed">
              Keep leaves and grit out of the texture.
              Use the cleaning instructions for the binder on your deck before choosing a brush, cleaner or pressure washer.
              If a patch starts to loosen, have the area checked before cleaning it more aggressively.
            </p>
            <p id="rubber-vs-cool-deck" className="text-gray-600 leading-relaxed">
              The surface is softer than concrete, but wet rubber can still be slippery.
              If summer heat matters most to you, our <Link href="/blog/coolest-pool-deck-flooring-las-vegas" className="text-accent hover:underline font-medium">pool deck temperature guide</Link> explains what to look for when comparing a light blend with a darker finish.
            </p>

            <h2 id="faq" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Questions homeowners ask</h2>
            {questions.map(({ id, question, answer }) => (
              <div key={question} id={id}>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">{question}</h3>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
              </div>
            ))}

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Get a quote for rubber pool decking
              </h3>
              <Link
                href="/contact?project=pool-deck#request-quote"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Request a Rubber Deck Quote <ArrowRight className="h-4 w-4" />
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

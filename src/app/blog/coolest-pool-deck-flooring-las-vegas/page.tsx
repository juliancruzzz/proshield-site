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
  description: "How to compare pool deck colors, shade and surface-temperature claims before choosing a finish for a Las Vegas summer.",
  alternates: {
    canonical: "/blog/coolest-pool-deck-flooring-las-vegas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/coolest-pool-deck-flooring-las-vegas",
    images: ["/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"],
  },
}

const questions = [
  {
    question: "Is there a pool deck finish that stays cool enough for bare feet?",
    answer: "Any outdoor finish can become too hot for bare feet in direct sun. A cooler reading than another material does not establish a safe walking temperature.",
  },
  {
    question: "Can I compare two finishes with samples?",
    answer: "A side-by-side look outdoors helps you see the colors in the same light. A loose sample may heat differently from an installed deck, so use product test information for temperature comparisons.",
  },
]

export default function CoolestPoolDeckFlooringPost() {
  const schema = blogPostingSchema({
    title: "Which pool deck feels cooler in the sun?",
    description: "How to compare pool deck colors, shade and surface-temperature claims before choosing a finish for a Las Vegas summer.",
    slug: "coolest-pool-deck-flooring-las-vegas",
    datePublished: "2026-05-01",
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
        name: "Which pool deck feels cooler in the sun?",
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

            <p className="text-lg text-gray-600 leading-relaxed">The sunny stretch between your back door and the pool is the part to plan around. A finish that feels fine under the patio cover can be uncomfortable a few steps farther out. Start with where the afternoon sun lands, then compare colors for that part of the deck.</p>

            <nav aria-label="In this article" className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In this article</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#why-surface-temp-matters" className="text-accent hover:underline">Where do you walk in full sun?</a></li>
                <li><a href="#temperature-comparison" className="text-accent hover:underline">Does a lighter color make a difference?</a></li>
                <li><a href="#material-comparison" className="text-accent hover:underline">What does “degrees cooler” mean?</a></li>
                <li><a href="#faq" className="text-accent hover:underline">Questions homeowners ask</a></li>
              </ul>
            </nav>

            <h2 id="why-surface-temp-matters" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Where do you walk in full sun?</h2>
            <p className="text-gray-600 leading-relaxed">
              Check the steps, the pool edge and the route back to the house at the time you usually swim.
              The house may shade the patio in the morning and leave the same spot exposed later in the day.
              A new finish changes the surface.
              A patio cover or shade structure changes how much sun reaches it.
            </p>
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
                  A pergola shades only part of this pool deck.
                </p>
              </div>
            </div>

            <h2 id="temperature-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Does a lighter color make a difference?</h2>
            <p id="cool-deck" className="text-gray-600 leading-relaxed">
              Within the same finish, a lighter color generally absorbs less sunlight than a darker one.
              With an <Link href="/cool-deck" className="text-accent hover:underline font-medium">acrylic knockdown finish</Link>, compare the light and dark colors you would actually choose.
              <span id="pavers">For pavers</span> <span id="travertine">or travertine</span>, use the specific stone or paver color rather than a photo of a different one.
            </p>
            <p id="rubber-deck" className="text-gray-600 leading-relaxed">
              For <Link href="/rubber-pool-deck" className="text-accent hover:underline font-medium">rubber surfacing</Link>, the blend of granules changes the overall color.
              Rubber feels softer than a hard pool deck, but that tells you little about its temperature in direct sun.
            </p>

            <h2 id="material-comparison" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">What does “degrees cooler” mean?</h2>
            <p className="text-gray-600 leading-relaxed">
              A temperature difference needs a point of comparison.
              Was a pale coating compared with dark bare concrete, or were two finishes of a similar color tested side by side?
              Those comparisons answer different questions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Look for the exact product and color, what they were compared with, and whether both readings were taken at the same time in the same sunlight.
              A reading from a shaded display cannot tell you the temperature of your deck in full afternoon sun.
            </p>
            <p id="our-recommendation" className="text-gray-600 leading-relaxed">
              If the colors you like have comparable test results, use the <Link href="/blog/best-pool-deck-coatings-las-vegas" className="text-accent hover:underline font-medium">pool deck finish guide</Link> to compare texture and the work your concrete will need.
            </p>

            <h2 id="faq" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">Questions homeowners ask</h2>
            {questions.map(({ question, answer }) => (
              <div key={question}>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">{question}</h3>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
              </div>
            ))}

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Considering a lighter pool deck finish?
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

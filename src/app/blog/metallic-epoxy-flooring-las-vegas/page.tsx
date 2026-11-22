import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "How metallic epoxy gets its swirled finish | ProShield",
  description:
    "Metallic epoxy flooring in Las Vegas: compare finishes, concrete preparation, project cost factors and care before requesting a quote.",
  alternates: {
    canonical: "/blog/metallic-epoxy-flooring-las-vegas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/metallic-epoxy-flooring-las-vegas",
    images: ["/images/metallic-hero-poster.jpg"],
  },
}

export default function MetallicEpoxyFlooringLasVegasPost() {
  const schema = blogPostingSchema({
    title: "How metallic epoxy gets its swirled finish",
    description: "Metallic epoxy flooring in Las Vegas: compare finishes, concrete preparation, project cost factors and care before requesting a quote.",
    slug: "metallic-epoxy-flooring-las-vegas",
    datePublished: "2026-05-03",
    dateModified: "2026-11-21",
    image: "https://proshieldepoxy.com/images/metallic-hero-poster.jpg",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is metallic epoxy slippery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A smooth finish can be slippery when wet. Texture options must be selected for the expected use and cleaning conditions; no coating eliminates the risk of slipping."
        }
      },
      {
        "@type": "Question",
        "name": "Can I choose my colors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Color and finish options are discussed during the estimate. Samples and reference images show a direction; the final movement and pattern will vary."
        }
      },
      {
        "@type": "Question",
        "name": "Will it yellow over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sunlight can change the color over time. If the garage gets direct sun, ask how the base coat and topcoat hold up to UV light."
        }
      },
      {
        "@type": "Question",
        "name": "How do I maintain a metallic epoxy floor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Remove loose dirt and follow the installed finish’s cleaning instructions. Confirm the cleaner, dilution, equipment and stain-removal method before use. Do not assume every resin floor accepts the same products."
        }
      },
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
        "name": "Can you coat over an existing epoxy floor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sound existing coatings may be candidates for preparation and recoating only where compatible with the proposed system. Loose, contaminated or incompatible material may need removal."
        }
      },
      {
        "@type": "Question",
        "name": "How soon can I schedule an install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Availability changes with the project schedule. Confirm current estimate and installation dates directly rather than relying on a fixed booking window."
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
      { "@type": "ListItem", "position": 3, "name": "Metallic Epoxy Flooring in Las Vegas", "item": "https://proshieldepoxy.com/blog/metallic-epoxy-flooring-las-vegas" }
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
            Metallic Epoxy
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            How metallic epoxy gets its swirled finish
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-05-03">May 3, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Updated <time dateTime="2026-11-21">November 21, 2026</time>
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
            <p className="text-lg text-gray-600 leading-relaxed">The swirls in a metallic floor form as the pigments move through wet resin. A sample helps you choose colors, but the pattern on your floor will be its own.</p>

            {/* Table of Contents */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li><a href="#what-is-metallic-epoxy" className="text-accent hover:underline">What Is Metallic Epoxy Flooring?</a></li>
                  <li><a href="#what-does-it-look-like" className="text-accent hover:underline">What Does Metallic Epoxy Actually Look Like?</a></li>
                  <li><a href="#cost-in-las-vegas" className="text-accent hover:underline">How Much Does Metallic Epoxy Cost in Las Vegas?</a></li>
                  <li><a href="#installation-process" className="text-accent hover:underline">How We Install Metallic Epoxy</a></li>
                  <li><a href="#choosing-your-finish" className="text-accent hover:underline">Choosing Your Finish: High-Gloss vs Commercial-Grade Urethane</a></li>
                  <li><a href="#where-it-works-best" className="text-accent hover:underline">Where Does Metallic Epoxy Work Best?</a></li>
                  <li><a href="#what-can-go-wrong" className="text-accent hover:underline">What Can Go Wrong (And How to Avoid It)</a></li>
                  <li><a href="#faq" className="text-accent hover:underline">Frequently Asked Questions</a></li>
                </ul>
              </nav>
            </div>

            {/* What Is Metallic Epoxy */}
            <h2 id="what-is-metallic-epoxy" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Is Metallic Epoxy Flooring?
            </h2>
            <p className="text-gray-600 leading-relaxed">Metallic flooring is a layered coating over prepared concrete: primer, pigmented base, metallic layer and protective clear coat. Moisture treatment and the selected products must suit the slab. Decorative coatings do not repair structural damage or guarantee that cracks stay hidden.</p>

            {/* What Does It Look Like */}
            <h2 id="what-does-it-look-like" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Does Metallic Epoxy Actually Look Like?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you&apos;ve never seen a metallic epoxy floor in person, pictures
              honestly don&apos;t do it justice &mdash; but they&apos;ll give you
              the idea. The floor has real depth to it. It&apos;s not a flat color
              like paint or a basic coating. There are layers of metallic pigment
              that create movement and dimension across the surface, so the floor
              looks different depending on where you&apos;re standing and how the
              light catches it. No two floors ever come out the same, even if you
              pick the same color. That&apos;s part of what makes it special &mdash;
              your floor is your floor, nobody else has it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We do everything from deep charcoal and silver tones to bold coppers,
              blues, and custom blends. Some customers want subtle and classy,
              others want their garage to look like a showroom. Either way, the
              finish speaks for itself.
            </p>

            {/* Photo grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/metallic/metallic-epoxy-chopshop-porsche.webp"
                  alt="Real metallic floor application in the ProShield showroom project"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/blog/metallic/metallic-showroom-neon.jpg"
                  alt="Real metallic floor in the ProShield showroom project with neon signage"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/metallic/metallic-epoxy-silver-kitchen-real.webp"
                  alt="Real metallic floor photograph from a ProShield kitchen project"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/metallic/metallic-epoxy-silver-hallway.webp"
                  alt="Real metallic floor photograph from a ProShield hallway project"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

            {/* Cost Section */}
            <h2 id="cost-in-las-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How Much Does Metallic Epoxy Cost in Las Vegas?
            </h2>
            <p className="text-gray-600 leading-relaxed">I measure the floor and check for old coatings, cracks and moisture. If you’re comparing quotes, make sure they include the same repairs and finish.</p>
            <p className="text-gray-600 leading-relaxed">Garage size alone does not establish the price. Removal, repairs, edges, moisture treatment and access can change the scope even for spaces with similar floor area.</p>
            <p className="text-gray-600 leading-relaxed">Ask which preparation, repairs and topcoat are included and how additional work would be approved and priced.</p>
            <p className="text-gray-600 leading-relaxed">A low or high price alone does not establish quality. Compare the named products, preparation, layer build, exclusions and warranty for the same work.</p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-5 sm:p-6 my-8">
              <p className="text-gray-700 font-medium">For a price for your space, <Link href="/contact" className="text-accent hover:underline font-medium">request a free estimate</Link>.</p>
            </div>

            {/* Before / After */}
            <div className="my-10">
              <p className="font-heading font-semibold text-base text-gray-900 mb-4">Before &amp; After: Commercial Showroom</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Before</p>
                  <Image
                    src="/images/blog/metallic/metallic-before-showroom-1.jpg"
                    alt="Showroom concrete floor before metallic epoxy installation"
                    width={600}
                    height={800}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Before</p>
                  <Image
                    src="/images/blog/metallic/metallic-before-showroom-2.jpg"
                    alt="Same showroom with Porsche mural before metallic epoxy installation"
                    width={600}
                    height={800}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="rounded-xl overflow-hidden">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">After</p>
                  <Image
                    src="/images/metallic/metallic-epoxy-chopshop-porsche.webp"
                    alt="Real metallic floor after application in the same showroom"
                    width={600}
                    height={800}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">After</p>
                  <Image
                    src="/images/blog/metallic/metallic-showroom-neon.jpg"
                    alt="Real second view of metallic flooring in the same ProShield showroom"
                    width={600}
                    height={800}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Installation Process */}
            <h2 id="installation-process" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How We Install Metallic Epoxy &mdash; The Actual Process
            </h2>
            <p className="text-gray-600 leading-relaxed">Assess the concrete, moisture, contamination and existing coatings before selecting a system. Diamond grinding is part of ProShield’s preparation process; the required profile and repairs depend on the proposed products and site.</p>
            <p className="text-gray-600 leading-relaxed">Moisture assessment helps determine the appropriate primer or moisture-treatment system. Application rate and limits must follow the selected product, not one coverage figure for every slab.</p>
            <p className="text-gray-600 leading-relaxed">Metallic pigments are worked into the resin layer to create movement and depth. Pattern and coverage depend on the product and application; reference photos do not establish an exact match.</p>
            <p className="text-gray-600 leading-relaxed">The protective clear coat is selected for the intended traffic, appearance and cleaning needs. Confirm the product, finish and any texture additive in the quote.</p>
            <p className="text-gray-600 leading-relaxed">Application time and return-to-use time are different. Preparation, repairs, product selection and site conditions affect the schedule. Confirm when walking, furniture and vehicles are permitted before using the floor.</p>

            {/* Choosing Your Finish */}
            <h2 id="choosing-your-finish" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Choosing Your Finish: High-Gloss vs Commercial-Grade Urethane
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Once the metallic epoxy is down, the topcoat is what determines how
              the floor performs long-term. We offer two options depending on how the
              space will be used.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>High-gloss clear coat</strong> gives you the full mirror
              effect &mdash; deep reflections, maximum depth, and that showroom look
              that stops people in their tracks. It&apos;s ideal for spaces where
              the floor is the focal point: entertainment rooms, retail showrooms,
              man caves, or anywhere you want that &ldquo;wow&rdquo; reaction.
            </p>
            <p className="text-gray-600 leading-relaxed">A high-wear urethane is one topcoat option for suitable spaces. Compare the actual product’s abrasion, chemical and traction information for the expected use. Confirm the finish for the actual rolling loads and cleaning conditions.</p>
            <p className="text-gray-600 leading-relaxed">
              The right choice comes down to how you use the space. We&apos;ll walk
              you through it during your estimate so you&apos;re not guessing.
            </p>

            {/* Gloss vs Urethane comparison photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="rounded-xl overflow-hidden">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Reflected Finish Example</p>
                <Image
                  src="/images/blog/metallic/metallic-gloss-finish.jpg"
                  alt="Finish example showing reflected light on a metallic floor"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Texture Example</p>
                <Image
                  src="/images/blog/metallic/metallic-urethane-finish.jpg"
                  alt="Finish example showing metallic floor texture; topcoat not established by the photograph"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Where It Works Best */}
            <h2 id="where-it-works-best" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Where Does Metallic Epoxy Work Best?
            </h2>
            <p className="text-gray-600 leading-relaxed">Metallic finishes can be considered for these spaces after the concrete and intended use are assessed:</p>
            <p className="text-gray-600 leading-relaxed">Garages: consider vehicle traffic, equipment, moisture and the texture needed for your use.</p>
            <p className="text-gray-600 leading-relaxed">Interior rooms: consider color movement, lighting, cleaning, joints and thresholds. Existing concrete condition can remain relevant to the finished appearance.</p>
            <p className="text-gray-600 leading-relaxed">For mobility equipment or frequent wheel traffic, discuss the actual loads, turning areas, traction needs and cleaning routine before choosing the topcoat. Ask for applicable product information and a sample.</p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Storefronts and commercial showrooms</strong> are where
              metallic really shines. Car dealerships, barbershops, boutiques,
              restaurants &mdash; any business where first impressions matter. The
              floor becomes part of the brand. Customers walk in and notice the
              floor before they notice anything else.
            </p>
            <p className="text-gray-600 leading-relaxed">Outdoor exposure, forklifts, heavy impacts and chemical use need a system-specific assessment. A decorative metallic finish is not automatically suitable for every concrete floor.</p>

            {/* What Can Go Wrong */}
            <h2 id="what-can-go-wrong" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Can Go Wrong With Metallic Epoxy (And How to Avoid It)
            </h2>
            <p className="text-gray-600 leading-relaxed">Before choosing an installer, compare the preparation, product requirements and written project scope:</p>
            <p className="text-gray-600 leading-relaxed"><strong>Preparation:</strong> Ask how the substrate will be profiled and existing contamination or coatings addressed. Adhesion depends on the whole system and site condition, not price alone.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Moisture:</strong> Assess the slab and use the appropriate treatment where required. Dry outdoor air does not establish that a slab meets a coating’s moisture limits.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Application conditions:</strong> The installer must follow product limits for slab and air temperature, humidity and working time.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Product selection:</strong> Ask for the primer, base, metallic resin and topcoat by name. Compare intended use and written data rather than assuming a low bid uses a specific type of material.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Curing:</strong> Each layer and the completed floor need the specified cure time. Confirm the return-to-use instructions before walking, furnishing or parking.</p>
            <p className="text-gray-600 leading-relaxed">
              The best way to avoid all of this? Hire someone who shows you their
              work, explains their process, and doesn&apos;t dodge your questions.
              That&apos;s what we do at every estimate.
            </p>

            {/* FAQ */}
            <h2 id="faq" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is metallic epoxy slippery?
            </h3>
            <p className="text-gray-600 leading-relaxed">A smooth finish can be slippery when wet. Texture options must be selected for the expected use and cleaning conditions; no coating eliminates the risk of slipping.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can I choose my colors?
            </h3>
            <p className="text-gray-600 leading-relaxed">Color and finish options are discussed during the estimate. Samples and reference images show a direction; the final movement and pattern will vary.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Will it yellow over time?
            </h3>
            <p className="text-gray-600 leading-relaxed">Sunlight can change the color over time. If the garage gets direct sun, ask how the base coat and topcoat hold up to UV light.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How do I maintain a metallic epoxy floor?
            </h3>
            <p className="text-gray-600 leading-relaxed">Remove loose dirt and follow the installed finish’s cleaning instructions. Confirm the cleaner, dilution, equipment and stain-removal method before use. Do not assume every resin floor accepts the same products.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can you coat over an existing epoxy floor?
            </h3>
            <p className="text-gray-600 leading-relaxed">Sound existing coatings may be candidates for preparation and recoating only where compatible with the proposed system. Loose, contaminated or incompatible material may need removal.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Do you do commercial jobs?
            </h3>
            <p className="text-gray-600 leading-relaxed">ProShield offers residential and commercial metallic finishes in the Las Vegas area. Suitability depends on the concrete, exposure and intended use.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How much does it cost to epoxy a 2-car garage in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">I measure the floor and check for old coatings, cracks and moisture. If you’re comparing quotes, make sure they include the same repairs and finish.</p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How soon can I schedule an install?
            </h3>
            <p className="text-gray-600 leading-relaxed">Availability changes with the project schedule. Confirm current estimate and installation dates directly rather than relying on a fixed booking window.</p>

            {/* Bottom CTA */}
            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Ready to See What Metallic Epoxy Can Do for Your Space?
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                Every project starts with a free on-site estimate. We&apos;ll look
                at your concrete, talk through your options, show you samples, and
                give you a flat price &mdash; no pressure, no surprises.
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

      <RelatedPosts currentSlug="metallic-epoxy-flooring-las-vegas" />

      <CtaSection />
    </>
  )
}

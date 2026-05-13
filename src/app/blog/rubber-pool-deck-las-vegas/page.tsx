import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Rubber Pool Deck Flooring in Las Vegas | Cost, Process & What to Expect | ProShield",
  description:
    "Rubber pool deck flooring in Las Vegas costs $15–18/sq ft installed. See our installation process, color options, maintenance, and why it stays 60°F cooler than bare concrete — from a crew that installs them every week.",
  alternates: {
    canonical: "/blog/rubber-pool-deck-las-vegas",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/rubber-pool-deck-las-vegas",
    images: ["/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"],
  },
}

export default function RubberPoolDeckLasVegasPost() {
  const schema = blogPostingSchema({
    title: "Rubber Pool Deck Flooring in Las Vegas: What It Costs, How It's Installed & What to Expect",
    description:
      "Rubber pool deck flooring in Las Vegas costs $15–18/sq ft installed. See our installation process, color options, maintenance, and why it stays 60°F cooler than bare concrete.",
    slug: "rubber-pool-deck-las-vegas",
    datePublished: "2026-05-03",
    image: "https://proshieldepoxy.com/images/blog/rubber-deck/rubber-deck-pool-wide.jpg",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a rubber pool deck cost in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rubber pool deck flooring in Las Vegas costs $15–18 per square foot installed. For a standard 600 sq ft pool deck, expect $9,000–$10,800. The price depends on concrete condition, color selection, and deck complexity. Every job gets a free on-site estimate with a flat quote — no hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "How long does rubber pool decking last in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A professionally installed rubber pool deck lasts 10–15 years in Las Vegas conditions with minimal maintenance. The UV-stable polyurethane binder resists fading and degradation from desert sun, and the flexible rubber membrane handles daily thermal expansion and contraction that cracks rigid coatings.",
        },
      },
      {
        "@type": "Question",
        name: "Is rubber pool decking slippery when wet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Rubber pool decking is one of the most slip-resistant surfaces available. The textured rubber granules provide excellent traction even when wet from pool splash or rain. Our system exceeds ADA slip resistance requirements, making it a top choice for families with children and areas around spas and hot tubs.",
        },
      },
      {
        "@type": "Question",
        name: "How hot does rubber pool decking get in Las Vegas summer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rubber pool decking stays around 110°F in peak Las Vegas summer sun — roughly 60°F cooler than bare concrete at 170°F. It's warm but comfortably walkable barefoot. The rubber layer insulates your feet from the hot concrete below, and the material's low thermal conductivity means heat transfers to your skin slowly.",
        },
      },
      {
        "@type": "Question",
        name: "Can you install rubber decking over existing concrete or cool deck?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Rubber pool deck systems go directly over existing concrete — no demolition required. If there's an existing cool deck or acrylic coating, we remove any loose or delaminating material, but sound coatings can typically stay. The concrete needs to be structurally sound and properly prepped before installation.",
        },
      },
      {
        "@type": "Question",
        name: "How do you maintain a rubber pool deck?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Blow or sweep debris weekly and rinse with a hose monthly. For deeper cleaning, mild soap and water with a soft brush handles sunscreen stains and pool chemical splatter. Reseal every 3–4 years — just pressure wash and roll on a clear coat. It's cheap and easy compared to cool deck's 1–2 year reseal cycle.",
        },
      },
      {
        "@type": "Question",
        name: "How long does rubber pool deck installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most rubber pool deck installations take 2–3 days. Day 1 is surface preparation (grinding, crack repair, cleaning). Day 1–2 is primer and the rubber/resin pour. Day 2–3 is the topcoat and cure. You can walk on it in 24 hours and use it normally after 48–72 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Is rubber pool decking better than cool deck?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rubber pool decking stays about 20°F cooler than cool deck, provides better slip resistance, cushions falls, and needs less maintenance — reseal every 3–4 years vs cool deck's 1–2 year cycle. Cool deck is more affordable ($6–9/sq ft vs $15–18/sq ft) and is a great option if budget is the top priority. We install both systems and recommend rubber for homeowners who want maximum comfort and long-term value.",
        },
      },
    ],
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
        name: "Rubber Pool Deck Flooring in Las Vegas",
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
            Rubber Pool Deck Flooring in Las Vegas: What It Costs, How It&apos;s Installed &amp; What to Expect
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
              <Calendar className="h-3.5 w-3.5" /> May 3, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 10 min read
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
                alt="Rubber aggregate pool deck flooring around a Las Vegas pool with landscaping and gazebo — installed by ProShield Epoxy"
                width={1200}
                height={823}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              If you&apos;ve been looking into pool deck options for Las
              Vegas, you&apos;ve probably run into the same problem we hear
              about every week: your concrete is too hot to walk on, your
              cool deck needs resealing again, or you&apos;re tired of the
              deck cracking every summer. Rubber pool deck flooring solves
              all three. It&apos;s the coolest surface you can stand on
              barefoot in July, it only needs resealing every 3&ndash;4
              years instead of every 1&ndash;2, and it
              flexes with your concrete instead of cracking on top of it.
              We&apos;re ProShield Epoxy, and we install rubber pool decks
              across the Las Vegas valley every week &mdash; here&apos;s
              everything you need to know before you book.
            </p>

            {/* TOC */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li><a href="#what-is-rubber-pool-decking" className="text-accent hover:underline">What Is Rubber Pool Deck Flooring?</a></li>
                  <li><a href="#why-it-works-in-vegas" className="text-accent hover:underline">Why Rubber Works Better Than Anything Else in Las Vegas</a></li>
                  <li><a href="#cost-in-las-vegas" className="text-accent hover:underline">How Much Does It Cost in Las Vegas?</a></li>
                  <li><a href="#installation-process" className="text-accent hover:underline">How We Install Rubber Pool Decking</a></li>
                  <li><a href="#colors-and-finishes" className="text-accent hover:underline">Colors &amp; Design Options</a></li>
                  <li><a href="#maintenance" className="text-accent hover:underline">Maintenance &amp; Longevity</a></li>
                  <li><a href="#rubber-vs-cool-deck" className="text-accent hover:underline">Rubber Deck vs. Cool Deck</a></li>
                  <li><a href="#honest-downsides" className="text-accent hover:underline">Honest Downsides</a></li>
                  <li><a href="#faq" className="text-accent hover:underline">Frequently Asked Questions</a></li>
                </ul>
              </nav>
            </div>

            {/* -------- What Is It -------- */}
            <h2 id="what-is-rubber-pool-decking" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Is Rubber Pool Deck Flooring?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Rubber pool decking is a poured-in-place surface made from{" "}
              <strong>EPDM rubber granules</strong> bound together with a
              UV-stable polyurethane resin. The rubber granules come in
              dozens of colors &mdash; grays, tans, earth tones, and custom
              blends &mdash; and are hand-troweled directly over your
              existing concrete to create a seamless, textured surface
              that&apos;s typically{" "}
              <strong>3/8-inch to 1/2-inch thick</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unlike spray-applied coatings like{" "}
              <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck</Link>{" "}
              or knockdown texture, rubber decking has actual physical
              mass between your feet and the concrete. That mass acts as
              an insulation layer &mdash; it blocks heat transfer while
              also providing cushion, slip resistance, and crack bridging
              that rigid coatings can&apos;t match. It bonds directly to
              prepared concrete with no demolition, no ripping out existing
              material, and no weeks of construction in your backyard.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-hottub.jpg"
                alt="Gray two-tone rubber aggregate pool deck around a pool and hot tub — installed by ProShield Epoxy in Las Vegas"
                width={1200}
                height={823}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Two-tone gray rubber deck around a pool and spa &mdash; the textured granules provide built-in slip resistance even when wet
                </p>
              </div>
            </div>

            {/* -------- Why Vegas -------- */}
            <h2 id="why-it-works-in-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Why Rubber Works Better Than Anything Else in Las Vegas
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Las Vegas is one of the hardest environments in the country
              for pool deck surfaces. You&apos;ve got 115&deg;F+ air
              temps, concrete slabs hitting 170&deg;F in direct sun, daily
              temperature swings of 40&ndash;50&deg;F that expand and
              contract everything, and relentless UV that degrades most
              coatings within a few years. Rubber pool decking handles all
              of it &mdash; here&apos;s why:
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>It stays ~60&deg;F cooler than bare concrete.</strong>{" "}
              In peak summer conditions, rubber deck surfaces reach around{" "}
              <strong>110&deg;F</strong> compared to 170&deg;F for
              uncoated concrete. That&apos;s not just a comfort difference
              &mdash; it&apos;s the difference between walking to the pool
              barefoot and sprinting across burning concrete in sandals.
              The rubber layer insulates your feet from the hot slab below,
              and the material&apos;s low thermal conductivity means heat
              transfers to your skin slowly even when the surface is warm.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>It doesn&apos;t crack when your concrete moves.</strong>{" "}
              Las Vegas concrete moves constantly &mdash; daily thermal
              cycling causes expansion and contraction that creates
              hairline cracks over time. Rigid coatings and hard surfaces
              telegraph those cracks right through to the finished surface.
              Rubber decking is flexible &mdash; the elastomeric membrane
              spans cracks up to 1/8-inch without breaking or showing
              through. If your existing deck already has crack networks,
              this is a major advantage.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Slip resistance that actually works when wet.</strong>{" "}
              Pool decks are wet by definition. The textured rubber
              granules provide inherent traction that stays grippy over
              time because the grip is built into the material itself, not
              applied as a topcoat that wears off. Our system exceeds ADA
              slip resistance standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Cushioned impact protection.</strong>{" "}
              Kids run around pools. People slip. On concrete or stone, a
              fall means scraped knees or worse. Rubber decking provides
              genuine shock absorption &mdash; the same material principle
              used in commercial playground surfaces. A slip on rubber is
              a non-event. A slip on concrete can mean stitches.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>UV and chemical resistance built in.</strong>{" "}
              The polyurethane binder is formulated for extended UV exposure
              and maintains its integrity for years without the periodic
              resealing that most other pool deck coatings require in Las
              Vegas. The rubber granules are chemically inert &mdash;
              resistant to chlorine, salt, muriatic acid, and whatever
              your pool water splashes across the deck daily.
            </p>

            {/* -------- Cost -------- */}
            <h2 id="cost-in-las-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How Much Does Rubber Pool Decking Cost in Las Vegas?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We&apos;re not going to make you fill out a form to get a
              ballpark. For most residential pool decks in the Las Vegas
              area, rubber pool deck flooring runs{" "}
              <strong>$15 to $18 per square foot</strong>, installed. That
              includes surface prep, primer, the full rubber aggregate
              system, and the UV-stable topcoat.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For a standard pool deck around 600 square feet, you&apos;re
              looking at roughly <strong>$9,000 to $10,800</strong>{" "}
              depending on the condition of the concrete, how complex
              the deck layout is (coping, drains, expansion joints,
              stairs), and which color blend you choose.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What affects the final price? Concrete condition is the
              biggest variable. A clean, sound slab with minimal cracking
              is straightforward. A deck with significant cracks, old
              delaminating coatings, or drainage issues needs more prep
              work before we can pour. Every job gets a free on-site
              estimate where we look at your actual deck and give you a
              flat number &mdash; no surprises.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For comparison:{" "}
              <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck resurfacing</Link>{" "}
              runs $6&ndash;$9/sq ft, pavers run $10&ndash;$20/sq ft, and
              travertine runs $15&ndash;$27/sq ft. Rubber sits right in
              the middle on upfront cost but comes with the lowest
              maintenance burden long-term &mdash; reseal every 3&ndash;4
              years vs cool deck&apos;s 1&ndash;2, and the rubber reseal
              is just a pressure wash and clear coat. No
              re-sanding, no annual sealing.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-5 sm:p-6 my-8">
              <p className="text-gray-700 font-medium">
                Want an exact number for your pool deck?{" "}
                <Link href="/contact" className="text-accent hover:underline font-semibold">
                  Get a free estimate
                </Link>{" "}
                &mdash; we&apos;ll come out, walk your deck, and give you
                a flat price on the spot.
              </p>
            </div>

            {/* -------- Installation -------- */}
            <h2 id="installation-process" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How We Install Rubber Pool Decking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              One of the biggest advantages of rubber decking is the
              installation process. It goes directly over your existing
              concrete &mdash; no demolition, no jackhammering, no weeks
              of construction disrupting your backyard. Most pool decks
              are done in <strong>2&ndash;3 days</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Day 1 &mdash; Surface Preparation.</strong> We grind
              the existing concrete to create a proper bonding profile,
              fill any significant cracks with flexible filler, and clean
              the surface of all contaminants. If there&apos;s an existing
              cool deck or acrylic coating, we remove any loose or
              delaminating material. Sound, well-bonded existing coatings
              can typically stay in place. This step is everything &mdash;
              skip it or rush it and the system fails.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Day 1&ndash;2 &mdash; Primer &amp; Pour.</strong> A
              polyurethane primer is rolled onto the prepared concrete to
              seal it and create the bond surface. Once the primer tacks,
              we mix the rubber granules with the polyurethane resin and
              hand-trowel the mixture onto the deck at the specified
              thickness. Around coping, drains, expansion joints, and
              transitions, we detail the material to create clean,
              waterproof edges. This is where craftsmanship matters
              &mdash; the transitions and details are what separate a
              professional install from a sloppy one.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Day 2&ndash;3 &mdash; Topcoat &amp; Cure.</strong> A
              UV-stable topcoat seals the rubber surface and locks the
              granules in place. Cure time is typically{" "}
              <strong>24 hours</strong> before light foot traffic and{" "}
              <strong>48&ndash;72 hours</strong> before furniture and
              normal use.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-installation.jpg"
                alt="Installer hand-troweling rubber aggregate onto a pool deck surface — ProShield Epoxy installation in progress"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Hand-troweling the rubber aggregate mixture onto prepared concrete &mdash; this is where craftsmanship matters
                </p>
              </div>
            </div>

            {/* -------- Colors -------- */}
            <h2 id="colors-and-finishes" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Colors &amp; Design Options
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Rubber pool decking comes in a wide range of color blends.
              We carry everything from classic desert tones &mdash;
              sandstone, tan, warm gray &mdash; to bolder options like
              terracotta, slate blue, and custom multi-color blends. Most
              Las Vegas homeowners go with earth tones that complement
              their exterior and landscape, but we can match just about
              anything.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We&apos;ll bring physical samples to your estimate so you
              can see the actual colors on your concrete in your lighting.
              Screens don&apos;t do them justice &mdash; the texture and
              color shift depending on sunlight and angle, and you want
              to see it in person before you commit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You can also do multi-zone designs &mdash; one color around
              the pool edge, a different color for the main deck area,
              borders, patterns, or accent bands. The material is
              hand-troweled so we have full control over where each color
              goes.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-terracotta.jpg"
                alt="Terracotta-colored rubber aggregate pool deck showing warm copper tones around a Las Vegas pool — installed by ProShield Epoxy"
                width={1200}
                height={876}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Terracotta/copper rubber deck &mdash; one of many color blends available
                </p>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 shadow-lg">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-slide.jpg"
                alt="Completed gray rubber pool deck with slide and pergola in Las Vegas backyard — installed by ProShield Epoxy"
                width={1200}
                height={671}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs text-white/90">
                  Finished rubber deck with slide and pergola &mdash; seamless coverage from pool edge to outdoor living area
                </p>
              </div>
            </div>

            {/* -------- Maintenance -------- */}
            <h2 id="maintenance" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Maintenance &amp; Longevity
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This is where rubber pool decking really separates itself
              from other options. The maintenance is minimal:
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Weekly:</strong> Blow or sweep debris. That&apos;s it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Monthly:</strong> Rinse with a hose. For anything
              stubborn &mdash; sunscreen stains, pool chemical splatter
              &mdash; mild soap and water with a soft brush handles it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Reseal every 3&ndash;4 years.</strong> Compared to
              cool deck&apos;s 1&ndash;2 year reseal cycle, rubber decking
              is way less demanding. When it&apos;s time, the process is
              simple: pressure wash the surface and roll on a clear coat.
              It&apos;s cheap, easy, and you can knock it out in an
              afternoon. Nothing like the involved resealing process that
              other coatings require.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Expected lifespan:</strong>{" "}
              <strong>10&ndash;15 years</strong> in Las Vegas conditions.
              That&apos;s comparable to travertine and paver installations
              that cost two to three times as much, with a fraction of
              the ongoing maintenance.
            </p>

            {/* -------- Customer Story -------- */}
            <div className="my-10 rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed">
                One of our customers had a textured spray deck that was
                giving them nothing but problems &mdash; chipping,
                constant resealing, and it still wasn&apos;t that cool.
                His wife uses the pool every day and they spend a lot of
                time outside, so the deck was a real pain point. We
                installed rubber aggregate over the existing surface and
                it made a huge difference. They loved how much cooler it
                is, how cushy it feels underfoot, and the fact that they
                aren&apos;t dealing with resealing every year. That&apos;s
                the kind of feedback that tells you the system actually
                delivers.
              </p>
            </div>

            {/* -------- vs Cool Deck -------- */}
            <h2 id="rubber-vs-cool-deck" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Rubber Deck vs. Cool Deck
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This is the most common question we get, and since we
              install both systems, we can give you an honest answer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <Link href="/cool-deck" className="text-accent hover:underline font-medium">Cool deck</Link>{" "}
              is a great system at its price point. At $6&ndash;$9/sq ft
              installed, it&apos;s the most affordable way to drop your
              pool deck temperature by about 40&deg;F. It lasts
              10&ndash;15 years with proper maintenance. The trade-off is
              that it needs resealing every 1&ndash;2 years in Las Vegas
              &mdash; the UV out here is brutal on acrylic coatings. If
              budget is your top priority and you&apos;re disciplined
              about resealing, cool deck is a solid choice.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Rubber decking costs more upfront ($15&ndash;$18/sq ft) but
              stays about <strong>20&deg;F cooler</strong> than cool deck,
              provides better slip resistance, cushions falls, and bridges
              cracks. You still reseal rubber, but only every 3&ndash;4
              years instead of every 1&ndash;2 &mdash; and the process is
              just a pressure wash and clear coat roll-on. For homeowners
              who want maximum comfort, safety, and long-term value,
              rubber is the better investment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We don&apos;t push one over the other &mdash; we get paid
              either way. At your estimate, we&apos;ll walk through both
              options with real numbers for your specific deck so you can
              make the call that makes sense for your situation.
            </p>

            {/* -------- Honest Downsides -------- */}
            <h2 id="honest-downsides" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Honest Downsides
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We&apos;re not going to pretend rubber pool decking is
              perfect. Here&apos;s what you should know:
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>It costs more than cool deck.</strong> If you&apos;re
              on a tight budget, cool deck at $6&ndash;$9/sq ft is a real
              option that still reduces heat significantly. Rubber at
              $15&ndash;$18/sq ft is a step up in price. For some
              homeowners, the budget difference matters and cool deck is
              the right call.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Sharp or heavy objects can damage it.</strong> Dragging
              metal furniture, dropping heavy tools, or poking the surface
              with sharp objects can gouge the rubber. It&apos;s durable
              under normal pool deck use &mdash; foot traffic, pool
              furniture, kids, dogs &mdash; but it&apos;s not indestructible.
              Use furniture pads and don&apos;t drag metal across it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>It&apos;s not DIY.</strong> Unlike some cool deck
              kits you can buy at the hardware store, rubber pool decking
              is a professional-only installation. The mixing ratios,
              troweling technique, thickness control, and detail work
              around transitions require experience. A bad install means
              delamination, uneven thickness, or poor bonding &mdash;
              and you won&apos;t know until it&apos;s too late. This
              isn&apos;t a weekend project.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Color fades over time.</strong> After 7&ndash;10
              years of Las Vegas UV, you&apos;ll notice some color
              softening. The surface still functions perfectly, but the
              color won&apos;t be as vibrant as day one. The optional UV
              refresh coat takes care of this if it bothers you.
            </p>

            {/* -------- FAQ -------- */}
            <h2 id="faq" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How much does a rubber pool deck cost in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>$15&ndash;$18 per square foot</strong> installed. For
              a standard 600 sq ft pool deck, that&apos;s
              $9,000&ndash;$10,800. Price depends on concrete condition,
              color selection, and deck complexity. We give a flat quote
              at your free estimate &mdash; no hidden fees.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does rubber pool decking last in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>10&ndash;15 years</strong> with minimal maintenance.
              The UV-stable binder resists degradation from desert sun,
              and the flexible rubber handles the daily thermal expansion
              and contraction that cracks rigid coatings.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is rubber pool decking slippery when wet?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              No. It&apos;s one of the most slip-resistant pool deck
              surfaces available. The textured rubber granules provide
              excellent traction even when wet from pool splash or rain.
              Our system exceeds ADA slip resistance requirements.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How hot does rubber pool decking get in Las Vegas summer?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Around <strong>110&deg;F</strong> in peak conditions &mdash;
              warm but comfortably walkable barefoot. Compare that to bare
              concrete at 170&deg;F or{" "}
              <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck</Link>{" "}
              at 130&deg;F. The rubber layer insulates your feet from the
              hot slab and transfers heat slowly.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can you install rubber decking over existing concrete or cool deck?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes. It goes directly over existing concrete &mdash; no
              demolition. If there&apos;s an existing cool deck coating,
              we remove anything loose or delaminating, but sound material
              can stay. The concrete needs to be structurally sound and
              properly prepped.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How do you maintain a rubber pool deck?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sweep weekly, hose down monthly, spot-clean with mild soap
              as needed. Reseal every 3&ndash;4 years &mdash; just
              pressure wash and roll on a clear coat. It&apos;s cheap and
              takes an afternoon. Way less maintenance than cool
              deck&apos;s 1&ndash;2 year reseal cycle.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does installation take?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Most jobs are done in <strong>2&ndash;3 days</strong>. Walk
              on it after 24 hours, use it normally after 48&ndash;72
              hours.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is rubber pool decking better than cool deck?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              It depends on what matters most to you. Rubber is cooler,
              safer, and lower maintenance. Cool deck is more affordable
              upfront. We install both and can walk you through the pros
              and cons for your specific situation at your estimate.{" "}
              <Link href="/blog/coolest-pool-deck-flooring-las-vegas" className="text-accent hover:underline font-medium">
                See our full comparison here.
              </Link>
            </p>

            {/* CTA Box */}
            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Ready to Upgrade Your Pool Deck?
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                We&apos;ll come out, walk your deck, measure it, show you
                color samples on your concrete, and give you a flat price
                &mdash; free, no obligation. Most estimates are done
                within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Julian is the founder of ProShield Epoxy, a professional floor coating company
                  serving the Las Vegas metro area. He specializes in residential garage coatings,
                  commercial resinous flooring, pool deck systems, and specialty surfaces including
                  rubber aggregate, metallic epoxy, and concrete polishing. Every article is written
                  from hands-on installation experience.
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

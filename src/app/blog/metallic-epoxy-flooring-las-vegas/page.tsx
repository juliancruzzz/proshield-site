import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Metallic Epoxy Flooring in Las Vegas | Cost, Process & What to Expect",
  description:
    "What does metallic epoxy flooring really cost in Las Vegas? We break down real pricing ($10–$12/sq ft), our installation process, finish options, and what to expect — from a local crew that installs them every week.",
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
    title: "Metallic Epoxy Flooring in Las Vegas: What It Costs, How It's Done & What to Expect",
    description: "What does metallic epoxy flooring really cost in Las Vegas? We break down real pricing, our installation process, finish options, and what to expect — from a local crew that installs them every week.",
    slug: "metallic-epoxy-flooring-las-vegas",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
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
          "text": "The high-gloss finish can be slick when wet, which is why we offer a commercial-grade urethane topcoat with aluminum oxide for garages and high-traffic areas. It adds real traction without sacrificing the metallic look."
        }
      },
      {
        "@type": "Question",
        "name": "Can I choose my colors for metallic epoxy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We carry a full range of metallic pigments — silvers, charcoals, coppers, blues, golds, and more. We can also do custom blends to match your space. We'll bring samples to your estimate so you can see them on concrete, not just on a screen."
        }
      },
      {
        "@type": "Question",
        "name": "Will metallic epoxy yellow over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not with our system. We use UV-stable clear coats specifically to prevent yellowing, which is a real problem with cheaper epoxy products. Your floor will look the same years from now as it does the day we finish."
        }
      },
      {
        "@type": "Question",
        "name": "How do I maintain a metallic epoxy floor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dust mop or sweep regularly, and damp mop as needed. That's it. No waxing, no sealing, no special cleaners. The surface is non-porous so spills wipe right up — oil, chemicals, whatever. It's one of the lowest-maintenance floors you can own."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to epoxy a 2-car garage in Las Vegas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a standard 2-car garage (around 400–500 square feet), metallic epoxy runs roughly $4,000 to $6,000 installed. That includes concrete prep, the full metallic epoxy system, and your choice of topcoat. The final price depends on the condition of your slab and any repairs needed."
        }
      },
      {
        "@type": "Question",
        "name": "Can you coat over an existing epoxy floor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the condition. If the existing coating is still bonded and in decent shape, we can prep over it. If it's peeling or failing, it needs to come off first. We'll tell you exactly what's needed at the estimate."
        }
      },
      {
        "@type": "Question",
        "name": "How soon can I schedule a metallic epoxy install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically book 2–3 weeks out depending on the season. Once your estimate is done and you're ready to move forward, we'll lock in your dates and handle everything from there — including material ordering and scheduling around your timeline."
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
            Metallic Epoxy Flooring in Las Vegas: What It Costs, How It&apos;s Done &amp; What to Expect
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
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

      <article className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Metallic epoxy flooring takes a plain concrete slab and turns it into
              something that actually looks high-end &mdash; think deep, rich color
              with a three-dimensional effect that shifts depending on how the light
              hits it. Every floor comes out different, and it&apos;s built to hold
              up, not just look good. But before you pull the trigger, you probably
              want to know what it actually costs, how the installation works, and
              whether it&apos;s the right fit for your space. We&apos;re ProShield
              Epoxy, and we install metallic epoxy floors across the Las Vegas
              valley every week &mdash; here&apos;s everything we tell our
              customers before they book.
            </p>

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
            <p className="text-gray-600 leading-relaxed">
              Metallic epoxy is a multi-layer floor coating system applied directly
              over concrete. It uses metallic pigments suspended in a high-build
              epoxy resin to create a three-dimensional finish across the surface.
              It&apos;s not a topical coating that sits on the concrete &mdash; it
              bonds to it, which is why it doesn&apos;t peel, crack, or separate
              the way tiles or stick-on flooring can. The system goes down in
              stages: surface prep, a moisture vapor barrier base coat, the metallic
              epoxy layer, and a protective clear coat on top.
            </p>

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
                  src="/images/blog/metallic/metallic-showroom-porsche.jpg"
                  alt="Metallic epoxy showroom floor installed by ProShield Epoxy in Las Vegas with deep silver and charcoal three-dimensional pattern reflecting neon lights and Porsche wall art"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/blog/metallic/metallic-showroom-neon.jpg"
                  alt="Metallic epoxy floor in Las Vegas commercial showroom showing swirl pattern and light reflections with neon signage — installed by ProShield Epoxy"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/blog/metallic/metallic-kitchen-silver.jpg"
                  alt="Metallic epoxy kitchen floor in Las Vegas home with silver swirl pattern, white cabinets and stainless appliances — installed by ProShield Epoxy"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/blog/metallic/metallic-hallway-silver.jpg"
                  alt="Metallic epoxy hallway floor showing depth and natural light reflection in a Las Vegas residential install by ProShield Epoxy"
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
            <p className="text-gray-600 leading-relaxed">
              We&apos;re not going to make you fill out a form just to get a
              ballpark. For most residential and commercial spaces in the Las Vegas
              area, metallic epoxy runs between{" "}
              <strong>$10 and $12 per square foot</strong>, installed. That includes
              surface prep, the full metallic epoxy system, and your choice of
              topcoat.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For a standard 2-car garage around 400&ndash;500 square feet,
              you&apos;re looking at roughly <strong>$4,000 to $6,000</strong>{" "}
              depending on the condition of the concrete and any repairs needed
              before we coat. Larger spaces &mdash; showrooms, commercial floors,
              full basements &mdash; typically come in on the lower end per square
              foot since there&apos;s more area to cover.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What affects the final price? A few things: square footage, how much
              concrete repair is needed (cracks, pitting, moisture issues), whether
              it&apos;s an interior living space vs a garage, and which topcoat you
              go with. Every job gets a free on-site estimate where we look at your
              actual slab and give you a flat number &mdash; no surprises.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you&apos;ve been quoted $3&ndash;5 per square foot for
              &ldquo;metallic epoxy&rdquo; somewhere else, ask what system
              they&apos;re using. At that price point, you&apos;re usually getting a
              DIY-grade kit or a single coat with no real prep work. The difference
              shows up in about six months.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-5 sm:p-6 my-8">
              <p className="text-gray-700 font-medium">
                Want an exact number for your space?{" "}
                <Link href="/contact" className="text-accent hover:underline font-semibold">
                  Get a free estimate
                </Link>{" "}
                &mdash; we&apos;ll come out, look at your slab, and give you a flat
                price on the spot.
              </p>
            </div>

            {/* Before / After */}
            <div className="my-10">
              <p className="font-heading font-semibold text-base text-gray-900 mb-4">Before &amp; After: Commercial Showroom</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Before</p>
                  <Image
                    src="/images/blog/metallic/metallic-before-showroom-1.jpg"
                    alt="Raw concrete floor before metallic epoxy installation by ProShield Epoxy in Las Vegas commercial showroom"
                    width={600}
                    height={800}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Before</p>
                  <Image
                    src="/images/blog/metallic/metallic-before-showroom-2.jpg"
                    alt="Commercial showroom concrete floor with Porsche mural before metallic epoxy coating by ProShield Epoxy in Las Vegas"
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
                    src="/images/blog/metallic/metallic-showroom-porsche.jpg"
                    alt="Completed metallic epoxy floor in Las Vegas commercial showroom with Porsche mural — installed by ProShield Epoxy"
                    width={600}
                    height={800}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">After</p>
                  <Image
                    src="/images/blog/metallic/metallic-showroom-neon.jpg"
                    alt="Completed metallic epoxy floor in Las Vegas commercial showroom with neon signage reflecting off surface — installed by ProShield Epoxy"
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
            <p className="text-gray-600 leading-relaxed">
              Every metallic floor starts with prep. We grind the concrete down with
              diamond grinders to open up the pores and give the coating something
              to grab onto. If there are cracks, pitting, or old coatings, we take
              care of that first. Skipping this step is the number one reason epoxy
              floors fail &mdash; and it&apos;s where a lot of cheaper companies cut
              corners.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Once the slab is prepped and clean, we lay down an MVB base coat at
              around 90 square feet per gallon. This is the foundation &mdash; it
              seals the concrete, blocks moisture vapor from coming up through the
              slab, and gives the metallic layer a solid base to bond to.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Then comes the metallic coat, and this is where it all comes together.
              We apply it heavy &mdash; around 32 square feet per gallon &mdash;
              because that thickness is what allows the metallic pigments to move and
              create that depth. We spread it with T-bars, and then we let it do its
              thing. The pigments settle, shift, and blend on their own as the epoxy
              levels out. No blowers, no gimmicks. The natural movement is what
              creates those one-of-a-kind patterns you see in our photos. Every floor
              turns out different because you can&apos;t force the material &mdash;
              you work with it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Once the metallic layer cures, we come back with a UV-stable clear
              coat &mdash; either a high-gloss finish or a commercial-grade urethane
              with aluminum oxide, depending on how the space will be used. The clear
              coat is what protects everything underneath and determines the final
              look and feel of the floor.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Start to finish, most jobs take <strong>3 to 5 days</strong> depending
              on the size of the space and how much concrete repair is needed
              upfront. After that, you can walk on it in about 24 hours and drive on
              it after 72 hours.
            </p>

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
            <p className="text-gray-600 leading-relaxed">
              <strong>Commercial-grade urethane with aluminum oxide</strong> is
              built for spaces that take real abuse. It adds traction and scratch
              resistance without killing the metallic look &mdash; you still get the
              depth and movement, just with a more satin finish instead of a mirror.
              This is what we recommend for garages, commercial spaces, and
              high-traffic areas. It&apos;s also one of the only topcoats that holds
              up to daily wheelchair use &mdash; we&apos;ve had clients specifically
              choose this finish for that reason, and it performs where other
              coatings wear through.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The right choice comes down to how you use the space. We&apos;ll walk
              you through it during your estimate so you&apos;re not guessing.
            </p>

            {/* Gloss vs Urethane comparison photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="rounded-xl overflow-hidden">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">High-Gloss Finish</p>
                <Image
                  src="/images/blog/metallic/metallic-gloss-finish.jpg"
                  alt="High-gloss metallic epoxy floor with mirror-like finish reflecting light — installed by ProShield Epoxy in Las Vegas"
                  width={600}
                  height={800}
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Commercial-Grade Urethane</p>
                <Image
                  src="/images/blog/metallic/metallic-urethane-finish.jpg"
                  alt="Commercial-grade urethane topcoat on metallic epoxy floor showing satin texture for traction — installed by ProShield Epoxy in Las Vegas"
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
            <p className="text-gray-600 leading-relaxed">
              Metallic epoxy isn&apos;t just for garages &mdash; not even close.
              Here&apos;s where we install it most often:
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Residential garages</strong> are the most common request.
              Homeowners who want more than a basic flake floor and are willing to
              invest in something that transforms the space. If your garage doubles
              as a hangout spot, gym, or workshop, metallic is the upgrade that
              makes it feel like a real room.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Throughout the home &mdash; kitchens, living rooms, hallways,
              and entryways.</strong> This is where metallic epoxy is starting to
              replace traditional flooring entirely. It&apos;s seamless, easy to
              clean, and holds up better than tile or hardwood in the Las Vegas
              climate. No grout lines trapping dirt, no warping from temperature
              swings, no cracking. Compared to LVP or laminate, there&apos;s no
              seams to peel up and no wear layer to scratch through.
            </p>
            <p className="text-gray-600 leading-relaxed">
              One of our customers had gone through two different flooring types in
              her home that couldn&apos;t hold up to daily wheelchair use &mdash;
              the wheels would chew through the surface and she was constantly
              dealing with scratches, peeling, and slipping. We installed metallic
              epoxy with the commercial-grade urethane topcoat throughout her main
              living areas. The texture gives her traction so the chair doesn&apos;t
              slide, and the surface holds up to the constant rolling without
              wearing through. She told us it was the first floor she didn&apos;t
              have to worry about destroying. That&apos;s the kind of job that
              reminds you why the right floor matters.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Storefronts and commercial showrooms</strong> are where
              metallic really shines. Car dealerships, barbershops, boutiques,
              restaurants &mdash; any business where first impressions matter. The
              floor becomes part of the brand. Customers walk in and notice the
              floor before they notice anything else.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The only spaces we&apos;d steer you away from are outdoor areas with
              direct sun exposure all day or industrial floors that see forklift
              traffic daily. For everything else, there&apos;s a metallic option
              that fits.
            </p>

            {/* What Can Go Wrong */}
            <h2 id="what-can-go-wrong" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Can Go Wrong With Metallic Epoxy (And How to Avoid It)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We&apos;re going to be straight with you &mdash; metallic epoxy is not
              a DIY project, and it&apos;s not something you want to trust to the
              cheapest bid. Here&apos;s what we see go wrong and why:
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Bad prep work.</strong> This is the biggest one. If the
              concrete isn&apos;t ground properly, the coating won&apos;t bond.
              It&apos;ll peel, bubble, or flake off within a year. We see this all
              the time on jobs where someone hired a company that skipped the grind
              or just acid-etched and called it good. Grinding with diamonds is the
              only way to get a proper mechanical bond.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Moisture issues.</strong> Las Vegas has dry air, but concrete
              slabs can still hold moisture &mdash; especially in newer construction
              or homes with high water tables. If you don&apos;t test for moisture
              and address it before coating, the epoxy will delaminate from
              underneath. That&apos;s what the MVB base coat is for, but some
              installers skip it to save time and material cost.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Not accounting for Vegas heat.</strong> Summer garage slab
              temperatures in Las Vegas can hit 130&deg;F+. That kind of heat
              affects cure times, pot life, and how the metallic pigments move. If
              an installer doesn&apos;t adjust their process for the climate, you
              end up with uneven patterns, hot spots in the finish, or adhesion
              problems. We work in this heat year-round &mdash; our process and
              timing are built around it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Cheap materials.</strong> Not all epoxy is the same. Big box
              store kits and bargain coatings use lower-quality resins that yellow,
              chip, and wear out fast. Professional-grade metallic systems cost more
              because they perform. If someone&apos;s quoting metallic at
              $4&ndash;5 per square foot, ask yourself what they&apos;re cutting.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Rushing the job.</strong> Each layer needs proper cure time
              before the next one goes down. Rushing leads to adhesion failure,
              trapped solvents, and a floor that looks good for a month and then
              falls apart. Our 3&ndash;5 day timeline exists for a reason.
            </p>
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
            <p className="text-gray-600 leading-relaxed">
              The high-gloss finish can be slick when wet, which is why we offer the
              commercial-grade urethane with aluminum oxide for garages and
              high-traffic areas. It adds real traction without sacrificing the
              metallic look.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can I choose my colors?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Absolutely. We carry a full range of metallic pigments &mdash;
              silvers, charcoals, coppers, blues, golds, and more. We can also do
              custom blends to match your space. We&apos;ll bring samples to your
              estimate so you can see them on concrete, not just on a screen.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Will it yellow over time?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Not with our system. We use UV-stable clear coats specifically to
              prevent yellowing, which is a real problem with cheaper epoxy products.
              Your floor will look the same years from now as it does the day we
              finish.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How do I maintain a metallic epoxy floor?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Dust mop or sweep regularly, and damp mop as needed. That&apos;s it.
              No waxing, no sealing, no special cleaners. The surface is non-porous
              so spills wipe right up &mdash; oil, chemicals, whatever. It&apos;s
              one of the lowest-maintenance floors you can own.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can you coat over an existing epoxy floor?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              It depends on the condition. If the existing coating is still bonded
              and in decent shape, we can prep over it. If it&apos;s peeling or
              failing, it needs to come off first. We&apos;ll tell you exactly
              what&apos;s needed at the estimate.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Do you do commercial jobs?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes. We do residential and commercial across the Las Vegas valley.
              Showrooms, restaurants, retail, offices &mdash; if it has a concrete
              slab, we can coat it.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How much does it cost to epoxy a 2-car garage in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For a standard 2-car garage (around 400&ndash;500 square feet),
              metallic epoxy runs roughly $4,000 to $6,000 installed. That includes
              concrete prep, the full metallic epoxy system, and your choice of
              topcoat. The final price depends on the condition of your slab and any
              repairs needed. We give a flat quote at your free estimate &mdash; no
              hidden fees.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How soon can I schedule an install?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We typically book 2&ndash;3 weeks out depending on the season. Once
              your estimate is done and you&apos;re ready to move forward,
              we&apos;ll lock in your dates and handle everything from there &mdash;
              including material ordering and scheduling around your timeline.
            </p>

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
                  commercial resinous flooring, and specialty systems including metallic epoxy,
                  VubaStone, and concrete polishing. Every article is written from hands-on
                  installation experience &mdash; not recycled from the internet.
                </p>
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

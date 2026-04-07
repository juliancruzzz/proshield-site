import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Epoxy Floor Maintenance Tips: Keep Your Coating Looking New | ProShield",
  description:
    "Complete epoxy floor maintenance guide. Daily cleaning, seasonal care for Las Vegas heat, handling spills, and when to refresh your topcoat.",
  alternates: {
    canonical: "/blog/epoxy-floor-maintenance-tips",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/blog/epoxy-floor-maintenance-tips",
    images: ["/images/proflake/flake-garage-residential.webp"],
  },
}

export default function EpoxyMaintenancePost() {
  const schema = blogPostingSchema({
    title: "Epoxy Floor Maintenance Tips: Keep Your Coating Looking New",
    description: "Complete epoxy floor maintenance guide. Daily cleaning, seasonal care for Las Vegas heat, handling spills, and when to refresh your topcoat.",
    slug: "epoxy-floor-maintenance-tips",
    datePublished: "2026-04-07",
    image: "https://proshieldepoxy.com/images/proflake/flake-garage-residential.webp",
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the best way to clean epoxy flooring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sweep or dust-mop regularly to remove dirt and debris, then clean with mild soap and warm water. Use a soft-bristled mop and avoid harsh chemicals, acid-based cleaners, or abrasive pads. For stubborn stains, use a pH-neutral cleaner specifically designed for epoxy. Citrus-based degreasers should be avoided on metallic finishes as they can dull the effect."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use bleach or vinegar on epoxy floors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Bleach and vinegar are too acidic and can damage epoxy coatings over time. Stick to mild dish soap and water or pH-neutral epoxy-safe cleaners. Harsh chemicals, abrasive scrubbers, and acidic solutions weaken the topcoat and can cause discoloration or degradation."
        }
      },
      {
        "@type": "Question",
        "name": "How often do I need to reseal an epoxy floor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional epoxy systems don't require resealing during their normal lifespan of 15–20+ years. However, if the topcoat shows visible wear after 10–15 years in high-traffic areas, applying a fresh topcoat can extend the floor's life another 5–10 years. Most residential garages don't need topcoat refreshing for well over a decade."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do about oil spills on epoxy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Blot up fresh spills immediately with absorbent materials (paper towels, old rags). Don't let oil sit on the floor. Once absorbed, clean the area with mild soap and water or an epoxy-safe degreaser. Fresh epoxy is resistant to oil stains, but epoxy isn't completely impervious—quick cleanup prevents staining. In high-exposure areas (like under vehicles), consider using protective mats."
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
      { "@type": "ListItem", "position": 3, "name": "Epoxy Floor Maintenance Tips", "item": "https://proshieldepoxy.com/blog/epoxy-floor-maintenance-tips" }
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
            Maintenance Guide
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Epoxy Floor Maintenance Tips: Keep Your Coating Looking New
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
            <span>By <span className="font-medium text-gray-200">Julian Cruz</span></span>
            <span className="text-gray-600">|</span>
            <time dateTime="2026-04-07">April 7, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> April 7, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 8 min read
            </span>
          </div>
        </div>
      </section>

      <article className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              A professional epoxy floor lasts 15–20+ years, but only if you maintain it properly. The good news: epoxy is actually easy to care for. Unlike tile that needs grout sealing or concrete that absorbs stains, epoxy floors require just regular sweeping, mild cleaning, and basic awareness of what to avoid. Below is everything you need to know about keeping your epoxy looking pristine, from daily maintenance to seasonal adjustments for Las Vegas's extreme heat, to knowing when (and if) you need to refresh the topcoat.
            </p>

            {/* Table of Contents */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 my-8">
              <p className="font-heading font-semibold text-base text-gray-900 mb-3">In This Article</p>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#daily-and-weekly-cleaning" className="text-accent hover:underline">Daily and Weekly Cleaning</a>
                  </li>
                  <li>
                    <a href="#what-not-to-use" className="text-accent hover:underline">What NOT to Use on Epoxy</a>
                  </li>
                  <li>
                    <a href="#handling-spills" className="text-accent hover:underline">Handling Spills and Stains</a>
                  </li>
                  <li>
                    <a href="#seasonal-maintenance-vegas" className="text-accent hover:underline">Seasonal Maintenance for Las Vegas</a>
                  </li>
                  <li>
                    <a href="#system-specific-care" className="text-accent hover:underline">System-Specific Maintenance</a>
                  </li>
                  <li>
                    <a href="#signs-of-wear" className="text-accent hover:underline">Signs Your Epoxy Needs Attention</a>
                  </li>
                  <li>
                    <a href="#when-to-reseal-refresh" className="text-accent hover:underline">When to Reseal or Refresh the Topcoat</a>
                  </li>
                  <li>
                    <a href="#frequently-asked-questions" className="text-accent hover:underline">Frequently Asked Questions</a>
                  </li>
                </ul>
              </nav>
            </div>

            <h2 id="daily-and-weekly-cleaning" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Daily and Weekly Cleaning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Epoxy is the lowest-maintenance floor you can install. Most of the time, you just need to keep it clean and dry.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Daily: Dust Mop or Sweep
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Use a soft-bristled broom or dust mop to remove dirt, dust, and debris. This takes 5 minutes and prevents particles from being ground into the finish by foot traffic or tires. Dirt particles become mini-abrasives that dull the surface over time.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Weekly: Mild Soap and Water
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Once a week, mop with a soft-bristled mop using mild soap (a few drops of dish soap in warm water) or a pH-neutral epoxy-safe cleaner. Avoid soaking the floor—use a damp mop, not a wet one. Epoxy is sealed, so water doesn't penetrate, but excess moisture can settle in seams or edges.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Monthly: Deeper Clean
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For tougher scuffs or marks, use a soft microfiber mop with a small amount of epoxy-specific cleaner. Apply cleaner to the mop (not directly to the floor), mop the area, and rinse with a damp mop using clean water. Avoid letting cleaner sit on the floor for extended periods.
            </p>

            <h2 id="what-not-to-use" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What NOT to Use on Your Epoxy Floor
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Epoxy is tough, but some common household products will damage it. Avoid these entirely:
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Harsh Chemicals &amp; Acid-Based Cleaners
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>Never use bleach, vinegar, or muriatic acid</strong> on epoxy. These are too acidic and will chemically attack the topcoat, causing discoloration and weakening adhesion. Even "safe" degreaser concentrates meant for concrete can be too strong. Stick to mild, pH-neutral products.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Abrasive Scrubbing Pads &amp; Tools
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Don't use steel wool, wire brushes, or rough scouring pads. These scratch and dull the finish. If you need to scrub a spot, use a soft-bristled brush or microfiber pad with mild soap. For stubborn stains, apply cleaner and let it sit for a few minutes before wiping—don't scrub hard.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Citrus-Based Degreasers (On Metallic Finishes)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Strong citrus cleaners (d-limonene based) can dull or discolor metallic epoxy finishes. If you have a metallic system and need to degrease, use a mild soap first. For serious grease, use an epoxy-safe, non-citrus degreaser, apply sparingly, and rinse thoroughly.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              High-Pressure Washers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pressure washers over 2,000 PSI can damage epoxy edges and seams. If you must pressure wash (for outdoor epoxy), stay below 1,500 PSI and keep the nozzle at least 12 inches away. Better option: stick to brooms and soft mopping for indoor garage floors.
            </p>

            <h2 id="handling-spills" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Handling Spills and Stains
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Epoxy is stain-resistant but not stain-proof. The key is quick action.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Oil &amp; Grease Spills
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Blot up fresh oil spills immediately with paper towels or old rags. Don't smear it around. Once absorbed, clean the area with mild soap and water. For stubborn stains, use a pH-neutral, epoxy-safe degreaser applied to the mop (not directly on the floor), then rinse thoroughly. Fresh epoxy resists oil stains, but old spills left to set are harder to remove.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Chemical Spills
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Battery acid, gasoline, antifreeze, and other chemicals should be cleaned up immediately. Epoxy resists many chemicals, but prolonged exposure can stain or degrade the topcoat. Blot up immediately, then rinse with copious amounts of water. For serious chemical spills, consult with the product manufacturer or your installer for specific guidance.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Wine &amp; Food Spills
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Epoxy is easy to clean. Just wipe up spills with a damp cloth and mild soap. Food doesn't stain epoxy like it would stain concrete. This is one of the major advantages of epoxy for both garages and kitchens.
            </p>

            <h2 id="seasonal-maintenance-vegas" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Seasonal Maintenance for Las Vegas Heat
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Las Vegas's extreme heat creates specific maintenance considerations:
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Summer: Manage Garage Door Exposure
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In summer, garage surface temperatures can exceed 150°F if the door is open frequently. If you have a garage door, manage it: open only when necessary, or consider a garage door insulation kit to reduce internal heat. UV-stable topcoats (polyaspartic) handle sun exposure, but continuous intense heat can accelerate wear on high-traffic areas.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Summer: Protect Hot Spots
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In high-heat garages where tires sit on the same spot daily, consider using rubber mats or tire covers to distribute stress. This protects against hot tire pickup (rare with modern epoxy, but best to minimize risk) and reduces UV and thermal cycling on that specific area.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Dust &amp; Debris Control
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Las Vegas dust storms are common. After a dust storm, sweep or vacuum your epoxy floor more frequently to prevent fine dust from settling and dulling the finish. Dust also mixes with moisture and creates a mild abrasive that can scratch over time.
            </p>

            <h2 id="system-specific-care" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              System-Specific Maintenance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Different coating systems have slightly different care needs:
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              <Link href="/proflake" className="text-accent hover:underline font-medium">ProFlake</Link> (Epoxy + Polyaspartic)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ProFlake systems are the easiest to maintain. The decorative flake layer hides small dust and dirt, and the polyaspartic topcoat is UV-stable so it won't yellow. Regular sweeping and mild cleaning is all you need. Avoid abrasive pads and harsh chemicals, but otherwise, this system is highly forgiving.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              <Link href="/metallic-epoxy" className="text-accent hover:underline font-medium">Metallic Epoxy</Link>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Metallic systems show every footprint and dust particle while they're new, but this settles down with use. The finish is sensitive to harsh chemicals and strong citrus degreasers, which can dull the metallic effect. Use only mild soap and water or an epoxy-safe, non-citrus cleaner. The topcoat determines durability—polyaspartic is best for Las Vegas's UV exposure.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              <Link href="/concrete-polishing" className="text-accent hover:underline font-medium">Polished Concrete</Link>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Polished concrete is NOT a coating and requires different care. It's more porous than sealed epoxy and can stain from oil and chemicals. Sweep regularly, clean with pH-neutral cleaner, and avoid harsh chemicals. Periodic light repolishing (every 3–5 years by professionals) maintains the gloss and helps prevent staining. Polished concrete is slicker than textured epoxy, especially when wet.
            </p>

            <h2 id="signs-of-wear" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Signs That Your Epoxy Needs Attention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Even with proper care, watch for these warning signs:
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Minor Scuffs &amp; Wear Marks
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Light surface scuffs are cosmetic and don't affect performance. They're natural with any floor. If appearance bothers you, some scuffs can be buffed out with fine polishing compound (for metallic systems especially) or left to blend as the floor ages.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Yellowing or Chalking (Clear Epoxy Only)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If you have a clear epoxy topcoat (not recommended for Las Vegas) and it's yellowing or developing a white chalky appearance, it's UV damage. This happens in 2–5 years in Las Vegas's intense sun. Unfortunately, there's no cure except recoating with a UV-stable topcoat. This is why polyaspartic topcoats are standard for Las Vegas installations.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Delamination or Peeling Edges
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Peeling that starts at edges or seams indicates moisture infiltration or improper surface prep (from a previous bad installation). This requires professional attention—don't ignore it as it can spread. Contact your installer or a professional for assessment.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              High-Traffic Wear Areas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              After 12–15 years, high-traffic areas near garage entries or workbenches may show visible wear—the topcoat may look thinner or duller in spots. This is normal and doesn't mean the floor is failing. It just means that area is ready for a topcoat refresh.
            </p>

            <h2 id="when-to-reseal-refresh" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              When to Reseal or Refresh the Topcoat
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Professional epoxy systems don't need resealing during their normal 15–20+ year lifespan. But in very high-traffic areas, a topcoat refresh can extend life and restore appearance.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              When a Topcoat Refresh Makes Sense
            </h3>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 my-4">
              <li>After 10–15 years in a commercial or very high-traffic garage</li>
              <li>If high-traffic zones (entry, workbench area) show visible wear and dulling</li>
              <li>If you want to restore gloss and appearance after years of use</li>
              <li>If you're planning to sell and want the floor looking showroom-fresh</li>
            </ul>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              When a Refresh Is NOT Necessary
            </h3>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 my-4">
              <li>For residential garages under 10 years old (still in great condition)</li>
              <li>If the floor shows no signs of delamination or peeling</li>
              <li>If you're happy with the appearance (light scuffs and wear are cosmetic)</li>
              <li>If the topcoat hasn't shown major degradation from UV or chemicals</li>
            </ul>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-6 sm:p-8 my-8">
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                Pro Tip: Protective Mats in High-Wear Areas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In garages where you park the same vehicle in the same spot daily, a rubber mat under the tires distributes thermal stress and UV exposure, which can extend the life of that area by years. Same logic for workbenches or storage areas with heavy, stationary equipment.
              </p>
            </div>

            <h2 id="frequently-asked-questions" className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              What's the best way to clean epoxy flooring?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sweep or dust-mop regularly to remove dirt and debris. Clean weekly with mild soap and warm water using a soft-bristled mop. Avoid harsh chemicals, acid-based cleaners, or abrasive pads. For stubborn stains, use a pH-neutral cleaner specifically designed for epoxy. Citrus-based degreasers should be avoided on metallic finishes.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Can I use bleach or vinegar on epoxy floors?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              No. Bleach and vinegar are too acidic and can damage epoxy coatings over time, causing discoloration and weakening adhesion. Stick to mild dish soap and water or pH-neutral epoxy-safe cleaners only.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How often do I need to reseal an epoxy floor?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Professional epoxy systems don't require resealing during their normal 15–20+ year lifespan. If the topcoat shows visible wear after 10–15 years in high-traffic areas, applying a fresh topcoat can extend the floor's life another 5–10 years. Most residential garages won't need refreshing for well over a decade.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              What should I do about oil spills on epoxy?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Blot up fresh spills immediately with absorbent materials (paper towels, old rags). Don't let oil sit. Once absorbed, clean the area with mild soap and water or an epoxy-safe degreaser. Fresh epoxy resists oil stains, but letting spills sit can cause staining. In high-exposure areas under vehicles, use protective mats to prevent repeat staining.
            </p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Keep Your Epoxy Looking Perfect
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                Have questions about maintaining your epoxy floor? Our team can provide specific guidance for your system type and help with topcoat refreshes when the time comes.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Get Maintenance Guidance <ArrowRight className="h-4 w-4" />
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
                  installation experience — not recycled from the internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts currentSlug="epoxy-floor-maintenance-tips" />

      <CtaSection />
    </>
  )
}

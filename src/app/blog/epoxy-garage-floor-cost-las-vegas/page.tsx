import type { Metadata } from "next"
import Link from "next/link"
import { CtaSection } from "@/components/sections/cta-section"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPostingSchema } from "@/lib/blog-schema"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Epoxy Garage Floor Cost in Las Vegas: 2026 Pricing Guide | ProShield Epoxy",
  description:
    "Professional epoxy garage floor coating in Las Vegas costs $3.50–$12 per sq ft. See 2026 pricing by system type, garage size, and what affects your total cost.",
}

export default function EpoxyGarageFloorCostPost() {
  const schema = blogPostingSchema({
    title: "Epoxy Garage Floor Cost in Las Vegas: 2026 Pricing Guide",
    description: "Professional epoxy garage floor coating in Las Vegas costs $3.50–$12 per sq ft. See 2026 pricing by system type, garage size, and what affects your total cost.",
    slug: "epoxy-garage-floor-cost-las-vegas",
    datePublished: "2026-04-03",
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="section-white pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </Link>
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-4">
            Pricing Guide
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight">
            Epoxy Garage Floor Cost in Las Vegas: 2026 Pricing Guide
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
            <span>By <span className="font-medium text-gray-700">Julian Cruz</span></span>
            <span className="text-gray-300">|</span>
            <time dateTime="2026-04-03">April 3, 2026</time>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> April 3, 2026
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
              Professional epoxy garage floor coating in Las Vegas typically
              costs <strong>$3.50&ndash;$12 per square foot</strong> installed,
              depending on the coating system, substrate condition, and garage
              size. For a standard 2-car garage (400&ndash;500 sq&nbsp;ft), most
              homeowners pay between <strong>$1,800 and $5,000</strong>. A 3-car
              garage (600&ndash;750 sq&nbsp;ft) runs
              <strong> $2,800&ndash;$7,500+</strong>. Below we break down
              exactly what drives the price so you know what to expect before
              requesting a quote.
            </p>

            <h2 className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Cost by Coating System
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The biggest factor in price is the type of system you choose. Each
              has a different material cost, number of coats, and installation
              complexity.
            </p>

            <div className="overflow-x-auto -mx-4 sm:mx-0 my-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      System
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Per Sq Ft
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      2-Car Garage
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Install Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      ProFlake (Epoxy + Polyaspartic)
                    </td>
                    <td className="px-5 py-3 text-gray-600">$3.50&ndash;$6</td>
                    <td className="px-5 py-3 text-gray-600">
                      $1,800&ndash;$3,000
                    </td>
                    <td className="px-5 py-3 text-gray-600">1 day*</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Metallic Epoxy
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      $7&ndash;$12
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      $3,500&ndash;$5,500
                    </td>
                    <td className="px-5 py-3 text-gray-600">2&ndash;3 days</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Solid Color Epoxy
                    </td>
                    <td className="px-5 py-3 text-gray-600">$3&ndash;$5</td>
                    <td className="px-5 py-3 text-gray-600">
                      $1,500&ndash;$2,500
                    </td>
                    <td className="px-5 py-3 text-gray-600">1&ndash;2 days</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Polished Concrete
                    </td>
                    <td className="px-5 py-3 text-gray-600">$3&ndash;$8</td>
                    <td className="px-5 py-3 text-gray-600">
                      $1,500&ndash;$4,000
                    </td>
                    <td className="px-5 py-3 text-gray-600">2&ndash;4 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400 italic">
              *Qualifying residential ProFlake systems are often completed in
              1&nbsp;day, subject to substrate condition, weather, and repair
              requirements.
            </p>

            <h2 className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              What Affects Your Total Price?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Two garages of the same size can end up with very different quotes.
              These are the factors that move the needle:
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Concrete condition</strong> is the biggest variable.
              Cracks, spalling, moisture issues, or old coatings that need
              removal all add labor and materials before the new system can go
              down. A floor with extensive damage might add $1&ndash;$3 per
              square foot in repairs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Surface preparation method</strong> matters significantly.
              Professional diamond grinding creates a proper mechanical bond
              profile. Acid etching &mdash; common with DIY kits &mdash;
              doesn&apos;t create the same bond and is one of the top reasons
              cheap coatings peel in the Las Vegas heat.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Garage size and layout</strong> affect pricing per square
              foot. Larger garages have a lower per-square-foot cost because
              setup and mobilization costs are spread across more area. A 1-car
              garage (200&ndash;250 sq&nbsp;ft) will have a higher per-foot cost
              than a 3-car garage.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Number of coats and topcoat type</strong> also play a
              role. Our ProFlake system includes an epoxy base coat, full
              decorative flake broadcast, and a polyaspartic topcoat. Systems
              with additional coats or premium topcoat options will be at the
              higher end of the range.
            </p>

            <h2 className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              DIY Kits vs. Professional Installation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Home improvement store epoxy kits run $50&ndash;$300 and are
              tempting. Here&apos;s why professional installation is a different
              product entirely:
            </p>
            <p className="text-gray-600 leading-relaxed">
              DIY kits use water-based or thin-film epoxies that typically last
              1&ndash;3 years before peeling, especially in Las Vegas garages
              where surface temperatures can exceed 150&deg;F on hot summer
              days. Professional systems use 100% solids epoxy bases
              (significantly thicker) with commercial-grade topcoats engineered
              for UV exposure and thermal cycling.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The preparation difference is also dramatic. Professional
              installation starts with diamond grinding the concrete to create a
              surface profile for mechanical bonding. DIY kits typically rely on
              acid etching, which doesn&apos;t penetrate deep enough for
              long-term adhesion in high-heat environments.
            </p>

            <div className="overflow-x-auto -mx-4 sm:mx-0 my-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Factor
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      DIY Kit
                    </th>
                    <th className="text-left px-5 py-3.5 font-heading font-semibold text-gray-900">
                      Professional
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Cost (2-car garage)
                    </td>
                    <td className="px-5 py-3 text-gray-600">$100&ndash;$300</td>
                    <td className="px-5 py-3 text-gray-600">
                      $1,800&ndash;$5,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Typical Lifespan
                    </td>
                    <td className="px-5 py-3 text-gray-600">1&ndash;3 years</td>
                    <td className="px-5 py-3 text-gray-600">
                      15&ndash;20+ years
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Surface Prep
                    </td>
                    <td className="px-5 py-3 text-gray-600">Acid etch</td>
                    <td className="px-5 py-3 text-gray-600">
                      Diamond grinding
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Coating Thickness
                    </td>
                    <td className="px-5 py-3 text-gray-600">3&ndash;5 mils</td>
                    <td className="px-5 py-3 text-gray-600">
                      15&ndash;25+ mils
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Warranty
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      None or limited
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      Limited lifetime*
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-5 py-3 text-gray-700 font-medium">
                      Hot Tire Pickup
                    </td>
                    <td className="px-5 py-3 text-gray-600">Common issue</td>
                    <td className="px-5 py-3 text-gray-600">Resistant</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400 italic">
              *Qualifying residential systems include a limited lifetime warranty
              against delamination, subject to terms, substrate condition,
              maintenance, and exclusions in the written warranty.
            </p>

            <h2 className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Why Las Vegas Pricing Can Be Different
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Las Vegas climate creates specific challenges that affect both
              installation and long-term performance. Summer surface
              temperatures on exposed garage floors can reach 140&ndash;160&deg;F,
              which means standard coatings that work fine in cooler climates
              can fail here. Professional installers in the Las Vegas market use
              products specifically formulated for high-heat environments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              UV exposure is another factor. Las Vegas receives over 300 days
              of sunshine annually and some of the most intense UV radiation in
              the country. Coatings without UV-stable topcoats will yellow and
              chalk within months if the garage door is left open regularly.
              Polyaspartic topcoats solve this &mdash; they&apos;re inherently
              UV-stable &mdash; but they cost more than standard clear epoxy
              topcoats.
            </p>

            <h2 className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              How to Get an Accurate Quote
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The only way to get an accurate price is with an on-site
              evaluation. We measure the exact square footage, assess concrete
              condition, check for moisture, identify needed repairs, and
              recommend the right system for your specific garage. Phone
              estimates without seeing the floor are guesses &mdash; and
              guesses lead to surprise charges on installation day.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When comparing quotes, ask each installer what system they use
              (brand and chemistry), how they prep the surface, how many coats
              are included, what topcoat type they apply, and what&apos;s
              covered under warranty. The cheapest quote often uses the thinnest
              system with the shortest lifespan.
            </p>

            <h2 className="font-heading font-bold text-2xl text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How much does it cost to epoxy a 2-car garage in Las Vegas?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A professional flake epoxy system for a standard 2-car garage
              (400&ndash;500 sq&nbsp;ft) typically costs $1,800&ndash;$3,000 in
              Las Vegas. Metallic epoxy runs higher at $3,500&ndash;$5,500.
              Final price depends on concrete condition and repairs needed.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Is epoxy flooring worth the cost?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              When you compare a professional system lasting 15&ndash;20+ years
              to a DIY kit lasting 1&ndash;3 years, the long-term cost per year
              is actually lower with professional installation. A $2,500 system
              that lasts 20 years costs $125 per year. A $200 kit you redo every
              2 years costs $100 per year in materials alone &mdash; without
              accounting for your time and the inevitable frustration.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              How long does the installation take?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our standard residential ProFlake flake garage floor systems are
              often completed in 1 day, subject to substrate condition, weather,
              and repair requirements. Metallic systems typically require
              2&ndash;3 days. You can walk on a ProFlake floor the same day or
              next day, and park on it within 24&ndash;72 hours.
            </p>

            <h3 className="font-heading font-semibold text-lg text-gray-900 mt-8 mb-3">
              Does the price include concrete repair?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Minor crack filling and small repairs are usually included in the
              base quote. Extensive damage, moisture mitigation, or removal of
              old coatings may be quoted separately. We&apos;ll identify
              everything during the on-site evaluation so there are no surprises.
            </p>

            <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Get Your Free On-Site Estimate
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                We&apos;ll measure your garage, assess the concrete, and give
                you an exact price &mdash; no guesswork, no surprise charges.
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

      <RelatedPosts currentSlug="epoxy-garage-floor-cost-las-vegas" />

      <CtaSection />
    </>
  )
}

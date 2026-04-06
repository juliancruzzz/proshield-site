"use client"

import { Check } from "lucide-react"

const highlights = [
  "Densified & hardened at a molecular level",
  "25–40 year performance with regular maintenance",
  "Up to 70–90% light reflectance",
  "No coating to peel, chip, or delaminate",
]

export function PolishingIntro() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10">
              <img
                src="/images/concrete-polishing/polished-retail-floor.webp"
                alt="High-gloss polished concrete floor in a modern showroom with reflective mirror finish"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              What Is Concrete Polishing?
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
              A permanent floor, not a{" "}
              <span className="text-accent">temporary coating</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
              Concrete polishing is a mechanical refinement of your existing slab using progressively finer diamond-impregnated tooling. The result is a dense, hardened surface with a customizable sheen — from matte to mirror-like high gloss.
            </p>

            {/* Highlight checklist */}
            <ul className="mt-6 sm:mt-8 space-y-3">
              {highlights.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Check, X } from "lucide-react"

const comparison = [
  { feature: "Long-Term Stability", trad: "Shifts and sinks over time", grass: "Rigid, dimensionally stable base" },
  { feature: "Drainage", trad: "Poor — water pools on surface", grass: "Fully permeable — drains instantly" },
  { feature: "Pet Urine & Odor", trad: "Urine trapped in sand, causes smell", grass: "Drains through base, reduces odor" },
  { feature: "Environmental Impact", trad: "Virgin quarried materials", grass: "100% recycled rubber and aggregate" },
  { feature: "Shock Absorption", trad: "Hard, rigid surface", grass: "Semi-flexible, cushioned underfoot" },
  { feature: "Temperature Comfort", trad: "Can get uncomfortably hot", grass: "Turf stays comfortable in heat" },
]

export function GrassMacComparison() {
  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Compare
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            GrassMac vs Traditional Bases
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            See why an engineered resin-bound base outperforms sand and crusher run on every metric that matters.
          </p>
        </div>

        {/* Desktop comparison table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-gray-50 border-b border-gray-200">
              <div className="p-4 lg:p-5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Feature
              </div>
              <div className="p-4 lg:p-5 text-xs font-semibold text-gray-400 uppercase tracking-wider text-center border-l border-gray-200">
                Traditional Base
              </div>
              <div className="p-4 lg:p-5 text-xs font-semibold text-teal uppercase tracking-wider text-center border-l border-gray-200 bg-teal/[0.03]">
                GrassMac
              </div>
            </div>
            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1.2fr_1fr_1fr] ${
                  i < comparison.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="p-4 lg:p-5 text-sm font-semibold text-gray-900">{row.feature}</div>
                <div className="p-4 lg:p-5 flex items-center justify-center gap-2 text-sm text-gray-400 border-l border-gray-100">
                  <X className="h-4 w-4 text-red-400/60 shrink-0" />
                  <span>{row.trad}</span>
                </div>
                <div className="p-4 lg:p-5 flex items-center justify-center gap-2 text-sm text-gray-700 font-medium border-l border-gray-100 bg-teal/[0.02]">
                  <Check className="h-4 w-4 text-teal shrink-0" />
                  <span>{row.grass}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile comparison cards */}
        <div className="md:hidden space-y-3 max-w-lg mx-auto">
          {comparison.map((row, i) => (
            <div key={row.feature} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                <h3 className="text-sm font-heading font-semibold text-gray-900">{row.feature}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="px-4 py-3 flex items-start gap-2.5">
                  <X className="h-4 w-4 text-red-400/60 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      Traditional
                    </div>
                    <div className="text-sm text-gray-500">{row.trad}</div>
                  </div>
                </div>
                <div className="px-4 py-3 flex items-start gap-2.5 bg-teal/[0.02]">
                  <Check className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-semibold text-teal uppercase tracking-wider mb-0.5">
                      GrassMac
                    </div>
                    <div className="text-sm text-gray-700 font-medium">{row.grass}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

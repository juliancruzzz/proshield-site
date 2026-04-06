"use client"
import { useState } from "react"
import { Check, X as XIcon } from "lucide-react"

interface Row {
  feature: string
  epoxy: string
  proflake: string
  epoxyPositive?: boolean
  proflakePositive?: boolean
}

const rows: Row[] = [
  { feature: "Topcoat", epoxy: "Epoxy Clear", proflake: "Polyaspartic", epoxyPositive: false, proflakePositive: true },
  { feature: "Strength", epoxy: "1×", proflake: "20× Stronger", epoxyPositive: false, proflakePositive: true },
  { feature: "UV Stability", epoxy: "Yellows", proflake: "UV-Stable", epoxyPositive: false, proflakePositive: true },
  { feature: "Hot Tire", epoxy: "No", proflake: "Yes", epoxyPositive: false, proflakePositive: true },
  { feature: "Chemical Resist", epoxy: "No", proflake: "Yes", epoxyPositive: false, proflakePositive: true },
  { feature: "Abrasion Resist", epoxy: "No", proflake: "Yes", epoxyPositive: false, proflakePositive: true },
  { feature: "Lifespan", epoxy: "1–2 Yrs", proflake: "15+ Yrs", epoxyPositive: false, proflakePositive: true },
  { feature: "Lifetime Warranty", epoxy: "No", proflake: "Yes", epoxyPositive: false, proflakePositive: true },
]

export function ProFlakeComparison() {
  const [showAll, setShowAll] = useState(false)

  const visibleRows = showAll ? rows : rows.slice(0, 4)

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Side-By-Side
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Standard Epoxy vs. ProFlake
          </h2>
        </div>

        {/* Compact comparison */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* Column headers */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr]">
              <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-gray-50 border-b border-gray-200" />
              <div className="px-3 py-3 sm:px-5 sm:py-3.5 text-center bg-gray-100 border-b border-gray-200 border-l border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Std. Epoxy</span>
              </div>
              <div className="px-3 py-3 sm:px-5 sm:py-3.5 text-center bg-accent/8 border-b border-accent/15 border-l border-gray-200">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">ProFlake</span>
              </div>
            </div>

            {/* Rows */}
            {visibleRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1.2fr_1fr_1fr] ${
                  i < visibleRows.length - 1 || !showAll ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="px-4 py-3 sm:px-5 flex items-center">
                  <span className="text-sm text-gray-700 font-medium">{row.feature}</span>
                </div>
                <div className="px-3 py-3 sm:px-5 flex items-center justify-center border-l border-gray-100 bg-gray-50/50">
                  {row.epoxy === "No" ? (
                    <XIcon className="h-4 w-4 text-gray-300" />
                  ) : (
                    <span className="text-sm text-gray-500 text-center">{row.epoxy}</span>
                  )}
                </div>
                <div className="px-3 py-3 sm:px-5 flex items-center justify-center border-l border-gray-100 bg-accent/[0.02]">
                  {row.epoxy === "No" && row.proflake === "Yes" ? (
                    <Check className="h-4 w-4 text-accent" />
                  ) : (
                    <span className="text-sm font-semibold text-gray-900 text-center">{row.proflake}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Show more/less */}
            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="w-full px-4 py-3 text-sm font-medium text-accent hover:bg-accent/5 transition-colors cursor-pointer text-center"
              >
                Show all {rows.length} comparisons
              </button>
            )}
            {showAll && (
              <button
                onClick={() => setShowAll(false)}
                className="w-full px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer text-center"
              >
                Show less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

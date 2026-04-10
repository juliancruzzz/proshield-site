"use client"

import { Check, X } from "lucide-react"

const comparisonRows = [
  {
    feature: "Lifespan",
    polished: "25–40+ years",
    grindSeal: "2–5 years",
  },
  {
    feature: "Maintenance",
    polished: "Dust mop only",
    grindSeal: "Periodic resealing",
  },
  {
    feature: "Peeling",
    polished: "None — no coating",
    grindSeal: "Sealer can yellow",
  },
  {
    feature: "Reflectivity",
    polished: "Up to 70–90%",
    grindSeal: "Low–moderate",
  },
  {
    feature: "Durability",
    polished: "Permanent",
    grindSeal: "Depends on sealer",
  },
  {
    feature: "Heavy Traffic",
    polished: "Excellent",
    grindSeal: "Good",
  },
  {
    feature: "Upfront Cost",
    polished: "Higher",
    grindSeal: "Lower",
  },
  {
    feature: "Long-Term Cost",
    polished: "Lower",
    grindSeal: "Higher (reseal 2–5 yrs)",
  },
]

export function PolishingComparison() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(170deg, #111c2e 0%, #0e1826 50%, #0b1420 100%)",
      }}
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px]"
          style={{
            background: "radial-gradient(ellipse, rgba(250,156,73,0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            How They Compare
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Polished vs. Grind & Seal
          </h2>
          <p className="hidden sm:block mt-3 text-white/60 text-base sm:text-lg leading-relaxed">
            Both start with diamond grinding — the difference is how the finish is achieved and how long it lasts.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-white/[0.02]">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/40">Feature</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent text-center">Mechanically Polished</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal text-center">Grind & Seal</span>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <div key={row.feature} className={`grid grid-cols-[1.2fr_1fr_1fr] px-4 sm:px-6 py-4 items-center ${
                i < comparisonRows.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}>
              <div>
                <span className="text-sm sm:text-base font-semibold text-white">{row.feature}</span>
              </div>
              <div className="text-xs sm:text-sm text-white font-medium bg-accent/[0.06] rounded-lg py-2 px-2 sm:px-3 text-center">
                {row.polished}
              </div>
              <div className="text-xs sm:text-sm text-white/50 text-center py-2 px-2 sm:px-3">
                {row.grindSeal}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

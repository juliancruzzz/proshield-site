"use client"


interface Row {
  feature: string
  replace: string
  overlay: string
}

const rows: Row[] = [
  { feature: "Cost", replace: "Full tear-out + repour", overlay: "Fraction of replacement cost" },
  { feature: "Time", replace: "1 week+", overlay: "1–2 days" },
  { feature: "Disruption", replace: "Jackhammers & heavy equipment", overlay: "Minimal — no demolition" },
  { feature: "Durability", replace: "Standard concrete", overlay: "Polished or sealed for lasting protection" },
  { feature: "Customization", replace: "Plain poured concrete", overlay: "Stamps, colors, stencils, logos" },
]

function isPositive(val: string) {
  const lower = val.toLowerCase()
  return (
    lower.includes("fraction") ||
    lower.includes("1–2") ||
    lower.includes("minimal") ||
    lower.includes("sealed") ||
    lower.includes("stamps") ||
    lower.includes("polished")
  )
}

function isNegative(val: string) {
  const lower = val.toLowerCase()
  return (
    lower.includes("tear-out") ||
    lower.includes("1 week") ||
    lower.includes("jackhammers") ||
    lower.includes("standard concrete") ||
    lower.includes("plain")
  )
}

export function OverlayComparison() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Side-By-Side
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Why Overlay Instead of Replace?
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Save time, money, and disruption — overlay is the smart choice for transforming concrete without the hassle.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1.2fr_1fr_1fr]">
              <div className="px-4 py-4 sm:px-6 bg-gray-50 border-b border-gray-200" />
              <div className="px-4 py-4 sm:px-6 text-center bg-gray-100 border-b border-gray-200 border-l border-gray-200">
                <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">Full Replacement</span>
              </div>
              <div className="px-4 py-4 sm:px-6 text-center bg-accent/8 border-b border-accent/20 border-l border-gray-200">
                <span className="text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">ProShield Overlay</span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1.2fr_1fr_1fr] ${
                  i < rows.length - 1 ? "border-b border-gray-100" : ""
                }`}>
                <div className="px-4 py-3.5 sm:px-6 sm:py-4 flex items-center">
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{row.feature}</span>
                </div>
                <div className="px-3 py-3.5 sm:px-6 sm:py-4 flex items-center justify-center border-l border-gray-100 bg-gray-50/50">
                  <span className={`text-sm sm:text-base font-medium text-center ${
                    isNegative(row.replace) ? "text-gray-500" : "text-gray-600"
                  }`}>
                    {row.replace}
                  </span>
                </div>
                <div className="px-3 py-3.5 sm:px-6 sm:py-4 flex items-center justify-center border-l border-gray-100 bg-accent/[0.02]">
                  <span className={`text-sm sm:text-base font-semibold text-center ${
                    isPositive(row.overlay) ? "text-gray-900" : "text-gray-500"
                  }`}>
                    {row.overlay}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-sm text-gray-500">
            Overlay systems cost a fraction of full tear-out and replacement, with minimal disruption to your property.
          </p>
        </div>
      </div>
    </section>
  )
}

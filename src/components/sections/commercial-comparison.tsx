"use client"


interface Row {
  feature: string
  standard: string
  proshield: string
}

const rows: Row[] = [
  { feature: "Base System", standard: "Generic Epoxy", proshield: "Purpose-Built Systems" },
  { feature: "Chemical Resistance", standard: "Limited", proshield: "Superior — Tailored to Environment" },
  { feature: "Cure Speed", standard: "24–72 hours", proshield: "12–24 hours" },
  { feature: "UV Stability", standard: "Yellows Over Time", proshield: "UV-Stable Across All Systems" },
  { feature: "Expected Lifespan", standard: "3–5 Years", proshield: "10–15+ Years" },
]

function isPositive(val: string) {
  const lower = val.toLowerCase()
  return (
    lower.includes("purpose-built") ||
    lower.includes("superior") ||
    lower.includes("12–24") ||
    lower.includes("uv-stable") ||
    lower.includes("10–15")
  )
}

function isNegative(val: string) {
  const lower = val.toLowerCase()
  return (
    lower.includes("limited") ||
    lower.includes("yellows") ||
    lower.includes("3–5") ||
    lower === "generic epoxy"
  )
}

export function CommercialComparison() {
  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Side-By-Side
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Generic Epoxy vs. ProShield Systems
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Most competitors apply generic epoxy everywhere. We engineer systems for each environment.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1.2fr_1fr_1fr]">
              <div className="px-4 py-4 sm:px-6 bg-gray-50 border-b border-gray-200" />
              <div className="px-4 py-4 sm:px-6 text-center bg-gray-100 border-b border-gray-200 border-l border-gray-200">
                <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">Generic Epoxy</span>
              </div>
              <div className="px-4 py-4 sm:px-6 text-center bg-accent/8 border-b border-accent/20 border-l border-gray-200">
                <span className="text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">ProShield</span>
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
                    isNegative(row.standard) ? "text-gray-500" : "text-gray-600"
                  }`}>
                    {row.standard}
                  </span>
                </div>
                <div className="px-3 py-3.5 sm:px-6 sm:py-4 flex items-center justify-center border-l border-gray-100 bg-accent/[0.02]">
                  <span className={`text-sm sm:text-base font-semibold text-center ${
                    isPositive(row.proshield) ? "text-gray-900" : "text-gray-500"
                  }`}>
                    {row.proshield}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

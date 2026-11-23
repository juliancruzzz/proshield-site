"use client"


const chemicals = [
  { name: "Skydrol\u00ae", type: "Phosphate Ester Hydraulic Fluid" },
  { name: "Hyjet\u00ae", type: "Phosphate Ester Hydraulic Fluid" },
  { name: "Jet-A / JP-8", type: "Aviation Turbine Fuel" },
  { name: "Hydraulic Oils", type: "Petroleum-Based Fluids" },
  { name: "Deicing Agents", type: "Glycol & Acetate Compounds" },
  { name: "MEK / Solvents", type: "Cleaning & Stripping Agents" },
  { name: "Lubricants & Greases", type: "Aviation-Grade Oils" },
]

export function HangarChemicals() {
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
            background: "radial-gradient(ellipse, rgba(222,134,20,0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Chemical Resistance
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Which Fluids Will Contact the Floor?
          </h2>
          <p className="mt-3 text-white/60 text-base sm:text-lg leading-relaxed">
            Bring the names of the fluids you use in the bay. We compare them with the proposed coating’s resistance chart, including how long a spill may stay on the floor before cleanup.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2 px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-white/[0.02]">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/40">Chemical</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/40">Type</span>
            </div>

            {chemicals.map((chem, i) => (
              <div key={chem.name} className={`grid grid-cols-2 px-4 sm:px-6 py-4 items-center ${
                  i < chemicals.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}>
                <div>
                  <span className="text-sm sm:text-base font-semibold text-white">{chem.name}</span>

                </div>
                <span className="text-sm text-white/50">{chem.type}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

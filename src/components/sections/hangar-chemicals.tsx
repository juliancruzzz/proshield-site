"use client"

import { Check } from "lucide-react"

const chemicals = [
  { name: "Skydrol\u00ae", type: "Phosphate Ester Hydraulic Fluid", severity: "Extreme", protected: true },
  { name: "Hyjet\u00ae", type: "Phosphate Ester Hydraulic Fluid", severity: "Extreme", protected: true },
  { name: "Jet-A / JP-8", type: "Aviation Turbine Fuel", severity: "High", protected: true },
  { name: "Hydraulic Oils", type: "Petroleum-Based Fluids", severity: "High", protected: true },
  { name: "Deicing Agents", type: "Glycol & Acetate Compounds", severity: "Moderate", protected: true },
  { name: "MEK / Solvents", type: "Cleaning & Stripping Agents", severity: "High", protected: true },
  { name: "Lubricants & Greases", type: "Aviation-Grade Oils", severity: "Moderate", protected: true },
]

function SeverityBadge({ severity }: { severity: string }) {
  const colors =
    severity === "Extreme"
      ? "bg-red-500/15 text-red-400 border-red-500/20"
      : severity === "High"
      ? "bg-amber-500/15 text-amber-400 border-amber-500/20"
      : "bg-yellow-500/15 text-yellow-400 border-yellow-500/20"

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${colors}`}>
      {severity}
    </span>
  )
}

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
            background: "radial-gradient(ellipse, rgba(250,156,73,0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Chemical Resistance
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Built to Resist What Destroys Other Floors
          </h2>
          <p className="mt-3 text-white/60 text-base sm:text-lg leading-relaxed">
            Our hangar systems are formulated to withstand the specific aviation chemicals that attack and delaminate standard coatings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_1fr_auto_auto] sm:grid-cols-[1.3fr_1.2fr_0.7fr_0.7fr] px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-white/[0.02]">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/40">Chemical</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/40 hidden sm:block">Type</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/40 text-center">Threat</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent text-center">ProShield</span>
            </div>

            {chemicals.map((chem, i) => (
              <div key={chem.name} className={`grid grid-cols-[1.2fr_1fr_auto_auto] sm:grid-cols-[1.3fr_1.2fr_0.7fr_0.7fr] px-4 sm:px-6 py-4 items-center ${
                  i < chemicals.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}>
                <div>
                  <span className="text-sm sm:text-base font-semibold text-white">{chem.name}</span>
                  <span className="text-xs text-white/40 block sm:hidden mt-0.5">{chem.type}</span>
                </div>
                <span className="text-sm text-white/50 hidden sm:block">{chem.type}</span>
                <div className="flex justify-center">
                  <SeverityBadge severity={chem.severity} />
                </div>
                <div className="flex justify-center">
                  {chem.protected && (
                    <div className="h-7 w-7 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

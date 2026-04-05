"use client"

import { Recycle, Shield, Droplets, Clock, Wrench, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Droplets,
    title: "Instant Drainage",
    description:
      "Fully permeable from turf surface to sub-base. Water, pet waste, and cleaning solution pass straight through — no pooling, no standing water.",
  },
  {
    icon: Shield,
    title: "Lifetime Stability",
    description:
      "Resin-bound base won't shift, sink, or settle like sand. The foundation stays dimensionally stable through years of use and temperature changes.",
  },
  {
    icon: Recycle,
    title: "100% Recycled Materials",
    description:
      "GrassMac uses recycled rubber and aggregate bound with resin. Eco-friendly from the ground up — SUDS compliant for sustainable urban drainage.",
  },
  {
    icon: Clock,
    title: "Same-Day Turf Install",
    description:
      "The GrassMac base cures quickly — artificial turf can be laid approximately 2 to 4 hours after the base is applied. Reduced project timeline compared to traditional methods.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description:
      "Turf lifts out for direct cleaning. No re-leveling, no infill replacement, no fighting a deteriorating base. The foundation does the work so you don't have to.",
  },
  {
    icon: TrendingUp,
    title: "Shock Absorbing",
    description:
      "Semi-flexible rubber and resin composition absorbs impact — safer for kids and pets. No hard, rigid surface underfoot like traditional crusher-run installs.",
  },
]

export function GrassMacBenefits() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Why GrassMac
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Built Different from the Ground Up
          </h2>
        </div>

        {/* Compact 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 max-w-4xl mx-auto">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <div key={b.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-subtle text-teal">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-gray-900 text-base leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

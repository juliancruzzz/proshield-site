"use client"

import { FlaskConical, Clock, ShieldCheck, Gauge } from "lucide-react"

const stats = [
  { icon: FlaskConical, value: "Skydrol", label: "Chemical Resistance" },
  { icon: Clock, value: "24–48 hr", label: "Return to Service" },
  { icon: ShieldCheck, value: "NFPA 409", label: "Code Compliant" },
  { icon: Gauge, value: "10-15+", label: "Year Lifespan" },
]

export function HangarStats() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex items-center gap-3 sm:gap-4 group">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-teal-subtle text-teal group-hover:bg-accent-subtle group-hover:text-accent transition-colors">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-gray-900 leading-tight">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

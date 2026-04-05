"use client"

import { useEffect, useState } from "react"
import { Check, X } from "lucide-react"

const comparisons = [
  {
    feature: "Strength",
    epoxy: "Standard",
    pro: "20x Stronger Than Epoxy",
  },
  {
    feature: "Cure Time",
    epoxy: "24–72 hours",
    pro: "Same-day return to service",
  },
  {
    feature: "UV Resistance",
    epoxy: "Yellows over time",
    pro: "UV stable — won't yellow or fade",
  },
  {
    feature: "Chemical Resistance",
    epoxy: "Moderate",
    pro: "Superior — resists hot tires, oils, chemicals",
  },
  {
    feature: "Flexibility",
    epoxy: "Rigid — prone to cracking",
    pro: "Flexible — absorbs impact without chipping",
  },
  {
    feature: "Lifespan",
    epoxy: "3–5 years",
    pro: "15+ years",
  },
]

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const duration = 1500
    const steps = 30
    const increment = (target - 1) / steps
    let current = 1
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [target])

  return <span>{count}</span>
}

export function PolyasparticVsEpoxy() {
  return (
    <section className="section-dark py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Why It Matters
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-text-light tracking-tight">
            Polyaspartic vs Epoxy
          </h2>
          <p className="mt-4 text-text-light-secondary text-lg leading-relaxed">
            Our ProFlake garage floor system uses a polyaspartic topcoat that outperforms
            basic epoxy in every measurable way.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-4xl mx-auto">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 mb-4 px-2">
            <div className="text-xs font-semibold text-text-light-secondary uppercase tracking-wider">
              Feature
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
              Basic Epoxy
            </div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider text-center">
              ProShield
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-2">
            {comparisons.map((item, i) => (
              <div key={item.feature} className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center rounded-xl bg-navy-light/60 border border-border-dark p-4">
                <div className="text-sm font-semibold text-text-light">
                  {item.feature}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <X className="h-4 w-4 text-red-400/70 shrink-0" />
                  <span className="text-center">{item.epoxy}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-text-light font-medium">
                  <Check className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-center">{item.pro}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Big "20x" callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-2 rounded-2xl bg-accent/10 border border-accent/20 px-12 py-8">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-accent tabular-nums">
              <AnimatedCounter target={20} />x
            </div>
            <div className="text-sm sm:text-base font-semibold text-text-light uppercase tracking-widest">
              Stronger Than Epoxy
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

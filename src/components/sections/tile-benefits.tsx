"use client"

import { ShieldCheck, Droplets, Sparkles, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Scratch & Wear Resistant",
    description: "Tile surfaces hold up to heavy foot traffic, pets, and furniture without showing wear — built for real-life use.",
  },
  {
    icon: Droplets,
    title: "Water & Stain Resistant",
    description: "Porcelain and ceramic tiles are naturally waterproof. Paired with epoxy grout, the entire surface resists stains and moisture.",
  },
  {
    icon: Sparkles,
    title: "Low Maintenance",
    description: "Sweep and mop — that's it. No waxing, no resealing (with porcelain), no special cleaners needed for everyday care.",
  },
  {
    icon: TrendingUp,
    title: "Increases Property Value",
    description: "Quality tile is a permanent upgrade that buyers recognize. It adds value to kitchens, bathrooms, and entryways.",
  },
]

export function TileBenefits() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Benefits
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Why Choose Tile
          </h2>
        </div>

        {/* Compact icon-left grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 max-w-4xl mx-auto">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <div key={b.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-subtle text-teal">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-gray-900 text-base leading-snug">{b.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

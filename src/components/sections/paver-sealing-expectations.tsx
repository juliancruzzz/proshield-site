"use client"

import { Clock, Droplets, Sun, Shield } from "lucide-react"

const expectations = [
  {
    icon: Clock,
    title: "Sealer Is Not Permanent",
    text: "Expect 3–5 years per application in Las Vegas. Resealing is part of proper maintenance — we offer plans to make it easy.",
  },
  {
    icon: Droplets,
    title: "Prep Determines Results",
    text: "90% of failures come from poor prep. Pressure washing, stain treatment, and joint sanding are non-negotiable.",
  },
  {
    icon: Sun,
    title: "Vegas Is Hard on Pavers",
    text: "110°F+ heat, intense UV, zero humidity. That's why we use sealer engineered for extreme heat — not retail products.",
  },
  {
    icon: Shield,
    title: "Not a Coating System",
    text: "Sealing is hardscape maintenance — it protects existing pavers. It doesn't create a new surface like epoxy.",
  },
]

export function PaverSealingExpectations() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Honest Expectations
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            What You Should Know
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            We believe in transparency. Here&apos;s what paver sealing can
            — and can&apos;t — do.
          </p>
        </div>

        {/* Compact icon-left grid — matches CoolDeckBenefits pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 max-w-4xl mx-auto">
          {expectations.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-subtle text-teal">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-gray-900 text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {item.text}
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

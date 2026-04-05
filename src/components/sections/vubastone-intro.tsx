"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const highlights = [
  "UV-stable polyurethane resin — won't yellow or discolor",
  "Drains at 850 L/min per m² — fully permeable, no puddles",
  "Natural crushed Spanish marble with binding quartz",
  "Up to 10-year manufacturer warranty with VubaMac base",
]

export function VubaStoneIntro() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/vubastone/vubastone-patio-firepit.webp"
              alt="VubaStone resin-bound patio surrounding a fire pit area"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Not Epoxy — Resin-Bound Stone
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              What Is VubaStone?
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
              VubaStone is a polyurethane resin-bound surfacing system that combines UV-stable resin, natural crushed Spanish marble, and translucent binding quartz into a fully permeable outdoor surface. Unlike loose gravel it stays put, unlike concrete it won&apos;t crack or flood, and unlike standard resin systems it includes binding quartz that increases surface strength by up to 30%.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-subtle">
                    <Check className="h-3 w-3 text-teal" />
                  </span>
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const highlights = [
  "Resin-bound base engineered for artificial turf",
  "100% recycled rubber and aggregate materials",
  "Fully permeable — instant drainage through every layer",
  "Same-day turf install — lifts out for easy maintenance",
]

export function GrassMacIntro() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/grassmac/modern-lawn.webp"
              alt="Modern home with pristine green lawn and patio area"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              The Vuba GrassMac System
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              A Better Foundation for Artificial Turf
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
              GrassMac by Vuba replaces traditional sand and crusher-run bases that shift, sink,
              and trap moisture over time. The system blends recycled aggregate and SBR rubber
              with VubaMac resin to create a durable, semi-flexible foundation layer — fully
              permeable, dimensionally stable, and ready for turf installation the same day.
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

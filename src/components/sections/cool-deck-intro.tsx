"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const checklist = [
  "Acrylic-based — not epoxy or paint",
  "Knockdown texture for slip resistance",
  "Lighter colors help reduce surface temperature",
  "UV-stable and weather-resistant for pool decks and patios",
]

export function CoolDeckIntro() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/cool-deck/pool-deck-hero.webp"
              alt="Beautiful pool deck with cool deck coating in a residential backyard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              What Is Cool Deck?
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Acrylic Coating Built for{" "}
              <span className="text-accent">Exterior Concrete</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Cool deck is a specialized acrylic coating system — not epoxy — designed specifically for pool decks, patios, walkways, and other exterior concrete surfaces. The knockdown texture creates a slip-resistant surface that&apos;s safer around water, while lighter color options help reflect sunlight and reduce heat absorption compared to bare concrete.
            </p>

            <ul className="mt-6 space-y-3">
              {checklist.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-subtle text-teal">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

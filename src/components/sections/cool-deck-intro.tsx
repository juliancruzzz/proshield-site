"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const checklist = [
  "Available in light and dark colors",
  "Knockdown texture for concrete",
  "Repainting for sound existing texture",
  "Resurfacing for a new texture"
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
              alt="Textured concrete around a backyard pool"
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
              Textured Finishes for{" "}
              <span className="text-accent">Exterior Concrete</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">In a knockdown finish, we flatten the raised tips of the coating while it is still workable. That leaves a low, irregular texture across the deck. If your existing texture is sound, you may only need a fresh color coat.</p>

            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
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

"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const highlights = [
  "LVP, SPC, WPC, and Engineered Hardwood options",
  "Waterproof rigid-core options for any room",
  "Click-lock installation — fast and clean",
  "Works over concrete and existing floors",
]

export function PlankIntro() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/plank/plank-room.jpg"
              alt="Bright living room with warm wood plank flooring throughout"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              What We Install
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              The Modern Alternative to Hardwood
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
              Plank flooring gives you the warmth and beauty of wood with the durability and water resistance that solid hardwood can&apos;t match. Whether you choose rigid SPC for a busy kitchen, cushioned WPC for a bedroom, or real engineered hardwood for a living room — we install it right with proper acclimation, subfloor prep, and precision fitting.
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

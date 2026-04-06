"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const highlights = [
  "Hand-manipulated metallic pigments — every floor is unique",
  "Genuine 3D depth and movement in high-build epoxy",
  "UV-stable polyaspartic or polyurethane topcoat included",
  "Custom color blending for your exact design vision",
]

export function MetallicIntro() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/metallic/metallic-epoxy-red-black-swirl.webp"
              alt="Metallic epoxy floor with red and black custom swirl finish — 3D liquid metal effect"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Custom Craftsmanship
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Where Craftsmanship Meets Custom Design
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
              Metallic epoxy isn&apos;t a coating &mdash; it&apos;s a transformation. Flowing metallic pigments are hand-manipulated into high-build epoxy to create a floor with genuine three-dimensional depth and movement. Every installation is a custom original built for your space.
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

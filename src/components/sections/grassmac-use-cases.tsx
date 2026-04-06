"use client"

import Image from "next/image"
import { Home, Dog, Baby, Building2, Trophy, Waves, TreePine } from "lucide-react"

const useCases = [
  { icon: Home, label: "Residential Lawns" },
  { icon: Dog, label: "Pet Areas" },
  { icon: Baby, label: "Play Areas" },
  { icon: Building2, label: "Commercial Spaces" },
  { icon: Trophy, label: "Sports Surfaces" },
  { icon: Waves, label: "Pool Surrounds" },
  { icon: TreePine, label: "Rooftop Gardens" },
]

export function GrassMacUseCases() {
  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/grassmac/kids-playing.webp"
              alt="Children playing soccer on a lush green lawn"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content side */}
          <div>
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Applications
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Where GrassMac Performs
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                From backyard lawns to commercial landscapes, GrassMac provides the ideal
                foundation for any space where turf needs to drain, stay stable, and look great
                for years.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {useCases.map((u, i) => {
                const Icon = u.icon
                return (
                  <div key={u.label} className="group rounded-xl border border-gray-200 bg-white p-4 text-center hover:shadow-md hover:border-teal/30 transition-all duration-200">
                    <div className="mx-auto h-10 w-10 rounded-lg bg-teal-subtle flex items-center justify-center text-teal group-hover:bg-accent-subtle group-hover:text-accent transition-colors mb-2.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-medium text-gray-700">{u.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

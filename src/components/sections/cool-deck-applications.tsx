"use client"

import Image from "next/image"
import { Droplets, Sun, Footprints } from "lucide-react"

const applications = [
  {
    icon: Droplets,
    title: "Pool Decks",
    description: "The most popular application. Knockdown texture provides slip resistance around water while lighter colors keep the surface walkable in Las Vegas heat.",
    image: "/images/cool-deck/pool-deck-lounge.jpg",
  },
  {
    icon: Sun,
    title: "Patios & Porches",
    description: "Protect outdoor entertaining areas from UV, rain, and seasonal wear. The acrylic formula resists cracking and maintains its color under direct sunlight.",
    image: "/images/cool-deck/patio-backyard.jpg",
  },
  {
    icon: Footprints,
    title: "Walkways",
    description: "Add safety and curb appeal to high-traffic concrete paths. The textured finish reduces slip risk and the sealer protects against staining and water damage.",
    image: "/images/cool-deck/pool-deck-spa.jpg",
  },
]

export function CoolDeckApplications() {
  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Applications
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Where Cool Deck Works Best
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Designed for exterior surfaces that need to stay safe, cool, and looking great year-round.
          </p>
        </div>

        {/* Cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {applications.map((app, i) => {
            const Icon = app.icon
            return (
              <div key={app.title} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-teal group-hover:text-accent transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading font-semibold text-gray-900 text-base sm:text-lg">{app.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">{app.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

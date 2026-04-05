"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const specialties = [
  {
    title: "Concrete Overlay & Resurfacing",
    badge: "Resurfacing",
    description:
      "Stamped and textured overlays that transform existing concrete. Custom patterns and colors — no tear-out required.",
    image: "/images/concrete-overlay/stamped-patio.jpg",
    href: "/concrete-overlay",
  },
  {
    title: "Patio / Pool Deck / Exterior",
    badge: "Exterior",
    description:
      "Cool-to-the-touch acrylic coatings for pool decks, patios, and walkways. Slip-resistant and UV-stable.",
    image: "/images/cool-deck/pool-deck-hero.jpg",
    href: "/cool-deck",
  },
  {
    title: "Paver Sealing & Restoration",
    badge: "Maintenance",
    description:
      "Professional sealing, stripping, re-sanding, and color enhancement. UV-stable, non-yellowing sealer built for desert heat.",
    image: "/images/paver-sealing/paver-driveway-sealed.jpg",
    href: "/paver-sealing",
  },
  {
    title: "GrassMac & Turf Installation",
    badge: "Turf",
    description:
      "Premium artificial turf for yards, pet areas, putting greens, and commercial landscapes. Low maintenance, year-round green.",
    image: "/images/grassmac/turf-backyard-pool.jpg",
    href: "/grassmac",
  },
]

export function SpecialtyServices() {
  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Beyond Epoxy
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Specialty Services
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Exterior coatings, hardscape maintenance, and turf — the full outdoor package.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {specialties.map((item, i) => (
            <div key={item.title}>
              <Link href={item.href} className="group block h-full">
                <div className="h-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-wide uppercase text-accent">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-heading font-semibold text-gray-900 text-base sm:text-lg group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn More{" "}
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const highlights = [
  "Porcelain, ceramic, and natural stone options",
  "Kitchens, bathrooms, entryways, and outdoor areas",
  "Large-format tile and custom patterns",
  "Epoxy grout available for maximum stain resistance",
]

export function TileIntro() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/tile/tile-install.webp"
              alt="Professional tile installation — laying tile with thinset and levelers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              What We Offer
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Tile Done Right
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
              We handle tile installation from substrate prep through final grout and sealing. Whether it&apos;s a kitchen backsplash, a full bathroom remodel, or a commercial entryway — we use proper leveling systems, quality thinset, and attention to detail that ensures a lasting result.
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

"use client"
import Image from "next/image"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"

interface StoneBlend {
  name: string
  image: string
  tones: string
}

const blends: StoneBlend[] = [
  { name: "Alaskan Tundra Blend", image: "/images/vubastone/colors/alaskan-tundra-blend.webp", tones: "Pale gray with white and dark flecks" },
  { name: "Arc de Triomphe", image: "/images/vubastone/colors/arc-de-triomphe.webp", tones: "Gold, cream and charcoal" },
  { name: "Big Sur", image: "/images/vubastone/colors/big-sur.webp", tones: "Gray, gold and cream" },
  { name: "Breckenridge", image: "/images/vubastone/colors/breckenridge.webp", tones: "Tan and gray with small dark flecks" },
  { name: "Cano Cristales", image: "/images/vubastone/colors/cano-cristales.webp", tones: "Reddish brown with cream flecks" },
  { name: "China Town", image: "/images/vubastone/colors/china-town.webp", tones: "Terracotta red and cream" },
  { name: "Coral Springs", image: "/images/vubastone/colors/coral-springs.webp", tones: "Gray and cream with dark accents" },
  { name: "Ellis Island", image: "/images/vubastone/colors/ellis-island.webp", tones: "Brown with pale and dark flecks" },
  { name: "Idaho Falls", image: "/images/vubastone/colors/idaho-falls.webp", tones: "Light and dark grays" },
  { name: "Ipanema Beach", image: "/images/vubastone/colors/ipanema-beach.webp", tones: "Gray and beige" },
  { name: "Juneau", image: "/images/vubastone/colors/juneau.webp", tones: "Blue-gray and charcoal" },
  { name: "Kaimu Beach", image: "/images/vubastone/colors/kaimu-beach.webp", tones: "Deep charcoal with flecks of gray" },
  { name: "Key West", image: "/images/vubastone/colors/key-west.webp", tones: "Pale beige with warm brown accents" },
  { name: "Lake Tahoe", image: "/images/vubastone/colors/lake-tahoe.webp", tones: "Gray with cream and dark accents" },
  { name: "Manhattan", image: "/images/vubastone/colors/manhattan.webp", tones: "Charcoal with small silver-gray flecks" },
  { name: "Milano Marble", image: "/images/vubastone/colors/milano-marble.webp", tones: "Terracotta, charcoal and cream" },
  { name: "Monticello", image: "/images/vubastone/colors/monticello.webp", tones: "Gray with touches of gold" },
  { name: "Monument Valley", image: "/images/vubastone/colors/monument-valley.webp", tones: "Red-brown and tan" },
  { name: "Nevada", image: "/images/vubastone/colors/nevada.webp", tones: "Tan, rust and cream" },
  { name: "Palazzo", image: "/images/vubastone/colors/palazzo.webp", tones: "White, gray and charcoal" },
  { name: "Pont du Gard", image: "/images/vubastone/colors/pont-du-gard.webp", tones: "Sand and light gray" },
]

const INITIAL_VISIBLE = 12

export function VubaStoneColorShowcase() {
  const [selectedBlend, setSelectedBlend] = useState<StoneBlend | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleBlends = showAll ? blends : blends.slice(0, INITIAL_VISIBLE)
  const hasMore = blends.length > INITIAL_VISIBLE

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Stone Palette
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-900 tracking-tight">
            Stone blends
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            Compare 21 blends. Open a swatch for a closer view of the individual stones.
          </p>
        </div>

        {/* Blend detail panel — shows when a swatch is selected */}
        <AnimatePresence>
          {selectedBlend && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden mb-8"
            >
              <div className="max-w-2xl mx-auto rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  {/* Large swatch preview */}
                  <div className="sm:w-[240px] h-[200px] sm:h-auto shrink-0 overflow-hidden">
                    <Image
                      width={800}
                      height={533}
                      sizes="(min-width: 640px) 240px, calc(100vw - 32px)"
                      src={selectedBlend.image}
                      alt={`${selectedBlend.name} stone blend`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Blend info */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading font-bold text-xl text-gray-900">
                        {selectedBlend.name}
                      </h3>
                      <button
                        onClick={() => setSelectedBlend(null)}
                        className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
                        aria-label="Close"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-sm text-accent font-medium">Stone blend</span>
                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">{selectedBlend.tones}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blend grid — 3 cols mobile, 4 sm, 5 md, 7 lg */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {visibleBlends.map((blend) => {
            const isSelected = selectedBlend?.name === blend.name
            return (
              <button
                key={blend.name}
                className="group text-left cursor-pointer"
                onClick={() => setSelectedBlend(isSelected ? null : blend)}
              >
                <div
                  className={`aspect-square rounded-xl overflow-hidden border-2 bg-white shadow-sm transition-all duration-200 ${
                    isSelected
                      ? "border-accent shadow-lg shadow-accent/10 scale-[1.05]"
                      : "border-gray-200 group-hover:border-accent/30 group-hover:shadow-md group-hover:scale-[1.03]"
                  }`}
                >
                  <Image
                    width={800}
                    height={533}
                    sizes="(min-width: 1024px) 128px, (min-width: 768px) 20vw, (min-width: 640px) 25vw, 33vw"
                    src={blend.image}
                    alt={`${blend.name} stone blend`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`text-xs sm:text-sm font-medium transition-colors duration-150 leading-tight ${
                      isSelected ? "text-accent" : "text-gray-700 group-hover:text-accent"
                    }`}
                  >
                    {blend.name}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Show more / less toggle */}
        {hasMore && (
          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={() => { setShowAll(!showAll); if (showAll) setSelectedBlend(null) }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-accent transition-colors cursor-pointer"
            >
              {showAll ? "Show fewer blends" : `Show all ${blends.length} blends`}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

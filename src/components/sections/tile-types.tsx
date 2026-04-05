"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Layers, Palette, Gem, ChevronDown } from "lucide-react"

const tileTypes = [
  {
    icon: Layers,
    title: "Porcelain Tile",
    description:
      "Extremely dense and durable with low porosity. Superior water and stain resistance makes porcelain ideal for high-traffic areas, outdoor installations, and wet environments.",
    bestFor: "High-traffic, wet areas, outdoor",
  },
  {
    icon: Palette,
    title: "Ceramic Tile",
    description:
      "Classic clay-based tile fired at lower temperatures than porcelain. Cost-effective for walls, backsplashes, and light-to-moderate foot traffic. Huge range of colors and decorative options.",
    bestFor: "Walls, backsplashes, budget-friendly",
  },
  {
    icon: Gem,
    title: "Natural Stone",
    description:
      "Premium earth-sourced materials — marble, granite, limestone, slate, and travertine. Each piece is unique with natural veining and texture. Requires periodic sealing.",
    bestFor: "Luxury interiors, lobbies, feature walls",
  },
]

export function TileTypes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Content side */}
          <div>
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Tile Options
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Choose Your Tile Type
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Each material has strengths suited to specific applications. We&apos;ll help you choose the right tile for your space and budget.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {tileTypes.map((tile, i) => {
                const Icon = tile.icon
                const isOpen = openIndex === i
                return (
                  <div key={tile.title} className={`group rounded-xl bg-white border transition-all duration-200 ${
                      isOpen ? "border-teal/40 shadow-md" : "border-gray-200 hover:border-teal/30 hover:shadow-sm"
                    }`}>
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer"
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isOpen ? "bg-accent-subtle text-accent" : "bg-teal-subtle text-teal group-hover:bg-accent-subtle group-hover:text-accent"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="flex-1 font-heading font-semibold text-gray-900 text-base">{tile.title}</h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`shrink-0 ${isOpen ? "text-accent" : "text-gray-400"}`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[72px] sm:pl-[76px]">
                            <p className="text-sm text-gray-500 leading-relaxed">{tile.description}</p>
                            <div className="mt-3">
                              <span className="inline-block rounded-full bg-teal-subtle px-2.5 py-0.5 text-xs font-medium text-teal">
                                {tile.bestFor}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image side */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/tile/tile-luxury-interior.jpg"
              alt="Modern open-plan living space with luxury dark tile flooring"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

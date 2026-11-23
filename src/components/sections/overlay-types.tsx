// Expandable accordion overlay types — matches commercial-systems layout
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layers, Stamp, AlignHorizontalDistributeCenter, Palette, ChevronDown, Check } from "lucide-react"

const overlayTypes = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Microtoppings / Skim Coats",
    tagline: "A smooth, thin finish",
    tags: ["Interior Floors", "Retail", "Showrooms"],
    description:
      "A skim coat gives sound concrete an even surface for color or stain. Its low profile can be useful where the floor meets a door or a neighboring room.",
    benefits: [
      "Smooth, polished finish",
      "Minimal floor height change",
      "Colorable and stainable",
      "Smooth interior surfaces",
    ],
    image: "/images/concrete-overlay/micro-topping-flooring.webp",
  },
  {
    icon: <Stamp className="h-5 w-5" />,
    title: "Stampable Overlays",
    tagline: "Imprinted stone and brick patterns",
    tags: ["Patios", "Driveways", "Pool Decks"],
    description:
      "Texture mats pressed into the fresh overlay give it a stone, brick or tile pattern. The mix needs enough depth for the impression as well as room at adjoining doors and edges.",
    benefits: [
      "Realistic stone & brick patterns",
      "Deep texture imprints",
      "Wide color selection",
      "Patterned borders",
    ],
    image: "/images/concrete-overlay/concrete-overlay-commercial-palms.webp",
  },
  {
    icon: <AlignHorizontalDistributeCenter className="h-5 w-5" />,
    title: "Polishable Overlay",
    tagline: "A topping that can be ground and polished",
    tags: ["Commercial", "Retail", "Showrooms"],
    description:
      "We install a topping made for polishing, then grind and polish the new surface. This can give a showroom or retail floor a consistent appearance where the existing concrete has patchwork or old stains.",
    benefits: [
      "Polishes to high-gloss finish",
      "Covers visible patchwork",
      "Choice of sheen",
      "Colorable and dyeable",
    ],
    image: "/images/concrete-overlay/polishable-overlay.webp",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Decorative / Custom Overlays",
    tagline: "Logos, stencils, and multi-color designs",
    tags: ["Commercial", "Branding", "Custom Design"],
    description:
      "Stencils and contrasting colors can mark a border, lay out a tile pattern or place a design in an entry. The size of the design and the joints in the slab guide the layout.",
    benefits: [
      "Stencil patterns",
      "Custom logo embedding",
      "Multi-color blending",
      "Commercial branding",
    ],
    image: "/images/concrete-overlay/stamped-patio.webp",
  },
]

export function OverlayTypes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Overlay Options
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Types of Overlays We Offer
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Choose the texture first. A skim coat stays smooth, a stamp leaves an impression and a polishable topping can be ground to a sheen.
          </p>
        </div>

        {/* Expandable Overlay Cards */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {overlayTypes.map((overlay, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={overlay.title}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-gray-900/10 shadow-xl bg-white ring-1 ring-gray-900/5"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                {/* Collapsed header */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer group"
                >
                  {/* Icon */}
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-600"
                    }`}
                  >
                    {overlay.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-heading font-semibold text-base sm:text-lg transition-colors duration-300 ${
                        isOpen ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {overlay.title}
                    </h3>
                    {!isOpen && (
                      <p className="mt-0.5 text-sm text-gray-500 truncate hidden sm:block">
                        {overlay.tagline}
                      </p>
                    )}
                  </div>

                  {/* Tags on collapsed */}
                  {!isOpen && (
                    <div className="hidden md:flex items-center gap-1.5">
                      {overlay.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-gray-900"
                        : "text-gray-300 group-hover:text-gray-500"
                    }`}
                  />
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-6">
                        {/* Tags row */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {overlay.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Image + Details row */}
                        <div className="flex flex-col sm:flex-row gap-5">
                          {/* Image */}
                          <div className="sm:w-2/5 h-48 sm:h-56 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                            <img
                              src={overlay.image}
                              alt={overlay.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Text content */}
                          <div className="flex-1 flex flex-col">
                            {/* Tagline subtitle */}
                            <p className="text-xs font-semibold tracking-wider uppercase text-teal mb-2">
                              {overlay.tagline}
                            </p>

                            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                              {overlay.description}
                            </p>

                            {/* Finish details */}
                            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                              {overlay.benefits.map((b) => (
                                <span
                                  key={b}
                                  className="text-xs sm:text-sm text-gray-600 flex items-center gap-2"
                                >
                                  <Check className="h-3.5 w-3.5 text-teal shrink-0" />
                                  {b}
                                </span>
                              ))}
                            </div>
                          </div>
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
    </section>
  )
}

// Expandable accordion overlay types — matches commercial-systems layout
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layers, Stamp, AlignHorizontalDistributeCenter, Palette, ChevronDown, Check } from "lucide-react"

const overlayTypes = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Microtoppings / Skim Coats",
    tagline: "Ultra-thin, modern polished-concrete look",
    tags: ["Interior Floors", "Retail", "Showrooms"],
    description:
      "Ultra-thin cementitious application for a smooth, modern polished-concrete aesthetic. Bonds directly to existing concrete with minimal thickness. Can be colored, stained, or polished to match any design vision.",
    benefits: [
      "Smooth, polished finish",
      "Minimal floor height change",
      "Colorable and stainable",
      "Ideal for interior spaces",
    ],
    stats: [
      { value: "No", label: "Tear-out needed" },
      { value: "10–15", label: "Year lifespan" },
      { value: "24hr", label: "Walk-on time" },
    ],
    image: "/images/concrete-overlay/micro-topping-flooring.png",
  },
  {
    icon: <Stamp className="h-5 w-5" />,
    title: "Stampable Overlays",
    tagline: "Natural stone & brick patterns without tear-out",
    tags: ["Patios", "Driveways", "Pool Decks"],
    description:
      "Stamped with patterns that mimic natural stone, brick, slate, tile, or wood planks. Applied at 1/4\" to 3/4\" thickness for deep, realistic pattern imprints. Wide range of patterns and integral colors available.",
    benefits: [
      "Realistic stone & brick patterns",
      "Deep texture imprints",
      "Wide color selection",
      "Exterior UV-rated",
    ],
    stats: [
      { value: "15–20", label: "Year lifespan" },
      { value: "50%+", label: "Less vs. real stone" },
      { value: "1–2 Day", label: "Typical install" },
    ],
    image: "/images/concrete-overlay/concrete-overlay-commercial-palms.jpg",
  },
  {
    icon: <AlignHorizontalDistributeCenter className="h-5 w-5" />,
    title: "Polishable Overlay",
    tagline: "High-gloss, grind-and-polish finish over existing concrete",
    tags: ["Commercial", "Retail", "Showrooms"],
    description:
      "A thin-bonded cementitious topping applied over existing concrete and then ground and polished to a high-gloss finish. Achieves the look of polished concrete without tearing out the existing slab — ideal for covering stained, patched, or uneven floors. Compressive strength of 4,000–6,500 PSI when cured, with the option for integral color, dyes, or scored patterns.",
    benefits: [
      "Polishes to high-gloss finish",
      "Covers damaged substrates",
      "4,000–6,500 PSI strength",
      "Colorable and dyeable",
    ],
    stats: [
      { value: "24hr", label: "Polish-ready" },
      { value: "No", label: "Tear-out needed" },
      { value: "15–20", label: "Year lifespan" },
    ],
    image: "/images/concrete-overlay/polishable-overlay.jpg",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Decorative / Custom Overlays",
    tagline: "Logos, stencils, and multi-color designs",
    tags: ["Commercial", "Branding", "Custom Design"],
    description:
      "Stenciled patterns, custom colors, embedded logos, multi-color blends, and faux finishes. Perfect for commercial branding, restaurant floors, themed spaces, and any project requiring a one-of-a-kind design.",
    benefits: [
      "130+ stencil patterns",
      "Custom logo embedding",
      "Multi-color blending",
      "Commercial branding",
    ],
    stats: [
      { value: "130+", label: "Pattern options" },
      { value: "Custom", label: "Logo embedding" },
      { value: "10–15", label: "Year lifespan" },
    ],
    image: "/images/concrete-overlay/stamped-patio.jpg",
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
            Each overlay system serves a different purpose. We help you pick the right one for your surface and style.
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
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
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
                      <p className="mt-0.5 text-sm text-gray-400 truncate hidden sm:block">
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
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500"
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

                            {/* Stats row */}
                            <div className="mt-4 grid grid-cols-3 gap-3">
                              {overlay.stats.map((stat) => (
                                <div
                                  key={stat.label}
                                  className="bg-gray-50 rounded-lg px-3 py-2.5 text-center"
                                >
                                  <div className="font-heading font-bold text-lg sm:text-xl text-gray-900 leading-tight">
                                    {stat.value}
                                  </div>
                                  <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-gray-400 mt-0.5">
                                    {stat.label}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Benefits check list */}
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

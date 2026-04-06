"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Thermometer, ShieldCheck, Clock, Droplets, ChevronDown } from "lucide-react"

const benefits = [
  {
    icon: Thermometer,
    title: "Heat Reflective",
    description:
      "Lighter colors reflect sunlight and reduce surface temperature by up to 30% compared to bare concrete — critical in Las Vegas where pool decks regularly hit 150°F+ in summer. Cool deck keeps surfaces walkable even in peak heat.",
  },
  {
    icon: ShieldCheck,
    title: "Slip Resistant",
    description:
      "Knockdown texture creates a non-slip surface that's safe around pools, hot tubs, and wet areas even when water is present. The textured finish provides grip underfoot without being rough or abrasive on bare skin.",
  },
  {
    icon: Droplets,
    title: "Weather Resistant",
    description:
      "Acrylic formula withstands UV exposure, rain, and seasonal temperature swings without cracking or peeling. Designed for desert climates where surfaces expand and contract daily — it flexes with the concrete instead of separating from it.",
  },
  {
    icon: Clock,
    title: "Low Maintenance",
    description:
      "Periodic resealing every 2–3 years keeps the coating looking fresh. Day-to-day, just hose it off or sweep debris. No special cleaners needed — and unlike pavers, there are no joints for weeds or ants to invade.",
  },
]

export function CoolDeckBenefits() {
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
                Why Cool Deck
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Built for Las Vegas<br className="hidden sm:block" /> Outdoor Living
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Bare concrete around a pool is a burn hazard six months out of the year in Vegas.
                Cool deck coating drops surface temperature, adds grip, and protects the slab —
                all in a single application that lasts for years.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                const isOpen = openIndex === i
                return (
                  <div key={benefit.title} className={`group rounded-xl bg-white border transition-all duration-200 ${
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
                      <h3 className="flex-1 font-heading font-semibold text-gray-900 text-base">{benefit.title}</h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`shrink-0 ${isOpen ? "text-accent" : "text-gray-500"}`}
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
                            <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
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
              src="/images/cool-deck/cool-deck-knockdown-pool.webp"
              alt="Cool deck knockdown texture coating around pool in Las Vegas"
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

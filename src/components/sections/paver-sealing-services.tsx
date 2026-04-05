"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Droplets,
  Shield,
  Paintbrush,
  Eraser,
  Layers,
  Sparkles,
  ChevronDown,
} from "lucide-react"

const services = [
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "Paver Sealing",
    stat: "Most Popular",
    description:
      "Full-service sealing — pressure wash, surface prep, joint stabilization with polymeric sand, and professional sealer application. This is the core service most homeowners need.",
  },
  {
    icon: <Paintbrush className="h-5 w-5" />,
    title: "Paver Restoration",
    stat: "Complete Strip & Reseal",
    description:
      "Complete restoration for faded, milky, or poorly sealed pavers. We strip the old sealer, deep-clean the surface, re-sand joints, and apply a fresh coat — like-new results without the cost of replacement.",
  },
  {
    icon: <Eraser className="h-5 w-5" />,
    title: "Sealant Stripping",
    stat: "Remove Failed Sealer",
    description:
      "Thorough removal of old or failed sealer layers that cause haze, peeling, and white discoloration. Essential before any new sealer can bond properly to the paver surface.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Joint Stabilization",
    stat: "Polymeric Sand",
    description:
      "Premium polymeric sand fills joints and hardens when activated with water. Prevents shifting, weed growth, ant hills, and erosion — skipping this step is the most common reason sealed pavers fail.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Color Enhancement",
    stat: "Tinted Sealers",
    description:
      "Tinted sealers that restore rich, vibrant color to faded pavers. Available in subtle enhancement or bold color correction — deeper, more consistent results than clear sealer alone.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Deep Stain Removal",
    stat: "Targeted Treatment",
    description:
      "Targeted spot treatments for rust, oil, tire marks, and organic stains before sealing. Stains trapped under sealer become permanent — treatment before application is non-negotiable.",
  },
]

export function PaverSealingServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            What We Do
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            More Than Just Spraying Sealer
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            Every project is different. We offer targeted services — most projects combine several.
          </p>
        </div>

        {/* Expandable service rows */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {services.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.title} className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-accent/30 shadow-lg shadow-accent/5"
                    : "border-gray-200 hover:border-accent/20 hover:shadow-md hover:shadow-accent/5"
                }`}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer group"
                >
                  <div className="h-10 w-10 rounded-xl bg-teal-subtle flex items-center justify-center text-teal shrink-0 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-gray-900">
                      {item.title}
                    </h3>
                    {!isOpen && (
                      <p className="mt-0.5 text-sm text-gray-400 hidden sm:block">
                        {item.stat}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : "group-hover:text-accent"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5">
                        <div className="pl-14">
                          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Bottom highlight */}
        <div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-accent/5 via-accent/8 to-accent/5 border border-accent/10 px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
              Most projects combine multiple services into a single visit. Prep, treatment, stabilization, and sealing — done right, done once.
            </p>
            <div className="flex gap-8 shrink-0">
              <div className="text-center">
                <span className="block font-heading font-bold text-2xl sm:text-3xl text-accent">6</span>
                <span className="text-xs text-gray-500">Services</span>
              </div>
              <div className="text-center">
                <span className="block font-heading font-bold text-2xl sm:text-3xl text-accent">1</span>
                <span className="text-xs text-gray-500">Visit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

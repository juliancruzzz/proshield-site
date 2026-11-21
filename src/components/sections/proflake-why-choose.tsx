"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Sun, ThermometerSun, Droplets, ChevronDown, Check } from "lucide-react"

const advantages = [
  {
    icon: <Sun className="h-5 w-5" />,
    title: "UV-Stable Finish",
    badge: "UV data",
    badgeStyle: "bg-teal-subtle text-teal border border-teal/20",
    activeBadgeStyle: "bg-teal text-white border border-teal",
    description:
      "Light exposure can affect coating appearance. Compare the selected base and topcoat’s published UV data and intended use; a UV-resistant topcoat is not a promise that the entire floor will never change color.",
    features: [
  "Confirm the named topcoat",
  "Check intended light exposure",
  "Compare published product data",
  "Follow the care requirements"
],
  },
  {
    icon: <ThermometerSun className="h-5 w-5" />,
    title: "Hot Tire Resistant",
    badge: "Vehicle use",
    badgeStyle: "bg-accent-subtle text-accent border border-accent/20",
    activeBadgeStyle: "bg-accent text-white border border-accent",
    description:
      "Confirm the selected topcoat’s vehicle-use requirements and follow the return-to-use instructions. Marks or coating damage need assessment; resistance is not immunity to every tire exposure.",
    features: [
  "Confirm vehicle-use suitability",
  "Allow the specified cure time",
  "Assess substrate and moisture",
  "Read warranty conditions"
],
  },
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "Chemical Resistant",
    badge: "Exposure limits",
    badgeStyle: "bg-teal-subtle text-teal border border-teal/20",
    activeBadgeStyle: "bg-teal text-white border border-teal",
    description:
      "Chemical resistance depends on the actual coating, chemical, concentration, temperature and contact time. Confirm compatibility for expected spills and follow the product’s cleanup instructions.",
    features: [
  "Identify expected chemicals",
  "Check concentration and contact time",
  "Use compatible cleaners",
  "Follow spill procedures"
],
  },
]

export function ProFlakeWhyChoose() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-10 sm:py-16 lg:py-24 section-gray">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Why ProFlake
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            The Polyaspartic Advantage
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Compare the named coating products, intended use and care requirements. Our polyaspartic topcoat is what sets ProFlake apart.
          </p>
        </div>

        {/* Expandable advantage rows */}
        <div className="space-y-3">
          {advantages.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.title}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full rounded-xl border bg-white px-5 py-4 sm:px-6 sm:py-5 text-left transition-all duration-300 ${
                    isOpen
                      ? "border-accent/40 shadow-lg shadow-accent/5 rounded-b-none"
                      : "border-gray-200 hover:border-accent/20 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-block rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wide mb-1.5 transition-colors duration-300 ${
                          isOpen ? item.activeBadgeStyle : item.badgeStyle
                        }`}
                      >
                        {item.badge}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-teal-subtle flex items-center justify-center text-teal shrink-0">
                        {item.icon}
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pt-4 pb-5 bg-white border-x border-b border-accent/20 rounded-b-xl">
                        <ul className="space-y-2.5">
                          {item.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{f}</span>
                            </li>
                          ))}
                        </ul>
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

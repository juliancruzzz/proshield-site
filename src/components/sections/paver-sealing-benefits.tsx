"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Sun, ShieldCheck, Bug, Paintbrush, ChevronDown } from "lucide-react"

const benefits = [
  {
    icon: Sun,
    title: "UV & Fade Protection",
    description:
      "Compare the selected sealer’s published UV and outdoor-use information. Sun exposure, the paver material and maintenance affect how the surface looks over time.",
  },
  {
    icon: ShieldCheck,
    title: "Stain & Spill Resistance",
    description:
      "A compatible sealer may reduce absorption and make some spills easier to clean. Remove spills promptly and follow the selected product’s care instructions; sealing does not make pavers stain-proof.",
  },
  {
    icon: Bug,
    title: "Joint Sand Care",
    description:
      "Where suitable, joint treatment can help retain sand and reduce gaps. Sealing does not guarantee that weeds, ants, erosion or paver movement will stop.",
  },
  {
    icon: Paintbrush,
    title: "Finish Options",
    description:
      "Wet-look and color-enhancing products can deepen the appearance of some pavers. Natural-look products aim for less visual change. Confirm the selected finish on a sample area first.",
  },
]

export function PaverSealingBenefits() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Content side */}
          <div>
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Why Seal Your Pavers
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Sealing Options<br className="hidden sm:block" /> for Your Pavers
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                The right treatment depends on your pavers, existing sealer, joint condition and exposure.
                Compare the preparation, finish and care requirements in your written quote.
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
              src="/images/paver-sealing/paver-walkway-sealed.webp"
              alt="Paver walkway finish example"
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

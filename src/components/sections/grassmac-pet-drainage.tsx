"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Droplets, Wind, ShieldCheck, Sparkles, ChevronDown } from "lucide-react"

const drainagePoints = [
  {
    icon: Droplets,
    title: "Drains Through — Not Around",
    description:
      "Traditional turf bases trap urine between the backing and a compacted sand layer. GrassMac is fully permeable — liquid passes straight through the turf, through the resin-bound base, and into the subgrade. No pooling, no sitting.",
  },
  {
    icon: Wind,
    title: "Eliminates Odor at the Source",
    description:
      "Odor builds when urine is trapped and bacteria multiply in warm, wet material. Sand infill is one of the worst offenders — it absorbs liquid and holds it. A permeable base keeps the system ventilated and dry, cutting off the bacterial cycle that creates ammonia smell.",
  },
  {
    icon: ShieldCheck,
    title: "Easy to Clean & Maintain",
    description:
      "With GrassMac, the turf lifts out for direct cleaning and the base stays intact. Hose it down, treat with enzyme cleaner, lay it back. Traditional installs don't give you that access — you're stuck cleaning the surface and hoping it drains.",
  },
  {
    icon: Sparkles,
    title: "Stays Fresh in Las Vegas Heat",
    description:
      "Heat reactivates trapped urine odor — a real problem in our desert climate. A fully draining base means there's nothing to reactivate. Combined with antimicrobial infill, a GrassMac pet area stays cleaner and fresher year-round.",
  },
]

export function GrassMacPetDrainage() {
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
                Pet-Friendly Turf
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                The Drainage System Your<br className="hidden sm:block" /> Pets Actually Need
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Most artificial turf odor problems come from what&apos;s underneath — not the turf itself.
                A non-draining base traps urine, breeds bacteria, and creates smell that no amount
                of surface cleaning can fix. GrassMac solves this at the foundation level.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {drainagePoints.map((point, i) => {
                const Icon = point.icon
                const isOpen = openIndex === i
                return (
                  <div key={point.title} className={`group rounded-xl bg-white border transition-all duration-200 ${
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
                      <h3 className="flex-1 font-heading font-semibold text-gray-900 text-base">{point.title}</h3>
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
                            <p className="text-sm text-gray-500 leading-relaxed">{point.description}</p>
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
              src="/images/grassmac/dog-on-grass.webp"
              alt="Happy dog relaxing on a green lawn"
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

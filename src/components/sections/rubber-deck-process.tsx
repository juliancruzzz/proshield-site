"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Surface Preparation",
    time: "Day 1",
    description:
      "We grind the existing concrete to create a proper bonding profile, fill significant cracks with flexible filler, and clean the surface of all contaminants. If there's an existing cool deck or acrylic coating, we remove any loose or delaminating material — sound coatings can typically stay.",
  },
  {
    number: "02",
    title: "Primer & Rubber Pour",
    time: "Day 1–2",
    description:
      "A polyurethane primer seals the concrete and creates the bond surface. Once it tacks, we mix EPDM rubber granules with polyurethane resin and hand-trowel the mixture onto the deck at the specified thickness. Around coping, drains, and expansion joints, we detail the material to create clean, waterproof edges.",
  },
  {
    number: "03",
    title: "Topcoat & Cure",
    time: "Day 2–3",
    description:
      "A UV-stable topcoat seals the rubber surface and locks the granules in place. Walk on it in 24 hours. Furniture and normal use after 48–72 hours. No weeks of construction disrupting your backyard.",
  },
]

export function RubberDeckProcess() {
  return (
    <section className="section-white py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:sticky lg:top-28"
          >
            <Image
              src="/images/blog/rubber-deck/rubber-deck-installation.jpg"
              alt="Installer hand-troweling rubber aggregate onto a pool deck surface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs text-white/80">
                Hand-troweling the rubber aggregate — this is where craftsmanship matters
              </p>
            </div>
          </motion.div>

          {/* Right — process steps */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Installation Process
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Done in 2–3 Days.<br className="hidden sm:block" />
              <span className="text-accent">No Demolition.</span>
            </h2>
            <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
              Rubber pool deck surfacing goes directly over your existing concrete. No jackhammering,
              no ripping out material, no weeks of construction in your backyard.
            </p>

            <div className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Step number */}
                  <div className="absolute left-0 top-0 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-navy text-white font-heading font-bold text-sm">
                    {step.number}
                  </div>

                  {/* Connecting line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[22px] sm:left-[24px] top-12 sm:top-[52px] bottom-[-24px] w-px bg-gray-200" />
                  )}

                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading font-bold text-gray-900 text-base sm:text-lg">
                      {step.title}
                    </h3>
                    <span className="text-xs font-medium text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

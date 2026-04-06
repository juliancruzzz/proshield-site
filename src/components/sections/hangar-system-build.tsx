"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Pickaxe, Droplets, Layers, ShieldCheck, Ruler, PaintBucket, Eye } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Surface Prep",
    description:
      "Diamond grinding or shot blasting to create the proper adhesion profile. We test for moisture vapor transmission and repair cracks, spalls, and damaged areas before any coating goes down.",
    icon: <Pickaxe className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "2",
    title: "Primer",
    description:
      "A moisture-tolerant primer seals the concrete and establishes adhesion. This layer is critical in hangar environments where the substrate has been exposed to years of oils, fuels, and chemicals.",
    icon: <Droplets className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "3",
    title: "Body Coats",
    description:
      "One or more high-build body coats create the structural foundation, chemical barrier, and base color. These layers are formulated for chemical resistance far beyond anything used in residential or standard commercial applications.",
    icon: <Layers className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "4",
    title: "Topcoat",
    description:
      "A high-performance aliphatic urethane topcoat engineered for aviation-grade exposure. Formulated to resist Skydrol, Hyjet, jet fuel, hydraulic fluids, and aggressive solvents while maintaining UV stability and gloss.",
    icon: <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
]

export function HangarSystemBuild() {
  const [activeStep, setActiveStep] = useState(0)
  const current = steps[activeStep]

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Installation Process
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            How We Build Your Hangar Floor
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Four stages from raw concrete to an aviation-grade finish. Typically 2–5 days, phased around your operations.
          </p>
        </div>

        {/* Mobile: horizontal scroll step pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 lg:hidden -mx-4 px-4 scrollbar-hide">
          {steps.map((step, i) => {
            const isActive = i === activeStep
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border whitespace-nowrap text-sm font-medium transition-all shrink-0 ${
                  isActive
                    ? "bg-accent text-white border-accent shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:border-accent/40"
                }`}
              >
                <span className="font-bold">{step.number}</span>
                <span>{step.title}</span>
              </button>
            )
          })}
        </div>

        {/* Desktop: icon row with connecting line */}
        <div className="relative hidden lg:block">
          <div className="absolute top-[44px] left-[calc(12.5%)] right-[calc(12.5%)] h-[2px] bg-gray-200/80">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-teal to-accent rounded-full"
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const isActive = i === activeStep
              return (
                <button key={step.number} className="group flex flex-col items-center text-center cursor-pointer" onClick={() => setActiveStep(i)}>
                  <div className={`
                    relative z-10 h-[88px] w-[88px] rounded-full flex items-center justify-center shadow-sm transition-all duration-300
                    ${isActive
                      ? "bg-white border-2 border-accent shadow-md shadow-accent/10"
                      : "bg-gray-50 border-2 border-gray-200 group-hover:border-accent group-hover:shadow-md group-hover:shadow-accent/10 group-hover:bg-white"
                    }
                  }`}>
                    <div className={`transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-teal group-hover:text-accent"
                    }`}>
                      {step.icon}
                    </div>
                  </div>
                  <span className={`mt-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-gray-500"
                  }`}>
                    Step {step.number}
                  </span>
                  <h3 className={`mt-1 font-heading font-bold text-base transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-gray-900 group-hover:text-accent"
                  }`}>
                    {step.title}
                  </h3>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active step detail card */}
        <div className="max-w-3xl mx-auto mt-4 sm:mt-6 lg:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-xl sm:rounded-2xl bg-gray-50 lg:bg-white border border-gray-200 p-5 sm:p-6 lg:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-accent text-white text-xs font-bold">
                  {current.number}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900">
                  {current.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Safety & Compliance — compact badges */}
        <div className="max-w-3xl mx-auto mt-6 sm:mt-8">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-teal mb-3 sm:mb-4">
            Safety & Compliance Built In
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {[
              { icon: <ShieldCheck className="h-4 w-4" />, label: "NFPA 409 Compliant" },
              { icon: <Ruler className="h-4 w-4" />, label: "Slip-Resistant Finishes" },
              { icon: <PaintBucket className="h-4 w-4" />, label: "Safety Line Striping" },
              { icon: <Eye className="h-4 w-4" />, label: "Light-Reflective Finish" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5"
              >
                <div className="flex-shrink-0 text-teal">{item.icon}</div>
                <span className="text-xs font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

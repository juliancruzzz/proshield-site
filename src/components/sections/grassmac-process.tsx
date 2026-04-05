"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ClipboardCheck, Shovel, Grid3X3, PaintBucket, Timer, Scissors } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Site Assessment",
    description:
      "We evaluate the area, check existing ground conditions, and plan the layout. Drainage, access points, and edge details are all mapped before any work begins.",
    icon: <ClipboardCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "2",
    title: "Excavation & Sub-Base",
    description:
      "Reduced-depth excavation compared to traditional installs. The sub-base is compacted and leveled to create a stable foundation — GrassMac requires less dig-out than conventional turf bases.",
    icon: <Shovel className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "3",
    title: "Lay SRM Mesh",
    description:
      "Vuba structural reinforcement mesh is laid with 6-inch overlap at all joints for stability. This mesh distributes load and prevents cracking in the permeable base layer.",
    icon: <Grid3X3 className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "4",
    title: "Mix & Apply GrassMac",
    description:
      "Recycled aggregate and SBR rubber are mixed on-site with VubaMac resin. The material is troweled to the specified depth — creating a shock-absorbent, fully permeable base.",
    icon: <PaintBucket className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "5",
    title: "Cure & Install Turf",
    description:
      "The GrassMac base cures in 2–4 hours. Premium artificial turf is laid the same day on the finished base — no waiting for concrete to set or additional sub-layers.",
    icon: <Timer className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "6",
    title: "Infill & Finishing",
    description:
      "Antimicrobial infill is brushed in. Edges are trimmed, seams secured, and the final inspection is completed. Your space is ready to use.",
    icon: <Scissors className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
]

export function GrassMacProcess() {
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
            How GrassMac Is Installed
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            A streamlined process from start to finish — engineered for speed and precision. GrassMac installs require less excavation than traditional bases, and turf goes down the same day.
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

        {/* Desktop: icon row with connecting line — 6 steps in a single row */}
        <div className="relative hidden lg:block">
          <div className="absolute top-[44px] left-[calc(8.33%)] right-[calc(8.33%)] h-[2px] bg-gray-200/80">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-teal to-accent rounded-full"
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-6 gap-3">
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
                    isActive ? "text-accent" : "text-gray-400"
                  }`}>
                    Step {step.number}
                  </span>
                  <h3 className={`mt-1 font-heading font-bold text-sm transition-colors duration-300 ${
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
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Pickaxe, Droplets, PaintBucket, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Surface Prep",
    description:
      "Diamond grind or shot blast existing concrete to create the proper adhesion profile. We repair cracks, spalls, and damaged areas before any overlay system goes down.",
    icon: <Pickaxe className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "2",
    title: "Repair & Prime",
    description:
      "Apply bonding agent and primer to establish adhesion between old concrete and new overlay system. This critical layer ensures the overlay stays bonded for the long term.",
    icon: <Droplets className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "3",
    title: "Apply Overlay",
    description:
      "Pour or trowel the overlay system to specified thickness — from thin microtoppings (1/16 inch) to thicker polishable or stampable systems (1/4 to 3/4 inch). System depends on your finish choice.",
    icon: <PaintBucket className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "4",
    title: "Color & Seal",
    description:
      "Add color, texture, stamps, or stencils. Finish with polyaspartic topcoat for maximum durability, chemical resistance, and UV stability. This topcoat is 20x stronger than epoxy.",
    icon: <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
]

export function OverlayProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const current = steps[activeStep]

  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Installation Process
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            The ProShield Overlay Process
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Four stages from existing concrete to finished overlay. Most projects complete in 1–2 days.
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
              className="rounded-xl sm:rounded-2xl bg-white border border-gray-200 p-5 sm:p-6 lg:p-8 shadow-sm"
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

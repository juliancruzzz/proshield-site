"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Pickaxe, PaintBucket, Hand, Sparkles, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Surface Preparation",
    description:
      "We thoroughly clean and degrease the existing concrete, then repair any cracks, spalling, or damaged areas. Proper prep is critical — adhesion depends entirely on substrate condition. This step also includes masking off areas that shouldn't be coated.",
    icon: <Pickaxe className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "2",
    title: "Primer & Base Coat",
    description:
      "An acrylic bonding primer is applied first to ensure strong adhesion. Once cured, we roll or spray the acrylic base coat in your selected color. Lighter tones are recommended for maximum heat reflection — popular choices include desert sand, light gray, and cream.",
    icon: <PaintBucket className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "3",
    title: "Knockdown Texture",
    description:
      "While the coating is still tacky, we apply the signature knockdown texture by hand troweling. This creates the distinctive rippled pattern that provides slip resistance and visual depth. The texture is uniform but natural-looking — no two surfaces are exactly alike.",
    icon: <Hand className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "4",
    title: "Detail & Touch-Up",
    description:
      "We carefully finish all edges, transitions to other surfaces (like coping and door thresholds), and touch up any areas that need attention. Clean lines and consistent texture across the entire surface are the mark of a professional install.",
    icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    number: "5",
    title: "Sealer Application",
    description:
      "The final step is applying an acrylic or acrylic/urethane blend sealer. This protective topcoat enhances color, adds gloss (matte or semi-gloss available), and shields the coating from UV, water, and staining. Resealing every 2–3 years maintains the finish.",
    icon: <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
]

export function CoolDeckProcess() {
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
            How We Apply Cool Deck
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            A multi-step acrylic coating process built for Las Vegas heat and outdoor durability.
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
          <div className="absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gray-200/80">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-teal to-accent rounded-full"
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
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
      </div>
    </section>
  )
}

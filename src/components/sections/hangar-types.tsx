"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Plane,
  Building2,
  Shield,
  Wrench,
  RotateCcw,
  Cpu,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"

const hangarTypes = [
  {
    icon: Plane,
    title: "Private & Corporate",
    description:
      "Premium high-gloss polyaspartic systems for executive hangars. Resistant to jet fuel, hydraulic fluid, and Skydrol while delivering a showroom-quality finish.",
  },
  {
    icon: Building2,
    title: "FBO Facilities",
    description:
      "Durable, chemical-resistant coatings designed for high-traffic FBO environments with constant aircraft movement, fuel exposure, and heavy ground support equipment.",
  },
  {
    icon: Shield,
    title: "Military & Government",
    description:
      "Mil-spec compliant floor systems engineered for extreme chemical resistance, anti-static performance, and compliance with government facility standards.",
  },
  {
    icon: Wrench,
    title: "Maintenance & MRO",
    description:
      "Heavy-duty systems built for repair bays and overhaul facilities. Withstands dropped tools, rolling loads, and constant exposure to oils, solvents, and degreasers.",
  },
  {
    icon: RotateCcw,
    title: "Helicopter & Rotor",
    description:
      "Specialized coatings for rotorcraft facilities with superior resistance to hydraulic fluids, turbine oils, and the unique abrasion patterns of rotor operations.",
  },
  {
    icon: Cpu,
    title: "Avionics & ESD Bays",
    description:
      "Electrostatic-dissipative (ESD) flooring that protects sensitive avionics and electronic components from static discharge while maintaining chemical resistance.",
  },
]

function ExpandableItem({
  item,
  index,
}: {
  item: (typeof hangarTypes)[number]
  index: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 py-3 text-left group"
      >
        <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
          <item.icon className="h-5 w-5" />
        </div>
        <span className="flex-1 text-sm sm:text-base font-semibold text-gray-900 group-hover:text-accent transition-colors">
          {item.title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pl-14 pb-3 text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function HangarTypes() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Photo */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10">
            <img
              src="/hangar/hangar-detail.webp"
              alt="Private jet on a high-gloss coated hangar floor"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Hangar Types We Serve
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Every Hangar. Every Mission.
            </h2>
            <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
              We tailor the coating system to your specific facility type, traffic
              patterns, and chemical exposure profile.
            </p>

            <div className="mt-6 divide-y divide-gray-100">
              {hangarTypes.map((item, i) => (
                <ExpandableItem
                  key={item.title}
                  item={item}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

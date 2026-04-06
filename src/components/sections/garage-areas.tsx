"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Check,
  ChevronDown,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface System {
  name: string
  description: string
  highlights: string[]
  href: string
  image: string
  tag?: string
  tagColor?: string
  categories: string[]
  stat: string
  statLabel: string
}

const systems: System[] = [
  {
    name: "ProFlake System",
    description:
      "Premium multi-layer system with 150+ Torginol color blends. Polyurea base, full decorative flake broadcast, and polyaspartic topcoat. Walk-on in 24 hours.",
    highlights: [
      "150+ color blends",
      "Polyaspartic topcoat",
      "1-day install for qualifying garages",
      "Chemical & hot tire resistant",
      "UV-stable finish",
    ],
    href: "/proflake",
    image: "/images/proflake/flake-garage-porsche-bikes.webp",
    tag: "Best Value",
    tagColor: "bg-accent",
    categories: ["1-Day Install", "150+ Colors"],
    stat: "150+",
    statLabel: "Color Blends",
  },
  {
    name: "Metallic Epoxy",
    description:
      "Flowing, pearlescent finish — every floor is unique. Metallic pigments create a 3D liquid-metal effect with stunning depth. 2–3 day installation.",
    highlights: [
      "One-of-a-kind design",
      "3D liquid-metal depth",
      "Protective topcoat",
      "Pearlescent flowing finish",
      "Stunning visual depth",
    ],
    href: "/metallic-epoxy",
    image: "/images/metallic/metallic-epoxy-red-black-swirl.webp",
    categories: ["One-of-a-Kind", "2–3 Day Install"],
    stat: "Unique",
    statLabel: "Every Floor",
  },
  {
    name: "Solid Color Coating",
    description:
      "Professional-grade solid color coating for utility garages and workspaces. Clean, uniform finish that's easy to maintain. Great for basic protection at an affordable price.",
    highlights: [
      "Most affordable option",
      "Clean professional finish",
      "Protects your concrete",
      "Easy to maintain",
      "Fast installation",
    ],
    href: "/services",
    image: "/images/commercial/commercial-solid-grey-epoxy.jpg",
    categories: ["Budget-Friendly", "Fast Install"],
    stat: "Simple",
    statLabel: "Coverage",
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function GarageAreas() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Find Your System
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Garage Floor Systems
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Three proven systems — tap any to see the details.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {systems.map((system, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={system.name}
                className={`
                  rounded-2xl border overflow-hidden transition-all duration-300
                  ${isOpen
                    ? "border-accent/30 shadow-lg shadow-accent/5"
                    : "border-gray-200 hover:border-gray-300"
                  }
                `}
              >
                {/* Collapsed header — always visible */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer bg-white hover:bg-gray-50/50 transition-colors duration-200"
                >
                  {/* Thumbnail */}
                  <div className="relative h-[67px] w-[67px] sm:h-[77px] sm:w-[77px] rounded-xl overflow-hidden shrink-0 bg-gray-100">
                    <img
                      src={system.image}
                      alt={system.name}
                      className={`h-full w-full object-cover ${system.image.includes("proflake") ? "object-bottom" : "object-center"}`}
                      loading="lazy"
                    />
                  </div>

                  {/* Name + Tag */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading font-semibold text-base sm:text-lg text-gray-900 truncate">
                        {system.name}
                      </h3>
                      {system.tag && (
                        <span className={`${system.tagColor} text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full shrink-0`}>
                          {system.tag}
                        </span>
                      )}
                    </div>
                    {/* Category pills — visible when collapsed */}
                    {!isOpen && (
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {system.categories.map((cat) => (
                          <span
                            key={cat}
                            className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 uppercase tracking-wide"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5">
                        {/* Divider */}
                        <div className="border-t border-gray-100 mb-5" />

                        {/* Image */}
                        <div className="relative rounded-xl overflow-hidden h-48 sm:h-56 mb-5 bg-gray-100">
                          <img
                            src={system.image}
                            alt={system.name}
                            className={`h-full w-full object-cover ${system.image.includes("proflake") ? "object-bottom" : "object-center"}`}
                            loading="lazy"
                          />
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                          {system.description}
                        </p>

                        {/* Highlights */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                          {system.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <Check className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                              {h}
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <Link
                          href={system.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-text hover:text-accent/80 transition-colors duration-200"
                        >
                          Learn More About {system.name}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
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

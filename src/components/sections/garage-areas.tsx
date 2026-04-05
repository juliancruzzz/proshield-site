"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Sparkles,
  Crown,
  Shield,
  CircleDollarSign,
  Check,
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
}

interface Area {
  id: string
  label: string
  icon: React.ReactNode
  tagline: string
  systems: System[]
}

const areas: Area[] = [
  {
    id: "durability-style",
    label: "Durability & Style",
    icon: <Sparkles className="h-5 w-5" />,
    tagline: "The most popular choice — beautiful, durable, and fast.",
    systems: [
      {
        name: "ProFlake System",
        description:
          "Premium multi-layer system with 150+ Torginol color blends. Epoxy base, full decorative flake broadcast, and polyaspartic topcoat. Walk-on same/next day.",
        highlights: [
          "150+ color blends",
          "Polyaspartic topcoat",
          "1-day install for qualifying garages",
        ],
        href: "/proflake",
        image: "/images/proflake/flake-garage-porsche-bikes.jpg",
        tag: "Most Popular",
      },
    ],
  },
  {
    id: "showroom-floor",
    label: "Showroom Floor",
    icon: <Crown className="h-5 w-5" />,
    tagline: "A one-of-a-kind floor that makes a statement.",
    systems: [
      {
        name: "Metallic Epoxy",
        description:
          "Flowing, pearlescent finish — every floor is unique. Metallic pigments create a 3D liquid-metal effect with stunning depth. 2–3 day installation.",
        highlights: [
          "One-of-a-kind design",
          "3D liquid-metal depth",
          "Protective topcoat",
        ],
        href: "/metallic-epoxy",
        image: "/images/metallic/metallic-epoxy-red-black-swirl.jpg",
        tag: "Premium",
      },
    ],
  },
  {
    id: "maximum-protection",
    label: "Maximum Protection",
    icon: <Shield className="h-5 w-5" />,
    tagline: "Built to handle the toughest garage conditions.",
    systems: [
      {
        name: "ProFlake System",
        description:
          "The polyaspartic topcoat makes ProFlake our most chemically resistant residential system. UV-stable, hot tire resistant, and easy to clean.",
        highlights: [
          "Chemical resistant",
          "Hot tire resistant",
          "UV-stable topcoat",
        ],
        href: "/proflake",
        image: "/images/proflake/flake-garage-porsche-bikes.jpg",
        tag: "Best Protection",
      },
      {
        name: "Solid Color Coating",
        description:
          "Professional-grade solid color coating for utility garages and workspaces. Clean, uniform finish that's easy to maintain.",
        highlights: [
          "Clean uniform look",
          "Easy to maintain",
          "Budget-friendly option",
        ],
        href: "/services",
        image: "/images/commercial/commercial-solid-grey-epoxy.jpg",
      },
    ],
  },
  {
    id: "budget-friendly",
    label: "Budget-Friendly",
    icon: <CircleDollarSign className="h-5 w-5" />,
    tagline: "Professional results without breaking the bank.",
    systems: [
      {
        name: "Solid Color Coating",
        description:
          "Single-color professional coating that transforms your garage at a fraction of the cost. Great for utility spaces and basic protection.",
        highlights: [
          "Most affordable option",
          "Clean professional finish",
          "Protects your concrete",
        ],
        href: "/services",
        image: "/images/commercial/commercial-solid-grey-epoxy.jpg",
      },
      {
        name: "ProFlake System",
        description:
          "Our standard flake system delivers premium results at a competitive price point. The best value in garage floor coatings.",
        highlights: [
          "Best value for money",
          "150+ color options",
          "Limited lifetime warranty",
        ],
        href: "/proflake",
        image: "/images/proflake/flake-garage-porsche-bikes.jpg",
        tag: "Best Value",
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function GarageAreas() {
  const [activeArea, setActiveArea] = useState<string>("durability-style")
  const sectionRef = useRef<HTMLDivElement>(null)
  const current = areas.find((a) => a.id === activeArea)!

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Find Your System
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            What Matters Most to You?
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Select what you&apos;re looking for and we&apos;ll show you the right system.
          </p>
        </div>

        {/* Area selector pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {areas.map((area) => {
            const isActive = area.id === activeArea
            return (
              <button
                key={area.id}
                onClick={() => setActiveArea(area.id)}
                className={`
                  group relative flex items-center gap-2 rounded-full px-5 py-2.5
                  text-sm font-semibold transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }
                `}
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                >
                  {area.icon}
                </span>
                {area.label}
              </button>
            )
          })}
        </div>

        {/* Tagline for active area */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current.id + "-tagline"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-center text-gray-500 text-base mb-10 max-w-lg mx-auto"
          >
            {current.tagline}
          </motion.p>
        </AnimatePresence>

        {/* Systems for selected area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`grid gap-6 ${
              current.systems.length === 1
                ? "max-w-xl mx-auto"
                : current.systems.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                  : current.systems.length === 4
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {current.systems.map((system, i) => (
              <Link key={system.name + current.id} href={system.href} className="group block">
                <div className="h-full rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={system.image}
                      alt={system.name}
                      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${system.image.includes("proflake") ? "object-bottom" : "object-center"}`}
                      loading="lazy"
                    />
                    {system.tag && (
                      <span className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow-md">
                        {system.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-gray-900 group-hover:text-accent transition-colors duration-200">
                      {system.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {system.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-4 space-y-2">
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

                    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const highlights = [
  "EPDM rubber granules bound with UV-stable polyurethane resin",
  "Poured in place over existing concrete — no demolition",
  "Flexible membrane bridges cracks up to 1/8″",
  "Cushioned surface absorbs impact from slips and falls",
  "Chemically inert — resists chlorine, salt, and pool chemicals",
]

export function RubberDeckIntro() {
  return (
    <section className="section-white py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              What Is Rubber Pool Deck Surfacing?
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              A Premium Surface Built for{" "}
              <span className="text-accent">Las Vegas Pools</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Rubber pool deck surfacing is a poured-in-place system made from EPDM rubber granules
              hand-troweled directly over your existing concrete. At 3/8″ to 1/2″ thick, it creates
              a seamless, textured surface that insulates your feet from the hot slab below — delivering
              genuine comfort, slip resistance, and crack bridging that rigid coatings can&apos;t match.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-subtle text-teal">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Get a Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Image stack — two overlapping images for depth */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-pool-wide.jpg"
                alt="Rubber aggregate pool deck surfacing around a Las Vegas pool with landscaping"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Inset detail image */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 w-36 sm:w-44 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-installation.jpg"
                alt="Close-up of rubber aggregate being hand-troweled onto pool deck"
                width={176}
                height={132}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const highlights = [
  "Rubber granules and binder specified for the project",
  "Prepared concrete assessed before resurfacing",
  "Repairs and existing coating removal listed in the quote",
  "Color and texture samples to compare",
  "Product-specific care and return-to-use instructions"
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
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">Rubber pool deck surfacing combines rubber granules and a binder over a suitable prepared substrate. Confirm the proposed blend, thickness and finish in the estimate. The existing concrete, coatings and drainage need assessment first.</p>

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
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
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
                alt="Rubber aggregate pool deck surfacing example around a landscaped pool"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Inset detail image */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 w-36 sm:w-44 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/blog/rubber-deck/rubber-deck-installation.jpg"
                alt="Application example: rubber aggregate being hand-troweled onto pool deck"
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

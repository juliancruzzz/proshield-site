"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function RubberDeckPricing() {
  return (
    <section className="section-white py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — pricing info */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Transparent Pricing
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              What It Actually Costs
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              We&apos;re not going to make you fill out a form to get a ballpark. For most residential
              pool decks in Las Vegas, rubber pool deck surfacing runs{" "}
              <strong className="text-gray-900">$15 to $18 per square foot</strong>, installed. That
              includes surface prep, primer, the full rubber aggregate system, and UV-stable topcoat.
            </p>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
              For a standard 600 sq ft pool deck, expect{" "}
              <strong className="text-gray-900">$9,000 to $10,800</strong> depending on concrete
              condition, deck complexity, and color selection. Every job gets a free on-site estimate
              with a flat quote — no hidden fees, no surprises.
            </p>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              Concrete condition is the biggest variable. A clean, sound slab is straightforward.
              A deck with significant cracks, old delaminating coatings, or drainage issues needs
              more prep work before we pour.
            </p>
          </div>

          {/* Right — pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 shadow-sm">
              <div className="text-center mb-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Installed Price</p>
                <div className="mt-2 font-heading font-bold text-4xl sm:text-5xl text-gray-900">
                  $15–$18
                  <span className="text-lg sm:text-xl text-gray-400 font-medium">/sq ft</span>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2.5 border-b border-gray-200">
                  <span className="text-gray-600">Typical 600 sq ft deck</span>
                  <span className="font-semibold text-gray-900">$9,000–$10,800</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-gray-200">
                  <span className="text-gray-600">Includes</span>
                  <span className="font-medium text-gray-700">Prep, primer, pour, topcoat</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-gray-200">
                  <span className="text-gray-600">Reseal cost (every 3–4 yrs)</span>
                  <span className="font-medium text-gray-700">Pressure wash + clear coat</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-gray-600">Estimate</span>
                  <span className="font-semibold text-accent">Free, on-site</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Get Your Exact Price <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Comparison callout */}
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-500">
              <p>
                For comparison:{" "}
                <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck</Link>{" "}
                runs $6–$9/sq ft, pavers $10–$20/sq ft, travertine $15–$27/sq ft. Rubber sits
                in the middle on upfront cost with the lowest maintenance burden long-term.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

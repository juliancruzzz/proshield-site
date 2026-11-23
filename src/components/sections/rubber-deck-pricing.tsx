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
              Project pricing
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              What goes into a rubber deck estimate?
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">Two decks with the same square footage can need different amounts of work. Loose coatings need removal, and steps and curved edges take extra detailing.</p>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">The quote should identify which areas stay, which need repairs and where the rubber will meet the existing coping.</p>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">Check how drains and door thresholds will sit once the rubber layer is in place.</p>
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
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Project quote</p>
                <div className="mt-2 font-heading font-bold text-4xl sm:text-5xl text-gray-900">
                  Written quote
                  <span className="text-lg sm:text-xl text-gray-400 font-medium"> for your deck</span>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2.5 border-b border-gray-200">
                  <span className="text-gray-600">Measured area</span>
                  <span className="font-semibold text-gray-900">Confirmed on site</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-gray-200">
                  <span className="text-gray-600">Scope</span>
                  <span className="font-medium text-gray-700">Listed in writing</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-gray-200">
                  <span className="text-gray-600">Future care</span>
                  <span className="font-medium text-gray-700">Product-specific</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-gray-600">Estimate</span>
                  <span className="font-semibold text-accent">Free, on-site</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Get a Rubber Deck Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Comparison callout */}
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-500">
              <p>Compare <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck resurfacing</Link> and rubber options for your actual site, including preparation and future care.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

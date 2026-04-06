"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  q: string
  a: string
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white overflow-hidden">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={faq.q}
            className={`transition-colors duration-200 ${
              isOpen ? "bg-accent/[0.03]" : "hover:bg-gray-50/60"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4 text-left"
              aria-expanded={isOpen}
            >
              <h3
                className={`font-heading font-semibold text-[15px] leading-snug pr-2 transition-colors duration-200 ${
                  isOpen ? "text-accent" : "text-gray-900"
                }`}
              >
                {faq.q}
              </h3>
              <div
                className={`h-8 w-8 rounded-full shrink-0 flex items-center justify-center transition-all duration-200 ${
                  isOpen
                    ? "bg-accent text-white rotate-180"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-3.5 sm:px-6 sm:pb-5 -mt-1">
                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

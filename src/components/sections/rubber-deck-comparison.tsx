"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const rows = [
  {
    "feature": "Surface format",
    "rubber": {
      "value": "Troweled rubber aggregate",
      "status": "neutral"
    },
    "coolDeck": {
      "value": "Textured coating or topping",
      "status": "neutral"
    },
    "pavers": {
      "value": "Individual paving units",
      "status": "neutral"
    },
    "travertine": {
      "value": "Natural stone units",
      "status": "neutral"
    }
  },
  {
    "feature": "Underfoot feel",
    "rubber": {
      "value": "Softer rubber finish",
      "status": "neutral"
    },
    "coolDeck": {
      "value": "Hard finish",
      "status": "neutral"
    },
    "pavers": {
      "value": "Hard units",
      "status": "neutral"
    },
    "travertine": {
      "value": "Hard stone",
      "status": "neutral"
    }
  },
  {
    "feature": "Preparation to confirm",
    "rubber": {
      "value": "Existing coating and substrate",
      "status": "neutral"
    },
    "coolDeck": {
      "value": "Existing coating and substrate",
      "status": "neutral"
    },
    "pavers": {
      "value": "Installation base",
      "status": "neutral"
    },
    "travertine": {
      "value": "Installation base",
      "status": "neutral"
    }
  },
  {
    "feature": "Joints to plan",
    "rubber": {
      "value": "Existing joints and transitions",
      "status": "neutral"
    },
    "coolDeck": {
      "value": "Existing joints and transitions",
      "status": "neutral"
    },
    "pavers": {
      "value": "Joint material and layout",
      "status": "neutral"
    },
    "travertine": {
      "value": "Stone layout and joints",
      "status": "neutral"
    }
  },
  {
    "feature": "Care to confirm",
    "rubber": {
      "value": "Binder and topcoat instructions",
      "status": "neutral"
    },
    "coolDeck": {
      "value": "Coating-specific instructions",
      "status": "neutral"
    },
    "pavers": {
      "value": "Surface and joint care",
      "status": "neutral"
    },
    "travertine": {
      "value": "Stone-specific instructions",
      "status": "neutral"
    }
  },
  {
    "feature": "Price to compare",
    "rubber": {
      "value": "Written project quote",
      "status": "neutral"
    },
    "coolDeck": {
      "value": "Written project quote",
      "status": "neutral"
    },
    "pavers": {
      "value": "Written project quote",
      "status": "neutral"
    },
    "travertine": {
      "value": "Written project quote",
      "status": "neutral"
    }
  }
]


export function RubberDeckComparison() {
  return (
    <section className="bg-warm-dark py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">
            How It Compares
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Rubber Decking vs. Every Other Option
          </h2>
          <p className="mt-3 text-white/60 text-base sm:text-lg leading-relaxed">Compare the actual proposed products, preparation and maintenance requirements. These entries are a checklist, not a tested performance ranking.</p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto -mx-4 sm:mx-0"
        >
          <table className="w-full text-sm rounded-xl overflow-hidden min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-4 py-4 font-heading font-semibold text-white/70 text-xs uppercase tracking-wider">Feature</th>
                <th className="text-center px-4 py-4">
                  <span className="inline-block font-heading font-bold text-white bg-accent/20 border border-accent/30 rounded-lg px-3 py-1.5 text-sm">
                    Rubber Deck
                  </span>
                </th>
                <th className="text-center px-4 py-4 font-heading font-semibold text-white/70 text-sm">Cool Deck</th>
                <th className="text-center px-4 py-4 font-heading font-semibold text-white/70 text-sm">Pavers</th>
                <th className="text-center px-4 py-4 font-heading font-semibold text-white/70 text-sm">Travertine</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-white/[0.06] ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                  <td className="px-4 py-3.5 text-white/80 font-medium">{row.feature}</td>
                  <td className="px-4 py-3.5 text-center text-white/70">{row.rubber.value}</td>
                  <td className="px-4 py-3.5 text-center text-white/70">{row.coolDeck.value}</td>
                  <td className="px-4 py-3.5 text-center text-white/70">{row.pavers.value}</td>
                  <td className="px-4 py-3.5 text-center text-white/70">{row.travertine.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">Considering <Link href="/cool-deck" className="text-accent hover:underline font-medium">cool deck resurfacing</Link>? Ask for a written quote for the same area and scope.</p>
          <Link
            href="/blog/coolest-pool-deck-flooring-las-vegas"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-3"
          >
            Read the full comparison <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

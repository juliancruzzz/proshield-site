"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, X, Minus, ArrowRight } from "lucide-react"

const rows = [
  {
    feature: "Slip Resistance (wet)",
    rubber: { value: "Excellent", status: "best" },
    coolDeck: { value: "Good", status: "ok" },
    pavers: { value: "Good", status: "ok" },
    travertine: { value: "Fair", status: "warn" },
  },
  {
    feature: "Comfort Underfoot",
    rubber: { value: "Cushioned", status: "best" },
    coolDeck: { value: "Hard", status: "neutral" },
    pavers: { value: "Hard", status: "neutral" },
    travertine: { value: "Hard", status: "neutral" },
  },
  {
    feature: "Impact Safety",
    rubber: { value: "High", status: "best" },
    coolDeck: { value: "Low", status: "neutral" },
    pavers: { value: "Low", status: "neutral" },
    travertine: { value: "Low", status: "neutral" },
  },
  {
    feature: "Crack Bridging",
    rubber: { value: "Yes", status: "best" },
    coolDeck: { value: "No", status: "warn" },
    pavers: { value: "Partial", status: "ok" },
    travertine: { value: "No", status: "warn" },
  },
  {
    feature: "Lifespan",
    rubber: { value: "10–15 yrs", status: "ok" },
    coolDeck: { value: "10–15 yrs", status: "ok" },
    pavers: { value: "15–20 yrs", status: "ok" },
    travertine: { value: "15–20 yrs", status: "ok" },
  },
  {
    feature: "Cost / Sq Ft",
    rubber: { value: "$15–$18", status: "ok" },
    coolDeck: { value: "$6–$9", status: "best" },
    pavers: { value: "$10–$20", status: "ok" },
    travertine: { value: "$15–$27", status: "warn" },
  },
  {
    feature: "Maintenance",
    rubber: { value: "Reseal 3–4 yrs", status: "best" },
    coolDeck: { value: "Reseal 1–2 yrs", status: "warn" },
    pavers: { value: "Re-sand joints", status: "ok" },
    travertine: { value: "Seal annually", status: "warn" },
  },
]

function StatusColor(status: string) {
  switch (status) {
    case "best": return "text-green-600 font-semibold"
    case "ok": return "text-gray-700"
    case "warn": return "text-orange-500"
    case "neutral": return "text-gray-500"
    default: return "text-gray-700"
  }
}

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
          <p className="mt-3 text-white/60 text-base sm:text-lg leading-relaxed">
            We install both{" "}
            <Link href="/cool-deck" className="text-accent hover:underline">cool deck</Link>{" "}
            and rubber pool deck systems — here&apos;s how they actually compare.
          </p>
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
                  <td className={`px-4 py-3.5 text-center ${StatusColor(row.rubber.status)}`}>{row.rubber.value}</td>
                  <td className={`px-4 py-3.5 text-center ${StatusColor(row.coolDeck.status).replace("text-green-600", "text-green-400").replace("text-orange-500", "text-orange-400").replace("text-gray-700", "text-white/60").replace("text-gray-500", "text-white/40")}`}>{row.coolDeck.value}</td>
                  <td className={`px-4 py-3.5 text-center ${StatusColor(row.pavers.status).replace("text-green-600", "text-green-400").replace("text-orange-500", "text-orange-400").replace("text-gray-700", "text-white/60").replace("text-gray-500", "text-white/40")}`}>{row.pavers.value}</td>
                  <td className={`px-4 py-3.5 text-center ${StatusColor(row.travertine.status).replace("text-green-600", "text-green-400").replace("text-orange-500", "text-orange-400").replace("text-gray-700", "text-white/60").replace("text-gray-500", "text-white/40")}`}>{row.travertine.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            Budget the priority?{" "}
            <Link href="/cool-deck" className="text-accent hover:underline font-medium">
              Cool deck
            </Link>{" "}
            is a great system at $6–$9/sq ft. We install both and recommend the one that
            fits your situation — we get paid either way.
          </p>
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

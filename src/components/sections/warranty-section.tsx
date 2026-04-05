"use client"

import { ShieldCheck, FileText, Scale } from "lucide-react"
import { useMounted } from "@/hooks/use-mounted"

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Limited Lifetime Warranty",
    description:
      "Qualifying residential systems include a limited lifetime warranty against delamination, subject to terms and conditions.",
    highlight: "Full Details on Request",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Licensed Contractor",
    description:
      "Fully licensed and insured. Ask us for our contractor license number.",
    highlight: "NV Licensed",
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Bonded & Insured",
    description:
      "Bonded with a competitive bid limit. Your project is protected from start to finish.",
    highlight: "Bid Limit Available",
  },
]

export function WarrantySection() {
  const mounted = useMounted()

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — centered */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-gray-900 tracking-tight leading-[1.1]">
            We Stand Behind Our Work
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            Every ProShield installation comes with a comprehensive warranty
            and the backing of a licensed, insured contractor.
          </p>
        </div>

        {/* Feature cards — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat, i) => (
            <div key={feat.title} className="group text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-5">
                {feat.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900">
                {feat.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto">
                {feat.description}
              </p>
              <span className="inline-block mt-3 text-sm font-semibold text-teal">
                {feat.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

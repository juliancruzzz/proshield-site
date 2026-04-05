"use client"

import { ShieldCheck, Eye, PaintBucket, Ruler } from "lucide-react"

const safetyFeatures = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "NFPA 409 Compliant",
    description: "Noncombustible floor surface meeting the primary code governing aircraft hangar construction and fire protection.",
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    title: "Slip-Resistant Finishes",
    description: "Customizable traction levels that balance safety with cleanability. Supports safer walking-working surfaces in wet and oily conditions per OSHA guidelines.",
  },
  {
    icon: <PaintBucket className="h-6 w-6" />,
    title: "Safety Line Striping",
    description: "Custom taxi lines, equipment zones, hazard areas, and walkway markings. OSHA color-coded safety demarcation for dangerous areas.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Light-Reflective Finish",
    description: "High-gloss coatings increase ambient brightness throughout the hangar, improving visibility for maintenance work beneath aircraft.",
  },
]

export function HangarSafety() {
  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Safety & Compliance
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
              Built for Safety.{" "}
              <span className="text-accent">Built for Code.</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Hangar floors aren&apos;t just about durability &mdash; they need to meet fire codes, support safe operations, and improve the working environment for everyone on the floor.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {safetyFeatures.map((f, i) => (
              <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
                <div className="h-11 w-11 rounded-xl bg-teal-subtle flex items-center justify-center text-teal mb-3">
                  {f.icon}
                </div>
                <h3 className="font-heading font-semibold text-base text-gray-900">{f.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

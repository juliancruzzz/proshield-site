"use client"

import Link from "next/link"
import { ArrowRight, Shield, Droplets, Footprints, Layers, Zap } from "lucide-react"

const features = [
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "Chemical Resistant",
    description: "Stands up to jet fuel, hydraulic fluid, and oils",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Impact Resistant",
    description: "Handles heavy aircraft and ground equipment",
  },
  {
    icon: <Footprints className="h-5 w-5" />,
    title: "Non-Slip Finish",
    description: "Safety-rated texture for wet or oily conditions",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Seamless Surface",
    description: "No joints or seams — spills clean up fast",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Chemical-Resistant Topcoat",
    description: "Polyurethane or chemical-resistant finish for demanding environments",
  },
]

export function HangarSection() {
  return (
    <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-lighter/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Specialty Service
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-text-light tracking-tight">
              Aircraft Hangar Flooring
            </h2>
            <p className="mt-4 text-text-light-secondary text-lg leading-relaxed">
              Built for the toughest environments. Our specialty hangar floor systems
              handle everything from Skydrol and jet fuel spills to multi-ton aircraft —
              with a chemical-resistant finish built for operational demands.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature, i) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex items-center justify-center h-9 w-9 rounded-lg bg-accent/10 text-accent shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-light">
                      {feature.title}
                    </div>
                    <div className="text-sm text-text-light-secondary">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors duration-200 shadow-lg shadow-accent/20"
              >
                Get a Hangar Floor Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right — Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border-dark bg-navy-light">
              <div className="h-full w-full bg-gradient-to-br from-navy-lighter to-navy-light flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-accent/60" />
                  </div>
                  <span className="text-text-light-secondary text-sm">Hangar Floor Photo</span>
                </div>
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-accent px-4 py-2 shadow-xl">
              <span className="text-white font-heading font-bold text-sm">
                Commercial Grade
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

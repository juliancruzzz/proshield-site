"use client"

import { Camera, MessageSquare, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    icon: Camera,
    number: "1",
    title: "Send a Photo",
    description: "Snap a pic of your pool deck, patio, or walkway and send it to us.",
  },
  {
    icon: MessageSquare,
    number: "2",
    title: "We'll Assess",
    description: "We'll evaluate the surface condition and recommend the right approach.",
  },
  {
    icon: FileText,
    number: "3",
    title: "Get Your Quote",
    description: "Receive a detailed proposal with pricing, timeline, and color options.",
  },
]

export function CoolDeckHelpCta() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-orange-50/40 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — header + CTA */}
          <div className="lg:col-span-4">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Get Started
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Not Sure Where to Start?
            </h2>
            <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
              Send us a photo of your outdoor surface and we&apos;ll handle the rest.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — horizontal step cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
                  {/* Step number badge */}
                  <span className="absolute -top-3 -left-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white text-xs font-bold shadow-md">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-subtle text-teal group-hover:bg-accent-subtle group-hover:text-accent transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-gray-900 text-base">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

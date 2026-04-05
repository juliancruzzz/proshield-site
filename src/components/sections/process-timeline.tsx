"use client"

import Link from "next/link"
import { Phone, ClipboardCheck, FileText, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Free Consultation",
    description:
      "Tell us about your space. We\u2019ll assess your substrate, discuss your goals, and recommend the right system \u2014 no obligation.",
  },
  {
    icon: ClipboardCheck,
    number: "2",
    title: "Custom Proposal",
    description:
      "You\u2019ll receive a detailed proposal with system breakdown, color options, timeline, and transparent pricing. No hidden fees.",
  },
  {
    icon: FileText,
    number: "3",
    title: "Get Your Quote",
    description:
      "We finalize the scope, lock in your schedule, and get everything ready. Walk on your new floor in days.",
  },
]

export function ProcessTimeline() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-orange-50/40 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — header + CTA */}
          <div className="lg:col-span-4">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Our Process
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              From First Call to Finished Floor
            </h2>
            <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
              A straightforward process &mdash; no surprises, no upsells, just quality work.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
            >
              Get Your Free Quote <ArrowRight className="h-4 w-4" />
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

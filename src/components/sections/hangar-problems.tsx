"use client"

import { AlertTriangle, Droplets, Thermometer, Wind, Weight, Sun } from "lucide-react"

const problems = [
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "Chemical Erosion",
    description: "Skydrol, Hyjet, jet fuel, and hydraulic fluids seep into porous concrete, staining and eroding the slab from within.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Epoxy Delamination",
    description: "Rigid epoxy coatings become brittle under hangar conditions. Once they crack and peel, they create loose debris and trip hazards.",
  },
  {
    icon: <Weight className="h-5 w-5" />,
    title: "Cracking & Spalling",
    description: "Heavy aircraft, tow tractors, and point loads from landing gear concentrate enormous weight on small contact patches, punishing unprotected slabs.",
  },
  {
    icon: <Thermometer className="h-5 w-5" />,
    title: "Thermal Cycling",
    description: "Hangar doors open to 120\u00b0F+ Nevada heat then close. Temperature swings from 40\u00b0F to 120\u00b0F stress rigid coatings and cause failure.",
  },
  {
    icon: <Wind className="h-5 w-5" />,
    title: "Moisture Vapor",
    description: "Moisture vapor transmission from below the slab is a leading cause of coating failure \u2014 vapor blisters rigid coatings that can\u2019t breathe.",
  },
  {
    icon: <Sun className="h-5 w-5" />,
    title: "UV Degradation",
    description: "Open hangar doors expose floors to direct sunlight. Standard epoxy yellows and chalks, losing gloss and structural integrity over time.",
  },
]

export function HangarProblems() {
  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            The Problem
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Why Standard Coatings Fail in Hangars
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Hangar floors face a unique combination of stresses that exceed most industrial environments. Here&apos;s what goes wrong with uncoated or improperly coated hangar concrete.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div key={p.title} className="rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 lg:p-8">
              <div className="h-11 w-11 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4">
                {p.icon}
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

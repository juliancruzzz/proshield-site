"use client"

import { Check } from "lucide-react"

const highlights = [
  "Wheel loads and turning areas",
  "Washdown temperature and cleaning products",
  "Floor drains, joints and transitions",
  "Access during preparation and curing",
]

export function CommercialIntro() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10">
              <img
                src="/images/commercial/commercial-garage-epoxy.webp"
                alt="Commercial warehouse floor with seamless industrial coating"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Facility planning
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
              Flooring for{" "}
              <span className="text-accent">Commercial Workspaces</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
              A kitchen floor may see hot water several times a shift. A distribution aisle sees loaded wheels turning in the same spots all day. Identifying those conditions helps us choose the finish and detail the work around drains, joints and doors.
            </p>

            {/* Highlight checklist */}
            <ul className="mt-6 sm:mt-8 space-y-3">
              {highlights.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

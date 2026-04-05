"use client"

import { ShieldCheck, Star, Wrench, MapPin, CheckCircle2 } from "lucide-react"

const credentials = [
  { icon: <ShieldCheck className="h-5 w-5" />, text: "Licensed & Insured" },
  { icon: <Star className="h-5 w-5" />, text: "4.9 ★ Google Rating" },
  { icon: <Wrench className="h-5 w-5" />, text: "11+ Professional Services" },
  { icon: <MapPin className="h-5 w-5" />, text: "Las Vegas Metro & Surrounding Areas" },
  { icon: <CheckCircle2 className="h-5 w-5" />, text: "Lifetime Warranty Available" },
]

// Triple the items so the loop is seamless on all screen sizes
const tripled = [...credentials, ...credentials, ...credentials]

export function TrustBar() {
  return (
    <section className="relative bg-white overflow-hidden border-b border-gray-100">
      <div className="py-5 lg:py-6">
        <div className="relative w-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden w-full">
            <div
              className="flex shrink-0 items-center gap-10 sm:gap-14 w-max"
              style={{ animation: "marquee-scroll 40s linear infinite" }}
            >
              {tripled.map((cred, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 shrink-0 text-gray-600 whitespace-nowrap"
                >
                  <span className="text-accent">{cred.icon}</span>
                  <span className="text-sm font-medium">
                    {cred.text}
                  </span>
                  <span className="ml-8 h-1 w-1 rounded-full bg-gray-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

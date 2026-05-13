import Link from "next/link"
import { MapPin } from "lucide-react"

const cities = [
  { label: "Las Vegas", href: "/service-areas" },
  { label: "Henderson", href: "/service-areas/henderson" },
  { label: "Summerlin", href: "/service-areas/summerlin" },
  { label: "North Las Vegas", href: "/service-areas/north-las-vegas" },
  { label: "Boulder City", href: "/service-areas/boulder-city" },
  { label: "Pahrump", href: "/service-areas/pahrump" },
]

export function ServiceAreaBar() {
  return (
    <section className="bg-navy py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-white/70 shrink-0">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Serving
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {cities.map((city, i) => (
              <Link
                key={city.label}
                href={city.href}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
              >
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

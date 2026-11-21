"use client"

import Link from "next/link"
import { ServiceGallery } from "@/components/sections/service-gallery"
import { ArrowRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/paver-sealing/paver-walkway-after.webp",
    alt: "Paver walkway finish example",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/paver-sealing/paver-driveway-sealed.webp",
    alt: "Paver walkway finish example",
    span: "",
  },
  {
    src: "/images/paver-sealing/paver-sealing-before-after.jpg",
    alt: "Paver surface appearance comparison",
    span: "",
  },
  {
    src: "/images/paver-sealing/paver-sealing-driveway-closeup.webp",
    alt: "Paver driveway detail example",
    span: "col-span-2",
  },
  {
    src: "/images/paver-sealing/paver-sealed-closeup.webp",
    alt: "Paver surface detail example",
    span: "",
  },
]

export function PaverSealingGallery() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Finish Ideas
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Paver Finish Examples
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Driveways, pool decks, patios, and walkways in different settings.
          </p>
        </div>

        <ServiceGallery images={galleryImages} />

        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-gray-700 hover:border-accent hover:text-accent transition-all duration-200 shadow-sm"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

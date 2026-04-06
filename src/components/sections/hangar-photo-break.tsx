"use client"


export function HangarPhotoBreak() {
  return (
    <section className="section-white py-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10">
          <img
            src="/hangar/hangar-detail.webp"
            alt="Private jet on a high-gloss coated hangar floor showing reflection quality"
            className="h-full w-full object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-900/40 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <p className="text-white/90 text-sm sm:text-base font-medium drop-shadow-lg">
              Aviation-grade floor system — built to handle Skydrol, jet fuel, and multi-ton aircraft loads.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

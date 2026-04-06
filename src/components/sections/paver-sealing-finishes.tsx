"use client"

import Image from "next/image"

export function PaverSealingFinishes() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Choose Your Look
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Two Finishes, Same Protection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
          {/* Wet Look Panel */}
          <div className="relative h-full min-h-[360px] sm:min-h-[420px]">
            <Image
              src="/images/vubastone/vubastone-pool-deck-closeup.webp"
              alt="Wet look gloss finish on pavers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
              <span className="inline-block w-fit rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold tracking-wide uppercase text-white mb-3">
                Most Popular
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                Wet Look
              </h3>
              <p className="text-sm text-accent font-medium mt-1">
                Gloss Finish
              </p>
              <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm">
                Deepens and enriches natural paver color with a glossy,
                reflective finish. Colors pop — the go-to for driveways and
                pool decks.
              </p>
            </div>
          </div>

          {/* Natural Look Panel */}
          <div className="relative h-full min-h-[360px] sm:min-h-[420px]">
            <Image
              src="/images/vubastone/vubastone-steps-contrast.webp"
              alt="Natural matte finish on paver steps"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                Natural Look
              </h3>
              <p className="text-sm text-white/60 font-medium mt-1">
                Matte Finish
              </p>
              <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm">
                Invisible protection without changing appearance. No gloss,
                no sheen — just defense against UV, stains, and water
                penetration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

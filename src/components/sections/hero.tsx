import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Phone } from "lucide-react"

/**
 * Fully server component — no client JS. The LCP element (priority next/image
 * poster) decodes and paints fast as AVIF/WebP. The video + gradients are static
 * server-rendered layers (autoplay/muted/loop are pure HTML, no JS needed); the
 * old framer-motion scroll-parallax was dropped to keep framer-motion out of the
 * homepage bundle (INP). The poster is the LCP; the video (preload="none") loads
 * after and covers it seamlessly with the same frame.
 */
export function Hero() {
  return (
    <section
      className="relative min-h-[85vh] sm:min-h-screen flex items-end lg:items-center overflow-hidden bg-[#0e1826]"
    >
      {/* LCP element: priority poster. Paints fast; AVIF/WebP via next/image. */}
      <Image
        src="/images/metallic-hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Video background (decorative, no JS). preload="none" keeps it off the LCP path. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/metallic-hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Darkening gradient over poster/video for text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(17,28,46,0.88) 0%, rgba(14,24,38,0.78) 40%, rgba(11,20,32,0.85) 100%)",
        }}
      />
      {/* Radial accent glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 75% 70%, rgba(222,134,20,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 15% 20%, rgba(93,158,226,0.05) 0%, transparent 40%)
          `,
        }}
      />

      {/* Ambient orbs (CSS-only, no JS) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[5%] w-96 h-96 bg-accent/5 rounded-full blur-[150px] animate-drift" />
        <div className="absolute bottom-[15%] left-[10%] w-72 h-72 bg-teal/5 rounded-full blur-[120px] animate-drift-slow" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32 z-10 w-full">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6 animate-hero-fade-in">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-white/60 tracking-wide uppercase">
              Las Vegas, Nevada
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] text-white leading-[1.06] tracking-[-0.03em] animate-hero-fade-in">
            Professional-Grade
            <br />
            <span className="text-accent">Floor Coatings</span>
          </h1>

          {/* Subheading */}
          <p
            className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed animate-hero-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            Metallic epoxy, flake systems, VubaStone, polished concrete, and
            specialty coatings for garages, commercial spaces, and beyond.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 animate-hero-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2.5 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors duration-200 shadow-lg shadow-accent/20 cursor-pointer pulse-ring"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:702-728-5484"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/12 bg-white/[0.04] px-8 py-4 text-base font-semibold text-white/80 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 cursor-pointer"
            >
              <Phone className="h-4 w-4 text-accent" />
              (702) 728-5484
            </a>
          </div>
        </div>
      </div>

      {/* Service Areas — bottom of hero */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 py-4 animate-hero-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <p className="text-center text-xs sm:text-sm text-white/40">
          <MapPin className="inline h-3 w-3 text-accent mr-1 -mt-0.5" />
          Serving{" "}
          <Link href="/service-areas" className="text-white/50 hover:text-accent transition-colors">Las Vegas</Link>
          {" · "}
          <Link href="/service-areas/henderson" className="text-white/50 hover:text-accent transition-colors">Henderson</Link>
          {" · "}
          <Link href="/service-areas/summerlin" className="text-white/50 hover:text-accent transition-colors">Summerlin</Link>
          {" · "}
          <Link href="/service-areas/north-las-vegas" className="text-white/50 hover:text-accent transition-colors">North Las Vegas</Link>
          {" · "}
          <Link href="/service-areas/boulder-city" className="text-white/50 hover:text-accent transition-colors">Boulder City</Link>
          {" · "}
          <Link href="/service-areas/pahrump" className="text-white/50 hover:text-accent transition-colors">Pahrump</Link>
        </p>
      </div>
    </section>
  )
}

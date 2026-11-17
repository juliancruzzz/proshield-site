import Link from "next/link"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/phone"

export default function NotFound() {
  return (
    <section className="section-gray px-4 pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-widest text-gray-500">404</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          We couldn&apos;t find that page. Browse our floor systems or request a free quote.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50">
            View Floor Systems
          </Link>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-navy hover:bg-accent-hover">
            Get a Free Quote
          </Link>
        </div>
        <a href={PHONE_HREF} className="mt-6 inline-flex min-h-11 items-center text-accent-text underline underline-offset-4">
          Call {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  )
}

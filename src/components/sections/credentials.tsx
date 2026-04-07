"use client"

import {
  ShieldCheck,
  FileText,
  Scale,
  BadgeCheck,
  Building2,
} from "lucide-react"

export function Credentials() {
  return (
    <section className="section-gray py-14 sm:py-20 lg:py-28 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — License card */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-teal/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-teal" />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-teal">
                  State of Nevada
                </div>
                <div className="font-heading font-bold text-gray-900 text-lg">
                  Contractor&apos;s License
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    Company
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">
                    ProShield Epoxy &amp; Concrete LLC
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    License #
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">0094652</div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    Classification
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">
                    C-5 Concrete Contracting
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    Status
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                    <BadgeCheck className="h-4 w-4" />
                    Active
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    Bid Limit
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">$200,000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Title + 3 trust badges */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Credentials
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Licensed, Bonded &amp; Insured
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-md">
              We&apos;re fully credentialed with the State of Nevada so you can hire with
              confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 flex items-center gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Limited Lifetime Warranty</div>
                  <div className="mt-0.5 text-xs text-gray-500">On qualifying residential systems</div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 flex items-center gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">NV License #0094652</div>
                  <div className="mt-0.5 text-xs text-gray-500">C-5 Concrete Contracting</div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 flex items-center gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Bonded &amp; Insured</div>
                  <div className="mt-0.5 text-xs text-gray-500">Full protection on every job</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

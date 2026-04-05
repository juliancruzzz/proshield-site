"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle, Loader2 } from "lucide-react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    // Replace with formsubmit.co, Resend, or API route
    await new Promise((r) => setTimeout(r, 1200))
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="section-gray py-16 lg:py-20 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mx-auto h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Stay in the Loop
          </h2>
          <p className="mt-3 text-gray-500 leading-relaxed">
            Get project tips, seasonal deals, and updates from ProShield. No spam — just
            useful info for homeowners and businesses.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-5 py-2.5 text-sm font-medium text-green-700"
            >
              <CheckCircle className="h-4 w-4" />
              You&apos;re signed up! We&apos;ll be in touch.
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-150"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-70 transition-all duration-200 shadow-lg shadow-accent/15 shrink-0"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { submitForm } from "@/lib/submit-form"
import { PROJECT_TYPE_GROUPS } from "@/lib/cta-data"

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    sqft: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedTypes.length === 0) return
    setStatus("loading")
    const projectType = selectedTypes.join(", ")
    const result = await submitForm({ ...formData, projectType }, "Quote Request")
    setStatus(result.ok ? "success" : "error")
    if (result.ok && typeof window !== "undefined") {
      ;(window as any).dataLayer?.push({
        event: "form_submission",
        form_name: "Quote Request",
        project_type: projectType,
      })
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-gray-200 bg-white p-8 text-center"
      >
        <div className="mx-auto h-14 w-14 rounded-full bg-success/10 flex items-center justify-center mb-4">
          <CheckCircle className="h-7 w-7 text-success" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-gray-900">
          Quote Request Sent!
        </h3>
        <p className="mt-2 text-gray-500 text-sm">
          We&apos;ll get back to you within 24 hours. Thanks for choosing ProShield.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-150"
            placeholder="Your name"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone <span className="text-error">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-150"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email <span className="text-error">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all duration-150"
          placeholder="you@example.com"
        />
      </div>

      {/* Project Type — multi-select */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Type <span className="text-error">*</span>{" "}
          <span className="font-normal text-gray-400 text-xs">(select all that apply)</span>
        </label>
        <div className="space-y-3">
          {PROJECT_TYPE_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.types.map((type) => {
                  const active = selectedTypes.includes(type)
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleType(type)}
                      className={`rounded-full px-3.5 py-1.5 text-sm border transition-all duration-150 ${
                        active
                          ? "bg-accent text-white border-accent shadow-sm"
                          : "bg-white text-gray-600 border-gray-300 hover:border-accent/50 hover:text-gray-900"
                      }`}
                    >
                      {type}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
          {/* Other */}
          <div>
            <button
              type="button"
              onClick={() => toggleType("Other")}
              className={`rounded-full px-3.5 py-1.5 text-sm border transition-all duration-150 ${
                selectedTypes.includes("Other")
                  ? "bg-accent text-white border-accent shadow-sm"
                  : "bg-white text-gray-600 border-gray-300 hover:border-accent/50 hover:text-gray-900"
              }`}
            >
              Other
            </button>
          </div>
        </div>
        {/* Hidden input for form validation */}
        <input type="hidden" name="projectType" value={selectedTypes.join(", ")} required={selectedTypes.length === 0} />
      </div>

      {/* Sqft */}
      <div>
        <label htmlFor="sqft" className="block text-sm font-medium text-gray-700 mb-1.5">
          Approx. Square Footage
        </label>
        <input
          type="text"
          id="sqft"
          name="sqft"
          value={formData.sqft}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-150"
          placeholder="e.g. 500"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all duration-150 resize-none"
          placeholder="Tell us about your project — condition of the floor, what you're looking for, timeline, etc."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover disabled:opacity-70 transition-all duration-200 shadow-lg shadow-accent/15"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Quote Request
          </>
        )}
      </button>
    </form>
  )
}

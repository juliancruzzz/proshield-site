"use client"

import { useEffect, useRef, useState } from "react"
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  Loader2, MessageSquare, FileText,
} from "lucide-react"
import { useHydrated } from "@/hooks/use-hydrated"
import { trackQuoteSubmission } from "@/lib/audit-mode"
import { submitForm } from "@/lib/submit-form"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/phone"
import { analyticsProjectType, PROJECT_TYPE_GROUPS } from "@/lib/cta-data"

const steps = [
  { icon: MessageSquare, title: "Tell Us About Your Project", description: "Share your floor type, approximate size and what you need." },
  { icon: MessageSquare, title: "We Assess", description: "We evaluate the surface and recommend the right system." },
  { icon: FileText, title: "Get Your Quote", description: "Receive a detailed proposal with pricing and timeline." },
]

const contactItems = [
  { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: Mail, label: "Email", value: "info@proshieldepoxy.com", href: "mailto:info@proshieldepoxy.com" },
  { icon: MapPin, label: "Area", value: "Las Vegas metro + 20 mi" },
  { icon: Clock, label: "Hours", value: "Mon–Sat 8 AM–6 PM" },
]

/* ─── form ─── */

function InlineCTAForm() {
  const ready = useHydrated()
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle")
  const sending = useRef(false)
  const confirmation = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (status === "success") confirmation.current?.focus()
  }, [status])
  const [error, setError] = useState<string | null>(null)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [formData, setFormData] = useState({ name:"",phone:"",email:"",sqft:"",message:"" })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setFormData({...formData,[e.target.name]:e.target.value})
  const toggleType = (type: string) => { setError(null); setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]) }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!ready || sending.current) return
    if (selectedTypes.length === 0) {
      setError("Choose at least one Project Type.")
      event.currentTarget.querySelector<HTMLButtonElement>('[data-project-type]')?.focus()
      return
    }
    sending.current = true
    setError(null)
    setStatus("loading")
    const projectType = selectedTypes.join(", ")
    const result = await submitForm({ ...formData, projectType }, "Quote Request")
    sending.current = false
    setStatus(result.ok ? "success" : "error")
    if (!result.ok) setError("We could not confirm delivery. Your details are still here. Call (702) 728-5484 before resending if you are unsure whether it arrived.")
    if (result.ok) trackQuoteSubmission("Quote Request", analyticsProjectType(selectedTypes))
  }

  if (status === "success") return (
    <div ref={confirmation} tabIndex={-1} className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center animate-reveal focus:outline-none">
      <div className="mx-auto h-14 w-14 rounded-full bg-accent/15 flex items-center justify-center mb-4"><CheckCircle className="h-7 w-7 text-accent"/></div>
      <h3 className="font-heading font-semibold text-xl text-white">Quote Request Sent!</h3>
      <p className="mt-2 text-white/60 text-sm">We&apos;ll get back to you within 24 hours.</p>
    </div>
  )

  const inp = "w-full rounded-lg border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-accent/50 focus:ring-2 focus:ring-accent/15 outline-none transition-all duration-150"

  return (
    <form method="post" onSubmit={handleSubmit} aria-busy={!ready || status === "loading"} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label htmlFor="v3-name" className="block text-xs font-medium text-white/80 mb-1.5">Name <span className="text-accent">*</span></label><input disabled={!ready || status === "loading"} type="text" id="v3-name" name="name" required value={formData.name} onChange={handleChange} className={inp} placeholder="Your name"/></div>
        <div><label htmlFor="v3-phone" className="block text-xs font-medium text-white/80 mb-1.5">Phone <span className="text-accent">*</span></label><input disabled={!ready || status === "loading"} type="tel" id="v3-phone" name="phone" required value={formData.phone} onChange={handleChange} className={inp} placeholder="(555) 123-4567"/></div>
      </div>
      <div><label htmlFor="v3-email" className="block text-xs font-medium text-white/80 mb-1.5">Email <span className="text-accent">*</span></label><input disabled={!ready || status === "loading"} type="email" id="v3-email" name="email" required value={formData.email} onChange={handleChange} className={inp} placeholder="you@example.com"/></div>
      {/* Project Type — multi-select pills */}
      <div>
        <label className="block text-xs font-medium text-white/80 mb-2">Project Type <span className="text-accent">*</span> <span className="text-white/30 font-normal">(select all that apply)</span></label>
        <div className="space-y-2.5">
          {PROJECT_TYPE_GROUPS.map(group=>(
            <div key={group.label}>
              <p className="text-[10px] font-semibold text-white/30 uppercase tracking-wider mb-1">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">{group.types.map(type=>{const active=selectedTypes.includes(type);return(<button key={type} type="button" data-project-type disabled={!ready || status === "loading"} onClick={()=>toggleType(type)} className={`rounded-full px-3 py-1.5 text-xs border transition-all duration-150 ${active?"bg-accent text-navy border-accent":"bg-white/[0.06] text-white/60 border-white/12 hover:border-accent/40 hover:text-white/80"}`}>{type}</button>)})}</div>
            </div>
          ))}
          <button type="button" data-project-type disabled={!ready || status === "loading"} onClick={()=>toggleType("Other")} className={`rounded-full px-3 py-1.5 text-xs border transition-all duration-150 ${selectedTypes.includes("Other")?"bg-accent text-navy border-accent":"bg-white/[0.06] text-white/60 border-white/12 hover:border-accent/40 hover:text-white/80"}`}>Other</button>
        </div>
      </div>
      <div><label htmlFor="v3-sqft" className="block text-xs font-medium text-white/80 mb-1.5">Approx. Sq Ft</label><input disabled={!ready || status === "loading"} type="text" id="v3-sqft" name="sqft" value={formData.sqft} onChange={handleChange} className={inp} placeholder="e.g. 500"/></div>
      <div><label htmlFor="v3-msg" className="block text-xs font-medium text-white/80 mb-1.5">Project Details</label><textarea disabled={!ready || status === "loading"} id="v3-msg" name="message" rows={3} value={formData.message} onChange={handleChange} className={`${inp} resize-none`} placeholder="Tell us about your project..."/></div>
      {error && <p role="alert" className="text-base text-red-200">{error}</p>}
      <button type="submit" disabled={!ready || status==="loading"} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-navy hover:bg-accent-hover disabled:opacity-70 transition-all">{status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin"/>Sending...</> : <><Send className="h-4 w-4"/>Send Quote Request</>}</button>
    </form>
  )
}

/* ───────────────────────────────────────────────────────
   V3 — Subtle slate/frosted containers + accent left border
   Side-by-side layout, softer premium feel
   Step cards use a light slate bg (#2a3040) with accent border
   ─────────────────────────────────────────────────────── */

export function CtaV3() {

  return (
    <section
      id="cta-v3"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #111c2e 0%, #0e1826 50%, #0b1420 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full blur-[180px] opacity-[0.07]" style={{ background: "radial-gradient(circle, #DE8614, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.04]" style={{ background: "radial-gradient(circle, #DE8614, transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT — heading + subtle slate step cards */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">How It Works</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-white tracking-tight leading-[1.15]">
              Not Sure Where<br className="hidden sm:block"/> to Start?
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
              Tell us about your project — free estimate, no obligation.
            </p>

            {/* Subtle slate cards with accent left border */}
            <div className="mt-10 space-y-3">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex items-center gap-4 rounded-xl border-l-[3px] border-l-white/60 px-5 py-4" style={{ background: "rgba(55, 63, 82, 0.7)", borderTop: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-semibold text-white text-sm">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/45 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 rounded-xl border border-accent/15 bg-accent/[0.04] p-4">
              <p className="text-sm text-white/50">We respond within <span className="text-accent font-medium">24 hours</span>. For urgent projects, call us directly.</p>
            </div>
          </div>

          {/* RIGHT — form + contact strip */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7 md:p-8">
              <h3 className="font-heading font-semibold text-lg text-white mb-1">Request a Free Quote</h3>
              <p className="text-sm text-white/35 mb-6">Fill out the form or call <a href={PHONE_HREF} className="text-white/55">{PHONE_DISPLAY}</a>.</p>
              <InlineCTAForm />
            </div>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon; const Wrapper = item.href ? "a" : "div"
                const cls = "group flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 hover:border-accent/20 hover:bg-white/[0.04] transition-all"
                return <Wrapper key={item.label} {...(item.href?{href:item.href,className:cls}:{className:cls}) as React.HTMLAttributes<HTMLElement>}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-accent shrink-0"><Icon className="h-3.5 w-3.5"/></div>
                  <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-white/80 font-medium">{item.label}</div><div className="text-xs text-white/55 truncate group-hover:text-accent transition-colors">{item.value}</div></div>
                </Wrapper>
              })}
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-xs text-white/25">
          Free estimates &bull; Licensed &amp; insured &bull; Las Vegas metro + 20-mile radius
        </p>
      </div>
    </section>
  )
}

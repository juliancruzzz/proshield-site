"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  Loader2, ImagePlus, X, Camera, MessageSquare, FileText, ArrowRight,
} from "lucide-react"
import { useMounted } from "@/hooks/use-mounted"
import { submitForm } from "@/lib/submit-form"

/* ─── data ─── */

const projectTypes = [
  "Garage Floor Coating","Metallic Epoxy","Flake System (ProFlake)","VubaStone",
  "Concrete Polishing","Tile Flooring","Plank Flooring (LVP/SPC/Hardwood)",
  "Decorative Overlay","Patio / Pool Deck","Paver Sealing",
  "Commercial Resinous Flooring","Airplane Hangar","GrassMac & Turf","Other",
]

const steps = [
  { icon: Camera, title: "Send a Photo", description: "Snap a pic of your space — text, email, or right here." },
  { icon: MessageSquare, title: "We Assess", description: "We evaluate the surface and recommend the right system." },
  { icon: FileText, title: "Get Your Quote", description: "Receive a detailed proposal with pricing and timeline." },
]

const contactItems = [
  { icon: Phone, label: "Phone", value: process.env.NEXT_PUBLIC_PHONE || "(702) 555-0199", href: `tel:${process.env.NEXT_PUBLIC_PHONE || ""}` },
  { icon: Mail, label: "Email", value: "juliancruz@proshieldepoxy.com", href: "mailto:juliancruz@proshieldepoxy.com" },
  { icon: MapPin, label: "Area", value: "Las Vegas metro + 20 mi" },
  { icon: Clock, label: "Hours", value: "Mon–Sat 7 AM–6 PM" },
]

/* ─── form ─── */

function InlineCTAForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle")
  const [images, setImages] = useState<{name:string;preview:string}[]>([])
  const [formData, setFormData] = useState({ name:"",phone:"",email:"",projectType:"",sqft:"",message:"" })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setFormData({...formData,[e.target.name]:e.target.value})
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => { const f=e.target.files; if(!f)return; setImages(p=>[...p,...Array.from(f).map(f=>({name:f.name,preview:URL.createObjectURL(f)}))].slice(0,5)); e.target.value="" }
  const removeImage = (i:number) => setImages(p=>p.filter((_,idx)=>idx!==i))
  const handleSubmit = async (e:React.FormEvent) => { e.preventDefault(); setStatus("loading"); const result = await submitForm(formData, "Quote Request"); setStatus(result.ok ? "success" : "error") }

  if (status === "success") return (
    <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
      <div className="mx-auto h-14 w-14 rounded-full bg-accent/15 flex items-center justify-center mb-4"><CheckCircle className="h-7 w-7 text-accent"/></div>
      <h3 className="font-heading font-semibold text-xl text-white">Quote Request Sent!</h3>
      <p className="mt-2 text-white/60 text-sm">We&apos;ll get back to you within 24 hours.</p>
    </motion.div>
  )

  const inp = "w-full rounded-lg border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-accent/50 focus:ring-2 focus:ring-accent/15 outline-none transition-all duration-150"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label htmlFor="v2-name" className="block text-xs font-medium text-white/60 mb-1.5">Name <span className="text-accent">*</span></label><input type="text" id="v2-name" name="name" required value={formData.name} onChange={handleChange} className={inp} placeholder="Your name"/></div>
        <div><label htmlFor="v2-phone" className="block text-xs font-medium text-white/60 mb-1.5">Phone <span className="text-accent">*</span></label><input type="tel" id="v2-phone" name="phone" required value={formData.phone} onChange={handleChange} className={inp} placeholder="(555) 123-4567"/></div>
      </div>
      <div><label htmlFor="v2-email" className="block text-xs font-medium text-white/60 mb-1.5">Email <span className="text-accent">*</span></label><input type="email" id="v2-email" name="email" required value={formData.email} onChange={handleChange} className={inp} placeholder="you@example.com"/></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label htmlFor="v2-pt" className="block text-xs font-medium text-white/60 mb-1.5">Project Type <span className="text-accent">*</span></label><select id="v2-pt" name="projectType" required value={formData.projectType} onChange={handleChange} className={`${inp} appearance-none`}><option value="" className="bg-[#1A1F2B] text-white/50">Select a project type</option>{projectTypes.map(t=><option key={t} value={t} className="bg-[#1A1F2B] text-white">{t}</option>)}</select></div>
        <div><label htmlFor="v2-sqft" className="block text-xs font-medium text-white/60 mb-1.5">Approx. Sq Ft</label><input type="text" id="v2-sqft" name="sqft" value={formData.sqft} onChange={handleChange} className={inp} placeholder="e.g. 500"/></div>
      </div>
      <div><label htmlFor="v2-msg" className="block text-xs font-medium text-white/60 mb-1.5">Project Details</label><textarea id="v2-msg" name="message" rows={3} value={formData.message} onChange={handleChange} className={`${inp} resize-none`} placeholder="Tell us about your project..."/></div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">Photos <span className="text-white/30">(optional, up to 5)</span></label>
        {images.length>0&&<div className="flex flex-wrap gap-2 mb-3">{images.map((img,i)=><div key={i} className="relative h-16 w-16 rounded-lg overflow-hidden border border-white/10 group"><img src={img.preview} alt={img.name} className="h-full w-full object-cover"/><button type="button" onClick={()=>removeImage(i)} className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><X className="h-4 w-4 text-white"/></button></div>)}</div>}
        {images.length<5&&<label className="flex items-center gap-2.5 rounded-lg border border-dashed border-white/12 bg-white/[0.03] px-4 py-3 cursor-pointer hover:border-accent/30 hover:bg-white/[0.05] transition-all"><ImagePlus className="h-5 w-5 text-accent/70"/><span className="text-sm text-white/45">{images.length===0?"Add photos of your floor or space":"Add more photos"}</span><input type="file" accept="image/*" multiple onChange={handleImageChange} className="hidden"/></label>}
      </div>
      <button type="submit" disabled={status==="loading"} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover disabled:opacity-70 transition-all"><Send className="h-4 w-4"/>Send Quote Request</button>
    </form>
  )
}

/* ───────────────────────────────────────────────────────
   V2 — Horizontal steps across the top, form + contact below
   Centered heading → 3 white cards in a row → form/contact
   Everything inside one dark section
   ─────────────────────────────────────────────────────── */

export function CtaV2() {
  const mounted = useMounted()

  return (
    <section
      id="cta-v2"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #1e2433 0%, #151a24 50%, #131720 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[200px] opacity-[0.06]" style={{ background: "radial-gradient(ellipse, #e78427, transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">

        {/* Centered heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">How It Works</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-white tracking-tight leading-[1.15]">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-white/45 text-base sm:text-lg leading-relaxed">
            Send us a photo and we&apos;ll handle the rest — free estimate, no obligation.
          </p>
        </div>

        {/* Horizontal step cards with connecting arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-14">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                <div className="rounded-xl bg-white p-5 shadow-lg shadow-black/15 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white text-base font-bold mb-3">{i+1}</div>
                  <h3 className="font-heading font-semibold text-gray-900 text-sm mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full bg-[#1e2433] border border-white/10 text-accent">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Form + contact side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7 md:p-8">
              <h3 className="font-heading font-semibold text-lg text-white mb-1">Request a Free Quote</h3>
              <p className="text-sm text-white/35 mb-6">Fill out the form or text us a photo at <span className="text-white/55">{process.env.NEXT_PUBLIC_PHONE || "(702) 555-0199"}</span>.</p>
              <InlineCTAForm />
            </div>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon; const Wrapper = item.href ? "a" : "div"
                const cls = "flex items-start gap-3.5 group"
                return (
                  <Wrapper key={item.label} {...(item.href?{href:item.href,className:cls}:{className:cls}) as React.HTMLAttributes<HTMLElement>}>
                    <div className="h-10 w-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/15 group-hover:border-accent/20 transition-colors">
                      <Icon className="h-4 w-4"/>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/80">{item.label}</div>
                      <div className="text-sm text-white/50 group-hover:text-accent transition-colors">{item.value}</div>
                    </div>
                  </Wrapper>
                )
              })}
            </div>

            <div className="mt-8 rounded-xl border border-accent/15 bg-accent/[0.04] p-4">
              <p className="text-sm text-white/50">We respond within <span className="text-accent font-medium">24 hours</span>. For urgent projects, call us directly.</p>
            </div>
          </div>
        </div>

        <motion.p initial={{opacity:0}} animate={mounted?{opacity:1}:{}} transition={{duration:0.5,delay:0.7}} className="mt-14 text-center text-xs text-white/25">
          Free estimates &bull; Licensed &amp; insured &bull; Las Vegas metro + 20-mile radius
        </motion.p>
      </div>
    </section>
  )
}

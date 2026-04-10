"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  Loader2, ImagePlus, X, Camera, MessageSquare, FileText, ArrowRight,
} from "lucide-react"
import { useMounted } from "@/hooks/use-mounted"
import { submitForm } from "@/lib/submit-form"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/phone"
import { PROJECT_TYPE_GROUPS } from "@/lib/cta-data"

const steps = [
  { icon: Camera, title: "Send a Photo", description: "Snap a pic of your space — text, email, or right here." },
  { icon: MessageSquare, title: "We Assess", description: "We evaluate the surface and recommend the right system." },
  { icon: FileText, title: "Get Your Quote", description: "Receive a detailed proposal with pricing and timeline." },
]

const contactItems = [
  { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: Mail, label: "Email", value: "info@proshieldepoxy.com", href: "mailto:info@proshieldepoxy.com" },
  { icon: MapPin, label: "Area", value: "Las Vegas metro + 20 mi" },
  { icon: Clock, label: "Hours", value: "Mon–Sat 7 AM–6 PM" },
]

/* ─── form ─── */

function InlineCTAForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle")
  const [images, setImages] = useState<{name:string;preview:string}[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [formData, setFormData] = useState({ name:"",phone:"",email:"",sqft:"",message:"" })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setFormData({...formData,[e.target.name]:e.target.value})
  const toggleType = (type: string) => setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => { const f=e.target.files; if(!f)return; setImages(p=>[...p,...Array.from(f).map(f=>({name:f.name,preview:URL.createObjectURL(f)}))].slice(0,5)); e.target.value="" }
  const removeImage = (i:number) => setImages(p=>p.filter((_,idx)=>idx!==i))
  const handleSubmit = async (e:React.FormEvent) => { e.preventDefault(); if(selectedTypes.length===0)return; setStatus("loading"); const projectType=selectedTypes.join(", "); const result = await submitForm({...formData,projectType}, "Quote Request"); setStatus(result.ok ? "success" : "error") }

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
        <div><label htmlFor="v1-name" className="block text-xs font-medium text-white/60 mb-1.5">Name <span className="text-accent">*</span></label><input type="text" id="v1-name" name="name" required value={formData.name} onChange={handleChange} className={inp} placeholder="Your name"/></div>
        <div><label htmlFor="v1-phone" className="block text-xs font-medium text-white/60 mb-1.5">Phone <span className="text-accent">*</span></label><input type="tel" id="v1-phone" name="phone" required value={formData.phone} onChange={handleChange} className={inp} placeholder="(555) 123-4567"/></div>
      </div>
      <div><label htmlFor="v1-email" className="block text-xs font-medium text-white/60 mb-1.5">Email <span className="text-accent">*</span></label><input type="email" id="v1-email" name="email" required value={formData.email} onChange={handleChange} className={inp} placeholder="you@example.com"/></div>
      {/* Project Type — multi-select pills */}
      <div>
        <label className="block text-xs font-medium text-white/60 mb-2">Project Type <span className="text-accent">*</span> <span className="text-white/30 font-normal">(select all that apply)</span></label>
        <div className="space-y-2.5">
          {PROJECT_TYPE_GROUPS.map(group=>(
            <div key={group.label}>
              <p className="text-[10px] font-semibold text-white/30 uppercase tracking-wider mb-1">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">{group.types.map(type=>{const active=selectedTypes.includes(type);return(<button key={type} type="button" onClick={()=>toggleType(type)} className={`rounded-full px-3 py-1.5 text-xs border transition-all duration-150 ${active?"bg-accent text-white border-accent":"bg-white/[0.06] text-white/60 border-white/12 hover:border-accent/40 hover:text-white/80"}`}>{type}</button>)})}</div>
            </div>
          ))}
          <button type="button" onClick={()=>toggleType("Other")} className={`rounded-full px-3 py-1.5 text-xs border transition-all duration-150 ${selectedTypes.includes("Other")?"bg-accent text-white border-accent":"bg-white/[0.06] text-white/60 border-white/12 hover:border-accent/40 hover:text-white/80"}`}>Other</button>
        </div>
      </div>
      <div><label htmlFor="v1-sqft" className="block text-xs font-medium text-white/60 mb-1.5">Approx. Sq Ft</label><input type="text" id="v1-sqft" name="sqft" value={formData.sqft} onChange={handleChange} className={inp} placeholder="e.g. 500"/></div>
      <div><label htmlFor="v1-msg" className="block text-xs font-medium text-white/60 mb-1.5">Project Details</label><textarea id="v1-msg" name="message" rows={3} value={formData.message} onChange={handleChange} className={`${inp} resize-none`} placeholder="Tell us about your project..."/></div>
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
   V1 — White step cards, bold contrast
   Side-by-side: left = heading + white step cards, right = form
   ─────────────────────────────────────────────────────── */

export function CtaV1() {
  const mounted = useMounted()

  return (
    <section
      id="cta-v1"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #1e2433 0%, #151a24 50%, #131720 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full blur-[180px] opacity-[0.07]" style={{ background: "radial-gradient(circle, #FA9C49, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.04]" style={{ background: "radial-gradient(circle, #FA9C49, transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT — heading + white step cards */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">How It Works</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-white tracking-tight leading-[1.15]">
              Not Sure Where<br className="hidden sm:block"/> to Start?
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
              Send us a photo and we&apos;ll handle the rest — free estimate, no obligation.
            </p>

            {/* White step cards */}
            <div className="mt-10 space-y-3">
              {steps.map((step, i) => (
                <div key={step.title} className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-lg shadow-black/15">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white text-sm font-bold shrink-0">{i+1}</div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-semibold text-gray-900 text-sm">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-accent/15 bg-accent/[0.04] p-4">
              <p className="text-sm text-white/50">We respond within <span className="text-accent font-medium">24 hours</span>. For urgent projects, call us directly.</p>
            </div>
          </div>

          {/* RIGHT — form + contact strip */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7 md:p-8">
              <h3 className="font-heading font-semibold text-lg text-white mb-1">Request a Free Quote</h3>
              <p className="text-sm text-white/35 mb-6">Fill out the form or text us a photo at <span className="text-white/55">{PHONE_DISPLAY}</span>.</p>
              <InlineCTAForm />
            </div>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon; const Wrapper = item.href ? "a" : "div"
                const cls = "group flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 hover:border-accent/20 hover:bg-white/[0.04] transition-all"
                return <Wrapper key={item.label} {...(item.href?{href:item.href,className:cls}:{className:cls}) as React.HTMLAttributes<HTMLElement>}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-accent shrink-0"><Icon className="h-3.5 w-3.5"/></div>
                  <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-white/30 font-medium">{item.label}</div><div className="text-xs text-white/55 truncate group-hover:text-accent transition-colors">{item.value}</div></div>
                </Wrapper>
              })}
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

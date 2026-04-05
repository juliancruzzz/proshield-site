"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { MessageCircle, X, Send, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { submitForm } from "@/lib/submit-form"

/* ═══════════════════════════════════════════
   Knowledge Base — ProShield Services & FAQ
   ═══════════════════════════════════════════ */

const COMPANY = {
  phone: "702-728-5484",
  email: "Info@ProshieldEpoxy.com",
  area: "Las Vegas metro area including Henderson, North Las Vegas, Summerlin, and surrounding areas. Extended service to Mesquite and Pahrump.",
}

interface Service {
  name: string
  desc: string
  best: string
}

const SERVICES: Record<string, Service> = {
  proflake: {
    name: "ProFlake Epoxy System",
    desc: "Signature garage floor coating — epoxy base with full flake broadcast and polyaspartic topcoat. Often 1-day install for qualifying residential garages. Walk on same day/next day, drive on in 24-72hrs. Limited lifetime warranty on qualifying residential.",
    best: "garages, workshops, utility rooms",
  },
  metallic: {
    name: "Metallic Epoxy Floors",
    desc: "Stunning one-of-a-kind swirling 3D reflective finish. Epoxy primer + pigmented base + metallic body coat + optional topcoat. 2-3 day install. Each floor is unique.",
    best: "showrooms, retail, man caves, luxury garages",
  },
  vubastone: {
    name: "VubaStone",
    desc: "Resin-bound stone surfacing using polyurethane resin (not epoxy). Beautiful natural aggregate finish. Multi-day install.",
    best: "driveways, patios, walkways, pool decks",
  },
  polishing: {
    name: "Concrete Polishing",
    desc: "Mechanical refinement process (not a coating). Grind and polish existing concrete to desired sheen. Levels 1-4, Classes A-D.",
    best: "modern homes, retail, warehouses, restaurants",
  },
  exterior: {
    name: "Exterior Coatings",
    desc: "Cool deck and knockdown texture for outdoor surfaces. Acrylic or acrylic-modified texture (not epoxy). Lighter colors help reduce surface temperature.",
    best: "pool decks, patios, driveways, walkways",
  },
  pavers: {
    name: "Paver Installation & Sealing",
    desc: "Professional paver installation and sealing. Enhances color, protects against staining, stabilizes joint sand. Sealer requires periodic reapplication.",
    best: "driveways, walkways, patios, pool decks",
  },
  hangar: {
    name: "Airplane Hangar Flooring",
    desc: "Specialty commercial/industrial system. Resists Skydrol, jet fuel, oils, abrasion, heavy loads. Polyurethane or chemical-resistant topcoat. 2-5+ day phased install.",
    best: "private/commercial hangars, aviation facilities",
  },
  turf: {
    name: "GrassMac & Turf Installation",
    desc: "Engineered permeable base (GrassMac) beneath artificial grass + professional turf installation. Multi-day install.",
    best: "backyards, pet areas, play areas, landscaping",
  },
  commercial: {
    name: "Commercial Flooring",
    desc: "Custom high-performance systems matched to each environment. Chemical resistant, slip-resistant textures, sanitation-friendly.",
    best: "warehouses, retail, restaurants, kitchens, manufacturing",
  },
  landscaping: {
    name: "Landscaping",
    desc: "Professional landscaping services complementing our concrete and outdoor work.",
    best: "residential and commercial properties",
  },
}

const SERVICE_KEYWORDS: [RegExp, string][] = [
  [/garage|flake|proflake|chip/i, "proflake"],
  [/metallic|3d|swirl|shimmer|reflective/i, "metallic"],
  [/vuba|stone|pebble|aggregate|resin.?bound/i, "vubastone"],
  [/polish|grind|refinish|shine/i, "polishing"],
  [/pool|patio|deck|exterior|outdoor|cool.?deck|knockdown|driveway coating/i, "exterior"],
  [/paver|brick|hardscape|seal/i, "pavers"],
  [/hangar|airplane|aviation|skydrol|jet/i, "hangar"],
  [/turf|grass|artificial|grassmac|lawn/i, "turf"],
  [/commercial|warehouse|restaurant|retail|industrial/i, "commercial"],
  [/landscap/i, "landscaping"],
]

const FAQ_PATTERNS: [RegExp, string, boolean?][] = [
  [
    /cost|price|how much|expensive|cheap|afford|budget|quote|estimate/i,
    `Pricing depends on the size of your space, concrete condition, and the system you choose. The best way to get an accurate price is to schedule a free estimate — we'll assess your space and give you a detailed quote. Call us at <strong>${COMPANY.phone}</strong> or fill out the form below!`,
    true,
  ],
  [
    /warranty|guarantee|last|durable|durability/i,
    "Qualifying residential systems include a limited lifetime warranty against delamination under normal use on properly prepared substrate. Exclusions apply for substrate failure, impact damage, improper cleaning, and certain other conditions. Full warranty details are provided with your estimate.",
  ],
  [
    /how long|time|day|install|quick|fast|duration/i,
    "It depends on the service! ProFlake garage floors can often be completed in 1 day for qualifying residential garages. Metallic epoxy takes 2-3 days. Other services are multi-day. We'll give you a clear timeline with your free estimate.",
  ],
  [
    /area|where|location|serve|service area|las vegas|henderson|summerlin|pahrump|mesquite/i,
    COMPANY.area,
  ],
  [
    /prepare|prep|ready|before|clean out/i,
    "We handle all the prep work! Our team grinds and profiles the concrete, repairs cracks, and ensures the surface is ready. All you need to do is clear your garage floor before we arrive.",
  ],
  [
    /walk|drive|cure|dry|ready to use/i,
    "For ProFlake, you can typically walk on it the same day or next day, and drive on it in 24-72 hours. Other systems have different cure times — we provide specific instructions with every installation.",
  ],
  [
    /contact|call|reach|phone|email|talk|speak|schedule/i,
    `You can reach us at <strong>${COMPANY.phone}</strong>, email <strong>${COMPANY.email}</strong>, or fill out the form below and our team will reach out to schedule a free estimate!`,
    true,
  ],
  [
    /difference|compare|vs|versus|better|which/i,
    "Great question! Each system has its strengths — ProFlake is our popular 1-day garage option. Metallic epoxy creates unique 3D reflective patterns (2-3 days). VubaStone is resin-bound stone for outdoor surfaces. Exterior coatings use acrylic texture for pool decks. Want details on a specific one?",
  ],
  [
    /usa|american|domestic|made in/i,
    "We prioritize professional-grade materials from trusted U.S. manufacturers where applicable.",
  ],
  [
    /free estimate|consultation|come out|visit/i,
    `Yes! We offer free on-site estimates. We'll come to your property, assess the concrete, discuss your goals, and provide a detailed quote. Call <strong>${COMPANY.phone}</strong> or fill out the form below!`,
    true,
  ],
]

/* ── Response Engine ── */

interface ChatResponse {
  text: string
  showForm?: boolean
  chips?: string[]
}

function getResponse(input: string): ChatResponse {
  const lower = input.toLowerCase()

  // Estimate / schedule intent
  if (/estimate|quote|schedule|book|appointment|come out|consultation|sign.?up|get started/.test(lower)) {
    return {
      text: "I'd love to help you get a free estimate scheduled! Just fill out this quick form and our team will reach out:",
      showForm: true,
    }
  }

  // Greeting
  if (/^(hi|hey|hello|howdy|what's up|sup|yo|good morning|good afternoon|good evening)/i.test(lower)) {
    return {
      text: "Hey! Welcome to ProShield Epoxy. I'm here to help you learn about our concrete coating services in Las Vegas. What are you interested in?",
      chips: ["Your services", "Free estimate", "Garage floors", "Pool deck options"],
    }
  }

  // All services
  if (/services|what do you (do|offer)|what.*offer|menu|options|everything/.test(lower)) {
    let resp = "We offer a full range of concrete coating and outdoor services:<br><br>"
    Object.values(SERVICES).forEach((s) => {
      resp += `<strong>${s.name}</strong> — ${s.desc.split(".")[0]}.<br><br>`
    })
    resp += "Want details on any specific service? Or I can help you schedule a free estimate!"
    return { text: resp, chips: ["ProFlake details", "Metallic details", "Get a free estimate"] }
  }

  // Service keyword match
  for (const [pattern, key] of SERVICE_KEYWORDS) {
    if (pattern.test(lower)) {
      const svc = SERVICES[key]
      if (svc) {
        return {
          text: `<strong>${svc.name}</strong><br><br>${svc.desc}<br><br><em>Best for: ${svc.best}</em>`,
          chips: ["Get a free estimate", "Other services", "Warranty info"],
        }
      }
    }
  }

  // FAQ pattern match
  for (const [pattern, answer, showForm] of FAQ_PATTERNS) {
    if (pattern.test(lower)) {
      return { text: answer, showForm: !!showForm }
    }
  }

  // Thank you
  if (/thank|thanks|thx|appreciate|awesome|perfect|great/.test(lower)) {
    return {
      text: "You're welcome! Is there anything else I can help you with?",
    }
  }

  // Goodbye
  if (/bye|goodbye|see you|later|that's all|done/.test(lower)) {
    return {
      text: `Thanks for chatting with us! If you ever need anything, call us at <strong>${COMPANY.phone}</strong>. Have a great day!`,
    }
  }

  // Fallback
  return {
    text: `That's a great question! For specific or detailed inquiries, I'd recommend connecting with our team directly at <strong>${COMPANY.phone}</strong> or <strong>${COMPANY.email}</strong>. Or I can collect your info for a callback!`,
    chips: ["Request a callback", "Ask another question", "Your services"],
  }
}

/* ═══════════════════════════════════════════
   Chatbot Component
   ═══════════════════════════════════════════ */

interface Message {
  id: number
  role: "bot" | "user"
  text: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [chips, setChips] = useState<string[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [leadCollected, setLeadCollected] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [hasOpened, setHasOpened] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const messagesEnd = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const nextId = useRef(0)

  const scrollToBottom = useCallback(() => {
    setTimeout(() => messagesEnd.current?.scrollIntoView({ behavior: "smooth" }), 60)
  }, [])

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true)
      setShowBadge(false)
      const id = nextId.current++
      setMessages([
        {
          id,
          role: "bot",
          text: "Hey there! I'm the ProShield assistant. I can help you learn about our concrete coating services, check if we serve your area, or connect you with our team for a free estimate. What can I help you with?",
        },
      ])
      setChips(["What services do you offer?", "Get a free estimate", "ProFlake garage floors", "Do you serve my area?"])
    }
  }, [isOpen, hasOpened])

  useEffect(scrollToBottom, [messages, isTyping, showForm, scrollToBottom])

  const handleSend = useCallback(
    async (text: string) => {
      if (!text.trim()) return
      const userMsg: Message = { id: nextId.current++, role: "user", text: text.trim() }
      setMessages((prev) => [...prev, userMsg])
      setChips([])
      setShowForm(false)
      setInput("")
      setMessageCount((c) => c + 1)
      setIsTyping(true)

      // Simulate natural delay
      await new Promise((r) => setTimeout(r, 500 + Math.random() * 700))

      const result = getResponse(text)
      setIsTyping(false)

      const botMsg: Message = { id: nextId.current++, role: "bot", text: result.text }
      setMessages((prev) => [...prev, botMsg])

      if (result.showForm && !leadCollected) {
        setTimeout(() => setShowForm(true), 400)
      }
      if (result.chips) {
        setChips(result.chips)
      }

      // Offer lead capture after 3+ messages
      if (messageCount >= 2 && !leadCollected && !result.showForm && Math.random() > 0.5) {
        setTimeout(() => {
          const nudge: Message = {
            id: nextId.current++,
            role: "bot",
            text: "By the way — would you like to schedule a free estimate? I can collect your info and have our team reach out!",
          }
          setMessages((prev) => [...prev, nudge])
          setChips(["Yes, schedule estimate", "Not right now"])
        }, 1500)
      }

      setTimeout(() => inputRef.current?.focus(), 100)
    },
    [leadCollected, messageCount, scrollToBottom]
  )

  const handleSubmitLead = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const name = formData.get("name") as string
      const phone = formData.get("phone") as string

      if (!name || !phone) return

      // Send lead to email via Web3Forms (fire-and-forget)
      submitForm({ name, phone }, "Chatbot Lead")

      setLeadCollected(true)
      setShowForm(false)

      const confirmMsg: Message = {
        id: nextId.current++,
        role: "bot",
        text: `Thanks, <strong>${name}</strong>! Our team will reach out to you at <strong>${phone}</strong> to schedule your free estimate. In the meantime, feel free to ask me anything about our services!`,
      }
      setMessages((prev) => [...prev, confirmMsg])
      setChips(["Tell me about ProFlake", "What's your warranty?", "Service area?"])
    },
    []
  )

  return (
    <>
      {/* ── Chat Bubble ── */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] flex h-[62px] w-[62px] items-center justify-center rounded-full border-0 shadow-lg cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #E78427 0%, #CC6F1A 100%)",
          boxShadow: "0 4px 20px rgba(231,132,39,0.4), 0 2px 8px rgba(0,0,0,0.2)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={26} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={26} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Badge */}
        {showBadge && !isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white ring-2 ring-white animate-pulse">
            1
          </span>
        )}
      </motion.button>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[9999] flex w-[400px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-2xl border shadow-2xl"
            style={{
              height: "min(580px, calc(100vh - 140px))",
              background: "#0e1826",
              borderColor: "#1a2c48",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(231,132,39,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3.5 px-5 py-4 shrink-0"
              style={{ background: "linear-gradient(135deg, #111c2e 0%, #0e1826 100%)", borderBottom: "1px solid #1a2c48" }}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white"
                style={{ background: "linear-gradient(135deg, #E78427, #CC6F1A)" }}
              >
                PS
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold text-gray-50 tracking-wide">ProShield Assistant</h3>
                <p className="flex items-center gap-1.5 text-xs mt-0.5" style={{ color: "#E78427" }}>
                  <span className="inline-block h-[7px] w-[7px] rounded-full bg-green-500" />
                  Online — replies instantly
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto rounded-lg p-1 transition-colors cursor-pointer border-0 bg-transparent"
                style={{ color: "#94A3B8" }}
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 pt-4 pb-2 flex flex-col gap-3"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#1a2c48 transparent" }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "bot" ? "self-start rounded-bl-md" : "self-end rounded-br-md text-white"
                  }`}
                  style={
                    msg.role === "bot"
                      ? { background: "#111c2e", color: "#E0E0E0", border: "1px solid #1a2c48" }
                      : { background: "linear-gradient(135deg, #E78427, #CC6F1A)" }
                  }
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="self-start flex gap-1.5 rounded-2xl rounded-bl-md px-5 py-3.5"
                  style={{ background: "#111c2e", border: "1px solid #1a2c48" }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="inline-block h-2 w-2 rounded-full"
                      style={{
                        background: "#E78427",
                        animation: `psBounce 1.4s infinite ease-in-out ${i * 0.16}s`,
                      }}
                    />
                  ))}
                </motion.div>
              )}

              {/* Quick reply chips */}
              {chips.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 py-1"
                >
                  {chips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => {
                        setChips([])
                        handleSend(chip)
                      }}
                      className="rounded-full border px-4 py-2 text-[13px] transition-all cursor-pointer bg-transparent hover:translate-y-[-1px]"
                      style={{
                        borderColor: "#E78427",
                        color: "#E78427",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(231,132,39,0.12)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {chip}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Lead form */}
              {showForm && !leadCollected && (
                <motion.form
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmitLead}
                  className="self-start max-w-[92%] rounded-2xl p-4 flex flex-col gap-2"
                  style={{ background: "#111c2e", border: "1px solid #1a2c48" }}
                >
                  <h4 className="text-sm font-semibold mb-1" style={{ color: "#E78427" }}>
                    Schedule Your Free Estimate
                  </h4>
                  <input
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors"
                    style={{ background: "#0e1826", border: "1px solid #1a2c48", color: "#E0E0E0" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#E78427")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#1a2c48")}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors"
                    style={{ background: "#0e1826", border: "1px solid #1a2c48", color: "#E0E0E0" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#E78427")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#1a2c48")}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email (optional)"
                    className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors"
                    style={{ background: "#0e1826", border: "1px solid #1a2c48", color: "#E0E0E0" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#E78427")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#1a2c48")}
                  />
                  <select
                    name="service"
                    className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none cursor-pointer"
                    style={{ background: "#0e1826", border: "1px solid #1a2c48", color: "#94A3B8" }}
                  >
                    <option value="">What service interests you?</option>
                    <option>ProFlake Epoxy (Garage)</option>
                    <option>Metallic Epoxy</option>
                    <option>VubaStone</option>
                    <option>Concrete Polishing</option>
                    <option>Exterior / Pool Deck</option>
                    <option>Paver Sealing</option>
                    <option>Airplane Hangar</option>
                    <option>GrassMac / Turf</option>
                    <option>Commercial Flooring</option>
                    <option>Not sure yet</option>
                  </select>
                  <textarea
                    name="notes"
                    placeholder="Any details about your project? (optional)"
                    rows={2}
                    className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none resize-y"
                    style={{ background: "#0e1826", border: "1px solid #1a2c48", color: "#E0E0E0", minHeight: 50 }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#E78427")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#1a2c48")}
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg py-2.5 text-sm font-semibold text-white border-0 cursor-pointer transition-all hover:translate-y-[-1px]"
                    style={{
                      background: "linear-gradient(135deg, #E78427, #CC6F1A)",
                      boxShadow: "0 2px 10px rgba(231,132,39,0.25)",
                    }}
                  >
                    Request Free Estimate
                  </button>
                </motion.form>
              )}

              <div ref={messagesEnd} />
            </div>

            {/* Input area */}
            <div className="flex items-end gap-2.5 px-4 pb-4 pt-3 shrink-0" style={{ borderTop: "1px solid #1a2c48" }}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                  e.target.style.height = "auto"
                  e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px"
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSend(input)
                  }
                }}
                placeholder="Ask about our services..."
                rows={1}
                className="flex-1 rounded-xl px-4 py-3 text-sm outline-none resize-none transition-colors"
                style={{
                  background: "#111c2e",
                  border: "1px solid #1a2c48",
                  color: "#E0E0E0",
                  maxHeight: 100,
                  lineHeight: 1.4,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#E78427")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1a2c48")}
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-0 text-white cursor-pointer transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #E78427, #CC6F1A)",
                }}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>

            {/* Footer */}
            <div className="text-center py-1.5 text-[10px] shrink-0" style={{ color: "#374151", background: "#080E1B" }}>
              Powered by ProShield Epoxy
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyframe animation for typing dots */}
      <style>{`
        @keyframes psBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @media (max-width: 480px) {
          .fixed.bottom-24.right-6 {
            bottom: 0 !important;
            right: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            max-height: 100vh !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </>
  )
}

"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { MessageCircle } from "lucide-react"

const Chatbot = dynamic(() => import("@/components/ui/chatbot").then(mod => mod.Chatbot), {
  ssr: false,
})

/**
 * Lazy-launches the chatbot ON CLICK rather than on mount. The full Chatbot
 * component pulls framer-motion; deferring it until the user opens chat keeps
 * framer-motion out of the page entirely for the majority of visitors who never
 * open it (INP). Until then we render only a lightweight plain-button bubble that
 * matches the chatbot's own launcher, so there's no visual change.
 */
export function ChatbotWrapper() {
  const [activated, setActivated] = useState(false)

  if (activated) return <Chatbot startOpen />

  return (
    <button
      onClick={() => setActivated(true)}
      className="fixed bottom-6 right-6 z-[9999] flex h-[62px] w-[62px] items-center justify-center rounded-full border-0 shadow-lg cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #DE8614 0%, #B86E0A 100%)",
        boxShadow: "0 4px 20px rgba(222,134,20,0.4), 0 2px 8px rgba(0,0,0,0.2)",
      }}
      aria-label="Open chat"
    >
      <MessageCircle size={26} className="text-white" />
      <span
        aria-hidden="true"
        className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white ring-2 ring-white animate-pulse pointer-events-none"
      >
        1
      </span>
    </button>
  )
}

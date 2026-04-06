"use client"

import dynamic from "next/dynamic"

const Chatbot = dynamic(() => import("@/components/ui/chatbot").then(mod => mod.Chatbot), {
  ssr: false,
})

export function ChatbotWrapper() {
  return <Chatbot />
}

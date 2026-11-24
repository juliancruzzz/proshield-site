import { GARAGE_COST_GUIDE, getQuoteLandingPage, getQuoteOriginPage, getQuoteSource } from "./lead-source"

const WEB3FORMS_URL = "https://api.web3forms.com/submit"

// A capture failure must never retry or delay the customer's actual quote.
async function reportGuideRequest(payload: string) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch("/api/guide-inquiry", {
        method: "POST", body: payload, keepalive: true, signal: AbortSignal.timeout(8000),
        headers: { "Content-Type": "application/json" },
      })
      if (response.ok || response.status < 500) return
    } catch { /* Retry this receipt once using the same inquiry ID. */ }
  }
}

export async function submitForm(
  data: Record<string, string>,
  formName: string,
): Promise<{ ok: boolean }> {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

  if (!key) return { ok: false }

  const body = new FormData()
  for (const [name, value] of Object.entries(data)) body.set(name, value)
  // A stored entry source survives client-side navigation to the quote form.
  body.set("Visit source", getQuoteSource())
  body.set("Landing page", getQuoteLandingPage())
  const quoteOrigin = formName === "Quote Request" && getQuoteOriginPage()
  if (quoteOrigin) body.set("Quote origin page", quoteOrigin)
  if (typeof crypto.randomUUID === "function") body.set("Website inquiry ID", crypto.randomUUID())
  body.set("access_key", key)
  body.set("subject", `New ${formName} — ProShield Epoxy Website`)
  body.set("from_name", "ProShield Website")
  body.set("botcheck", "")
  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
      signal: AbortSignal.timeout(30000),
    })
    if (!res.ok) return { ok: false }
    const json = await res.json()
    if (json.success !== true) return { ok: false }
    const inquiryId = body.get("Website inquiry ID")
    const landing = body.get("Landing page")
    if (formName === "Quote Request" && inquiryId && (landing === GARAGE_COST_GUIDE || quoteOrigin === GARAGE_COST_GUIDE)) {
      void reportGuideRequest(JSON.stringify({
        inquiryId, landing, origin: quoteOrigin || "", source: body.get("Visit source"),
        project: data.projectType, phone: data.phone,
      }))
    }
    return { ok: true }
  } catch {
    return { ok: false }
  }
}

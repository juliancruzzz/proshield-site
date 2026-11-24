import { createHmac } from "node:crypto"
import sitemap from "../../sitemap"
import { AUDIT_COOKIE_PAIR } from "@/lib/audit-mode"
import { PROJECT_TYPES } from "@/lib/cta-data"
import { GARAGE_COST_GUIDE } from "@/lib/lead-source"

const paths = new Set(sitemap().map(item => new URL(item.url).pathname))
const types = new Set([...PROJECT_TYPES, "Other"])
const channels = new Set(["Unknown", "Paid traffic", "Google Business Profile", "AI referral",
  "Google Maps", "Search referral", "Other referral"])
const uuid = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i

// This is an unverified browser report. Only independent business records establish a booking.
export async function POST(request: Request) {
  const status = (code: number) => new Response(null, { status: code, headers: { "Cache-Control": "no-store" } })
  if (request.headers.get("cookie")?.split(/;\s*/).includes(AUDIT_COOKIE_PAIR)) return status(204)
  const protocol = process.env.NODE_ENV === "development" ? new URL(request.url).protocol : "https:"
  if (request.headers.get("origin") !== protocol + "//" + request.headers.get("host")) return status(403)
  if (request.headers.get("content-type")?.split(";")[0] !== "application/json") return status(415)
  if (Number(request.headers.get("content-length")) > 1536) return status(413)
  const text = await request.text()
  if (text.length > 1536) return status(413)
  let body
  try { body = JSON.parse(text) } catch { return status(400) }
  if (!body || typeof body !== "object") return status(400)
  const { inquiryId, landing, origin, source, project, phone } = body
  if (typeof inquiryId !== "string" || !uuid.test(inquiryId) ||
      (landing !== GARAGE_COST_GUIDE && origin !== GARAGE_COST_GUIDE) ||
      (landing !== "Unknown" && !paths.has(landing)) || (origin !== "" && origin !== GARAGE_COST_GUIDE) ||
      !channels.has(source) || typeof project !== "string" || typeof phone !== "string") return status(400)
  const selected = project.split(", ")
  if (new Set(selected).size !== selected.length || selected.some(type => !types.has(type))) return status(400)

  const target = process.env.GUIDE_CAPTURE_URL
  const secret = process.env.GUIDE_MATCH_SECRET
  const token = process.env.GUIDE_CAPTURE_TOKEN
  if (!target || !secret || !token) return status(503)
  const digits = phone.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "")
  const phoneHash = /^[\d\s().+\-]+$/.test(phone) && /^\d{10}$/.test(digits)
    ? createHmac("sha256", secret).update("phone:+1" + digits).digest("hex") : ""
  try {
    const endpoint = new URL(target)
    if (endpoint.protocol !== "https:" || endpoint.pathname !== "/capture" || endpoint.search || endpoint.hash ||
        endpoint.username || endpoint.password) return status(503)
    const response = await fetch(endpoint, {
      method: "POST", redirect: "error", cache: "no-store", signal: AbortSignal.timeout(5000),
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json", "User-Agent": "ProShield-Guide-Intake/1.0" },
      body: JSON.stringify({
        "Inquiry ID": inquiryId, "Received at": new Date().toISOString(), "Landing page": landing,
        "Quote origin page": origin, "Discovery source": source, "Project type": project,
        "Phone hash": phoneHash, "Evidence": "Browser-reported website submission",
      }),
    })
    if (!response.ok) console.warn("Guide capture unavailable", response.status)
    return status(response.ok ? 204 : 503)
  } catch { console.warn("Guide capture transport unavailable"); return status(503) }
}

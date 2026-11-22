import { getQuoteSource } from "./lead-source"

const WEB3FORMS_URL = "https://api.web3forms.com/submit"

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
    return { ok: json.success === true }
  } catch {
    return { ok: false }
  }
}

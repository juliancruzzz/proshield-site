const WEB3FORMS_URL = "https://api.web3forms.com/submit"

export async function submitForm(
  data: Record<string, string>,
  formName: string
): Promise<{ ok: boolean }> {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

  if (!key) {
    console.error("WEB3FORMS_KEY is not set — form submission skipped")
    return { ok: false }
  }

  const res = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: `New ${formName} — ProShield Epoxy Website`,
      from_name: "ProShield Website",
      ...data,
    }),
  })

  const json = await res.json()
  return { ok: json.success === true }
}

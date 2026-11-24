export const AUDIT_COOKIE = "ps_audit"
export const AUDIT_COOKIE_PAIR = AUDIT_COOKIE + "=1"

export function isAuditVisit() {
  return typeof document !== "undefined" && document.cookie.split(/;\s*/).includes(AUDIT_COOKIE_PAIR)
}

export function trackQuoteSubmission(formName: string, projectType?: string) {
  if (isAuditVisit()) return
  const layer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer
  layer?.push({
    event: "form_submission",
    form_name: formName,
    ...(projectType === undefined ? {} : { project_type: projectType }),
  })
}

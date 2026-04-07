/**
 * Phone number utilities
 *
 * NEXT_PUBLIC_PHONE stores the display-formatted number, e.g. "(702) 728-5484".
 * For `tel:` hrefs we strip to digits so every device/browser handles it cleanly.
 */

/** Display-formatted phone number */
export const PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_PHONE || "(702) 728-5484"

/** Digits-only version for tel: links, e.g. "7027285484" */
export const PHONE_DIGITS = PHONE_DISPLAY.replace(/\D/g, "")

/** Ready-to-use tel: href, e.g. "tel:+17027285484" */
export const PHONE_HREF = `tel:+1${PHONE_DIGITS}`

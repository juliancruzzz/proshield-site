/**
 * CTA Section Constants
 *
 * Centralized data for the Call-to-Action section, including project types,
 * process steps, and contact information.
 */

export type StepData = {
  icon: string
  title: string
  description: string
}

export type ContactItem = {
  icon: string
  label: string
  value: string
  href?: string
}

/**
 * List of project types available for quote requests
 */
export const PROJECT_TYPES = [
  "Garage Floor Coating",
  "Metallic Epoxy",
  "Flake System (ProFlake)",
  "VubaStone",
  "Concrete Polishing",
  "Tile Flooring",
  "Plank Flooring (LVP/SPC/Hardwood)",
  "Decorative Overlay",
  "Patio / Pool Deck",
  "Paver Sealing",
  "Commercial Resinous Flooring",
  "Airplane Hangar",
  "GrassMac & Turf",
  "Other",
] as const

/**
 * Steps in the quote request process
 * Icons are stored as string identifiers; actual React components are mapped in the component
 */
export const CTA_STEPS: StepData[] = [
  {
    icon: "Camera",
    title: "Send a Photo",
    description: "Snap a pic of your space — text, email, or right here.",
  },
  {
    icon: "MessageSquare",
    title: "We Assess",
    description: "We evaluate the surface and recommend the right system.",
  },
  {
    icon: "FileText",
    title: "Get Your Quote",
    description: "Receive a detailed proposal with pricing and timeline.",
  },
]

/**
 * Contact information items displayed below the form
 * Icons are stored as string identifiers; actual React components are mapped in the component
 */
export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: "Phone",
    label: "Phone",
    value: process.env.NEXT_PUBLIC_PHONE || "(702) 555-0199",
    href: `tel:${process.env.NEXT_PUBLIC_PHONE || ""}`,
  },
  {
    icon: "Mail",
    label: "Email",
    value: "juliancruz@proshieldepoxy.com",
    href: "mailto:juliancruz@proshieldepoxy.com",
  },
  {
    icon: "MapPin",
    label: "Area",
    value: "Las Vegas metro + 20 mi",
  },
  {
    icon: "Clock",
    label: "Hours",
    value: "Mon–Sat 7 AM–6 PM",
  },
]

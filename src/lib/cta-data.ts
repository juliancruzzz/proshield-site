/**
 * CTA Section Constants
 *
 * Centralized data for the Call-to-Action section, including project types,
 * process steps, and contact information.
 */

import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/phone"

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
 * Organized project type groups for quote request forms
 */
export type ProjectTypeGroup = {
  label: string
  types: string[]
}

export const PROJECT_TYPE_GROUPS: ProjectTypeGroup[] = [
  {
    label: "Coatings & Epoxy",
    types: [
      "Garage Floor Coatings (ProFlake)",
      "Metallic Epoxy",
      "Concrete Polishing",
      "Commercial Flooring",
    ],
  },
  {
    label: "Flooring",
    types: [
      "Tile Flooring",
      "Plank Flooring (LVP/SPC/Hardwood)",
    ],
  },
  {
    label: "Outdoor & Hardscape",
    types: [
      "VubaStone",
      "Patio / Pool Deck",
      "Paver Sealing",
      "Artificial Grass",
    ],
  },
]

/** Flat list of all project types (for validation, etc.) */
export const PROJECT_TYPES = PROJECT_TYPE_GROUPS.flatMap((g) => g.types)

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
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  {
    icon: "Mail",
    label: "Email",
    value: "info@proshieldepoxy.com",
    href: "mailto:info@proshieldepoxy.com",
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

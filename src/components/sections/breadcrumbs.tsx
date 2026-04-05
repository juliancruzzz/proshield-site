"use client"

import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Prepend Home to the breadcrumb trail
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...items,
  ]

  // Build JSON-LD schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: item.href }),
    })),
  }

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Visually hidden breadcrumb nav — keeps accessibility + SEO schema without UI clutter */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <li key={index}>
                {item.href && !isLast ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

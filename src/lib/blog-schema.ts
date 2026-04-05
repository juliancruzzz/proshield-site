/**
 * BlogPosting JSON-LD schema utility
 * Generates structured data for blog posts to improve SEO and search engine understanding
 */

interface BlogPostingSchemaParams {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image?: string
}

interface BlogPostingSchema {
  '@context': string
  '@type': string
  headline: string
  description: string
  datePublished: string
  dateModified: string
  author: {
    '@type': string
    name: string
  }
  publisher: {
    '@type': string
    name: string
  }
  url: string
  image?: string
}

/**
 * Generate a BlogPosting JSON-LD schema object
 *
 * @param params - Configuration object for the blog post
 * @param params.title - The title of the blog post
 * @param params.description - A brief description of the blog post content
 * @param params.slug - The URL slug of the blog post (e.g., "epoxy-garage-floor-cost")
 * @param params.datePublished - ISO 8601 date string of publication
 * @param params.dateModified - ISO 8601 date string of last modification (optional)
 * @param params.image - Full URL to the featured image (optional)
 * @returns A BlogPosting schema object ready for JSON serialization
 *
 * @example
 * const schema = blogPostingSchema({
 *   title: "Epoxy Garage Floor Cost in Las Vegas: 2026 Pricing Guide",
 *   description: "Professional epoxy costs $3.50-$12/sq ft depending on system.",
 *   slug: "epoxy-garage-floor-cost-las-vegas",
 *   datePublished: "2026-04-03T00:00:00Z",
 *   dateModified: "2026-04-04T12:00:00Z",
 *   image: "https://proshieldepoxy.com/images/epoxy-cost.jpg",
 * })
 */
export function blogPostingSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: BlogPostingSchemaParams): BlogPostingSchema {
  const schema: BlogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: 'Julian Cruz',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ProShield Epoxy',
    },
    url: `https://proshieldepoxy.com/blog/${slug}`,
  }

  // Include image if provided
  if (image) {
    schema.image = image
  }

  return schema
}

/**
 * Convert a BlogPosting schema to a JSON-LD script tag string
 * Useful for embedding directly in HTML head
 *
 * @param schema - The BlogPosting schema object
 * @returns A string containing the complete script tag
 *
 * @example
 * const scriptTag = schemaToScriptTag(schema)
 * // Output: <script type="application/ld+json">{...}</script>
 */
export function schemaToScriptTag(schema: BlogPostingSchema): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
}

/**
 * Convenience function to generate and stringify BlogPosting schema in one call
 *
 * @param params - Configuration object for the blog post
 * @returns JSON string of the BlogPosting schema
 *
 * @example
 * const jsonSchema = blogPostingSchemaJson({
 *   title: "How Long Does Epoxy Flooring Last?",
 *   description: "Lifespan by system type from 15 to 40+ years.",
 *   slug: "how-long-does-epoxy-flooring-last",
 *   datePublished: "2026-03-26T00:00:00Z",
 * })
 */
export function blogPostingSchemaJson(
  params: BlogPostingSchemaParams
): string {
  return JSON.stringify(blogPostingSchema(params))
}

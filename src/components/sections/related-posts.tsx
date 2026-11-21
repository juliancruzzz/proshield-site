import Link from 'next/link'

interface RelatedPost {
  title: string
  href: string
  description: string
  date: string
}

interface RelatedPostsProps {
  currentSlug: string
  posts?: RelatedPost[]
}

// All blog posts with metadata
const ALL_POSTS: Record<string, Omit<RelatedPost, 'href'> & { slug: string }> = {
  'epoxy-floor-maintenance-tips': {
    slug: 'epoxy-floor-maintenance-tips',
    title: 'Epoxy Floor Maintenance Tips: Keep Your Coating Looking New',
    description: "Product-compatible cleaning, equipment and care for your installed finish.",
    date: 'April 7, 2026',
  },
  'best-pool-deck-coatings-las-vegas': {
    slug: 'best-pool-deck-coatings-las-vegas',
    title: 'Best Pool Deck Coatings for Las Vegas Heat: 2026 Guide',
    description: 'Compare pool deck finishes, preparation, project cost factors and care.',
    date: 'April 6, 2026',
  },
  'epoxy-garage-floor-cost-las-vegas': {
    slug: 'epoxy-garage-floor-cost-las-vegas',
    title: 'Epoxy Garage Floor Cost in Las Vegas: 2026 Pricing Guide',
    description: "Compare measured area, preparation, repairs and coating scope in a garage quote.",
    date: 'April 3, 2026',
  },
  'epoxy-garage-floor-vs-polyaspartic': {
    slug: 'epoxy-garage-floor-vs-polyaspartic',
    title: 'Epoxy vs. Polyaspartic Garage Floor Coatings',
    description: "Compare named coating products, layer builds, cure requirements and intended use.",
    date: 'April 1, 2026',
  },
  'hot-tire-pickup-prevention-garage-floor': {
    slug: 'hot-tire-pickup-prevention-garage-floor',
    title: 'How to Prevent Hot Tire Pickup on Your Garage Floor',
    description: "Assess tire-related coating damage, preparation, cure and repair options.",
    date: 'March 28, 2026',
  },
  'polished-concrete-vs-epoxy': {
    slug: 'polished-concrete-vs-epoxy',
    title: 'Polished Concrete vs. Epoxy Flooring',
    description: "Compare the slab, finish, traffic, care requirements and written project scope.",
    date: 'March 18, 2026',
  },
  'coolest-pool-deck-flooring-las-vegas': {
    slug: 'coolest-pool-deck-flooring-las-vegas',
    title: 'Pool Deck Flooring for Las Vegas: Compare Your Options',
    description: 'Compare pool deck finishes, product test conditions, preparation and care.',
    date: 'May 1, 2026',
  },
}

// Topic grouping for smart related post selection
const TOPIC_GROUPS = {
  garageEpoxy: [
    'epoxy-garage-floor-cost-las-vegas',
    'epoxy-garage-floor-vs-polyaspartic',
    'hot-tire-pickup-prevention-garage-floor',
  ],
  epoxyGeneral: [
    'epoxy-floor-maintenance-tips',
  ],
  polishedConcrete: [
    'polished-concrete-vs-epoxy',
  ],
  poolDeck: [
    'best-pool-deck-coatings-las-vegas',
    'coolest-pool-deck-flooring-las-vegas',
  ],
}

/**
 * Get related posts based on topic grouping
 * Returns 2 posts from the same group as current slug + 1 from another group
 */
function getRelatedPosts(currentSlug: string): RelatedPost[] {
  // Find which group the current slug belongs to
  let currentGroup: keyof typeof TOPIC_GROUPS | null = null
  const otherGroups: (keyof typeof TOPIC_GROUPS)[] = []

  for (const [groupKey, slugs] of Object.entries(TOPIC_GROUPS)) {
    if (slugs.includes(currentSlug)) {
      currentGroup = groupKey as keyof typeof TOPIC_GROUPS
    } else {
      otherGroups.push(groupKey as keyof typeof TOPIC_GROUPS)
    }
  }

  const related: RelatedPost[] = []

  // Add 2 posts from the same group (excluding current slug)
  if (currentGroup) {
    const sameGroupPosts = TOPIC_GROUPS[currentGroup]
      .filter((slug) => slug !== currentSlug)
      .slice(0, 2)
      .map((slug) => {
        const post = ALL_POSTS[slug]
        return {
          title: post.title,
          href: `/blog/${post.slug}`,
          description: post.description,
          date: post.date,
        }
      })
    related.push(...sameGroupPosts)
  }

  // Add 1 post from another group (prefer first available post from other groups)
  for (const groupKey of otherGroups) {
    const otherGroupPosts = TOPIC_GROUPS[groupKey].slice(0, 1)
    const post = otherGroupPosts[0]
    if (post) {
      const postData = ALL_POSTS[post]
      related.push({
        title: postData.title,
        href: `/blog/${postData.slug}`,
        description: postData.description,
        date: postData.date,
      })
      break
    }
  }

  return related
}

export function RelatedPosts({ currentSlug, posts }: RelatedPostsProps) {
  // Use provided posts or generate related posts
  const displayPosts = posts || getRelatedPosts(currentSlug)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-heading text-center mb-12">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <div
              key={post.href}
              className="flex flex-col border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Card Content */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Date */}
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>

                {/* Title */}
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-3 line-clamp-3">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More Link */}
                <Link
                  href={post.href}
                  className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors duration-200"
                >
                  Read More
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

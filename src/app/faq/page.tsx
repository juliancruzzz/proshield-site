import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { CtaSection } from '@/components/sections/cta-section'
import { FaqPageContent } from '@/components/sections/faq-page-content'
import { faqCategories } from '@/data/faq-data'

export const metadata: Metadata = {
  title: 'Epoxy Flooring FAQ Las Vegas | Common Questions Answered | ProShield Epoxy',
  description: 'Epoxy flooring FAQ — answers about garage coatings, metallic epoxy, VubaStone, concrete polishing, cool deck & more in Las Vegas. 702-728-5484.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Epoxy Flooring FAQ Las Vegas | Common Questions Answered | ProShield Epoxy',
    description: 'Epoxy flooring FAQ — answers about garage coatings, metallic epoxy, VubaStone, concrete polishing, cool deck & more in Las Vegas. 702-728-5484.',
    url: 'https://proshieldepoxy.com/faq',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'FAQ', href: '/faq' },
]

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about epoxy flooring, coatings, and specialty systems"
        backgroundImage="linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)"
      />

      <FaqPageContent />

      <CtaSection />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqCategories.flatMap((category) =>
              category.items.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              }))
            ),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbItems.map((item, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: item.label,
              item: `https://proshieldepoxy.com${item.href}`,
            })),
          }),
        }}
      />
    </>
  )
}

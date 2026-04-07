'use client'

import { useState } from 'react'
import Link from 'next/link'
import { faqCategories } from '@/data/faq-data'

export function FaqPageContent() {
  const [expandedItems, setExpandedItems] = useState<Record<string, Record<string, boolean>>>(() => {
    const initial: Record<string, Record<string, boolean>> = {}
    faqCategories.forEach((cat) => {
      initial[cat.id] = {}
      cat.items.forEach((_, idx) => {
        initial[cat.id][idx] = false
      })
    })
    return initial
  })

  const toggleItem = (categoryId: string, itemIndex: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [itemIndex]: !prev[categoryId][itemIndex],
      },
    }))
  }

  return (
    <>
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-4">
              Didn&apos;t find your answer?{' '}
              <a href="tel:+17027285484" className="font-semibold text-blue-600 hover:underline">
                Call us at 702-728-5484
              </a>{' '}
              or reach out through our contact page.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <section key={category.id}>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-6">
                  {category.title}
                </h2>

                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleItem(category.id, idx)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        aria-expanded={expandedItems[category.id]?.[idx] || false}
                      >
                        <h3 className="font-semibold text-gray-900 text-lg pr-4">
                          {item.question}
                        </h3>
                        <span
                          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-blue-600 transition-transform ${
                            expandedItems[category.id]?.[idx] ? 'rotate-180' : ''
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        </span>
                      </button>

                      {expandedItems[category.id]?.[idx] && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed text-base">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 p-8 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 mb-6">
              Have specific questions about your project? We&apos;re here to help. Schedule your free
              estimate today and get personalized answers from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17027285484"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Call 702-728-5484
              </a>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors text-center"
              >
                Get Your Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

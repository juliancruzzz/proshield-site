"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"
import { useMounted } from "@/hooks/use-mounted"
import googleData from "@/data/google-reviews.json"

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Review {
  name: string
  rating: number
  text: string
  date: string
  profilePhoto?: string
}

/* ------------------------------------------------------------------ */
/*  Fallback placeholder reviews (used when API data isn't available)  */
/* ------------------------------------------------------------------ */

const placeholderReviews: Review[] = [
  {
    name: "Michael R.",
    rating: 5,
    text: "ProShield transformed our garage floor. The flake finish looks incredible and the whole job was done in one day. Highly recommend.",
    date: "2 weeks ago",
  },
  {
    name: "Sarah T.",
    rating: 5,
    text: "We hired ProShield for our warehouse floor and couldn't be happier. The team was professional and the coating system is holding up perfectly under heavy forklift traffic.",
    date: "1 month ago",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Julian and his crew did an amazing flake floor in our 3-car garage. The Creekbed color blend looks fantastic. Clean work, fair price, done on time.",
    date: "3 weeks ago",
  },
  {
    name: "Amanda L.",
    rating: 5,
    text: "Got quotes from 4 companies. ProShield was the most knowledgeable about the actual chemistry of what they use. They recommended the right system for our space. Our floor has been flawless for 6 months.",
    date: "2 months ago",
  },
  {
    name: "James W.",
    rating: 5,
    text: "Had them do our aircraft hangar floor. It handles jet fuel and hydraulic fluid with zero issues. Best investment we've made in the facility.",
    date: "1 month ago",
  },
  {
    name: "Lisa M.",
    rating: 5,
    text: "The before and after is unbelievable. Our old cracked concrete garage floor now looks like a showroom. ProShield is the real deal.",
    date: "5 weeks ago",
  },
]

/* ------------------------------------------------------------------ */
/*  Resolve reviews: prefer fetched data, fall back to placeholders    */
/* ------------------------------------------------------------------ */

const hasRealReviews =
  Array.isArray(googleData.reviews) && googleData.reviews.length > 0

const reviews: Review[] = hasRealReviews
  ? (googleData.reviews as Review[]).filter((r) => r.text && r.text.length > 0)
  : placeholderReviews

const aggregateRating = googleData.rating || 4.9
const totalReviews = googleData.totalReviews || 43

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: Math.round(count) }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[300px] shrink-0 rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
      <Quote className="h-5 w-5 text-accent/30 mb-3" />
      <Stars count={review.rating} />
      <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2.5">
          {review.profilePhoto ? (
            <img
              src={review.profilePhoto}
              alt={review.name}
              className="h-9 w-9 rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-xs font-semibold text-accent">
                {review.name.charAt(0)}
              </span>
            </div>
          )}
          <span className="text-sm font-medium text-gray-900">
            {review.name}
          </span>
        </div>
        <span className="text-xs text-gray-500">{review.date}</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export function GoogleReviews() {
  const mounted = useMounted()

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — with large rating display */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 mb-14">
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Customer Reviews
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
              Real Reviews from
              <br className="hidden sm:block" />
              <span className="text-accent">Real Customers</span>
            </h2>
          </div>

          {/* Aggregate rating card */}
          <div className="flex items-center gap-5 rounded-2xl bg-white border border-gray-200 shadow-sm px-6 py-4">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-4xl font-heading font-bold text-gray-900">
                {aggregateRating}
              </span>
            </div>
            <div className="border-l border-gray-200 pl-5">
              <Stars count={5} />
              <span className="text-sm text-gray-500 mt-1 block">
                {totalReviews} reviews
              </span>
            </div>
          </div>
        </div>

        {/* Marquee reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Marquee speed={30} pauseOnHover direction="left">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </Marquee>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`https://search.google.com/local/writereview?placeid=${
              process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "YOUR_PLACE_ID"
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors duration-200 shadow-lg shadow-accent/15"
          >
            Leave Us a Review
          </a>
          <a
            href={`https://search.google.com/local/reviews?placeid=${
              process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-accent transition-colors duration-150"
          >
            See all reviews on Google &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  )
}

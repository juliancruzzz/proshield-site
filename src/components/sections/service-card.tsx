"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  bestFor?: string
  description: string
  href: string
  index?: number
  image?: string
}

export function ServiceCard({ title, bestFor, description, href, index = 0, image }: ServiceCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link href={href} className="group block h-full">
        <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
          {/* Photo */}
          <div className="h-40 rounded-xl bg-gray-100 mb-5 overflow-hidden">
            {image && !imgError ? (
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-medium">{title}</span>
              </div>
            )}
          </div>

          {bestFor && (
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-3">
              Best for: {bestFor}
            </span>
          )}
          <h3 className="font-heading font-semibold text-lg text-gray-900 group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">{description}</p>
          <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Learn More <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

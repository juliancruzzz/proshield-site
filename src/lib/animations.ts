// Shared GSAP animation configs for ProShield site

export const scrollReveal = {
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out",
}

export const scrollTriggerDefaults = {
  start: "top 80%",
  end: "top 50%",
  toggleActions: "play none none none" as const,
}

export const staggerReveal = {
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out",
}

// Framer Motion variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export const cardHover = {
  y: -4,
  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
}

export const cardHoverTransition = {
  duration: 0.3,
  ease: "easeOut" as const,
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

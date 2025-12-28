'use client'

import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight } from '@/lib/animations'

interface FadeInProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  className?: string
  once?: boolean
}

const directionVariants = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
  none: fadeIn
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  className,
  once = true
}: FadeInProps) {
  const variants = directionVariants[direction]

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-100px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

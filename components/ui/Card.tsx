'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700',
        hover && 'hover-lift cursor-pointer',
        className
      )}
      whileHover={hover ? { y: -4, boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

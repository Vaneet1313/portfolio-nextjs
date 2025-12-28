'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  percentage: number
  label: string
  level: string
  className?: string
}

export default function ProgressBar({ percentage, label, level, className }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className={cn('space-y-2', className)}>
      <div className="flex justify-between text-base mb-1">
        <span className="text-gray-900 dark:text-white">{label}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-primary dark:bg-blue-500 rounded-full h-2"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  )
}

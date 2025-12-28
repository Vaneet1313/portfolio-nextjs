'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  target?: string
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const variants = {
  primary: 'bg-primary dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-700',
  secondary: 'bg-accent text-white hover:bg-blue-600',
  ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300',
  outline: 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  target,
  disabled,
  type = 'button',
  onClick
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium rounded-md transition-colors',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

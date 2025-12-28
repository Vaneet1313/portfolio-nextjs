import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'outline'
  className?: string
}

const variants = {
  default: 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300',
  primary: 'bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-400',
  outline: 'border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-gray-400'
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

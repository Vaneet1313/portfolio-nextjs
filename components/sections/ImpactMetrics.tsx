'use client'

import { motion } from 'framer-motion'
import { DollarSign, Users, Globe, TrendingUp } from 'lucide-react'
import { impactMetrics } from '@/data/siteConfig'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren'

const iconMap: Record<string, React.ReactNode> = {
  dollar: <DollarSign className="w-7 h-7 text-primary dark:text-blue-400" />,
  users: <Users className="w-7 h-7 text-primary dark:text-blue-400" />,
  globe: <Globe className="w-7 h-7 text-primary dark:text-blue-400" />,
  trending: <TrendingUp className="w-7 h-7 text-primary dark:text-blue-400" />
}

export default function ImpactMetrics() {
  return (
    <section className="bg-gray-50 dark:bg-slate-800/50 py-8 border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactMetrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <motion.div
                className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700"
                whileHover={{ y: -4, boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="w-14 h-14 bg-primary/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  {iconMap[metric.icon]}
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {metric.displayValue}
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

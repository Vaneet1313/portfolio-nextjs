'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-10 md:py-14 bg-gray-50 dark:bg-slate-800/50 px-6 scroll-margin-top"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Transformative initiatives with measurable impact"
          className="mb-10"
        />

        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {projects.filter((p) => p.featured).map((project) => (
            <StaggerItem key={project.id}>
              <Link href={`/case-studies/${project.slug}`}>
                <motion.div
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700 h-full group cursor-pointer"
                  whileHover={{ y: -4, boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="primary">
                      {project.company} • {project.dateRange}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
                  </div>

                  {/* Summary */}
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-gray-100 dark:border-slate-700">
                    <div className="flex items-center justify-between text-base">
                      <span className="text-gray-600 dark:text-gray-400">
                        {project.impactLabel}:
                      </span>
                      <span
                        className={cn(
                          'font-semibold',
                          project.impactColor === 'green'
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-primary dark:text-blue-400'
                        )}
                      >
                        {project.impactValue}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeIn from '@/components/animations/FadeIn'
import { experiences, Experience } from '@/data/experience'
import { cn } from '@/lib/utils'

const colorClasses = {
  primary: 'bg-primary dark:bg-blue-600',
  accent: 'bg-accent dark:bg-blue-500',
  gray: 'bg-gray-500 dark:bg-slate-600'
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <FadeIn direction="left" delay={index * 0.1}>
      <motion.div
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700"
        whileHover={{ y: -4, boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="flex items-start gap-4">
          {/* Company Badge */}
          <div
            className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0',
              colorClasses[experience.color]
            )}
          >
            {experience.abbreviation}
          </div>

          <div className="flex-grow">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.role}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {experience.company} • {experience.location}
                </p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full whitespace-nowrap">
                {experience.dateRange}
              </span>
            </div>

            {/* Highlights */}
            <ul className="space-y-1.5 text-base text-gray-600 dark:text-gray-300 mt-3 mb-3">
              {experience.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary dark:text-blue-400 mt-1 flex-shrink-0">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-3">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-10 md:py-14 bg-gray-50 dark:bg-slate-800/50 px-6 scroll-margin-top"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Professional Experience"
          subtitle="15+ years of driving digital transformation"
          className="mb-8"
        />

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

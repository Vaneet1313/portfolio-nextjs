'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ProgressBar from '@/components/ui/ProgressBar'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren'
import { biSkills, cloudPlatforms, methodologies, coreCompetencies } from '@/data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-10 md:py-14 px-6 scroll-margin-top">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Comprehensive expertise across BI, Cloud, and Data platforms"
          className="mb-10"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {/* BI Tools with Progress Bars */}
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary dark:text-blue-400">
                {biSkills.title}
              </h3>
              <div className="space-y-4">
                {biSkills.skills.map((skill) => (
                  <ProgressBar
                    key={skill.name}
                    label={skill.name}
                    level={skill.level}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Cloud & Data Platforms */}
          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary dark:text-blue-400">
                Cloud & Data Platforms
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {cloudPlatforms.map((platform) => (
                  <motion.div key={platform} whileHover={{ scale: 1.05 }}>
                    <Badge variant="outline">{platform}</Badge>
                  </motion.div>
                ))}
              </div>

              <h3 className="font-semibold text-lg mb-4 text-primary dark:text-blue-400 mt-8">
                Methodologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((method) => (
                  <motion.div key={method} whileHover={{ scale: 1.05 }}>
                    <Badge variant="primary">{method}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Core Competencies */}
          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary dark:text-blue-400">
                Core Competencies
              </h3>
              <StaggerChildren className="space-y-3" staggerDelay={0.05}>
                {coreCompetencies.map((competency) => (
                  <StaggerItem key={competency}>
                    <motion.div
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-base text-gray-700 dark:text-gray-300">
                        {competency}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

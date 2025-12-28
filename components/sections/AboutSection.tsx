'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Wrench } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren'
import { education, certifications, focusAreas } from '@/data/skills'

export default function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-14 px-6 scroll-margin-top">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Bio */}
          <div>
            <SectionHeading title="About Me" className="mb-6" />

            <FadeIn direction="up" delay={0.1}>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Data Technology Professional with over 13 years of expertise in Data Engineering and Business Intelligence.
                Currently serving as AVP at AIG, I lead a global team of 20+ professionals across North America and offshore delivery centers.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I've spearheaded the modernization of Data Warehouse and BI platforms, resulting in $1M+ annual savings.
                My approach combines technical excellence with business acumen, backed by an MBA in Finance & Marketing and B.Tech in Computer Science.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <Badge key={area} variant="primary">
                    {area}
                  </Badge>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right - Cards */}
          <StaggerChildren className="space-y-4" staggerDelay={0.1}>
            {education.map((edu, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="border-l-4 border-primary dark:border-blue-500 pl-4 py-3 bg-gray-50 dark:bg-slate-800 rounded-r-lg"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-primary dark:text-blue-400" />
                    <span className="font-semibold text-base text-gray-900 dark:text-white">Education</span>
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-300">
                    {edu.degree} - {edu.field}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}

            <StaggerItem>
              <motion.div
                className="border-l-4 border-accent pl-4 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-base text-gray-900 dark:text-white">Certifications</span>
                </div>
                <div className="text-base text-gray-600 dark:text-gray-300">
                  {certifications.join(' & ')}
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 dark:bg-green-900/20 rounded-r-lg"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Wrench className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-base text-gray-900 dark:text-white">Expertise</span>
                </div>
                <div className="text-base text-gray-600 dark:text-gray-300">
                  Qlik, Power BI, Tableau, Cloud (AWS/Azure), Snowflake
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}

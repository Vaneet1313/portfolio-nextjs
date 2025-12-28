'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Award, MapPin } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-14 bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-5 gap-6 items-center py-4">
          {/* Left Content */}
          <motion.div
            className="md:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={staggerItem}
              className="text-blue-400 font-medium text-sm mb-1 uppercase tracking-wide"
            >
              {siteConfig.title}
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight"
            >
              {siteConfig.tagline.split(' ').slice(0, 2).join(' ')}{' '}
              <br className="hidden md:block" />
              <GradientText>{siteConfig.tagline.split(' ').slice(2).join(' ')}</GradientText>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-3 mb-5">
              <Button href="#projects" variant="secondary" size="lg">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </motion.div>

            {/* Inline Stats */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-700"
            >
              <div>
                <div className="text-2xl font-bold text-blue-400">
                  {siteConfig.stats.yearsExperience}+
                </div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">
                  {siteConfig.stats.programValue}
                </div>
                <div className="text-xs text-gray-400">Program Led</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">
                  {siteConfig.stats.dashboards}+
                </div>
                <div className="text-xs text-gray-400">Dashboards</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div
            className="md:col-span-2"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-lg p-4 md:p-5 backdrop-blur-sm border border-blue-500/20">
              <div className="space-y-3">
                <motion.div
                  className="bg-white/10 p-3 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Current Role</div>
                      <div className="text-white font-semibold text-sm">{siteConfig.currentRole}</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/10 p-3 rounded-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Certifications</div>
                      <div className="text-white font-semibold text-sm">{siteConfig.certifications}</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/10 p-3 rounded-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Location</div>
                      <div className="text-white font-semibold text-sm">{siteConfig.location}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, FileText } from 'lucide-react'
import { useTheme } from 'next-themes'
import { siteConfig, navLinks } from '@/data/siteConfig'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed w-full z-50 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-xl font-bold text-primary dark:text-blue-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {siteConfig.name}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-base">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors relative group font-medium"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary dark:bg-blue-400 transition-all group-hover:w-full" />
                </motion.a>
              ))}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {mounted && (
                  <AnimatePresence mode="wait">
                    {resolvedTheme === 'light' ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="w-4 h-4 text-gray-700" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.button>

              {/* Resume Button */}
              <motion.a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-primary dark:bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-1 md:hidden">
              <motion.button
                onClick={toggleTheme}
                className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {mounted && (resolvedTheme === 'light' ? (
                  <Moon className="w-4 h-4 text-gray-700" />
                ) : (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ))}
              </motion.button>
              <motion.button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-slate-900 z-50 shadow-xl md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-bold text-primary dark:text-blue-400">
                    Menu
                  </span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>

                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors py-2"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <motion.a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2 bg-primary dark:bg-blue-600 text-white px-4 py-3 rounded-md mt-8 font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

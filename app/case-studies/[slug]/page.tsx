import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { caseStudies } from '@/data/projects'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudies.find((s) => s.slug === slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found'
    }
  }

  return {
    title: `${caseStudy.title} | Vaneet Dahiya`,
    description: caseStudy.summary
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = caseStudies.find((s) => s.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  const relatedStudies = caseStudies.filter((s) => s.slug !== slug).slice(0, 2)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <Badge variant="primary" className="mb-4">
              {caseStudy.company} • {caseStudy.dateRange}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {caseStudy.title}
            </h1>

            <p className="text-lg text-gray-300 mb-6">{caseStudy.summary}</p>

            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Challenge */}
          <FadeIn direction="up" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              The Challenge
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </FadeIn>

          {/* Solution */}
          <FadeIn direction="up" delay={0.1} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              The Solution
            </h2>
            <StaggerChildren className="space-y-3">
              {caseStudy.solution.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary dark:text-blue-400">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeIn>

          {/* Results */}
          <FadeIn direction="up" delay={0.2} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Results & Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div
                  key={index}
                  className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {result.metric}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-green-700 dark:text-green-300">
                    {result.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Lessons Learned */}
          {caseStudy.lessonsLearned && (
            <FadeIn direction="up" delay={0.3} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Learnings
              </h2>
              <ul className="space-y-2">
                {caseStudy.lessonsLearned.map((lesson, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-primary dark:text-blue-400 mt-1">▸</span>
                    {lesson}
                  </li>
                ))}
              </ul>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Related Projects */}
      {relatedStudies.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-slate-800/50 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="block p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                >
                  <Badge variant="primary" className="mb-2">
                    {study.company}
                  </Badge>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {study.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

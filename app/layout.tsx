import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaneet Dahiya | Data Engineering & BI Leader',
  description: 'AVP with 13+ years driving digital transformation, leading global teams, and delivering enterprise-scale BI solutions with proven ROI.',
  keywords: ['Data Engineering', 'Business Intelligence', 'BI Consultant', 'Qlik Expert', 'Power BI', 'AWS', 'Snowflake', 'Data Leadership'],
  authors: [{ name: 'Vaneet Dahiya' }],
  openGraph: {
    title: 'Vaneet Dahiya | Data Engineering & BI Leader',
    description: 'Transforming Data into Business Value - 13+ years of expertise in Data Engineering and BI',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaneet Dahiya | Data Engineering & BI Leader',
    description: 'Transforming Data into Business Value'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

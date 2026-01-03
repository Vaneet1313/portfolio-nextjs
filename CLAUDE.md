# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Vaneet Dahiya built with Next.js 14 App Router, showcasing data engineering and BI leadership experience. Single-page application with sections for hero, impact metrics, about, experience, skills, projects, and contact.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom theme configuration
- **Animations**: Framer Motion for page and component animations
- **Forms**: React Hook Form with Zod validation
- **Theme**: next-themes for dark/light mode switching
- **Icons**: lucide-react

### Project Structure
```
app/                          # Next.js App Router
  ├── layout.tsx             # Root layout with metadata, ThemeProvider, Header, Footer
  ├── page.tsx               # Home page - composition of section components
  ├── globals.css            # Global styles and Tailwind directives
  └── case-studies/[slug]/   # Dynamic routes for project case studies

components/
  ├── animations/            # Reusable animation wrappers (FadeIn, StaggerChildren)
  ├── layout/               # Header (navigation) and Footer
  ├── providers/            # ThemeProvider for dark mode
  ├── sections/             # Page sections (Hero, About, Experience, Skills, Projects, Contact, ImpactMetrics)
  └── ui/                   # Reusable UI components (Button, Card, Badge, etc.)

data/
  ├── siteConfig.ts         # Site-wide configuration, navigation links, impact metrics
  ├── projects.ts           # Project data and case studies
  ├── experience.ts         # Work experience data
  └── skills.ts             # Skills and proficiency levels

lib/
  ├── utils.ts              # Utility functions (cn for className merging, formatNumber)
  └── animations.ts         # Framer Motion animation variants
```

### Key Design Patterns

**Path Aliases**: Uses `@/*` for imports (configured in tsconfig.json)
```typescript
import Header from '@/components/layout/Header'
import { siteConfig } from '@/data/siteConfig'
```

**Data-Driven Content**: All content lives in `/data` directory as typed TypeScript exports
- Modify `siteConfig.ts` for site metadata, contact info, social links
- Projects/case studies defined in `projects.ts` with `Project` and `CaseStudy` interfaces
- Experience and skills similarly structured as typed arrays

**Animation System**: Two approaches used
1. Tailwind CSS animations (defined in `tailwind.config.ts`)
2. Framer Motion variants (defined in `lib/animations.ts`)
   - Section components use animation wrappers like `<FadeIn>` and `<StaggerChildren>`
   - Import variants from `lib/animations.ts` for consistent animation behavior

**Theme Configuration**:
- Custom colors defined in `tailwind.config.ts`: primary, accent, dark, darker
- Dark mode enabled via `darkMode: 'class'` in Tailwind config
- ThemeProvider wraps app in `app/layout.tsx`

**Component Organization**:
- `components/sections/`: Full-width page sections (Hero, About, etc.)
- `components/ui/`: Reusable presentational components
- `components/animations/`: Animation wrapper components
- `components/layout/`: Global layout components
- `components/providers/`: Context providers

### Form Handling
Contact form uses React Hook Form + Zod + Formspree
- Form ID configured in `siteConfig.formspreeId`
- Validation schemas inline in ContactSection component

### Case Studies
Dynamic routes at `/case-studies/[slug]`
- Data sourced from `caseStudies` array in `data/projects.ts`
- Each project has corresponding case study with challenge, solution, results, lessons learned

## Important Notes

**Content Updates**: When updating portfolio content, always edit the data files in `/data` directory, not hardcoded strings in components.

**TypeScript**: Strict mode enabled. All data structures are typed with interfaces.

**Animations**: Framer Motion components must be client-side (`'use client'` directive). Animation variants are centralized in `lib/animations.ts` for consistency.

**Styling**: Uses Tailwind + custom utilities. The `cn()` function from `lib/utils.ts` merges Tailwind classes properly.

**No Test Suite**: This project does not include automated tests.

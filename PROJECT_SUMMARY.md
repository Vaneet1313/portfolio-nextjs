# Portfolio Website - Project Summary

## Overview
Professional portfolio website for Vaneet Dahiya built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Repository
- **GitHub**: https://github.com/Vaneet1313/portfolio-nextjs
- **Visibility**: Public

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with dark mode
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod + Formspree
- **Icons**: Lucide React

## Project Structure
```
portfolio-nextjs/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page (all sections)
│   ├── globals.css             # Global styles
│   └── case-studies/[slug]/    # Dynamic case study pages
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Hero, About, Experience, Skills, Projects, Contact
│   ├── ui/                     # Button, Badge, Card, ProgressBar, etc.
│   ├── animations/             # FadeIn, StaggerChildren
│   └── providers/              # ThemeProvider
├── data/
│   ├── siteConfig.ts           # Contact info, social links, stats
│   ├── experience.ts           # Work history
│   ├── skills.ts               # Technical skills
│   └── projects.ts             # Featured projects
├── lib/
│   ├── utils.ts                # cn() utility
│   └── animations.ts           # Framer Motion variants
└── public/
    └── resume/                 # Resume PDF
```

## Configuration

### Site Config (data/siteConfig.ts)
- **Email**: Vaneetdahiya@gmail.com
- **Phone**: 732-666-7198
- **LinkedIn**: https://www.linkedin.com/in/vaneet-dahiya-b8621425/
- **GitHub**: https://github.com/Vaneet1313
- **Formspree ID**: mwvknnkw

### Color Scheme
- **Hero Background**: Deep Navy Blue gradient (`from-[#0f172a] to-[#1e3a5f]`)
- **Primary Color**: #1e40af (light) / #3b82f6 (dark)
- **Dark Mode**: Enabled via class strategy

## Local Development

### Install Dependencies
```bash
cd c:\CodeRepos\portfoliowebsite\portfolio-nextjs
npm install
```

### Run Dev Server
```bash
npm run dev
```
Site runs at http://localhost:3000 (or 3001 if 3000 is in use)

### Build for Production
```bash
npm run build
```

## Deployment (AWS Amplify)

### Steps:
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "Create new app" → "Host web app"
3. Select GitHub as source
4. Authorize AWS to access your GitHub
5. Select repository: `Vaneet1313/portfolio-nextjs`
6. Select branch: `master`
7. Amplify auto-detects Next.js and configures build
8. Click "Save and deploy"

### Requirements:
- GitHub repository must be public (or use Amplify paid tier for private repos)

## Key Features

### Sections
1. **Hero**: Name, title, tagline, stats, CTA buttons
2. **Impact Metrics**: 4 cards with key achievements
3. **About**: Bio, education, certifications
4. **Experience**: Timeline of work history (3 roles)
5. **Skills**: BI tools with progress bars, platforms, methodologies
6. **Projects**: 4 featured projects linking to case studies
7. **Contact**: Form with Formspree integration

### Contact Form
- Uses Formspree (ID: mwvknnkw)
- Validation with Zod schema
- FormData submission (not JSON)
- Success/error feedback

### Animations
- Hero text reveal with stagger
- Scroll-triggered fade-ins
- Progress bar animations
- Hover effects on cards

## Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Push changes to GitHub
git add .
git commit -m "Your message"
git push

# Change repo visibility
gh repo edit Vaneet1313/portfolio-nextjs --visibility public --accept-visibility-change-consequences
gh repo edit Vaneet1313/portfolio-nextjs --visibility private --accept-visibility-change-consequences
```

## Files Modified During Session

1. **ContactSection.tsx** - Fixed Formspree form (switched from JSON to FormData)
2. **siteConfig.ts** - Updated LinkedIn and GitHub URLs
3. **HeroSection.tsx** - Changed background to Deep Navy Blue
4. **SectionHeading.tsx** - Reverted header sizes to match original design
5. **Various sections** - Font size adjustments
6. **.gitignore** - Created to exclude node_modules and .next

## Troubleshooting

### Form not working
- Ensure Formspree ID is correct in siteConfig.ts
- Check browser console for errors
- Verify domain is allowed in Formspree settings

### Social links not working
- LinkedIn: Must include full URL with username (e.g., `/in/vaneet-dahiya-b8621425/`)
- GitHub: Case-sensitive username

### Dev server port conflict
- If port 3000 is in use, Next.js automatically uses 3001

### Git issues with "nul" file
- Windows reserved filename issue
- Delete the file: `rm -f "./nul"`

---

*Last updated: December 2024*

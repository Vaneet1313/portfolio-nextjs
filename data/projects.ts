export interface Project {
  id: string
  slug: string
  title: string
  company: string
  dateRange: string
  duration: string
  summary: string
  technologies: string[]
  impactLabel: string
  impactValue: string
  impactColor: 'green' | 'primary'
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'bi-platform-modernization',
    title: 'BI Platform Modernization',
    company: 'AIG',
    dateRange: '2020-2021',
    duration: '12 months',
    summary: 'Led enterprise-wide migration from legacy Oracle BI to modern cloud-based platform, achieving $1M annual cost savings and completing 2 months ahead of schedule.',
    technologies: ['Cloud Migration', 'AWS', 'Cost Optimization'],
    impactLabel: 'Impact',
    impactValue: '$1M saved annually',
    impactColor: 'green',
    featured: true
  },
  {
    id: '2',
    slug: 'global-bi-program',
    title: 'Global BI Program ($5M)',
    company: 'AIG',
    dateRange: '2018-Present',
    duration: '7+ years',
    summary: 'Managed $5M BI program rollout across US, APAC, and EMEA. Created COE and eliminated duplicate reporting across business units.',
    technologies: ['Program Management', 'QlikSense', 'Global Delivery'],
    impactLabel: 'Scope',
    impactValue: '3 Regions, On-time Delivery',
    impactColor: 'primary',
    featured: true
  },
  {
    id: '3',
    slug: 'dashboard-redesign',
    title: 'Dashboard Redesign (200+)',
    company: 'AIG',
    dateRange: '2019-Present',
    duration: '6+ years',
    summary: 'Led team to redesign 200+ reports and dashboards with zero business interruption. Improved user satisfaction and data accessibility.',
    technologies: ['UX Design', 'Power BI', 'Team Leadership'],
    impactLabel: 'Achievement',
    impactValue: 'Zero downtime',
    impactColor: 'primary',
    featured: true
  },
  {
    id: '4',
    slug: 'data-quality-framework',
    title: 'Data Quality Framework',
    company: 'Multiple',
    dateRange: '2017-2020',
    duration: 'Ongoing',
    summary: 'Established enterprise-wide data quality methodology, processes, and governance standards. Improved data accuracy and business trust.',
    technologies: ['Data Governance', 'Quality Mgmt', 'Process Design'],
    impactLabel: 'Impact',
    impactValue: 'Enterprise-wide adoption',
    impactColor: 'primary',
    featured: true
  }
]

export interface CaseStudy extends Project {
  challenge: string
  solution: string[]
  results: { metric: string; value: string }[]
  lessonsLearned?: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    ...projects[0],
    challenge: 'Legacy Oracle BI platform was costly to maintain, slow in performance, and lacked modern cloud capabilities required for business agility.',
    solution: [
      'Conducted comprehensive assessment of existing BI infrastructure and usage patterns',
      'Designed cloud-native architecture leveraging AWS services',
      'Implemented phased migration approach to minimize business disruption',
      'Established new data governance and security protocols',
      'Trained teams on new platform capabilities'
    ],
    results: [
      { metric: 'Annual Cost Savings', value: '$1M' },
      { metric: 'Timeline', value: '2 months ahead' },
      { metric: 'Downtime', value: 'Zero' },
      { metric: 'User Adoption', value: '95%' }
    ],
    lessonsLearned: [
      'Early stakeholder engagement is critical for smooth transitions',
      'Phased migration reduces risk significantly',
      'Investing in training pays dividends in adoption'
    ]
  },
  {
    ...projects[1],
    challenge: 'Multiple disjointed BI teams across regions leading to duplicate reporting, inconsistent metrics, and high operational costs.',
    solution: [
      'Partnered with business leaders to understand regional requirements',
      'Created Center of Excellence (COE) to standardize BI practices',
      'Restructured teams for optimal global delivery',
      'Implemented unified reporting standards and KPI definitions',
      'Established governance framework for ongoing alignment'
    ],
    results: [
      { metric: 'Program Budget', value: '$5M' },
      { metric: 'Regions Covered', value: '3 (US, APAC, EMEA)' },
      { metric: 'Delivery Status', value: 'On-time, On-budget' },
      { metric: 'Duplicate Reports Eliminated', value: '40%' }
    ]
  },
  {
    ...projects[2],
    challenge: 'Over 200 legacy reports with outdated designs, poor user experience, and fragmented across multiple systems.',
    solution: [
      'Audited existing reports for usage and business value',
      'Designed modern, user-centric dashboard templates',
      'Led team of 20+ to execute redesign in phases',
      'Implemented version control and approval workflows',
      'Established ongoing feedback loops with users'
    ],
    results: [
      { metric: 'Reports Redesigned', value: '200+' },
      { metric: 'Business Interruption', value: 'Zero' },
      { metric: 'User Satisfaction', value: 'Significantly improved' },
      { metric: 'Team Size', value: '20+ members' }
    ]
  },
  {
    ...projects[3],
    challenge: 'Inconsistent data quality across business units leading to unreliable reporting and eroded business trust in data.',
    solution: [
      'Established data quality forum with cross-functional representation',
      'Developed methodology for measuring and monitoring data quality',
      'Created processes for data lineage documentation',
      'Implemented critical data element (CDE) metadata standards',
      'Built automated quality rules and alerting'
    ],
    results: [
      { metric: 'Adoption', value: 'Enterprise-wide' },
      { metric: 'Data Accuracy', value: 'Significantly improved' },
      { metric: 'Business Trust', value: 'Restored' },
      { metric: 'Issue Resolution Time', value: 'Reduced 50%' }
    ]
  }
]

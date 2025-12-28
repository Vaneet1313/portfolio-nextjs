export interface Skill {
  name: string
  level: 'Expert' | 'Advanced' | 'Proficient'
  percentage: number
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export const biSkills: SkillCategory = {
  id: 'bi-tools',
  title: 'Business Intelligence',
  skills: [
    { name: 'Qlikview & QlikSense', level: 'Expert', percentage: 95 },
    { name: 'Power BI', level: 'Advanced', percentage: 90 },
    { name: 'Tableau', level: 'Advanced', percentage: 85 },
    { name: 'Cognos & ThoughtSpot', level: 'Proficient', percentage: 75 }
  ]
}

export const cloudPlatforms: string[] = [
  'Snowflake',
  'AWS',
  'Azure',
  'Hadoop',
  'Oracle',
  'SQL Server',
  'DB2',
  'Netezza',
  'Informatica'
]

export const methodologies: string[] = [
  'SAFe Agile',
  'Data Governance',
  'Data Quality'
]

export const coreCompetencies: string[] = [
  'Team Leadership (20+ members)',
  'Cloud Migration Strategy',
  'Cost Optimization (30%)',
  'Program Management ($5M+)',
  'Stakeholder Management',
  'Data Quality Framework'
]

export const education = [
  {
    degree: 'MBA',
    field: 'Finance & Marketing',
    institution: 'NIT Kurukshetra University'
  },
  {
    degree: 'B.Tech',
    field: 'Computer Science & Technology',
    institution: 'Kurukshetra University'
  }
]

export const certifications = [
  'SAFe 4 Practitioner',
  'Qlik Certified'
]

export const focusAreas = [
  'Leadership',
  'Cloud Migration',
  'Cost Optimization',
  'Team Building'
]

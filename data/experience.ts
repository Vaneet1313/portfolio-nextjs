export interface Experience {
  id: string
  company: string
  abbreviation: string
  role: string
  location: string
  dateRange: string
  highlights: string[]
  technologies: string[]
  color: 'primary' | 'accent' | 'gray'
}

export const experiences: Experience[] = [
  {
    id: 'aig',
    company: 'AIG',
    abbreviation: 'AIG',
    role: 'AVP, Data Engineering and Business Intelligence',
    location: 'New York & New Jersey',
    dateRange: 'Jun 2017 - Present',
    highlights: [
      'Managed and executed BI Program (~$5M) successfully rolled out across US, APAC, and EMEA',
      'Partnered with business leaders to form COE by restructuring multiple disjointed teams, eliminating duplicate reporting',
      'Led team of ~20 people to redesign 200+ reports and dashboards with zero business interruption',
      'Achieved $1M annual savings through platform modernization and cut vendor costs by 30% via contract negotiation',
      'Spearheaded cross-functional initiative to migrate all legacy and current data to cloud (AWS/Azure)',
      'Built high-performance global cross-functional team of analysts, data architects, and BI developers',
      'Consolidated and upgraded legacy Oracle BI platforms, completed 2 months ahead of schedule',
      'Partnered with senior leaders to identify opportunities and leverage BI platform for significant cost reduction',
      'Hired, trained, and mentored talent while monitoring team morale to maintain collaborative environments',
      'Controlled project risks by identifying trigger events and establishing response/contingency plans',
      'Created SOPs, KPIs, and overall operationalization of assigned services and applications',
      'Measured and monitored data quality, identifying business-impacting data quality issues'
    ],
    technologies: ['QlikSense', 'Power BI', 'AWS', 'Snowflake', 'Team Leadership'],
    color: 'primary'
  },
  {
    id: 'orbit',
    company: 'Orbit Systems Inc',
    abbreviation: 'OSI',
    role: 'Business Intelligence Consultant & Architect',
    location: 'New York',
    dateRange: 'Oct 2013 - Jun 2017',
    highlights: [
      'Designed sophisticated reports with KPIs, dimensions, trends, and selection filters using Qlik suite',
      'Generated executive scorecards, sales metrics, and business KPI detail reporting for senior executives',
      'Provided self-service reporting capabilities using Power BI, QlikSense, and Cognos BI tools',
      'Assessed project requirements, performed needs/gap analysis, and developed action plans and timelines',
      'Developed POCs and delivered business ROI/technology strategic implementation presentations',
      'Ran data quality forum with representatives across business functions to resolve data issues',
      'Developed processes to document and maintain data lineage, critical data element metadata, and quality rules',
      'Deployed Qlikview Dashboards and managed daily Qlikview jobs updating QVD files',
      'Scoped and defined reporting/dashboard requirements and KPIs with business teams',
      'Migrated reports from Development to Acceptance/Production Server environments'
    ],
    technologies: ['Qlikview', 'Power BI', 'Cognos', 'Data Quality', 'POC Development'],
    color: 'accent'
  },
  {
    id: 'decisive',
    company: 'Decisive Analytical Solutions',
    abbreviation: 'DAS',
    role: 'BI Consultant',
    location: 'Bangalore & Woodbridge',
    dateRange: 'Jun 2009 - Oct 2013',
    highlights: [
      'Participated in JAD process with different business segments in designing BI applications',
      'Developed dashboards pertaining to KPI monitoring and created dynamic ad-hoc reports for users',
      'Analyzed data from Google Analytics, Plumb5, and Quant5 to create customized reports',
      'Incorporated best practices and methods to design robust BI applications',
      'Responded to users regarding access privileges and questions about data',
      'Involved in dashboard development and unit testing of BI solutions'
    ],
    technologies: ['Google Analytics', 'BI Development', 'KPI Dashboards'],
    color: 'gray'
  }
]

export type SkillGroup = {
  title: string
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    description:
      'Building responsive, maintainable interfaces with modern React patterns and strong TypeScript safety.',
    skills: ['JavaScript', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'SCSS', 'Shadcn UI', 'Vue.js']
  },
  {
    title: 'OTT Development',
    description:
      'Delivering smooth streaming experiences across web platforms with performance and reliability in mind.',
    skills: ['OTT Platform Features', 'Video Playback Integrations', 'Streaming UX', 'Content Delivery Workflows']
  },
  {
    title: 'CI/CD & DevOps',
    description: 'Automating build, test, and deployment flows so releases are fast, consistent, and production-ready.',
    skills: ['CI/CD Pipelines', 'Jenkins', 'Docker', 'Nexus', 'Kubernetes']
  },
  {
    title: 'Quality & Delivery',
    description: 'Shipping robust software with an emphasis on performance, observability, and developer experience.',
    skills: ['Performance Optimization', 'Code Reviews', 'Monitoring Basics', 'Scalable Architecture']
  }
]

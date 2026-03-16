export type Project = {
  title: string
  summary: string
  techStack: string[]
  imageSrc: string
  imageAlt: string
  liveUrl?: string
  repoUrl?: string
}

export const featuredProjects: Project[] = [
  {
    title: 'Cardano Talent',
    summary:
      'Hiring platform focused on secure, transparent, and efficient talent matching, helping employers connect with qualified candidates faster.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageSrc: '/images/project-1.png',
    imageAlt: 'Cardano Talent hiring platform interface preview',
    liveUrl: 'https://cardano-talent.vercel.app/'
  },
  {
    title: 'Crypto Influencer Platform',
    summary:
      'Platform for connecting crypto brands with influencers, featuring profile discovery, and performance-focused user flows.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageSrc: '/images/project-2.png',
    imageAlt: 'Crypto Influencer Platform campaign dashboard preview',
    liveUrl: 'https://crypto-influencer.vercel.app/'
  },
  {
    title: 'Personal Finance App',
    summary:
      'Personal finance experience for tracking income, expenses, and budgeting goals through dashboards and simple planning tools.',
    techStack: ['JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageSrc: '',
    imageAlt: '',
    repoUrl: '#'
  }
]

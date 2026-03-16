export type Project = {
  title: string
  summary: string
  outcome: string
  techStack: string[]
  imageSrc: string
  imageAlt: string
  liveUrl?: string
  repoUrl?: string
}

export const featuredProjects: Project[] = [
  {
    title: 'Streaming Platform Dashboard',
    summary:
      'Developed a React and TypeScript dashboard for managing OTT content lifecycle, release schedules, and viewer insights.',
    outcome: 'Improved publishing workflows and reduced operational overhead with a unified internal tool.',
    techStack: ['React', 'TypeScript', 'Next.js', 'REST APIs', 'Tailwind CSS'],
    imageSrc: '/images/image-1.webp',
    imageAlt: 'Analytics and OTT dashboard project preview',
    liveUrl: '#'
  },
  {
    title: 'CI/CD Modernization Initiative',
    summary:
      'Designed and standardized multi-environment pipelines for build, test, and deployment with safer release gates.',
    outcome: 'Decreased deployment lead time and increased release reliability across multiple product teams.',
    techStack: ['Jenkins', 'Docker', 'Kubernetes', 'Nexus', 'GitHub Actions'],
    imageSrc: '/images/image-2.webp',
    imageAlt: 'Pipeline and DevOps automation project preview',
    repoUrl: '#'
  },
  {
    title: 'High-Performance Web Experience',
    summary:
      'Built and optimized a customer-facing web app with strong performance budgets, reusable UI architecture, and SEO-first rendering.',
    outcome: 'Delivered faster page loads and smoother interactions while keeping long-term maintainability high.',
    techStack: ['React', 'TypeScript', 'Next.js', 'Web Performance', 'SSR'],
    imageSrc: '/images/og-image.png',
    imageAlt: 'High-performance web application project preview',
    liveUrl: '#'
  }
]

import HeroSection from '@/components/blocks/hero-section/hero-section'
import TimelineSection from '@/components/blocks/changelog-section/timeline-section'
import ContactSection from '@/components/blocks/contact-section/contact-section'
import ProjectsSection from '@/components/blocks/projects-section/projects-section'
import SkillsSection from '@/components/blocks/skills-section/skills-section'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'Nikola Dojcinovic Portfolio',
      description:
        'Portfolio of Nikola Dojcinovic, showcasing software engineering projects, frontend development, OTT solutions, and delivery experience.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en-US'
    }
  ]
}

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent'></div>
      <TimelineSection />
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent'></div>
      <SkillsSection />
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent'></div>
      <ProjectsSection />
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent'></div>
      <ContactSection />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </div>
  )
}

export default Home

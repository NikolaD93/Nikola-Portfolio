import { featuredProjects } from '@/assets/data/projects-content'
import { ProjectsCard } from '@/components/ui/projects-card'

function ProjectsSection() {
  return (
    <section className='py-10 md:py-16'>
      <div className='mx-auto max-w-5xl px-4 md:px-8'>
        <div className='mb-10 space-y-4 text-center md:mb-12'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Featured Projects</h2>
          <p className='text-muted-foreground mx-auto max-w-3xl text-sm md:text-base'>
            A selection of product and platform work focused on performance, reliability, and practical business impact.
          </p>
        </div>

        <div className='grid gap-6 lg:grid-cols-3'>
          {featuredProjects.map(project => (
            <ProjectsCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

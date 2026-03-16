import type { Project } from '@/assets/data/projects-content'
import type { ComponentProps } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type ProjectsCardProps = {
  project: Project
}

export function ProjectsCard({ project }: ProjectsCardProps) {
  return (
    <article className='group relative mx-auto flex h-full w-full max-w-sm flex-col border border-black/20 bg-white/70 p-4 dark:border-white/20 dark:bg-black/30'>
      <Icon className='absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white' />
      <Icon className='absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white' />
      <Icon className='absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white' />
      <Icon className='absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white' />

      <div className='relative overflow-hidden rounded-md'>
        <img
          className='h-40 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105'
          src={project.imageSrc}
          alt={project.imageAlt}
          loading='lazy'
        />
        <div className='pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-400/10 via-transparent to-blue-500/20 opacity-80'></div>
      </div>

      <h3 className='mt-4 text-base font-semibold text-black dark:text-white'>{project.title}</h3>
      <p className='mt-2 text-sm font-light text-black/80 dark:text-white/80'>{project.summary}</p>

      <div className='mt-4 flex flex-wrap gap-2'>
        {project.techStack.map(skill => (
          <Badge key={skill} variant='secondary' className='bg-secondary/80 px-2 py-0.5 text-xs'>
            {skill}
          </Badge>
        ))}
      </div>

      <div className='mt-auto flex gap-2 pt-5'>
        {project.liveUrl ? (
          <Button asChild size='sm'>
            <a href={project.liveUrl} target='_blank' rel='noreferrer'>
              Live Demo
            </a>
          </Button>
        ) : null}
        {project.repoUrl ? (
          <Button asChild size='sm' variant='outline'>
            <a href={project.repoUrl} target='_blank' rel='noreferrer'>
              GitHub
            </a>
          </Button>
        ) : null}
      </div>
    </article>
  )
}

type IconProps = ComponentProps<'svg'>

const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  )
}

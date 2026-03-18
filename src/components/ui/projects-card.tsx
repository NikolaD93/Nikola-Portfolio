import type { Project } from '@/assets/data/projects-content'
import type { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import { TechIcon } from '@/components/ui/tech-icon'

type ProjectsCardProps = {
  project: Project
}

export function ProjectsCard({ project }: ProjectsCardProps) {
  return (
    <article className='group relative mx-auto flex h-full w-full max-w-sm flex-col border border-black/20 p-4 dark:border-white/20'>
      <Icon className='absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white' />
      <Icon className='absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white' />
      <Icon className='absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white' />
      <Icon className='absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white' />

      <div className='relative h-40 w-full overflow-hidden rounded-md'>
        {project.imageSrc ? (
          <img
            className='h-40 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105'
            src={project.imageSrc}
            alt={project.imageAlt}
            loading='lazy'
          />
        ) : (
          <div className='pointer-events-none h-full w-full bg-linear-to-br from-cyan-400/10 via-transparent to-blue-500/20 opacity-80'></div>
        )}
      </div>

      <h3 className='mt-4 text-base font-semibold text-black dark:text-white'>{project.title}</h3>
      <p className='mt-2 text-sm font-light text-black/80 dark:text-white/80'>{project.summary}</p>

      <div className='mt-4 flex flex-wrap items-center gap-2'>
        {project.techStack.map(skill => (
          <TechIcon key={skill} skill={skill} />
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
          <Button size='sm' variant='outline' disabled>
            Comming Soon..
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

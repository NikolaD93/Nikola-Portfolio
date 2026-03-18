import type { ReactElement } from 'react'
import {
  Html5 as Html5Icon,
  Css as CssIcon,
  Javascript as JavascriptIcon,
  Jenkins as JenkinsIcon,
  Docker as DockerIcon,
  React as ReactIcon,
  ReactQuery as ReactQueryIcon,
  TailwindCss as TailwindCssIcon,
  Typescript as TypescriptIcon,
  Vite as ViteIcon,
  Vue as VueIcon,
  Pinia as PiniaIcon,
  Sass as SassIcon,
  Zod as ZodIcon,
  Playwright as PlaywrightIcon,
  Jest as JestIcon,
  Sonar as SonarIcon,
  ShadcnUi as ShadcnUiIcon,
  Motion as MotionIcon,
  Sentry as SentryIcon,
  Firebase as FirebaseIcon,
  Nodedotjs as NodejsIcon,
  Expressdotjs as ExpressdotjsIcon,
  Mongodb as MongodbIcon,
  Redux as ReduxIcon,
  Supabase as SupabaseIcon,
  Figma as FigmaIcon
} from '@thesvg/react'
import { Code2 } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type TechIconProps = {
  skill: string
  className?: string
  content?: string
}

export function TechIcon({ skill, className, content }: TechIconProps) {
  const normalizedSkill = skill.toLowerCase().trim()
  const iconClassName = 'h-4 w-4'

  const icons: Record<string, { icon: ReactElement; wrapperClassName: string; content: string }> = {
    react: {
      icon: <ReactIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#61DAFB]/10 border border-[#61DAFB]/30',
      content: 'React'
    },
    html: {
      icon: <Html5Icon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#E34F26]/10 border border-[#E34F26]/30',
      content: 'HTML'
    },
    css: {
      icon: <CssIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#1572B6]/10 border border-[#1572B6]/30',
      content: 'CSS'
    },
    'react query': {
      icon: <ReactQueryIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#FF4154]/10 border border-[#FF4154]/30',
      content: 'React Query'
    },
    vue: {
      icon: <VueIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#42B883]/10 border border-[#42B883]/30',
      content: 'Vue'
    },
    pinia: {
      icon: <PiniaIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#FFD859]/10 border border-[#FFD859]/30',
      content: 'Pinia'
    },
    sass: {
      icon: <SassIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#CC6699]/10 border border-[#CC6699]/30',
      content: 'Sass'
    },
    typescript: {
      icon: <TypescriptIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#3178C6]/10 border border-[#3178C6]/30',
      content: 'TypeScript'
    },
    javascript: {
      icon: <JavascriptIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#F7DF1E]/15 border border-[#F7DF1E]/30',
      content: 'JavaScript'
    },
    'tailwind css': {
      icon: <TailwindCssIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#06B6D4]/10 border border-[#06B6D4]/30',
      content: 'Tailwind CSS'
    },
    tailwindcss: {
      icon: <TailwindCssIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#06B6D4]/10 border border-[#06B6D4]/30',
      content: 'Tailwind CSS'
    },
    zod: {
      icon: <ZodIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#3068B7]/10 border border-[#3068B7]/30',
      content: 'Zod'
    },
    vite: {
      icon: <ViteIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#646CFF]/10 border border-[#646CFF]/30',
      content: 'Vite'
    },
    jenkins: {
      icon: <JenkinsIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#D24939]/10 border border-[#D24939]/30',
      content: 'Jenkins'
    },
    docker: {
      icon: <DockerIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#2496ED]/10 border border-[#2496ED]/30',
      content: 'Docker'
    },
    kubernetes: {
      icon: (
        <img
          src='https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/kubernetes/default.svg'
          alt='Kubernetes'
          width={20}
          height={20}
          className='h-5 w-5'
          loading='lazy'
        />
      ),
      wrapperClassName: 'bg-[#326CE5]/10 border border-[#326CE5]/30',
      content: 'Kubernetes'
    },
    playwright: {
      icon: <PlaywrightIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#D83A9B]/10 border border-[#D83A9B]/30',
      content: 'Playwright'
    },
    jest: {
      icon: <JestIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#C21325]/10 border border-[#C21325]/30',
      content: 'Jest'
    },
    sonar: {
      icon: <SonarIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#FD3456]/10 border border-[#FD3456]/30',
      content: 'Sonar'
    },
    shadcn: {
      icon: <ShadcnUiIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#FFFFFF]/10 border border-[#FFFFFF]/30',
      content: 'Shadcn'
    },
    motion: {
      icon: <MotionIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#FFF312]/10 border border-[#FFF312]/30',
      content: 'Motion'
    },
    sentry: {
      icon: <SentryIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#362D59]/10 border border-[#362D59]/30',
      content: 'Sentry'
    },
    firebase: {
      icon: <FirebaseIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#DD2C00]/10 border border-[#DD2C00]/30',
      content: 'Firebase'
    },
    node: {
      icon: <NodejsIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#5FA04E]/10 border border-[#5FA04E]/30',
      content: 'Node.js'
    },
    'node.js': {
      icon: <NodejsIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#5FA04E]/10 border border-[#5FA04E]/30',
      content: 'Node.js'
    },
    'node js': {
      icon: <NodejsIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#5FA04E]/10 border border-[#5FA04E]/30',
      content: 'Node.js'
    },
    nodejs: {
      icon: <NodejsIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#5FA04E]/10 border border-[#5FA04E]/30',
      content: 'Node.js'
    },
    express: {
      icon: <ExpressdotjsIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#000000]/10 border border-[#000000]/30',
      content: 'Express'
    },
    mongodb: {
      icon: <MongodbIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#47A248]/10 border border-[#47A248]/30',
      content: 'MongoDB'
    },
    redux: {
      icon: <ReduxIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#764ABC]/10 border border-[#764ABC]/30',
      content: 'Redux'
    },
    nextjs: {
      icon: (
        <img
          src='https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nextdotjs/default.svg'
          alt='Next.js'
          width={20}
          height={20}
          className='h-5 w-5'
          loading='lazy'
        />
      ),
      wrapperClassName: 'bg-[#000000]/10 border border-[#000000]/30',
      content: 'Next.js'
    },
    'next.js': {
      icon: (
        <img
          src='https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nextdotjs/default.svg'
          alt='Next.js'
          width={20}
          height={20}
          className='h-5 w-5'
          loading='lazy'
        />
      ),
      wrapperClassName: 'bg-[#000000]/10 border border-[#000000]/30',
      content: 'Next.js'
    },
    'next js': {
      icon: (
        <img
          src='https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nextdotjs/default.svg'
          alt='Next.js'
          width={20}
          height={20}
          className='h-5 w-5'
          loading='lazy'
        />
      ),
      wrapperClassName: 'bg-[#000000]/10 border border-[#000000]/30',
      content: 'Next.js'
    },
    nextdotjs: {
      icon: (
        <img
          src='https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nextdotjs/default.svg'
          alt='Next.js'
          width={20}
          height={20}
          className='h-5 w-5'
          loading='lazy'
        />
      ),
      wrapperClassName: 'bg-[#000000]/10 border border-[#000000]/30',
      content: 'Next.js'
    },
    supabase: {
      icon: <SupabaseIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#3ECF8E]/10 border border-[#3ECF8E]/30',
      content: 'Supabase'
    },
    figma: {
      icon: <FigmaIcon className='h-5 w-5' />,
      wrapperClassName: 'bg-[#F24E1E]/10 border border-[#F24E1E]/30',
      content: 'Figma'
    }
  }

  const iconItem = icons[normalizedSkill]

  return (
    <Tooltip>
      <TooltipTrigger>
        <span
          className={`inline-flex size-8 items-center justify-center rounded-md ${iconItem?.wrapperClassName ?? 'bg-secondary/80 border border-black/10 text-black dark:border-white/15 dark:text-white'} ${className ?? ''}`}
          title={skill}
          aria-label={skill}
        >
          {iconItem?.icon ?? <Code2 className={iconClassName} />}
        </span>
      </TooltipTrigger>
      <TooltipContent>{iconItem?.content ?? skill}</TooltipContent>
    </Tooltip>
  )
}

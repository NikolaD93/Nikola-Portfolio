import type { ReactNode } from 'react'

import { Badge } from '@/components/ui/badge'

type TimelineItemProps = {
  date: string
  position: string
  children: ReactNode
}

const TimelineItem = ({ date, position, children }: TimelineItemProps) => {
  return (
    <div id={position} className='relative flex scroll-mt-18 justify-end gap-2'>
      <div className='sticky top-19 flex w-50 flex-col items-end gap-2 self-start pb-4 max-md:hidden'>
        <Badge className='flex size-6 w-auto justify-end rounded-sm text-sm font-medium'>{position}</Badge>
        <div className='text-muted-foreground text-right text-sm font-medium'>{date}</div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div className='sticky top-19 flex size-6 items-center justify-center'>
          <span className='bg-primary/20 flex size-4.5 shrink-0 items-center justify-center rounded-full'>
            <span className='bg-primary size-3 rounded-full' />
          </span>
        </div>
        <span className='w-px flex-1 border' />
      </div>
      <div className='flex flex-1 flex-col gap-4 pb-11 pl-3 md:pl-6 lg:pl-9'>{children}</div>
    </div>
  )
}

export default TimelineItem

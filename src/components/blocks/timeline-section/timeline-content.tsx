import TimelineItem from '@/components/blocks/timeline-section/timeline-items'
import { timelineData } from '@/assets/data/timeline-data'
import { TechIcon } from '@/components/ui/tech-icon'
import { MapPin } from 'lucide-react'

function TimelineContent() {
  return (
    <div>
      {timelineData.map((item, index) => (
        <TimelineItem key={`${item.company}-${item.date}-${index}`} date={item.date} position={item.position}>
          <div className='space-y-4'>
            <div className='flex justify-between'>
              <h3 className='text-xl font-semibold'>{item.company}</h3>
              <h3>
                <MapPin className='ml-1 inline-block' /> {item.location}
              </h3>
            </div>
            <p className='text-muted-foreground text-sm'>{item.summary}</p>
            <div className='flex flex-wrap items-center gap-2'>
              {item.techStack.map(skill => (
                <TechIcon key={skill} skill={skill} />
              ))}
            </div>
            <div className='space-y-3'>
              <ul className='text-muted-foreground list-inside list-disc space-y-3 text-sm'>
                {item.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </TimelineItem>
      ))}
    </div>
  )
}

export default TimelineContent

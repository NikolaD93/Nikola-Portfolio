import { skillGroups } from '@/assets/data/skills-content'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function SkillsSection() {
  return (
    <section className='py-10 md:py-16'>
      <div className='mx-auto max-w-5xl px-4 md:px-8'>
        <div className='mb-10 space-y-4 text-center md:mb-12'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Skills & Tech Stack</h2>
          <p className='text-muted-foreground mx-auto max-w-3xl text-sm md:text-base'>
            I build modern digital products end-to-end, combining strong frontend engineering, scalable architecture,
            and reliable delivery practices.
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          {skillGroups.map(group => (
            <Card
              key={group.title}
              className='border-border/70 bg-card/70 hover:border-primary/40 hover:shadow-primary/10 h-full gap-4 transition-all duration-300 hover:-translate-y-1'
            >
              <CardHeader className='pb-0'>
                <CardTitle className='text-lg'>{group.title}</CardTitle>
                <p className='text-muted-foreground text-sm'>{group.description}</p>
              </CardHeader>
              <CardContent className='flex flex-wrap gap-2'>
                {group.skills.map(skill => (
                  <Badge key={skill} variant='secondary' className='bg-secondary/80 px-2.5 py-1 text-xs'>
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

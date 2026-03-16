import { MailIcon } from 'lucide-react'

import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'nikola.dojcinovic@example.com'

function ContactSection() {
  return (
    <section className='py-10 md:py-16'>
      <div className='mx-auto max-w-5xl px-4 md:px-8'>
        <div className='border-border/70 bg-background relative overflow-hidden rounded-3xl border p-8 text-center md:p-12'>
          <div className='from-primary/10 to-primary/10 absolute inset-0 bg-linear-to-br via-transparent'></div>
          <div className='from-primary/30 absolute -top-20 -left-12 h-44 w-44 rounded-full bg-radial to-transparent blur-2xl'></div>
          <div className='from-primary/25 absolute -right-10 -bottom-20 h-56 w-56 rounded-full bg-radial to-transparent blur-2xl'></div>

          <div className='relative z-10 mx-auto max-w-2xl space-y-4'>
            <p className='text-muted-foreground text-xs tracking-[0.22em] uppercase'>Let&apos;s Work Together</p>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Have a project in mind?</h2>
            <p className='text-muted-foreground text-sm md:text-base'>
              I&apos;m open to collaborating on web products, digital experiences, and engineering challenges of all
              kinds. Send me an email and I&apos;ll get back to you soon.
            </p>

            <div className='pt-2'>
              <a href={`mailto:${contactEmail}`}>
                <CraftButton>
                  <CraftButtonIcon>
                    <MailIcon className='size-3 stroke-2 transition-transform duration-500' />
                  </CraftButtonIcon>
                  <CraftButtonLabel>Email Me</CraftButtonLabel>
                </CraftButton>
              </a>
            </div>

            <p className='text-muted-foreground text-xs'>{contactEmail}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

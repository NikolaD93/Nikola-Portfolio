import V1_3_0 from '@/components/blocks/changelog-section/v1_3_0'
import V1_2_0 from '@/components/blocks/changelog-section/v1_2_0 '
import V1_1_0 from '@/components/blocks/changelog-section/v1_1_0 '

function TimelineSection() {
  return (
    <section>
      <div className='mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-16'>
        <div className='flex flex-col items-center'>
          <div className='mb-10 space-y-4 text-center md:mb-12'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Experience</h2>
            <p className='text-muted-foreground mx-auto max-w-3xl text-sm md:text-base'>
              This is the journey that shaped me as an engineer, from the teams I&apos;ve worked with to the products
              and challenges that taught me how to build with impact.
            </p>
          </div>
          <V1_3_0 />
          <V1_2_0 />
          <V1_1_0 />
        </div>
      </div>
    </section>
  )
}

export default TimelineSection

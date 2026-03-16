function HeroSection() {
  return (
    <section className='-mt-17.5 pt-17.5'>
      <div className='flex flex-col items-center space-y-4 px-4 py-16 text-center md:px-8'>
        <div className='relative mb-8 sm:mb-10'>
          {' '}
          <div className='from-primary-200 via-primary-200 to-primary-300 dark:from-primary-800/50 dark:via-primary-700/30 dark:to-primary-700/50 absolute -inset-0.5 rounded-full bg-gradient-to-r opacity-70 blur-sm'></div>{' '}
          <div className='from-primary-300/20 via-primary-200/20 to-primary-200/20 dark:from-primary-700/20 dark:via-primary-700/10 dark:to-primary-800/20 animate-gradient-xy absolute inset-0 rounded-full bg-gradient-to-r'></div>{' '}
          <div className='relative rounded-full p-0.5 backdrop-blur'>
            {' '}
            <div className='dark:bg-primary-950 relative z-10 overflow-hidden rounded-full'>
              {' '}
              <img
                src='/images/nikola-dojcinovic.png'
                alt='Nikola Dojcinovic'
                loading='eager'
                className='h-24 w-24 rounded-full object-cover transition-all duration-300 sm:h-28 sm:w-28'
              />{' '}
              <div className='absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/10 opacity-40 dark:to-black/30'></div>{' '}
            </div>{' '}
          </div>
          <div className='border-primary-300/30 dark:border-primary-700/20 absolute -inset-3 rotate-12 rounded-full border border-dashed'></div>{' '}
          <div className='border-primary-200/40 dark:border-primary-800/20 absolute -inset-6 -rotate-6 rounded-full border border-dashed'></div>{' '}
        </div>
        <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Nikola Dojcinovic</h2>
        <p className='text-muted-foreground text-xl'>Frontend / Full-Stack Developer</p>
        <p className='text-muted-foreground max-w-lg text-center text-sm md:text-base'>
          I build high-performance web and OTT experiences with React and TypeScript, backed by robust CI/CD automation.
        </p>
      </div>
    </section>
  )
}

export default HeroSection

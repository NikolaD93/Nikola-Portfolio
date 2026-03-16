import { ModeToggle } from '@/components/layout/mode-toggle'

import { cn } from '@/lib/utils'

const Header = ({ className }: { className?: string }) => {
  return (
    <header className={cn('bg-background sticky top-0 z-50 h-17.5', className)}>
      <div className='mx-auto flex h-full max-w-5xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8'>
        <p className='text-2xl font-semibold md:text-3xl'>ND</p>
        <div>
          <ModeToggle />
        </div>
      </div>
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-gradient-to-r from-transparent to-transparent'></div>
    </header>
  )
}

export default Header

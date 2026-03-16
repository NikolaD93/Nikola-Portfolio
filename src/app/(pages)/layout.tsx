import type { ReactNode } from 'react'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className='relative'>
      <Header />
      <main className='flex flex-col'>{children}</main>
      <Footer />
    </div>
  )
}

export default PagesLayout

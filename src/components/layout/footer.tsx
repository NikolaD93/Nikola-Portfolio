import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center'>
      <div className='max-w-5xl py-4 sm:py-6 md:py-8'>
        <div className='flex items-center gap-4'>
          <Link href='#' target='_blank'>
            <FacebookIcon className='size-5' />
          </Link>
          <Link href='#' target='_blank'>
            <InstagramIcon className='size-5' />
          </Link>
          <Link href='#' target='_blank'>
            <TwitterIcon className='size-5' />
          </Link>
          <Link href='#' target='_blank'>
            <YoutubeIcon className='size-5' />
          </Link>
        </div>
      </div>

      <div className='via-primary/20 mx-auto h-px w-4/5 bg-gradient-to-r from-transparent to-transparent'></div>

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`} by{' '}
          <Link href='/#home' className='hover:underline'>
            Nikola Dojcinovic
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer

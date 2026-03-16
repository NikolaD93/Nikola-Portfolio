import type { ReactNode } from 'react'

import { Geist_Mono, Sora } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import { cn } from '@/lib/utils'

import './globals.css'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s | Nikola Dojcinovic',
    default: 'Nikola Dojcinovic | Portfolio'
  },
  description:
    'Portfolio of Nikola Dojcinovic, showcasing software engineering projects, frontend development, OTT solutions, and delivery experience.',
  robots: 'index,follow',
  keywords: [
    'Nikola Dojcinovic',
    'Portfolio',
    'Software Engineer',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript'
  ],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`),
  openGraph: {
    title: {
      template: '%s | Nikola Dojcinovic',
      default: 'Nikola Dojcinovic | Portfolio'
    },
    description:
      "Explore Nikola Dojcinovic's portfolio with selected software projects, engineering skills, and professional experience.",
    type: 'website',
    siteName: 'Nikola Dojcinovic Portfolio',
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Nikola Dojcinovic Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | Nikola Dojcinovic',
      default: 'Nikola Dojcinovic | Portfolio'
    },
    description:
      "Explore Nikola Dojcinovic's portfolio with selected software projects, engineering skills, and professional experience."
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(sora.variable, geistMono.variable, 'flex min-h-full w-full scroll-smooth antialiased')}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout

import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ModelContainer } from '@/src/hooks/useModel'
import { ActiveNavContainer } from '@/src/hooks/useActiveNav'
import { AlertContainer } from '@/src/hooks/useAlert'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  title: 'TeS Careers',
  description: 'Technology Solution Careers',
  icons: 'suitcase.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={poppins.className}>
        <AlertContainer>
        <ModelContainer>
        <ActiveNavContainer>
          {children}
        </ActiveNavContainer>
        </ModelContainer>
        </AlertContainer>  
      </body>
    </html>
  )
}

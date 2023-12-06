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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/> 
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

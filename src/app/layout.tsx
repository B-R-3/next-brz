import { Italianno } from 'next/font/google'

import Navbar from '@/src/components/ui/navbar'

import './globals.css'

const italianno = Italianno({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={italianno.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Ubuntu, Averia_Serif_Libre } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} ${averia.className}`}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}

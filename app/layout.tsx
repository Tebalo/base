"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar'
import { useMediaQuery } from 'react-responsive';
import BottomNav from '@/components/bottomnav'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Base app',
  description: 'Create a base template app',
}

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='grid grid-cols-2'>
        {/* Include shared UI here e.g. a header or sidebar */}
        {!isSmallScreen && <Sidebar/>}
        {children}
        {isSmallScreen && <BottomNav/>}
        </div>
      </body>
    </html>
  )
}

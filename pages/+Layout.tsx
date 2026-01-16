// @ts-ignore
import React from 'react'
import { Navbar } from '@/components/custom/Navbar'
import { Footer } from '@/components/custom/Footer'
import '../src/index.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

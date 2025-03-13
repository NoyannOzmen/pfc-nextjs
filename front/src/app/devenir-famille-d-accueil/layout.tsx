import type { Metadata } from 'next'
import '@/globals.css'
import dynamic from "next/dynamic";
 
export const metadata: Metadata = {
  title: 'Pet Foster Connect',
  description: 'Pet Foster Connect, mise en relations entre refuges de protection animale et familles d\'accueil',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {children}
    </>
  )
}

export default dynamic (() => Promise.resolve(RootLayout), {ssr: true})
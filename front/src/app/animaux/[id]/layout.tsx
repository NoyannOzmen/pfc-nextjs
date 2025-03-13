import type { Metadata } from 'next'
import '@/globals.css'
 
export const metadata: Metadata = {
  title: 'Pet Foster Connect',
  description: 'Pet Foster Connect, mise en relations entre refuges de protection animale et familles d\'accueil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
        <body className="w-screen h-screen font-body flex flex-col bg-fond">
          {children}
        </body>
    </html>

  )
}
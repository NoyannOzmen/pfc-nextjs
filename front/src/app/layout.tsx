import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0');
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
        <body className="w-screen h-screen font-body flex flex-col bg-fond">
          <Providers>
            <Header />
              {children}
            <Footer />
          </Providers>
        </body>
    </html>



  )
}
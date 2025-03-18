import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'material-symbols';
import { Grandstander, Noto_Sans} from 'next/font/google';

const grand = Grandstander ({
  subsets : ['latin'],
})

const noto = Noto_Sans ({
  subsets : ['latin'],
})

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
        <body className={`${noto.className} ${grand.className} w-screen h-screen font-body flex flex-col bg-fond`}>
          <Providers>
            <Header />
              {children}
            <Footer />
          </Providers>
        </body>
    </html>



  )
}
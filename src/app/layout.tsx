import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from '@/app/components/Navbar'
import Footer from './components/Footer'
import './globals.css'
import NavigationLoader from '@/app/components/NavigationLoader'


const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Özgür İrade Derneği',
  description: 'İnsani yardım derneği',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <NavigationLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
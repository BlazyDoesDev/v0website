import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const description =
  'Professional Community Manager specializing in gaming communities, Discord moderation, and player engagement'

export const metadata: Metadata = {
  title: 'Blazy',
  description,
  applicationName: 'Blazy',
  generator: 'v0.app',
  themeColor: '#f97316',
  openGraph: {
    title: 'Blazy',
    description,
    siteName: 'Blazy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Blazy',
    description,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Script
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

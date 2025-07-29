import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'CodevAI – Desarrollo impulsado por IA',
  description: 'CodevAI desarrolla soluciones inteligentes impulsadas por IA para tu negocio.',
  generator: 'Next.js',
  keywords: ['IA', 'desarrollo web', 'asistente de código', 'programación', 'TypeScript', 'inteligencia artificial', 'CodevAI'],
  authors: [{ name: 'CodevAI Team', url: 'https://codevai.cloud' }],
  creator: 'CodevAI',
  publisher: 'CodevAI',
  applicationName: 'CodevAI',
  robots: 'index, follow',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1.0',
  metadataBase: new URL('https://codevai.cloud'),
  openGraph: {
    title: 'CodevAI – Desarrollo impulsado por IA',
    description: 'CodevAI desarrolla soluciones inteligentes impulsadas por IA para tu negocio.',
    url: 'https://codevai.cloud',
    siteName: 'CodevAI',
    images: [
      {
        url: 'https://codevai.cloud/Image-Header.png',
        width: 1200,
        height: 630,
        alt: 'Vista previa de CodevAI',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodevAI – Desarrollo impulsado por IA',
    description: 'CodevAI desarrolla soluciones inteligentes impulsadas por IA para tu negocio.',
    images: ['https://codevai.cloud/Image-Header.png'],
    creator: '@codevai',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}

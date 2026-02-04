import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Info Amor — Informações de Emergência',
  description: 'Informações importantes para os habitantes da Freguesia de Amor, Leiria. Tempestade Kristin.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-[family-name:var(--font-inter)] antialiased bg-[#fafafa] text-slate-900`}
      >
        {children}
      </body>
    </html>
  )
}

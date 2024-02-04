import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'
import { Providers } from '@/components/providers'
import { SpeedInsights } from '@vercel/speed-insights/next';
 
const montserrat = Montserrat({subsets:["latin"]})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth()

  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
        {children}
        <SpeedInsights />
        </Providers>

        </body>
    </html>
    </SessionProvider>
  )
}

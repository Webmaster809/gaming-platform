import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Juegos Online Gratis`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Juega los mejores juegos online gratis. Sin descargas, sin registro. FPS, Battle Royale, Puzzle y más.',
  keywords: 'juegos online gratis, multiplayer browser games, free online games, unblocked games',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://playhub.com'),
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {GA_ID && GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        {ADSENSE_ID && ADSENSE_ID !== 'ca-pub-XXXXXXXXXX' && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}

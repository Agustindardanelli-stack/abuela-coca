import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ADDRESS, INSTAGRAM_URL, SITE_URL, WHATSAPP_NUMBER } from '@/lib/site'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const title = 'Abuela Coca - Sin Gluten y Sin Lactosa | Río Cuarto'
const description =
  'Elaboración artesanal de alimentos sin gluten y sin lactosa en Río Cuarto. Productos caseros con el sabor tradicional de la abuela. Ventas mayoristas y minoristas.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    'sin gluten', 'sin TACC', 'sin lactosa', 'celíacos', 'intolerantes a la lactosa', 'dulces caseros',
    'repostería artesanal', 'premezclas sin gluten', 'Río Cuarto', 'Córdoba', 'Abuela Coca',
    'ventas mayoristas', 'ventas minoristas',
  ],
  authors: [{ name: 'Abuela Coca' }],
  alternates: { canonical: '/' },
  formatDetection: { email: false, address: false, telephone: false },
  // La imagen para compartir la genera src/app/opengraph-image.tsx
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'Abuela Coca',
    title: 'Abuela Coca - Dulces Sin Gluten y Sin Lactosa',
    description: 'Elaboración artesanal de alimentos sin gluten y sin lactosa en Río Cuarto. Productos caseros con el sabor de la abuela.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abuela Coca - Dulces Sin Gluten y Sin Lactosa',
    description: 'Elaboración artesanal de alimentos sin gluten y sin lactosa en Río Cuarto.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
}

export const viewport: Viewport = { themeColor: '#d2691e' }

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Abuela Coca',
  description: 'Elaboración artesanal de alimentos sin gluten y sin lactosa',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  ...(WHATSAPP_NUMBER ? { telephone: `+${WHATSAPP_NUMBER}` } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: 'AR',
  },
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-13:00'],
  priceRange: '$',
  servesCuisine: ['Sin Gluten', 'Sin Lactosa', 'Repostería'],
  sameAs: [INSTAGRAM_URL],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`scroll-smooth ${poppins.variable}`}>
      <body className={`antialiased bg-primary-50 text-primary-900 ${poppins.className}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        {children}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

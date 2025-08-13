import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abuela Coca - Dulces Sin Gluten y Sin Lactosa | Río Cuarto',
  description: 'Elaboración artesanal de alimentos sin gluten y sin lactosa en Río Cuarto. Productos caseros con el sabor tradicional de la abuela. Ventas mayoristas y minoristas.',
  keywords: 'sin gluten, sin lactosa, celiacos, intolerantes lactosa, dulces caseros, repostería artesanal, Río Cuarto, Córdoba, Argentina, Abuela Coca, productos naturales, ventas mayoristas, ventas minoristas',
  authors: [{ name: 'Abuela Coca' }],
  creator: 'Abuela Coca',
  publisher: 'Abuela Coca',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abuela-coca.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://abuela-coca.com',
    siteName: 'Abuela Coca',
    title: 'Abuela Coca - Dulces Sin Gluten y Sin Lactosa',
    description: 'Elaboración artesanal de alimentos sin gluten y sin lactosa en Río Cuarto. Productos caseros con el sabor tradicional de la abuela.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abuela Coca - Dulces Sin Gluten y Sin Lactosa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abuela Coca - Dulces Sin Gluten y Sin Lactosa',
    description: 'Elaboración artesanal de alimentos sin gluten y sin lactosa en Río Cuarto.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-primary-50 text-primary-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Abuela Coca",
              "description": "Elaboración artesanal de alimentos sin gluten y sin lactosa",
              "url": "https://abuela-coca.com",
              "telephone": "+54-358-XXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Luis Reinaudi 1874",
                "addressLocality": "Río Cuarto",
                "addressRegion": "Córdoba",
                "postalCode": "5800",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.1301,
                "longitude": -64.3497
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
              "priceRange": "$$",
              "servesCuisine": ["Sin Gluten", "Sin Lactosa", "Repostería"],
              "acceptsReservations": "False",
              "sameAs": [
                "https://www.instagram.com/abuelacocasinglutenlactosa/"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}
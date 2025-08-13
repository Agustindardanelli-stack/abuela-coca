export const metadata = {
  title: 'Abuela Coca - Dulces Sin Gluten y Sin Lactosa | Río Cuarto',
  description: 'Elaboración artesanal de alimentos sin gluten y sin lactosa en Río Cuarto. Productos caseros con el sabor tradicional de la abuela. Ventas mayoristas y minoristas.',
  keywords: [
    'sin gluten',
    'sin lactosa', 
    'celiacos',
    'intolerantes lactosa',
    'dulces caseros',
    'repostería artesanal',
    'Río Cuarto',
    'Córdoba',
    'Argentina',
    'Abuela Coca',
    'productos naturales',
    'ventas mayoristas',
    'ventas minoristas'
  ],
  authors: [{ name: 'Abuela Coca' }],
  creator: 'Abuela Coca',
  publisher: 'Abuela Coca',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abuela-coca.com'), // Cambiar por tu dominio
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
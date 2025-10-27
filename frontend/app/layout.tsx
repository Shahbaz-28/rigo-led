import type { Metadata } from 'next'
import { GeistSans, GeistMono } from 'geist/font'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Rigo',
    template: '%s | RIGO Lighting'
  },
  description: 'RIGO Lighting offers premium LED lighting solutions for indoor and outdoor applications. Expert consultation, innovative products, and professional lighting services. Get 2-year warranty on all products.',
  keywords: [
    'LED lighting',
    'indoor lighting',
    'outdoor lighting',
    'premium lighting solutions',
    'RIGO lighting',
    'LED fixtures',
    'lighting consultation',
    'commercial lighting',
    'residential lighting',
    'energy efficient lighting',
    'modern lighting',
    'lighting design',
    'LED products',
    'lighting solutions',
    'professional lighting'
  ],
  authors: [{ name: 'RIGO Lighting' }],
  creator: 'RIGO Lighting',
  publisher: 'RIGO Lighting',
  generator: 'RIGO Lighting',
  applicationName: 'RIGO Lighting',
  referrer: 'origin-when-cross-origin',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rigolighting.com',
    siteName: 'RIGO Lighting',
    title: 'RIGO Lighting - Premium LED Solutions & Expert Consultation',
    description: 'RIGO Lighting offers premium LED lighting solutions for indoor and outdoor applications. Expert consultation, innovative products, and professional lighting services.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'RIGO Lighting - Premium LED Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RIGO Lighting - Premium LED Solutions',
    description: 'Premium LED lighting solutions for indoor and outdoor applications. Expert consultation and professional services.',
    images: ['/images/logo.png'],
    creator: '@rigolighting',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://rigolighting.com',
  },
  category: 'Lighting & Electrical',
  classification: 'Business',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RIGO Lighting",
    "description": "Premium LED lighting solutions for indoor and outdoor applications",
    "url": "https://rigolighting.com",
    "logo": "https://rigolighting.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8369051700",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://wa.me/918369051700",
      "https://instagram.com/rigolighting"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Lighting Equipment Manufacturing",
    "products": [
      {
        "@type": "Product",
        "name": "LED Lighting Solutions",
        "description": "Premium LED lighting fixtures for indoor and outdoor applications",
        "category": "Lighting Equipment",
        "brand": {
          "@type": "Brand",
          "name": "RIGO Lighting"
        },
        "offers": {
          "@type": "Offer",
          "description": "2-year warranty on all products",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} overflow-x-hidden`}>
        <Navbar/>
        <div className="mb-[40px] sm:mb-[60px] md:mb-[70px]">
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

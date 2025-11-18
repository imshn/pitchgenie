import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PitchGenie - AI Cold Email & LinkedIn Outreach Platform',
  description: 'Generate personalized B2B cold emails and LinkedIn sequences with AI. Close more deals faster. Trusted by 1000+ founders and sales teams. 93% higher open rates.',
  keywords: 'AI cold email, cold email generator, B2B outreach, LinkedIn automation, email sequences, lead generation, sales automation, founder tools, SDR tools, email personalization',
  metadataBase: new URL('https://pitchgenie.app'),
  alternates: {
    canonical: 'https://pitchgenie.app',
  },
  openGraph: {
    title: 'PitchGenie - AI-Powered B2B Outreach',
    description: 'Close more deals with AI-generated personalized cold emails and LinkedIn messages',
    type: 'website',
    locale: 'en_US',
    url: 'https://pitchgenie.app',
    siteName: 'PitchGenie',
    images: [{
      url: 'https://pitchgenie.app/og-image.png',
      width: 1200,
      height: 630,
      alt: 'PitchGenie AI Outreach Platform',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PitchGenie - AI Cold Email Platform',
    description: 'AI-powered B2B outreach that converts. Join 1000+ teams closing bigger deals.',
    creator: '@pitchgenie',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  authors: [{ name: 'PitchGenie Team', url: 'https://pitchgenie.app' }],
  creator: 'PitchGenie',
  publisher: 'PitchGenie',
  category: 'Business & Finance',
  classification: 'Business Software',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PitchGenie",
          "url": "https://pitchgenie.app",
          "logo": "https://pitchgenie.app/logo.png",
          "description": "AI platform for personalized B2B outreach and cold email generation",
          "sameAs": ["https://twitter.com/pitchgenie"],
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "PitchGenie",
          "applicationCategory": "BusinessApplication",
          "description": "AI-powered cold email and LinkedIn outreach platform for B2B sales",
          "url": "https://pitchgenie.app",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "Contact for pricing",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "500",
            "bestRating": "5",
            "worstRating": "1"
          }
        }) }} />
      </head>
      <body className={`font-sans antialiased bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

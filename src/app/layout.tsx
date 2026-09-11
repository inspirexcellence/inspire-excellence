import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Inspire Excellence',
              url: 'https://inspirexcellence.org',
              description: SITE_DESCRIPTION,
              foundingDate: '2017',
              founder: {
                '@type': 'Person',
                name: 'Prerona Roy',
                jobTitle: 'Founder & Leadership Coach',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '3rd Floor, Star Lilly Apartment, 2 Dum Dum Park',
                addressLocality: 'Kolkata',
                addressRegion: 'West Bengal',
                postalCode: '700055',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91 81002 11066',
                contactType: 'customer service',
                email: 'admin@inspirexcellence.org',
              },
              sameAs: [
                'https://www.facebook.com/InspireExcellence',
                'https://www.youtube.com/@inspirexcellence',
                'https://www.linkedin.com/company/inspire-excellence',
                'https://www.instagram.com/inspirexcellence',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Inspire Excellence',
              url: 'https://inspirexcellence.org',
            }),
          }}
        />
      </head>
      <body className="font-sans bg-ivory text-charcoal antialiased flex flex-col min-h-screen selection:bg-lavender/20 selection:text-navy">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

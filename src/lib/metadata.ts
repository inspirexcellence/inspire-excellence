import { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';

interface MetadataProps {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = '',
  ogImage,
  noIndex = false,
}: MetadataProps): Metadata {
  // Strip any existing brand suffixes to prevent "Title | Inspire Excellence | Inspire Excellence"
  const cleanTitle = title
    .replace(/\s*\|\s*Inspire\s*Excellence.*/i, '')
    .trim();

  // Ensure absolute canonical URL
  const normalizedPath = path
    ? path.startsWith('/')
      ? path
      : `/${path}`
    : '';
  const url = normalizedPath ? `${SITE_URL}${normalizedPath}` : SITE_URL;
  const defaultImage = `${SITE_URL}/og-image.jpg`;

  return {
    title: cleanTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${cleanTitle} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage || defaultImage,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cleanTitle} | ${SITE_NAME}`,
      description,
      images: [ogImage || defaultImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}

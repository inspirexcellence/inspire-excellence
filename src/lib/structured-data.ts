import { Post, Service } from '@/types/content';

const SITE_NAME = 'Inspire Excellence';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://inspirexcellence.org';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 81002 11066',
      contactType: 'customer service',
      email: 'admin@inspirexcellence.org',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi']
    },
    sameAs: [
      'https://facebook.com',
      'https://youtube.com',
      'https://linkedin.com',
      'https://instagram.com'
    ]
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function webPageSchema({ title, description, url }: { title: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `${SITE_URL}${url}`
  };
}

export function articleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [post.imageUrl],
    datePublished: post.date,
    dateModified: post.date,
    author: [{
      '@type': 'Person',
      name: post.author.name,
      url: SITE_URL
    }]
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: '+91 81002 11066',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3rd Floor, Star Lilly Apartment, 2 Dum Dum Park',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700055',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.6074,
      longitude: 88.4063
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '11:00',
      closes: '19:00'
    }
  };
}

export interface Breadcrumb {
  name: string;
  item: string;
}

export function breadcrumbSchema(items: Breadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.item}`
    }))
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME
    }
  };
}

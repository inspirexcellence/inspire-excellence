/* ============================================
   Content Types — Inspire Excellence
   Consistent with the mock data and API layer.
   ============================================ */

export interface SiteSettings {
  siteName: string;
  tagline: string;
  contact: {
    emails: string[];
    phones: string[];
  };
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    fullAddress: string;
  };
  hours: string;
  social: {
    facebook?: string;
    youtube?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string | null;
  linkedin?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  order: number;
}

export interface TransformationArea {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  outcomes: string[];
  image: string | null;
}

export interface Package {
  id: string;
  slug: string;
  title: string;
  description: string;
  features: string[];
  target: string;
  price: string | null;
  priceNote: string;
  highlighted: boolean;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: number;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
  };
  imageUrl: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  episodeNumber: number;
  host: string;
  guest?: string;
  duration: string;
  description: string;
  audioUrl: string;
  thumbnailUrl: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface FlowchartStage {
  id: string;
  title: string;
  description: string;
  order: number;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ---- Types used by constants.ts ----

export interface ContactInfo {
  email: string;
  secondaryEmail: string;
  phone: string;
  secondaryPhone: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  full: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
  timezone: string;
}

export interface SocialLinks {
  facebook?: string;
  youtube?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  email?: string;
}

// ---- SEO ----

export interface SEOFields {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

// ---- Media ----

export interface MediaItem {
  url: string;
  alt: string;
  width: number;
  height: number;
  blurDataUrl?: string;
}

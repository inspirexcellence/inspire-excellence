/* ============================================
   Constants — Inspire Excellence
   Single source of truth for site-wide values.
   ============================================ */

import type { NavItem, FooterColumn } from '@/types/navigation';
import type { ContactInfo, Address, BusinessHours, SocialLinks } from '@/types/content';

// ---- Site Identity ----

export const SITE_NAME = 'Inspire Excellence';
export const SITE_TAGLINE = 'People. Perspective. Process.';
export const SITE_DESCRIPTION =
  'We partner with individuals and organisations to unlock potential, shift perspective and create meaningful, lasting change.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://inspirexcellence.org';

// ---- Contact ----

export const CONTACT: ContactInfo = {
  email: 'admin@inspirexcellence.org',
  secondaryEmail: 'prerona@inspirexcellence.org',
  phone: '033 3550 5753',
  secondaryPhone: '+91 81002 11066',
};

export const ADDRESS: Address = {
  street: '3rd Floor, Star Lilly Apartment, 2 Dum Dum Park',
  city: 'Kolkata',
  state: 'West Bengal',
  postalCode: '700055',
  country: 'India',
  full: '3rd Floor, Star Lilly Apartment, 2 Dum Dum Park, Kolkata - 700055, West Bengal, India',
};

export const BUSINESS_HOURS: BusinessHours = {
  days: 'Monday – Saturday',
  hours: '11:00 AM – 7:00 PM',
  timezone: 'IST',
};

export const SOCIAL: SocialLinks = {
  facebook: 'https://www.facebook.com/InspireExcellence',
  youtube: 'https://www.youtube.com/@inspirexcellence',
  linkedin: 'https://www.linkedin.com/company/inspire-excellence',
  instagram: 'https://www.instagram.com/inspirexcellence',
  email: 'mailto:admin@inspirexcellence.org',
};

// ---- Navigation ----

export const MAIN_NAV: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Approach', href: '/approach' },
  {
    label: 'Individuals',
    href: '/individuals',
    children: [
      {
        label: 'Founder Clarity Intensive (6 Months)',
        href: '/individuals/founder-clarity-intensive',
        description: 'Clarity to build. Focus to scale.',
      },
      {
        label: 'Total Life Transformative (2 Years)',
        href: '/individuals/total-life-transformative',
        description: 'Transform everything. Lead your legacy.',
      },
      {
        label: 'Compare Pathways & Overview',
        href: '/individuals',
        description: 'Two powerful pathways. Different depth.',
      },
    ],
  },
  {
    label: 'Organisations',
    href: '/organisations',
    children: [
      { label: 'Overview & Capabilities', href: '/organisations' },
      { label: 'Strategy & Alignment', href: '/services#strategy' },
      { label: 'Culture Transformation', href: '/services#culture' },
      { label: 'Process & Operating Model', href: '/services#process' },
      { label: 'Leadership Development', href: '/services#leadership' },
      { label: 'Change Implementation', href: '/services#change' },
    ],
  },
  {
    label: 'Transformation Areas',
    href: '/transformation-areas',
    children: [
      { label: 'Leadership', href: '/transformation-areas/leadership' },
      { label: 'Organisations', href: '/transformation-areas/organisations' },
      { label: 'People', href: '/transformation-areas/people' },
      { label: 'Performance', href: '/transformation-areas/performance' },
      { label: 'Relationships', href: '/transformation-areas/relationships' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'About Us',
    links: [
      { label: 'Our Story & Team', href: '/about' },
      { label: 'Our Approach (3P System)', href: '/approach' },
      { label: 'Transformation Areas', href: '/transformation-areas' },
      { label: 'Contact & Bookings', href: '/contact' },
    ],
  },
  {
    title: 'Programs & Services',
    links: [
      { label: 'Founder Clarity Intensive', href: '/individuals/founder-clarity-intensive' },
      { label: 'Total Life Transformative', href: '/individuals/total-life-transformative' },
      { label: 'For Organisations', href: '/organisations' },
      { label: 'Executive Packages', href: '/packages' },
      { label: 'Service & Pricing', href: '/service-and-pricing' },
    ],
  },
  {
    title: 'Insights & Resources',
    links: [
      { label: 'Insights & Articles', href: '/insights' },
      { label: 'Blog', href: '/blog' },
      { label: 'Podcast with Prerona Roy', href: '/podcast' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Leadership Compass', href: '/leadership-compass' },
      { label: 'Transformation Flowchart', href: '/transformation-flowchart' },
    ],
  },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-and-cancellation' },
  { label: 'Shipping & Delivery', href: '/shipping-and-delivery' },
];

// ---- 3P System ----

export const THREE_P = {
  people: {
    title: 'PEOPLE',
    subtitle: 'We understand the people at the heart of every challenge and opportunity.',
    description: 'Unlock potential and build aligned teams.',
    icon: 'people',
    color: 'lavender',
  },
  perspective: {
    title: 'PERSPECTIVE',
    subtitle: 'We shift perspectives to see possibilities beyond the present.',
    description: 'See possibilities beyond the present.',
    icon: 'perspective',
    color: 'coral',
  },
  process: {
    title: 'PROCESS',
    subtitle: 'We design and embed processes that turn insight into action and sustainable results.',
    description: 'Turn insight into sustainable action.',
    icon: 'process',
    color: 'teal',
  },
};

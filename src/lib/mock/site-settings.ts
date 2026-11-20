import { SiteSettings } from '@/types/content';

export const mockSiteSettings: SiteSettings = {
  siteName: 'Inspire Excellence',
  tagline: 'People. Perspective. Process.',
  contact: {
    emails: ['admin@inspirexcellence.org', 'prerona@inspirexcellence.org'],
    phones: ['033 3550 5753', '+91 81002 11066'],
  },
  address: {
    line1: '3rd Floor, Star Lilly Apartment',
    line2: '2 Dum Dum Park',
    city: 'Kolkata',
    state: 'West Bengal',
    zipCode: '700055',
    country: 'India',
    fullAddress: '3rd Floor, Star Lilly Apartment, 2 Dum Dum Park, Kolkata - 700055, West Bengal, India'
  },
  hours: 'Monday–Saturday, 11:00 AM – 7:00 PM IST',
  social: {
    facebook: 'https://www.facebook.com/inspirexcellenceofficial/',
    youtube: 'https://www.youtube.com/@inspirexcellenceofficial',
    linkedin: 'https://www.linkedin.com/company/inspirexcellence/posts/?feedView=all',
    instagram: 'https://www.instagram.com/inspirexcellenceofficial/'
  }
};

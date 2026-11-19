import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/api/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inspirexcellence.org';

  const staticRoutes = [
    '',
    '/about',
    '/approach',
    '/organisations',
    '/transformation-areas',
    '/transformation-flowchart',
    '/case-studies',
    '/blog',
    '/podcast',
    '/book-consultation',
    '/contact',
    '/service-and-pricing',
    '/brochure',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : route === '/book-consultation' ? 0.9 : 0.8,
  }));

  const posts = await getPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

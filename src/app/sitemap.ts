import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/api/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inspirexcellence.org';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/insights',
    '/contact',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const posts = await getPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${siteUrl}/insights/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}

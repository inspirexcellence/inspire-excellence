import { wpClient } from './wordpress';
import { mockInsights } from '../mock/insights';
import { Post } from '@/types/content';
import { getPosts, getPostBySlug } from './posts';

export async function getInsights(params?: Record<string, string>): Promise<Post[]> {
  // Try WP first
  const wpPosts = await wpClient.fetch<any[]>('posts', { ...params, categories: 'insights' }); // Assuming category ID or slug
  
  if (!wpPosts) {
    return mockInsights;
  }
  
  // In a real app, map wpPosts to Post[]
  return mockInsights;
}

export async function getInsightBySlug(slug: string): Promise<Post | null> {
  const insights = await getInsights();
  return insights.find(i => i.slug === slug) || null;
}

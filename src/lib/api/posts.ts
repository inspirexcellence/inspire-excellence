import { wpClient } from './wordpress';
import { mockPosts } from '../mock/posts';
import { Post } from '@/types/content';
import { WPRestPost } from './types';

export async function getPosts(params?: Record<string, string>): Promise<Post[]> {
  const wpPosts = await wpClient.fetch<WPRestPost[]>('posts', params);
  
  if (!wpPosts || wpPosts.length === 0) {
    return mockPosts;
  }
  
  // Minimal mapping for now. A robust mapping would also fetch categories, media, and author details.
  return wpPosts.map(post => ({
    id: post.id.toString(),
    slug: post.slug,
    title: post.title.rendered,
    category: 'Blog',
    date: post.date,
    readingTime: 5, // Fallback
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    author: {
      name: 'Author Name',
      role: 'Role'
    },
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop'
  }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts({ slug });
  if (posts && posts.length > 0) {
    return posts[0];
  }
  const mockPost = mockPosts.find(p => p.slug === slug);
  return mockPost || null;
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getPosts();
  return allPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

import { wpClient } from './wordpress';
import { Post } from '@/types/content';
import { WPRestPost } from './types';
import localWpPosts from '@/data/wordpress-posts.json';

export function decodeHtmlEntities(str: string): string {
  if (!str) return '';
  return str
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\[&hellip;\]/g, '...');
}

export function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '').trim();
}

// Slugs of casual / off-topic posts that dilute executive leadership & transformation focus
const EXCLUDED_SLUGS = new Set([
  'swipe-right-for-self-love-avoiding-the-pitfalls-of-online-romance',
  'strategies-for-navigating-office-politics-to-thrive-not-just-survive',
  'the-gratitude-effect-nurturing-appreciation-for-a-brighter-you',
]);

export function mapWpPostToPost(wpPost: WPRestPost): Post {
  // Category determination — ensure no post is ever labeled "Uncategorized" or generic "Blog"
  let categoryName = 'Personal Transformation';
  const terms = wpPost._embedded?.['wp:term']?.[0];
  if (terms && Array.isArray(terms) && terms.length > 0) {
    const meaningfulCategory = terms.find(
      (t) =>
        t.name.toLowerCase() !== 'uncategorized' &&
        t.name.toLowerCase() !== 'blog'
    );
    if (meaningfulCategory) {
      categoryName = meaningfulCategory.name;
    } else {
      // Map based on post topic
      const slug = (wpPost.slug || '').toLowerCase();
      if (slug.includes('leadership') || slug.includes('leader')) {
        categoryName = 'Leadership Transformation';
      } else if (slug.includes('employee') || slug.includes('team')) {
        categoryName = 'People & Teams';
      } else {
        categoryName = 'Personal Transformation';
      }
    }
  }

  // Normalize generic names
  if (categoryName.toLowerCase() === 'uncategorized' || categoryName.toLowerCase() === 'blog') {
    categoryName = 'Personal Transformation';
  }

  // Featured image
  const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl =
    featuredMedia?.source_url ||
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop';

  // Plain text content for reading time estimate
  const plainText = stripHtml(wpPost.content?.rendered || '');
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(3, Math.ceil(wordCount / 200));

  // Excerpt
  const rawExcerpt = stripHtml(wpPost.excerpt?.rendered || '');
  const cleanExcerpt = decodeHtmlEntities(rawExcerpt);

  // Title
  const cleanTitle = decodeHtmlEntities(wpPost.title?.rendered || 'Untitled Post');

  return {
    id: wpPost.id.toString(),
    slug: wpPost.slug,
    title: cleanTitle,
    category: categoryName,
    date: wpPost.date,
    readingTime,
    excerpt: cleanExcerpt,
    content: wpPost.content?.rendered || '',
    author: {
      name: 'Prerona Roy',
      role: 'Founder & Transformation Specialist',
    },
    imageUrl,
  };
}

export async function getPosts(params?: Record<string, string>): Promise<Post[]> {
  // 1. Try to fetch live from WordPress REST API
  try {
    const queryParams: Record<string, string> = {
      _embed: 'true',
      per_page: '100',
      ...(params || {}),
    };

    const wpPosts = await wpClient.fetch<WPRestPost[]>('posts', queryParams);
    if (wpPosts && Array.isArray(wpPosts) && wpPosts.length > 0) {
      const livePosts = wpPosts
        .map(mapWpPostToPost)
        .filter((p) => !EXCLUDED_SLUGS.has(p.slug));
      if (params?.slug) {
        return livePosts.filter((p) => p.slug === params.slug);
      }
      if (params?.category) {
        return livePosts.filter(
          (p) => p.category.toLowerCase() === params.category.toLowerCase()
        );
      }
      return livePosts;
    }
  } catch (error) {
    console.warn('Unable to reach live WordPress API, using local backup cache:', error);
  }

  // 2. Fallback to cached JSON archive
  const fallbackList = (localWpPosts as unknown as WPRestPost[])
    .map(mapWpPostToPost)
    .filter((p) => !EXCLUDED_SLUGS.has(p.slug));

  if (params?.slug) {
    return fallbackList.filter((p) => p.slug === params.slug);
  }

  if (params?.category) {
    return fallbackList.filter(
      (p) => p.category.toLowerCase() === params.category.toLowerCase()
    );
  }

  return fallbackList;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts({ slug });
  if (posts && posts.length > 0) {
    return posts.find((p) => p.slug === slug) || posts[0];
  }

  const fallback = (localWpPosts as unknown as WPRestPost[])
    .map(mapWpPostToPost)
    .find((p) => p.slug === slug);

  return fallback || null;
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getPosts();
  const set = new Set<string>();
  posts.forEach((p) => {
    if (p.category && p.category.toLowerCase() !== 'uncategorized') {
      set.add(p.category);
    }
  });
  return Array.from(set);
}

export async function getRelatedPosts(currentSlug: string, category?: string, limit = 3): Promise<Post[]> {
  const posts = await getPosts();
  const others = posts.filter((p) => p.slug !== currentSlug);

  if (category) {
    const sameCategory = others.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    if (sameCategory.length >= limit) {
      return sameCategory.slice(0, limit);
    }
    const additional = others.filter(
      (p) => p.category.toLowerCase() !== category.toLowerCase()
    );
    return [...sameCategory, ...additional].slice(0, limit);
  }

  return others.slice(0, limit);
}

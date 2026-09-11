/* ============================================
   Utility Functions — Inspire Excellence
   ============================================ */

/**
 * Combine class names, filtering out falsy values.
 * Lightweight alternative to clsx + tailwind-merge.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a date string for display.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Calculate estimated reading time from content.
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

/**
 * Generate a full URL from a path.
 */
export function getFullUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://inspirexcellence.org';
  return `${base}${path}`;
}

/**
 * Truncate text to a max length, ending at a word boundary.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${truncated.slice(0, lastSpace)}…`;
}

/**
 * Slugify a string for URL use.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

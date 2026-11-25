'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/content';
import { BlogCard } from './BlogCard';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface BlogListClientProps {
  posts: Post[];
  categories: string[];
}

const POSTS_PER_PAGE = 8;

export function BlogListClient({ posts, categories }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const topAnchorRef = useRef<HTMLDivElement>(null);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const isShowingAll = selectedCategory === 'All' && !searchQuery.trim();

  // Pagination calculation
  let totalPages = 1;
  let featuredPost: Post | null = null;
  let currentGridPosts: Post[] = [];
  let startCount = 1;
  let endCount = 1;

  if (isShowingAll) {
    const total = filteredPosts.length;
    totalPages = total <= 8 ? 1 : 1 + Math.ceil((total - 8) / POSTS_PER_PAGE);

    if (currentPage === 1) {
      featuredPost = filteredPosts[0] || null;
      currentGridPosts = filteredPosts.slice(1, 8);
      startCount = 1;
      endCount = Math.min(total, 8);
    } else {
      featuredPost = null;
      const startIdx = 8 + (currentPage - 2) * POSTS_PER_PAGE;
      currentGridPosts = filteredPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);
      startCount = startIdx + 1;
      endCount = Math.min(total, startIdx + currentGridPosts.length);
    }
  } else {
    totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
    featuredPost = null;
    const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
    currentGridPosts = filteredPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);
    startCount = filteredPosts.length === 0 ? 0 : startIdx + 1;
    endCount = Math.min(filteredPosts.length, startIdx + currentGridPosts.length);
  }

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (topAnchorRef.current) {
      topAnchorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={topAnchorRef} className="w-full scroll-mt-28">
      {/* Top Filter & Search Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between pb-6 border-b border-[#E8DDD0]">
          {/* Category Filter Pills — flex-wrap ensures NO name is ever cut off! */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-1">
            <button
              type="button"
              onClick={() => handleCategoryChange('All')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-[#1A1A40] text-white shadow-md border border-[#1A1A40]'
                  : 'bg-white text-[#2D2D3F] border border-[#D8CFC4] hover:border-[#8B72BE] hover:text-[#1A1A40] hover:bg-[#F5EDE4]/60 shadow-xs'
              }`}
            >
              All Articles ({posts.length})
            </button>
            {categories.map((cat) => {
              const count = posts.filter(
                (p) => p.category.toLowerCase() === cat.toLowerCase()
              ).length;
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A1A40] text-white shadow-md border border-[#1A1A40]'
                      : 'bg-white text-[#2D2D3F] border border-[#D8CFC4] hover:border-[#8B72BE] hover:text-[#1A1A40] hover:bg-[#F5EDE4]/60 shadow-xs'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="w-4 h-4 text-[#8B72BE] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles by topic..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 bg-white border border-[#D8CFC4] rounded-full text-sm text-[#1A1A40] font-sans placeholder:text-[#2D2D3F]/50 focus:outline-none focus:border-[#8B72BE] focus:ring-2 focus:ring-[#8B72BE]/20 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#2D2D3F]/50 hover:text-[#1A1A40] rounded-full transition-colors cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        {filteredPosts.length > 0 && (
          <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-[#4A4A5E] mt-4">
            <span>
              Showing <strong className="text-[#1A1A40]">{startCount}–{endCount}</strong> of{' '}
              <strong className="text-[#1A1A40]">{filteredPosts.length}</strong> articles
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            </span>
            {totalPages > 1 && (
              <span>
                Page <strong className="text-[#1A1A40]">{currentPage}</strong> of{' '}
                <strong className="text-[#1A1A40]">{totalPages}</strong>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Featured Post Card (shown on Page 1 when viewing "All" and no search query) */}
      {featuredPost && (
        <section className="mb-16">
          <div
            className="rounded-2xl overflow-hidden shadow-2xl border border-[#2D2D5E] grid grid-cols-1 lg:grid-cols-12 items-stretch group"
            style={{ backgroundColor: '#1A1A40' }}
          >
            {/* Featured Post Image */}
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] w-full overflow-hidden block"
              style={{ backgroundColor: '#12122B' }}
            >
              <Image
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>

            {/* Featured Post Details */}
            <div
              className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between"
              style={{ backgroundColor: '#1A1A40' }}
            >
              <div>
                {/* Badges & Meta Header */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <span className="inline-block px-4 py-1.5 bg-[#E07A5F] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-[2px] shadow-sm">
                    Featured Insight
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-xs text-[#E07A5F] uppercase tracking-wider font-bold">
                    {featuredPost.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-white/70 font-sans mb-5">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8B72BE]" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8B72BE]" />
                    {featuredPost.readingTime} min read
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight mb-4 group-hover:text-[#A690D0] transition-colors drop-shadow-sm">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="font-sans text-gray-200 text-sm sm:text-base leading-relaxed mb-8 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* Card Footer: Author + Read Article */}
              <div className="flex items-center justify-between pt-6 border-t border-white/15">
                <span className="text-xs sm:text-sm text-gray-300 font-sans">
                  By <strong className="text-white font-semibold">{featuredPost.author.name}</strong>
                </span>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#8B72BE] hover:bg-[#785EAE] text-white rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Articles */}
      {currentGridPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentGridPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#D8CFC4] p-12 shadow-sm">
          <p className="font-serif text-2xl text-[#1A1A40] font-bold mb-2">No articles found</p>
          <p className="font-sans text-sm text-[#2D2D3F]/70 mb-6">
            We couldn&apos;t find any posts matching &ldquo;{searchQuery}&rdquo; in this category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setCurrentPage(1);
            }}
            className="px-6 py-2.5 bg-[#1A1A40] text-white rounded-full text-sm font-semibold hover:bg-[#2B2B5A] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="mt-16 pt-8 border-t border-[#E8DDD0] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Previous Page Button */}
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              currentPage === 1
                ? 'opacity-40 cursor-not-allowed bg-white border border-[#D8CFC4] text-[#2D2D3F]/50'
                : 'bg-white border border-[#D8CFC4] text-[#1A1A40] hover:border-[#8B72BE] hover:text-[#8B72BE] shadow-xs hover:shadow-sm'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Page Number Pills */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => {
              const isActive = pageNum === currentPage;
              return (
                <button
                  type="button"
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center ${
                    isActive
                      ? 'bg-[#1A1A40] text-white shadow-md border border-[#1A1A40]'
                      : 'bg-white border border-[#D8CFC4] text-[#2D2D3F] hover:border-[#8B72BE] hover:text-[#1A1A40] shadow-xs'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Page Button */}
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              currentPage === totalPages
                ? 'opacity-40 cursor-not-allowed bg-white border border-[#D8CFC4] text-[#2D2D3F]/50'
                : 'bg-white border border-[#D8CFC4] text-[#1A1A40] hover:border-[#8B72BE] hover:text-[#8B72BE] shadow-xs hover:shadow-sm'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/content';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: Post;
  priority?: boolean;
}

export function BlogCard({ post, priority = false }: BlogCardProps) {
  const [imgSrc, setImgSrc] = useState(post.imageUrl);
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#E2DCD5] hover:border-[#8B72BE]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[#F5EDE4]">
        <Image
          src={imgSrc}
          alt={post.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => {
            setImgSrc('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop');
          }}
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 bg-[#1A1A40]/90 backdrop-blur-md text-[#E8DDD0] border border-white/20 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Metadata info */}
          <div className="flex items-center gap-4 text-xs font-sans text-[#4A4A5E] mb-3">
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#8B72BE]" />
              {formattedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#8B72BE]" />
              {post.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A40] font-bold line-clamp-2 mb-3 group-hover:text-[#8B72BE] transition-colors leading-snug">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="font-sans text-sm text-[#4A4A5E] line-clamp-3 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Footer Link */}
        <div className="pt-4 border-t border-[#E8DDD0] flex items-center justify-between">
          <span className="text-xs font-medium text-[#4A4A5E]">
            By <span className="text-[#1A1A40] font-semibold">{post.author.name}</span>
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B72BE] hover:text-[#1A1A40] transition-colors group/link"
          >
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

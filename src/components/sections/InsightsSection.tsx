import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getPosts } from '@/lib/api/posts';
import { InsightCard } from '../cards/InsightCard';

export async function InsightsSection() {
  const allPosts = await getPosts();
  const latestPosts = allPosts.slice(0, 3).map((p) => ({
    title: p.title,
    slug: p.slug,
    category: p.category,
    date: new Date(p.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    image: p.imageUrl,
  }));

  return (
    <section id="insights" className="section-padding bg-ivory border-fine-top">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <span className="section-label">INSIGHTS & STORIES</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
              Ideas worth<br />taking with you.
            </h2>
            <Link href="/blog" className="inline-flex items-center gap-2 text-navy hover:text-navy/70 transition-colors font-medium mt-2">
              Visit Our Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <InsightCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

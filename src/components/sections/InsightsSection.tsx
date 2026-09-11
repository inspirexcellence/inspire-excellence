import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { InsightCard } from '../cards/InsightCard'

const mockPosts = [
  { title: 'The New Leadership Mindset', slug: 'new-leadership-mindset', category: 'Leadership', date: 'Oct 12, 2023', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop' },
  { title: 'Why Perspective Changes Everything', slug: 'why-perspective-changes', category: 'Perspective', date: 'Sep 28, 2023', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop' },
  { title: 'Sustainable Success Starts Within', slug: 'sustainable-success', category: 'Growth', date: 'Sep 15, 2023', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop' },
]

export function InsightsSection() {
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
            {mockPosts.map((post) => (
              <InsightCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

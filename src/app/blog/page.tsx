import { createMetadata } from '@/lib/metadata';
import { getPosts, getAllCategories } from '@/lib/api/posts';
import { BlogListClient } from '@/components/blog/BlogListClient';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Blog & Insights — Leadership, Neuroscience & Culture',
  description:
    'Explore actionable perspectives on leadership, neuroscience, cognitive mastery, and personal transformation by Prerona Roy and the Inspire Excellence team.',
  path: '/blog',
});

export const revalidate = 1800;

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getAllCategories(),
  ]);

  return (
    <main className="min-h-screen bg-[#FDF9F3]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#F5EDE4]/70 to-[#FDF9F3] border-b border-[#E8DDD0]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <div className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1A1A40] text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-[2px] border-l-4 border-l-[#E07A5F] shadow-md mb-6">
            <span>Our Latest Thinking</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A40] font-bold leading-tight max-w-4xl mx-auto mb-6">
            Ideas today. Impact <span className="italic font-serif text-[#8B72BE]">tomorrow</span>.
          </h1>

          <p className="font-sans text-[#4A4A5E] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Delve into transformational perspectives on leadership, personal genius, emotional resilience, and human behavior by Prerona Roy and our master coaches.
          </p>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <BlogListClient posts={posts} categories={categories} />
        </div>
      </section>

      {/* Consultation Callout Banner */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div
            className="rounded-2xl p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl border border-[#2D2D5E]"
            style={{ backgroundColor: '#1A1A40' }}
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#8B72BE]/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#E07A5F]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-[#C9BAE5] uppercase tracking-widest text-xs font-bold mb-4 block">
                Begin Your Evolution
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">
                All You Need to Achieve a Goal Is to Have One.
              </h2>
              <p className="font-sans text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
                Connect directly with Prerona Roy for a 1-on-1 confidential consultation across Personal Transformation, Organisational Transformation, or Book a Speaker.
              </p>
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#E07A5F] hover:bg-[#D0694E] text-white font-sans text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book a Consultation Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

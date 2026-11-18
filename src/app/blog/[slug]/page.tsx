import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { getPosts, getPostBySlug, getRelatedPosts } from '@/lib/api/posts';
import { BlogCard } from '@/components/blog/BlogCard';
import { Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight, User } from 'lucide-react';

export const revalidate = 1800;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: 'Article Not Found | Inspire Excellence',
    });
  }

  return createMetadata({
    title: `${post.title} | Inspire Excellence`,
    description: post.excerpt || 'Read this transformational insight on the Inspire Excellence blog.',
    ogImage: post.imageUrl,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.category, 3);
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <main className="min-h-screen bg-ivory">
      {/* Article Header & Breadcrumbs */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-[#F3ECE0]/60 to-ivory border-b border-[#E8DDD0]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-charcoal/70 mb-8 overflow-x-auto pb-1 scrollbar-none">
            <Link href="/" className="hover:text-navy transition-colors whitespace-nowrap">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-charcoal/40" />
            <Link href="/blog" className="hover:text-navy transition-colors whitespace-nowrap">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-charcoal/40" />
            <span className="text-navy font-semibold truncate max-w-[240px] md:max-w-md">
              {post.title}
            </span>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 bg-lavender/15 border border-lavender/30 text-navy font-sans text-xs font-semibold uppercase tracking-wider rounded-full">
              {post.category}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-navy font-bold leading-tight mb-8">
            {post.title}
          </h1>

          {/* Author and Date Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-charcoal/80 pt-6 border-t border-[#E8DDD0]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-cream border border-[#E8DDD0]">
                <Image
                  src="/images/about/prerona.png"
                  alt={post.author.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block text-navy font-semibold text-sm">
                  {post.author.name}
                </span>
                <span className="block text-xs text-charcoal/60">
                  {post.author.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm text-charcoal/70 ml-auto">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-lavender" />
                {formattedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-lavender" />
                {post.readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image & Article Body */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Featured Hero Image */}
          {post.imageUrl && (
            <div className="relative w-full aspect-[16/9] max-h-[540px] rounded-2xl overflow-hidden shadow-xl mb-12 border border-[#E8DDD0] bg-cream">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}

          {/* WordPress HTML Content Body */}
          <article
            className="blog-content mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#E8DDD0] shadow-sm mb-16 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex-shrink-0 border-2 border-lavender/30 shadow-md bg-cream">
              <Image
                src="/images/about/prerona.png"
                alt="Prerona Roy"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-lavender tracking-wider block mb-1">
                About the Author
              </span>
              <h3 className="font-serif text-2xl text-navy font-bold mb-2">
                Prerona Roy
              </h3>
              <p className="font-sans text-sm text-charcoal/80 leading-relaxed mb-4">
                Founder of Inspire Excellence, transformation specialist, and executive mentor. Drawing from cognitive neuroscience, psychology, and behavioral science, she empowers individuals and leaders to achieve lasting breakthroughs.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-lavender transition-colors"
              >
                <span>Read Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Back to Blog Button */}
          <div className="mb-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E8DDD0] hover:border-lavender text-navy text-sm font-semibold rounded-full transition-all shadow-sm hover:shadow"
            >
              <ArrowLeft className="w-4 h-4 text-lavender" />
              <span>Back to All Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Callout Banner */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div
            className="rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-[#2D2D5E]"
            style={{ backgroundColor: '#1A1A40' }}
          >
            <div className="relative z-10 text-center">
              <span className="text-[#C9BAE5] uppercase tracking-widest text-xs font-bold mb-3 block">
                Take the Next Step
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Turn Insight into Measurable Results?
              </h2>
              <p className="font-sans text-gray-200 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Book a 1-on-1 confidential consultation across Personal Transformation, Organisational Transformation, or Book a Speaker.
              </p>
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E07A5F] hover:bg-[#D0694E] text-white font-sans text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book a Consultation Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-cream/40 border-t border-[#E8DDD0]">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs uppercase font-semibold text-coral tracking-widest block mb-2">
                  Continue Reading
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold">
                  Related Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-lavender hover:text-navy transition-colors"
              >
                <span>View all articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

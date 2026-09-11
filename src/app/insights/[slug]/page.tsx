import { createMetadata } from '@/lib/metadata';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return createMetadata({
    title: `${params.slug.replace(/-/g, ' ')} | Insights | Inspire Excellence`,
  });
}

export default async function InsightDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return (
    <main className="min-h-screen bg-ivory py-32">
      <article className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <header className="mb-12 text-center">
          <span className="text-coral uppercase tracking-widest text-sm font-semibold mb-6 block">Leadership</span>
          <h1 className="font-serif text-4xl md:text-6xl text-navy leading-tight mb-6 capitalize">
            {params.slug.replace(/-/g, ' ')}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-sans text-charcoal">
            <span>By Prerona Roy</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>
        
        <div className="w-full aspect-video bg-cream rounded-sm mb-12"></div>
        
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-navy prose-p:font-sans prose-p:text-charcoal prose-a:text-lavender mx-auto">
          <p>
            The landscape of leadership is continuously evolving. In this article, we delve deep into the principles that are defining the next generation of resilient, empathetic, and visionary leaders.
          </p>
          <p>
            Our research and direct experience with over 100 organisations have shown that transformation requires more than just new processes—it demands a fundamental shift in perspective.
          </p>
        </div>
      </article>
    </main>
  );
}

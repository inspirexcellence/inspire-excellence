import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Insights | Inspire Excellence',
  description: 'Ideas today. Impact tomorrow.',
});

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <section className="section-padding pb-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-navy leading-tight max-w-4xl mx-auto mb-6">
            Ideas today. Impact <span className="font-serif italic text-lavender">tomorrow</span>.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="bg-navy rounded-sm p-12 md:p-24 flex flex-col md:flex-row gap-12 items-center mb-16 text-white">
            <div className="flex-1">
              <span className="text-lavender uppercase tracking-widest text-sm font-semibold mb-4 block">Featured Insight</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">The New Leadership Mindset</h2>
              <p className="font-sans text-gray-300 text-lg mb-8">Explore how neuroscience and empathy are reshaping the way top executives lead in times of uncertainty.</p>
              <Link href="/insights/new-leadership-mindset" className="inline-block border border-white px-8 py-3 rounded-sm hover:bg-white hover:text-navy transition-colors font-sans text-sm uppercase tracking-widest">
                Read Article
              </Link>
            </div>
            <div className="flex-1 w-full h-80 bg-lavender/20 rounded-sm"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link href={`/insights/article-${i}`} key={i} className="group block">
                <div className="bg-cream aspect-[4/3] rounded-sm mb-4"></div>
                <span className="text-coral uppercase tracking-widest text-xs font-semibold mb-2 block">Culture & Transformation</span>
                <h3 className="font-serif text-2xl text-navy group-hover:text-lavender transition-colors mb-2">Building Resilient Teams in 2026</h3>
                <p className="font-sans text-charcoal text-sm">A practical guide to fostering psychological safety and high performance.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

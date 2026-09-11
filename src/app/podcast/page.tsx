import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Podcast | Inspire Excellence',
  description: 'Conversations on leadership, mindset, and conscious evolution.',
});

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <section className="section-padding border-b border-muted-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="font-serif text-5xl md:text-7xl text-navy leading-tight mb-6">
              Conversations on leadership, mindset, and <span className="font-serif italic text-lavender">conscious evolution</span>.
            </h1>
            <p className="font-sans text-lg text-charcoal mb-8">
              Hosted by Prerona Roy. Listen on Spotify, Apple Podcasts, and YouTube.
            </p>
            <div className="flex gap-4">
              <button className="bg-navy text-white px-6 py-3 rounded-sm font-sans text-sm hover:bg-lavender transition-colors">Listen on Spotify</button>
              <button className="border border-navy text-navy px-6 py-3 rounded-sm font-sans text-sm hover:bg-navy hover:text-white transition-colors">Watch on YouTube</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-navy text-white p-8 rounded-sm flex flex-col justify-end">
            <h3 className="font-serif text-2xl">Transforming Business</h3>
            <p className="font-sans text-sm text-lavender uppercase tracking-widest mt-2">with Prerona Roy</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-4xl text-navy mb-12">Latest Episodes</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 border-fine border-muted-border bg-white rounded-sm flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 bg-cream rounded-sm shrink-0 flex items-center justify-center">
                  <span className="text-navy text-3xl">▶</span>
                </div>
                <div>
                  <span className="text-coral uppercase tracking-widest text-xs font-semibold mb-2 block">Episode {10 - i}</span>
                  <h3 className="font-serif text-2xl text-navy mb-3">Redefining Success in the Modern Workplace</h3>
                  <p className="font-sans text-charcoal mb-4">An insightful discussion on balancing high performance with well-being.</p>
                  <a href="#" className="text-lavender font-semibold font-sans text-sm uppercase tracking-widest hover:text-navy transition-colors">Show Notes →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

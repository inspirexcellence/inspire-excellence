import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Leadership Compass | Inspire Excellence',
  description: 'Interactive self-assessment and recalibration tool.',
});

export default function LeadershipCompassPage() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            The Leadership <span className="font-serif italic text-lavender">Compass</span>
          </h1>
          <p className="font-sans text-gray-300 text-lg mb-16">
            Recalibrate across 5 dimensions: Self-Awareness, Energy, Vision, Decision Resilience, and Team Inspiration.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-sm text-left">
            <h3 className="font-serif text-3xl mb-8 text-center">Assess Your Current State</h3>
            <div className="space-y-8">
              {['Self-Awareness', 'Energy & Clarity', 'Vision & Strategy', 'Decision Resilience', 'Team Inspiration'].map((dim, i) => (
                <div key={i}>
                  <div className="flex justify-between font-sans text-sm mb-2 text-gray-300 uppercase tracking-wider">
                    <span>{dim}</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-lavender h-full w-1/2 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="bg-lavender text-white px-8 py-4 rounded-sm font-sans text-sm uppercase tracking-widest hover:bg-white hover:text-navy transition-colors">
                Generate My Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

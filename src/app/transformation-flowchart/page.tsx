import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Transformation Flowchart | Inspire Excellence',
  description: 'Our 8-stage interactive visual roadmap.',
});

export default function FlowchartPage() {
  const stages = [
    'Outcome Clarification', 'First Documentation Call', 'Deep Discovery Session',
    'Transformation Design', 'Implementation Phase', 'Completion Timeline',
    'Return to Life', '6 Month Review & Reflection'
  ];

  return (
    <main className="min-h-screen bg-cream">
      <section className="section-padding text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h1 className="font-serif text-5xl md:text-7xl text-navy leading-tight mb-16">
            The Journey of <span className="font-serif italic text-lavender">Transformation</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {stages.map((stage, i) => (
              <div key={i} className="bg-white p-6 border-fine border-muted-border rounded-sm flex items-center gap-6 text-left hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-serif text-xl shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-navy">{stage}</h3>
                  <p className="font-sans text-charcoal text-sm mt-2">Critical step {i + 1} to ensure alignment and lasting impact.</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <button className="bg-lavender text-white px-8 py-4 rounded-sm font-sans text-sm uppercase tracking-widest hover:bg-navy transition-colors">
              Download Full Framework
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

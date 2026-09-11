import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Transformation Areas | Inspire Excellence',
  description: 'Where clarity creates change.',
});

const areas = [
  { slug: 'leadership', title: 'Leadership' },
  { slug: 'organisations', title: 'Organisations' },
  { slug: 'people', title: 'People' },
  { slug: 'performance', title: 'Performance' },
  { slug: 'relationships', title: 'Relationships' },
];

export default function TransformationAreasPage() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-navy leading-tight">
            Where clarity creates <span className="font-serif italic text-lavender">change</span>.
          </h1>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <Link href={`/transformation-areas/${area.slug}`} key={area.slug} className="block group">
                <div className="p-8 border-fine border-muted-border bg-white rounded-sm h-full flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div>
                    <h3 className="font-serif text-3xl text-navy mb-4 group-hover:text-lavender transition-colors">{area.title}</h3>
                    <p className="font-sans text-charcoal mb-6">Focused solutions tailored to transform {area.title.toLowerCase()} from the inside out.</p>
                  </div>
                  <span className="text-coral uppercase text-sm tracking-widest font-semibold flex items-center gap-2">Explore <span className="group-hover:translate-x-2 transition-transform">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

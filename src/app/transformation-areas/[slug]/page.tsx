import { createMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return [
    { slug: 'leadership' },
    { slug: 'organisations' },
    { slug: 'people' },
    { slug: 'performance' },
    { slug: 'relationships' },
  ];
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return createMetadata({
    title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Transformation | Inspire Excellence`,
  });
}

export default async function TransformationAreaDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-ivory">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-navy leading-tight mb-8">
            {title}
          </h1>
          <p className="font-sans text-lg text-charcoal">
            Addressing key challenges and driving core outcomes through our specialized methodology.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl text-navy mb-6">Key Challenges Addressed</h2>
              <ul className="list-disc pl-5 space-y-3 font-sans text-charcoal">
                <li>Stagnant growth and low engagement</li>
                <li>Lack of strategic alignment</li>
                <li>Burnout and resistance to change</li>
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-navy mb-6">Core Outcomes</h2>
              <ul className="list-disc pl-5 space-y-3 font-sans text-charcoal">
                <li>Renewed vision and clarity</li>
                <li>Agile and resilient operational models</li>
                <li>Sustainable high performance</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-navy text-white px-8 py-4 rounded-sm font-sans text-sm hover:bg-lavender transition-colors uppercase tracking-widest">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

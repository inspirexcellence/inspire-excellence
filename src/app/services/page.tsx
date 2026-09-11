import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Our Services | Inspire Excellence',
  description: 'End-to-end support for transformation that lasts.',
});

export default function ServicesPage() {
  const services = [
    'Strategy & Alignment',
    'Culture Transformation',
    'Process & Operating Model',
    'Leadership Development',
    'Change Implementation'
  ];

  return (
    <main className="min-h-screen">
      <section className="section-padding bg-ivory pb-0">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h1 className="font-serif text-5xl md:text-7xl text-navy leading-tight max-w-4xl">
            End-to-end support for transformation that <span className="font-serif italic text-lavender">lasts</span>.
          </h1>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col gap-4 border-t border-muted-border pt-12">
            {services.map((service, i) => (
              <details key={i} className="group border-b border-muted-border pb-6">
                <summary className="flex justify-between items-center cursor-pointer list-none font-serif text-3xl md:text-4xl text-navy hover:text-lavender transition-colors py-4">
                  {service}
                  <span className="text-xl group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="pl-0 mt-6 md:pl-12 font-sans text-charcoal pb-4">
                  <p className="mb-4 text-lg">Comprehensive {service.toLowerCase()} designed to build resilience and accelerate growth across your organisation.</p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Assessment & Diagnostics</li>
                    <li>Customized Framework Development</li>
                    <li>Execution & Monitoring</li>
                  </ul>
                  <button className="bg-navy text-white px-6 py-3 rounded-sm font-sans text-sm hover:bg-lavender transition-colors">
                    Explore Service →
                  </button>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

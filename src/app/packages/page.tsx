import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Packages & Pricing | Inspire Excellence',
  description: 'Tailored transformation frameworks designed for measurable growth.',
});

export default function PackagesPage() {
  const packages = [
    {
      title: 'Targeted Transformation',
      subtitle: '1-on-1 Executive Coaching',
      featured: false,
    },
    {
      title: 'Holistic Life Evolution',
      subtitle: 'Full 5-Dimension Life Mastery',
      featured: true,
    },
    {
      title: 'Group Empowerment',
      subtitle: 'Corporate Workshops',
      featured: false,
    }
  ];

  return (
    <main className="min-h-screen bg-ivory">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-navy leading-tight max-w-4xl mx-auto mb-6">
            Tailored transformation frameworks designed for <span className="font-serif italic text-lavender">measurable growth</span>.
          </h1>
          <p className="font-sans text-lg text-charcoal max-w-2xl mx-auto">
            Custom consultation-based pricing for discerning leaders and organisations.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {packages.map((pkg, i) => (
              <div key={i} className={`p-8 rounded-sm flex flex-col h-full ${pkg.featured ? 'bg-navy text-white shadow-xl scale-105 border-0 py-12' : 'bg-white border-fine border-muted-border'}`}>
                <h3 className={`font-serif text-2xl mb-2 ${pkg.featured ? 'text-white' : 'text-navy'}`}>{pkg.title}</h3>
                <p className={`font-sans text-sm uppercase tracking-widest mb-8 ${pkg.featured ? 'text-lavender' : 'text-coral'}`}>{pkg.subtitle}</p>
                <ul className="flex-1 space-y-4 mb-8">
                  {['In-depth diagnostics', 'Customised roadmaps', 'Ongoing strategic support'].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-teal">✓</span>
                      <span className={pkg.featured ? 'text-gray-300' : 'text-charcoal'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book-consultation" className={`block text-center py-4 rounded-sm font-sans text-sm uppercase tracking-widest transition-colors ${pkg.featured ? 'bg-lavender text-white hover:bg-white hover:text-navy' : 'bg-navy text-white hover:bg-lavender'}`}>
                  Book a Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

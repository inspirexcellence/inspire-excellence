import { createMetadata } from '@/lib/metadata';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ThreePSystem } from '@/components/three-p/ThreePSystem';

export const metadata = createMetadata({
  title: 'Our Approach | Inspire Excellence',
  description: 'A different way of seeing. A better way of creating impact.',
});

export default function ApproachPage() {
  const differentiators = [
    {
      title: 'Human-Centred',
      description: 'We place real people, their inner psychology, and their emotional dynamics at the epicentre of organizational transformation.',
    },
    {
      title: 'Future-Focused',
      description: 'Anticipating industry shifts and disruption by building agile leadership mindsets ready for uncharted territory.',
    },
    {
      title: 'Measurable Impact',
      description: 'Transforming qualitative shifts in mindset into quantifiable business growth, operational resilience, and high retention.',
    },
    {
      title: 'Sustainable Change',
      description: 'Rooted in neuroscience and habit formation systems, ensuring that new paradigms become self-sustaining organizational DNA.',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-ivory">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy leading-tight">
              A different way of <span className="font-serif italic text-lavender">seeing</span>. A better way of creating <span className="font-serif italic text-lavender">impact</span>.
            </h1>
            <p className="font-sans text-lg text-charcoal max-w-2xl mt-8 leading-relaxed">
              True transformation cannot happen by merely tinkering with symptoms. Our signature 3P Framework aligns People, Perspective, and Process to create profound, lasting evolution.
            </p>
          </div>
        </Container>
      </section>

      {/* 3P Methodology Interactive System */}
      <section className="section-padding bg-cream border-t border-muted-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>The 3P System</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mt-3">People. Perspective. Process.</h2>
            <p className="font-sans text-sm text-charcoal mt-4">
              Explore how each pillar reinforces the other to create an unbreakable foundation for excellence.
            </p>
          </div>

          <ThreePSystem />
        </Container>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-ivory border-t border-muted-border">
        <Container>
          <div className="max-w-2xl mb-16">
            <SectionLabel>Why It Works</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mt-3">What makes our approach different?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="p-8 border border-muted-border bg-white rounded-sm">
                <span className="text-coral font-serif text-lg font-semibold block mb-2">0{i + 1}</span>
                <h3 className="font-serif text-2xl text-navy mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-charcoal leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="primary" href="/contact">
              Discuss Your Transformation Roadmap
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

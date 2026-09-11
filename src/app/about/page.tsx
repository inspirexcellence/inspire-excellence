import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import { mockTeamMembers } from '@/lib/mock/team';
import { mockValues } from '@/lib/mock/values';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Container } from '@/components/ui/Container';

export const metadata = createMetadata({
  title: 'About Us | Inspire Excellence',
  description: "We exist to inspire excellence and shape what's next.",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start gap-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy leading-tight">
                We exist to inspire excellence and shape what&apos;s <span className="font-serif italic text-lavender">next</span>.
              </h1>
              <p className="font-sans text-lg text-charcoal max-w-xl mt-4 leading-relaxed">
                Inspire Excellence partners with leaders, founders, and forward-thinking organisations to rewire mindsets, unlock untapped potential, and build sustainable frameworks for extraordinary results.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Let&apos;s Connect
                </Button>
                <Button variant="ghost" href="/approach">
                  Explore Our Approach
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-muted-border shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&h=750&fit=crop"
                alt="Inspire Excellence Architecture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-muted-border pt-12">
            <div>
              <p className="font-serif text-4xl lg:text-5xl text-navy">17+</p>
              <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light mt-2">Years of Experience</p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl text-navy">100+</p>
              <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light mt-2">Organisations Transformed</p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl text-navy">5000+</p>
              <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light mt-2">Leaders Mentored</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream border-t border-muted-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Our Foundation</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mt-3">Our values guide everything we do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {mockValues.map((val, idx) => (
              <div key={val.id} className="flex flex-col items-center text-center p-6 bg-white border border-muted-border rounded-sm">
                <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mb-4 border border-muted-border text-lavender font-serif font-semibold">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl text-navy mb-2">{val.title}</h3>
                <p className="font-sans text-xs text-charcoal leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founders & Leadership Team */}
      <section className="section-padding bg-ivory border-t border-muted-border">
        <Container>
          <div className="mb-16">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mt-3">The Minds Behind Inspire Excellence</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mockTeamMembers.map((member) => (
              <div key={member.id} className="flex flex-col p-8 bg-white border border-muted-border rounded-sm">
                <div className="relative h-72 w-full rounded-sm overflow-hidden mb-6 bg-cream">
                  <Image
                    src={member.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop'}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-navy">{member.name}</h3>
                <p className="text-coral text-xs uppercase tracking-widest font-semibold mt-1 mb-4">{member.role}</p>
                <p className="font-sans text-sm text-charcoal leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

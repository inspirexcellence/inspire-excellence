import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Building, Users, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Case Studies & Transformation Impact — Inspire Excellence',
  description:
    'Real stories of executive alignment, culture transformation, and operational scale achieved with the Inspire Excellence 3P framework.',
  path: '/case-studies',
});

const caseStudies = [
  {
    id: 'cs-1',
    category: 'EXECUTIVE & FOUNDER CLARITY',
    title: 'Scaling from $2M to $10M ARR through Identity & Operating Model Shift',
    client: 'Fintech Scale-up Founder',
    duration: '6-Month Intensive',
    impact: '4.2x Revenue Velocity & 70% Reduction in Founder Bottlenecks',
    summary:
      'The founder was working 80-hour weeks trapped in operational micromanagement. Through our 1 Cycle of Evolution, we restructured decision frameworks, rewired narrative identity, and established high-velocity delegation systems.',
    metrics: ['+320% Team Accountability', '80h → 42h Founder Work Week', '12 Closed Strategic Enterprise Deals'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop&q=80',
    color: '#8B72BE',
  },
  {
    id: 'cs-2',
    category: 'ORGANISATIONAL CULTURE & MERGER',
    title: 'Post-Merger Cultural Integration across 850+ Personnel',
    client: 'Manufacturing & Industrial Conglomerate',
    duration: '12-Month Enterprise Engagement',
    impact: '94% Retention of Critical Executive Talent & Zero Cultural Churn',
    summary:
      'Following a cross-border acquisition, conflicting leadership subcultures threatened operational delivery. We embedded the 3P Framework to establish a unified narrative identity, clear psychological safety, and synchronized OKR processes.',
    metrics: ['94% Key Talent Retained', '100% Cross-Functional Buy-in', '18% Operating Margin Expansion'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80',
    color: '#E07A5F',
  },
  {
    id: 'cs-3',
    category: 'TOTAL LIFE & LEGACY TRANSFORMATION',
    title: '2-Year Holistic Executive Evolution: Reclaiming Health, Family & Multi-Generational Vision',
    client: 'Managing Director, Private Equity',
    duration: '2-Year Private Engagement',
    impact: 'Enduring Family Harmony, Complete Physical Vitality & Succession Governance',
    summary:
      'Despite immense financial success, the executive faced chronic burnout and strained familial relationships. Over a 24-month multi-dimensional engagement, we transformed identity, energy architecture, and governance design.',
    metrics: ['Deep Lifestyle & Energy Architecture', 'Institutional Family Council Created', 'Peak Cognitive Stamina Restored'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=500&fit=crop&q=80',
    color: '#D48B38',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-muted-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
                PROVEN TRANSFORMATION
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1] mb-6">
              Case Studies & <br />
              <span className="font-serif italic font-normal text-[#8B72BE]">Executive Impact</span>{' '}
              <span className="font-serif italic font-normal text-[#E07A5F]">Stories.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
              Explore how our evidence-based 3P System (People. Perspective. Process.) has empowered founders, CXOs, and enterprises to unlock unprecedented growth and lasting fulfillment.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies List */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div
                key={cs.id}
                className="bg-white rounded-sm border border-muted-border shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Visual Image Side */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-cream">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-muted-border shadow-xs">
                    <span
                      className="font-sans text-[11px] font-bold uppercase tracking-wider"
                      style={{ color: cs.color }}
                    >
                      {cs.duration}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <span
                      className="font-sans text-xs uppercase tracking-[0.2em] font-semibold block mb-2"
                      style={{ color: cs.color }}
                    >
                      {cs.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold leading-snug mb-4">
                      {cs.title}
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-6">
                      {cs.summary}
                    </p>

                    {/* Key Metrics */}
                    <div className="space-y-2 mb-8 bg-[#FAF7F2] p-5 rounded-sm border border-muted-border/60">
                      <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/60 font-semibold block mb-2">
                        Key Transformation Outcomes:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {cs.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex items-start gap-2 text-xs font-medium text-navy">
                            <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-muted-border">
                    <span className="font-sans text-xs text-charcoal/60">Client: {cs.client}</span>
                    <Link
                      href="/book-consultation"
                      className="inline-flex items-center gap-2 bg-navy text-white hover:bg-[#2A2A5A] px-5 py-2.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
                    >
                      <span>Explore Your Transformation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Ready to write your own transformation story?
            </h3>
            <p className="font-sans text-sm text-white/80 mb-8 leading-relaxed">
              Every transformation begins with a single conversation. Schedule a confidential 15-minute discovery session with our leadership advisory team.
            </p>
            <Link
              href="/book-consultation"
              className="bg-gold text-navy hover:bg-gold-light px-8 py-3.5 rounded-[2px] font-sans text-xs font-bold tracking-wider uppercase transition-all"
            >
              Book Discovery Session
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

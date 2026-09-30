import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  BookOpen,
  Sparkles,
  Brain,
  Quote,
  Clock,
  TrendingUp,
  Building,
  Users,
  Compass,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'Case Studies & Transformation Impact — Inspire Excellence',
  description:
    'Real stories of executive alignment, culture transformation, and clinical leadership breakthroughs achieved with the Inspire Excellence 3P framework.',
  path: '/case-studies',
});

const clientCaseStudies = [
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
                PROVEN TRANSFORMATION & RESEARCH
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1] mb-6">
              Case Studies & <br />
              <span className="font-serif italic font-normal text-[#8B72BE]">Executive Impact</span>{' '}
              <span className="font-serif italic font-normal text-[#E07A5F]">Reports.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
              Explore our in-depth executive transformation whitepapers and real-world client outcome studies powered by the Inspire Excellence 3P framework.
            </p>

            {/* Hero Actions: Featured Case Study & Consultation */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#executive-report"
                className="inline-flex items-center gap-2.5 bg-navy text-white hover:bg-[#2A2A5A] px-6 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-gold" />
                <span>View Special Executive Report</span>
              </a>

              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 border border-navy text-navy hover:bg-navy hover:text-white px-6 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 1: DISTINCT FEATURED EXECUTIVE REPORT CARD */}
      <section id="executive-report" className="py-12 lg:py-16 border-b border-muted-border bg-[#F4EFE6]/60">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Section Eyebrow */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#8B72BE]" />
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#8B72BE]">
                  FEATURED EXECUTIVE CLINICAL WHITE PAPER
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-charcoal/70 bg-white px-3.5 py-1.5 rounded-full border border-muted-border shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>12-Min Read • Complete Narrative Study</span>
              </div>
            </div>

            {/* The Ambition Trap - Sleek & Compact Publication Card */}
            <div className="bg-white rounded-md border-2 border-[#8B72BE]/30 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-300 hover:shadow-2xl hover:border-[#8B72BE]/50">
              {/* Left Visual Column */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-navy overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80"
                  alt="The Ambition Trap Case Study"
                  fill
                  className="object-cover opacity-85"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                
                {/* Floating Tags on Image */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#8B72BE] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-[2px] shadow-sm">
                    SPECIAL REPORT
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-gold text-xs font-serif italic mb-1">
                    <Quote className="w-3.5 h-3.5 shrink-0" />
                    <span>Executive Transformation Case Study</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-white leading-snug">
                    Client: Senior Architect, Global Consulting Firm
                  </p>
                </div>
              </div>

              {/* Right Content Column - Short, Punchy & High UX */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="font-sans text-xs uppercase tracking-[0.18em] font-bold text-[#8B72BE]">
                      COGNITIVE PSYCHOLOGY & IDENTITY
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold leading-tight mb-3">
                    The Ambition Trap: When the Pursuit of Success Becomes the Biggest Obstacle to Achieving It
                  </h2>

                  <p className="font-sans text-sm text-charcoal/85 leading-relaxed mb-6">
                    A successful senior architect had everything needed to become a leader, except the freedom to perform without constant self-judgment. Discover how narrative identity rewiring broke the performance-pressure loop and unlocked effortless leadership.
                  </p>

                  {/* 3 Concise Key Breakthroughs */}
                  <div className="space-y-2.5 mb-6 bg-[#FAF7F2] p-4 sm:p-5 rounded-sm border border-muted-border/80">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/60 font-bold block mb-1">
                      Key Breakthrough Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-navy">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span>Separated execution from self-evaluation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span>Dismantled age-based milestone urgency</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span>Authentic non-transactional presence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span>Restored spontaneous executive charisma</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-muted-border">
                  <div className="flex items-center gap-2 text-xs text-charcoal/70">
                    <BookOpen className="w-4 h-4 text-[#8B72BE]" />
                    <span className="font-medium">7 Chapters • Complete Framework</span>
                  </div>

                  <Link
                    href="/case-studies/the-ambition-trap"
                    className="inline-flex items-center gap-2 bg-navy text-gold hover:text-white hover:bg-[#2A2A5A] px-6 py-3 rounded-[2px] font-sans text-xs font-bold tracking-wider uppercase transition-all shadow-sm group"
                  >
                    <span>Read Full Report</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: CLIENT ROI TRANSFORMATION STORIES */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex flex-col items-center mb-3">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#E07A5F] block">
                CLIENT SUCCESS STORIES & ROI METRICS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy font-bold mb-4">
              Enterprise & Executive Transformation Outcomes
            </h2>
            <p className="font-sans text-sm text-charcoal/80 leading-relaxed">
              Measurable commercial scale, organizational culture synchronization, and whole-life executive alignment achieved across our signature engagements.
            </p>
          </div>

          <div className="space-y-16">
            {clientCaseStudies.map((cs) => (
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
                    <h3 className="font-serif text-2xl sm:text-3xl text-navy font-bold leading-snug mb-4">
                      {cs.title}
                    </h3>
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
                    <div className="flex items-center gap-3">
                      <Link
                        href="/book-consultation"
                        className="inline-flex items-center gap-2 bg-navy text-white hover:bg-[#2A2A5A] px-5 py-2.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
                      >
                        <span>Explore Transformation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
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
              Every transformation begins with a single conversation. Schedule a confidential discovery session with our leadership advisory team.
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


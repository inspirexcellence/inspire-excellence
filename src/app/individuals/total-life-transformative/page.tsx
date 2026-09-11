import React from 'react';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import {
  Clock,
  UserCheck,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Heart,
  Briefcase,
  Compass,
  Activity,
  Award,
  Crown,
  Lock,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'Total Life Transformative Intensive (2 Years) — Inspire Excellence',
  description:
    'A 2-year private transformation journey for leaders and founders ready to transform everything: identity, leadership, business, relationships, and legacy.',
  path: '/individuals/total-life-transformative',
});

export default function TotalLifeTransformativePage() {
  const focusAreas = [
    { title: 'Identity & Inner Transformation', icon: Crown, desc: 'Rewiring subconscious narrative identity and emotional mastery.' },
    { title: 'Leadership & Personal Excellence', icon: Award, desc: 'Executive presence, decision-making resilience, and high-impact influence.' },
    { title: 'Business, Career & Wealth Expansion', icon: Briefcase, desc: 'Operations optimization, market positioning, and sustainable scalability.' },
    { title: 'Relationships & Family', icon: Heart, desc: 'Deepening trust, conflict resolution, and harmonious life partnerships.' },
    { title: 'Health, Energy & Lifestyle Architecture', icon: Activity, desc: 'Sustained vitality, sleep optimization, and cognitive performance.' },
    { title: 'Purpose, Legacy & Long-Term Vision', icon: Compass, desc: 'Building multi-generational impact and enduring institutional heritage.' },
  ];

  const journeyPhases = [
    {
      step: '1',
      title: 'AWARENESS & ALIGNMENT',
      desc: 'Gain deep clarity, uncover subconscious patterns, and align with your true direction.',
    },
    {
      step: '2',
      title: 'STRATEGY & IMPLEMENTATION',
      desc: 'Build the systems, habits, and execution strategies to create meaningful progress.',
    },
    {
      step: '3',
      title: 'EXPANSION & INTEGRATION',
      desc: 'Scale your impact, strengthen key areas of life, and integrate lasting change into your identity.',
    },
  ];

  const deliverables = [
    '24 strategic sessions for operations, marketing and scope expansion',
    'Personal transformation work (100–120+ hours total across 4 cycles)',
    '1:1 guidance and ongoing high-touch strategic advisory',
    'Leadership and identity development tailored to your life stage',
    'Life and business holistic alignment framework',
    'Enduring legacy roadmap and governance design',
    'High-accountability milestone implementation',
    'Exclusive proprietary tools, psychological frameworks and diagnostic workbooks',
    'Direct priority access to your transformation mentor (Prerona Roy)',
  ];

  const outcomes = [
    'Unshakeable Clarity',
    'Aligned Identity',
    'Confident Decisions',
    'Stronger Relationships',
    'Scalable Business Growth',
    'Greater Fulfilment',
    'Sustainable Wellbeing',
    'A Legacy That Lives On',
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-muted-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <div className="w-8 h-[1.5px] bg-[#D48B38] mb-2.5" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#D48B38] uppercase">
                FLAGSHIP 2-YEAR PRIVATE ENGAGEMENT
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.08] mb-4">
              Total Life Transformative Intensive
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#8B72BE] mb-4">
              Transform your life. Lead with clarity. Build your legacy.
            </p>

            <span className="font-sans text-xs tracking-[0.25em] text-charcoal/60 uppercase font-semibold mb-8 block">
              A TWO-YEAR PRIVATE TRANSFORMATION JOURNEY
            </span>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
              A bespoke, multi-dimensional advisory and personal evolution engagement designed for senior leaders, founders, and accomplished individuals who want to transform every dimension of their life and lead an enduring legacy.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-consultation"
                className="bg-[#D48B38] text-white hover:bg-[#B87226] px-8 py-4 rounded-[2px] font-sans text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
              >
                <span>Apply for 2-Year Private Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/individuals"
                className="border border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
              >
                Compare with 6-Month Program
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Program Overview Matrix */}
      <section className="py-16 lg:py-20 border-b border-muted-border">
        <Container>
          <div className="text-center mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D48B38] font-bold block mb-2">
              FOUNDATIONAL ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy">
              Program Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-sm border border-muted-border shadow-xs flex flex-col justify-between">
              <div>
                <Clock className="w-6 h-6 text-[#D48B38] mb-4" />
                <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold block mb-1">
                  DURATION
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy mb-2">2 Years</h3>
              </div>
              <p className="font-sans text-xs text-charcoal/75 leading-relaxed pt-3 border-t border-muted-border/60">
                A comprehensive, deeply personalised transformation journey across 4 evolution cycles.
              </p>
            </div>

            <div className="bg-white p-7 rounded-sm border border-muted-border shadow-xs flex flex-col justify-between">
              <div>
                <UserCheck className="w-6 h-6 text-[#8B72BE] mb-4" />
                <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold block mb-1">
                  FORMAT
                </span>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">Private 1:1 + Advisory</h3>
              </div>
              <p className="font-sans text-xs text-charcoal/75 leading-relaxed pt-3 border-t border-muted-border/60">
                Tailored exclusively to your unique leadership context, vision, and personal life stage.
              </p>
            </div>

            <div className="bg-white p-7 rounded-sm border border-muted-border shadow-xs flex flex-col justify-between">
              <div>
                <Sparkles className="w-6 h-6 text-[#5B9E9E] mb-4" />
                <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold block mb-1">
                  INNER TRANSFORMATION
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy mb-2">100–120+ Hours</h3>
              </div>
              <p className="font-sans text-xs text-charcoal/75 leading-relaxed pt-3 border-t border-muted-border/60">
                25–30 hours per cycle of deep psychological, psychocybernetics, and identity rewiring.
              </p>
            </div>

            <div className="bg-white p-7 rounded-sm border border-muted-border shadow-xs flex flex-col justify-between">
              <div>
                <TrendingUp className="w-6 h-6 text-[#E07A5F] mb-4" />
                <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold block mb-1">
                  STRATEGIC SESSIONS
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy mb-2">24 High-Impact</h3>
              </div>
              <p className="font-sans text-xs text-charcoal/75 leading-relaxed pt-3 border-t border-muted-border/60">
                Operations, marketing growth, scope expansion, and institutional executive strategy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6 Focus Areas */}
      <section className="py-16 lg:py-24 bg-white border-b border-muted-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
              A HOLISTIC APPROACH TO A REMARKABLE LIFE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
              The 6 Life & Leadership Focus Areas
            </h2>
            <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
              True transformation is never one-dimensional. We integrate your internal mindset with external business execution and personal fulfilment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {focusAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF7F2] p-8 rounded-sm border border-muted-border shadow-xs flex flex-col items-start hover:shadow-card transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-muted-border mb-5">
                    <IconComp className="w-6 h-6 text-[#D48B38]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">{area.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Transformation Journey (3 Phases) */}
      <section className="py-16 lg:py-20 border-b border-muted-border bg-[#FAF7F2]">
        <Container>
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D48B38] font-bold block mb-2">
              A DEEPER YOU. A GREATER TOMORROW.
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy">
              Your 2-Year Transformation Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journeyPhases.map((phase, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-sm border border-muted-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#D48B38]/10 text-[#D48B38] font-serif text-xl font-bold flex items-center justify-center mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">{phase.title}</h3>
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-muted-border/60">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/50 font-semibold">
                    Cycle Phase {phase.step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Flipbook Brochure Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-muted-border">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-sans text-xs uppercase tracking-widest text-[#D48B38] font-bold block mb-2">
                INTERACTIVE EXECUTIVE DOCUMENT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-3">
                Explore the Complete Program Brochure
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/75 max-w-xl mx-auto">
                Turn pages interactively, review curriculum modules, and explore the architecture of this 2-year private engagement.
              </p>
            </div>

            {/* Flipbook Embed Frame */}
            <div className="bg-[#FAF7F2] p-2 sm:p-4 rounded-md border border-muted-border shadow-card overflow-hidden">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] min-h-[460px] sm:min-h-[580px] lg:min-h-[660px]">
                <iframe
                  src="https://heyzine.com/flip-book/8f47b7091b.html"
                  title="Total Life Transformative Intensive Official Brochure"
                  className="w-full h-full border-0 rounded-sm"
                  allow="fullscreen"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-charcoal/70 px-2">
              <span className="font-sans">
                Tip: Click on page corners or use your keyboard arrows to flip pages.
              </span>
              <a
                href="https://heyzine.com/flip-book/8f47b7091b.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-[#D48B38] font-semibold underline"
              >
                Open in Fullscreen Mode ↗
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Deliverables & Investment Block */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* What You Receive */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-sm border border-muted-border shadow-card flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
                  COMPREHENSIVE. PERSONAL. TRANSFORMATIVE.
                </span>
                <h2 className="font-serif text-3xl text-navy mb-6">
                  What You Receive
                </h2>
                <div className="space-y-3.5">
                  {deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                      <span className="font-sans text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Investment Card */}
            <div className="lg:col-span-5 bg-[#1A1A40] text-white p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4 text-gold" />
                  <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">
                    INVESTMENT & ADMISSION
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">
                  24-Month Private Engagement
                </h3>
                <p className="font-sans text-xs text-white/70 leading-relaxed mb-6">
                  Intentionally capped to maintain white-glove strategic attention and direct 1:1 mentorship.
                </p>

                <div className="bg-white/10 p-6 rounded-sm border border-white/15 mb-6">
                  <span className="font-sans text-xs uppercase tracking-wider text-white/70 block mb-1">
                    TOTAL INVESTMENT
                  </span>
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-gold mb-1">
                    ₹2,50,000
                  </div>
                  <span className="font-sans text-[11px] text-white/60">
                    24-Month Comprehensive Private Engagement
                  </span>
                </div>

                <div className="text-xs text-white/80 space-y-2 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>Discovery & application review required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>Quarterly milestone reviews & KPI tracking</span>
                  </div>
                </div>
              </div>

              <Link
                href="/book-consultation"
                className="w-full bg-gold text-navy hover:bg-gold-light py-4 rounded-[2px] font-sans text-xs font-bold tracking-wider uppercase text-center block transition-all shadow-md"
              >
                Apply for Private Engagement
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 8 Core Outcomes */}
      <section className="py-16 bg-[#F8F2EA] border-y border-muted-border">
        <Container>
          <div className="text-center mb-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D48B38] font-bold block mb-1">
              A TRANSFORMED YOU. A MORE MEANINGFUL, IMPACTFUL LIFE.
            </span>
            <h2 className="font-serif text-3xl text-navy">Expected Outcomes</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {outcomes.map((outcome, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-sm border border-muted-border/80 text-center shadow-xs flex items-center justify-center font-serif text-sm sm:text-base font-semibold text-navy"
              >
                {outcome}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing Quote Banner */}
      <section className="py-16 bg-navy text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <p className="font-serif italic text-xl sm:text-2xl text-gold mb-6 leading-relaxed">
              &ldquo;A private journey for those ready to transform everything — not just one area.&rdquo;
            </p>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-white/60 mb-8 font-sans">
              <span>PEOPLE</span>
              <span>•</span>
              <span>PURPOSE</span>
              <span>•</span>
              <span>PERFORMANCE</span>
              <span>•</span>
              <span>LEGACY</span>
            </div>
            <Link
              href="/book-consultation"
              className="bg-gold text-navy hover:bg-gold-light px-8 py-3.5 rounded-[2px] font-sans text-xs font-bold tracking-wider uppercase transition-all"
            >
              Book Discovery Call
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

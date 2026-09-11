import React from 'react';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import {
  Clock,
  Target,
  RotateCcw,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'Transformation for Individuals — Founder Clarity & Total Life Evolution',
  description:
    'Compare our two signature individual transformation pathways: Founder Clarity Intensive (6 Months) and Total Transformation Intensive (2 Years).',
  path: '/individuals',
});

export default function IndividualsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-muted-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
                INDIVIDUAL TRANSFORMATION PATHWAYS
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1] mb-6">
              Two powerful pathways. <br />
              <span className="font-serif italic font-normal text-[#8B72BE]">Different depth.</span>{' '}
              <span className="font-serif italic font-normal text-[#E07A5F]">Same transformation.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
              Whether you need rapid, laser-focused business clarity or a holistic, multi-dimensional life and legacy evolution, we provide the structured framework to lead your next chapter.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#comparison"
                className="bg-navy text-white hover:bg-[#2A2A5A] px-6 py-3 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Compare Pathways</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/book-consultation"
                className="border border-[#1A1A40] text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
              >
                Book Discovery Call
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Grid Section (Exact match to approved chart) */}
      <section id="comparison" className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-3">
              Founder Clarity Intensive <span className="text-charcoal/40 font-sans text-xl">vs</span> Total Transformation Intensive
            </h2>
            <p className="font-sans text-sm text-charcoal/70">
              Select the depth of transformation aligned with your current vision and leadership demands.
            </p>
          </div>

          {/* Side by Side Comparison Table Card */}
          <div className="bg-white rounded-md border border-muted-border shadow-card overflow-hidden">
            {/* Table Headers */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-muted-border divide-y md:divide-y-0 md:divide-x divide-muted-border">
              <div className="md:col-span-3 p-6 bg-[#FAF7F2]/60 hidden md:flex items-center font-serif text-lg font-bold text-navy">
                Key Dimensions
              </div>

              {/* Founder Clarity Column Header */}
              <div className="md:col-span-4.5 lg:col-span-4 p-6 sm:p-8 bg-[#1A1A40] text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-gold" />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-widest text-gold font-semibold">
                      Path 1
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-1">FOUNDER CLARITY INTENSIVE</h3>
                  <p className="font-sans text-xs text-white/80 uppercase tracking-wider">
                    Clarity to build. Focus to scale.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/15 flex items-center justify-between">
                  <span className="font-sans text-xs text-white/70">Engagement: 6 Months</span>
                  <Link
                    href="/individuals/founder-clarity-intensive"
                    className="text-xs text-gold hover:underline font-semibold flex items-center gap-1"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              {/* Total Transformation Column Header */}
              <div className="md:col-span-4.5 lg:col-span-5 p-6 sm:p-8 bg-[#D48B38] text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-widest text-white/90 font-semibold">
                      Path 2 — Flagship
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-1">TOTAL TRANSFORMATION INTENSIVE</h3>
                  <p className="font-sans text-xs text-white/90 uppercase tracking-wider">
                    Transform everything. Lead your legacy.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between">
                  <span className="font-sans text-xs text-white/90">Engagement: 2 Years</span>
                  <Link
                    href="/individuals/total-life-transformative"
                    className="text-xs text-white hover:underline font-bold flex items-center gap-1"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 1: Duration */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-muted-border divide-y md:divide-y-0 md:divide-x divide-muted-border hover:bg-cream/20 transition-colors">
              <div className="md:col-span-3 p-5 sm:p-6 bg-[#FAF7F2]/40 flex items-center gap-3 font-sans text-xs sm:text-sm font-bold text-navy uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#8B72BE]" />
                <span>Duration</span>
              </div>
              <div className="md:col-span-4.5 lg:col-span-4 p-5 sm:p-6">
                <span className="font-serif text-xl sm:text-2xl font-bold text-navy">6 MONTHS</span>
              </div>
              <div className="md:col-span-4.5 lg:col-span-5 p-5 sm:p-6 bg-cream/10">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#D48B38]">2 YEARS</span>
              </div>
            </div>

            {/* Row 2: Focus / Scope */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-muted-border divide-y md:divide-y-0 md:divide-x divide-muted-border hover:bg-cream/20 transition-colors">
              <div className="md:col-span-3 p-5 sm:p-6 bg-[#FAF7F2]/40 flex items-center gap-3 font-sans text-xs sm:text-sm font-bold text-navy uppercase tracking-wider">
                <Target className="w-4 h-4 text-[#E07A5F]" />
                <span>Focus / Scope</span>
              </div>
              <div className="md:col-span-4.5 lg:col-span-4 p-5 sm:p-6">
                <h4 className="font-sans text-sm font-bold text-navy mb-1">1–2 BUSINESS ASPECTS</h4>
                <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                  Laser-focused on the key areas that unlock your next level of business growth.
                </p>
              </div>
              <div className="md:col-span-4.5 lg:col-span-5 p-5 sm:p-6 bg-cream/10">
                <h4 className="font-sans text-sm font-bold text-navy mb-1">ALL ASPECTS OF LEGACY BUILDING</h4>
                <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                  Leadership, Personal excellence, Family, Relationships, Health & Lifestyle Architecture.
                </p>
              </div>
            </div>

            {/* Row 3: Cycles of Evolution */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-muted-border divide-y md:divide-y-0 md:divide-x divide-muted-border hover:bg-cream/20 transition-colors">
              <div className="md:col-span-3 p-5 sm:p-6 bg-[#FAF7F2]/40 flex items-center gap-3 font-sans text-xs sm:text-sm font-bold text-navy uppercase tracking-wider">
                <RotateCcw className="w-4 h-4 text-[#5B9E9E]" />
                <span>Cycles of Evolution</span>
              </div>
              <div className="md:col-span-4.5 lg:col-span-4 p-5 sm:p-6">
                <h4 className="font-sans text-sm font-bold text-navy mb-1">1 CYCLE OF EVOLUTION</h4>
                <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                  A deep, focused journey through one complete cycle of transformation.
                </p>
              </div>
              <div className="md:col-span-4.5 lg:col-span-5 p-5 sm:p-6 bg-cream/10">
                <h4 className="font-sans text-sm font-bold text-navy mb-1">4 CYCLES OF EVOLUTION</h4>
                <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                  A comprehensive journey through four complete cycles for total life & leadership transformation.
                </p>
              </div>
            </div>

            {/* Row 4: Personal Transformation Work */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-muted-border divide-y md:divide-y-0 md:divide-x divide-muted-border hover:bg-cream/20 transition-colors">
              <div className="md:col-span-3 p-5 sm:p-6 bg-[#FAF7F2]/40 flex items-center gap-3 font-sans text-xs sm:text-sm font-bold text-navy uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#8B72BE]" />
                <span>Personal Transformation</span>
              </div>
              <div className="md:col-span-4.5 lg:col-span-4 p-5 sm:p-6">
                <h4 className="font-sans text-sm font-bold text-navy mb-1">25–30 HOURS</h4>
                <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                  Of personal transformation work embedded in 1 cycle.
                </p>
              </div>
              <div className="md:col-span-4.5 lg:col-span-5 p-5 sm:p-6 bg-cream/10">
                <h4 className="font-sans text-sm font-bold text-navy mb-1">EACH CYCLE: 25–30 HOURS</h4>
                <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                  (100–120+ hours total across 4 complete cycles).
                </p>
              </div>
            </div>

            {/* Row 5: Strategy Sessions */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-muted-border divide-y md:divide-y-0 md:divide-x divide-muted-border hover:bg-cream/20 transition-colors">
              <div className="md:col-span-3 p-5 sm:p-6 bg-[#FAF7F2]/40 flex items-center gap-3 font-sans text-xs sm:text-sm font-bold text-navy uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#E07A5F]" />
                <span>Strategy Sessions</span>
              </div>
              <div className="md:col-span-4.5 lg:col-span-4 p-5 sm:p-6">
                <h4 className="font-sans text-sm font-bold text-navy mb-1">12 STRATEGY SESSIONS</h4>
                <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                  High-impact, focused strategy sessions to drive clear results.
                </p>
              </div>
              <div className="md:col-span-4.5 lg:col-span-5 p-5 sm:p-6 bg-cream/10">
                <h4 className="font-sans text-sm font-bold text-navy mb-1">50 STRATEGY SESSIONS</h4>
                <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                  Comprehensive, multi-dimensional strategy sessions for exponential growth & legacy.
                </p>
              </div>
            </div>

            {/* Row 6: Ideal For */}
            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-muted-border hover:bg-cream/20 transition-colors">
              <div className="md:col-span-3 p-5 sm:p-6 bg-[#FAF7F2]/40 flex items-center gap-3 font-sans text-xs sm:text-sm font-bold text-navy uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Ideal For</span>
              </div>
              <div className="md:col-span-4.5 lg:col-span-4 p-5 sm:p-6">
                <h4 className="font-sans text-sm font-bold text-navy mb-2">FOUNDERS WHO:</h4>
                <ul className="space-y-1.5 text-xs text-charcoal/80">
                  <li className="flex items-start gap-2">
                    <span className="text-teal">•</span> Want clarity and breakthrough in key areas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal">•</span> Need focused strategy and transformation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal">•</span> Are ready to scale with precision
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/individuals/founder-clarity-intensive"
                    className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider hover:bg-[#2A2A5A] transition-all"
                  >
                    <span>Explore 6-Month Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-4.5 lg:col-span-5 p-5 sm:p-6 bg-cream/10">
                <h4 className="font-sans text-sm font-bold text-navy mb-2">LEADERS WHO:</h4>
                <ul className="space-y-1.5 text-xs text-charcoal/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D48B38]">•</span> Want total transformation in all areas of life
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D48B38]">•</span> Are committed to deep, holistic evolution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D48B38]">•</span> Want to create a lasting legacy
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/individuals/total-life-transformative"
                    className="inline-flex items-center gap-2 bg-[#D48B38] text-white px-5 py-2.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider hover:bg-[#B87226] transition-all"
                  >
                    <span>Explore 2-Year Flagship</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 bg-navy text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="font-sans text-xs tracking-widest text-gold uppercase font-semibold mb-2">
              SAME DESTINATION: A TRANSFORMED YOU. A THRIVING BUSINESS. A LASTING LEGACY.
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
              Choose your path. Commit to your evolution.
            </h3>
            <Link
              href="/book-consultation"
              className="bg-gold text-navy hover:bg-gold-light px-8 py-3.5 rounded-[2px] font-sans text-xs font-bold tracking-wider transition-all uppercase"
            >
              Book 15-Min Discovery Session
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

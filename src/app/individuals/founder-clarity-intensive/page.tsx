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
  Shield,
  Zap,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'Founder Clarity Intensive (6 Months) — Inspire Excellence',
  description:
    'A 6-month intensive transformation pathway for founders seeking clarity to build and focus to scale with precision.',
  path: '/individuals/founder-clarity-intensive',
});

export default function FounderClarityIntensivePage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-muted-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
                6-MONTH PRIVATE ENGAGEMENT
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1] mb-6">
              Founder Clarity Intensive
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#E07A5F] mb-6">
              Clarity to build. Focus to scale.
            </p>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
              A deep, laser-focused 6-month transformational journey designed specifically for founders, executives, and high-impact builders ready to eliminate operational friction and scale with precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-consultation"
                className="bg-navy text-white hover:bg-[#2A2A5A] px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Apply for 6-Month Intensive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/individuals"
                className="border border-navy text-navy hover:bg-navy hover:text-white px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
              >
                Compare with 2-Year Program
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Program Blueprint */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-sm border border-muted-border shadow-xs flex flex-col items-start">
              <Clock className="w-6 h-6 text-[#8B72BE] mb-4" />
              <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold mb-1">
                Duration
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy mb-2">6 Months</h3>
              <p className="font-sans text-xs text-charcoal/75 leading-relaxed">
                One complete, high-intensity cycle of evolution and strategic execution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-muted-border shadow-xs flex flex-col items-start">
              <Target className="w-6 h-6 text-[#E07A5F] mb-4" />
              <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold mb-1">
                Focus & Scope
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy mb-2">1–2 Business Aspects</h3>
              <p className="font-sans text-xs text-charcoal/75 leading-relaxed">
                Laser-focused on the primary leverage points that unlock immediate growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-muted-border shadow-xs flex flex-col items-start">
              <Sparkles className="w-6 h-6 text-[#5B9E9E] mb-4" />
              <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold mb-1">
                Personal Work
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy mb-2">25–30 Hours</h3>
              <p className="font-sans text-xs text-charcoal/75 leading-relaxed">
                Deep inner psychological alignment and subconscious mindset rewiring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-muted-border shadow-xs flex flex-col items-start">
              <Users className="w-6 h-6 text-gold mb-4" />
              <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold mb-1">
                Strategy Sessions
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy mb-2">12 Sessions</h3>
              <p className="font-sans text-xs text-charcoal/75 leading-relaxed">
                High-impact, 1:1 strategic advisory to drive clear measurable milestones.
              </p>
            </div>
          </div>

          {/* What You Experience */}
          <div className="bg-white p-8 sm:p-12 rounded-sm border border-muted-border shadow-card mb-16">
            <div className="max-w-3xl">
              <span className="font-sans text-xs font-bold text-[#8B72BE] uppercase tracking-widest mb-2 block">
                THE 1 CYCLE OF EVOLUTION
              </span>
              <h2 className="font-serif text-3xl text-navy mb-6">
                What makes the Founder Clarity Intensive transformative?
              </h2>
              <div className="space-y-4 text-charcoal/85 text-sm sm:text-base leading-relaxed">
                <p>
                  Most founders face decision fatigue, fragmented focus, and internal resistance when scaling from validation to market leadership. The Founder Clarity Intensive is built as a dedicated 6-month sprint that aligns your personal identity with your business roadmap.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {[
                    'Subconscious belief & psychocybernetics recalibration',
                    'Operating rhythm & team leadership alignment',
                    'Strategic prioritization to protect founder energy',
                    'High-accountability bi-weekly execution reviews',
                    '1:1 direct access to Prerona Roy for crisis advisory',
                    'Complete founder clarity playbook and decision matrix',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <span className="font-sans text-xs sm:text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ideal For */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#1A1A40] text-white p-8 sm:p-12 rounded-sm">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
                APPLICATION CRITERIA
              </span>
              <h3 className="font-serif text-3xl font-bold mb-4">
                Is this intensive right for you?
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                This program is intentionally limited to 5 founders per cohort to ensure deep, unfiltered strategic involvement.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  You run a growing business and feel bottlenecked by daily operations.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  You need razor-sharp clarity on which 1–2 strategic levers to pull next.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  You are prepared to do the inner psychological work necessary to lead at scale.
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start lg:items-end justify-center">
              <div className="bg-white/10 p-6 rounded-sm border border-white/15 w-full max-w-md">
                <span className="font-sans text-xs text-gold uppercase tracking-wider font-semibold block mb-1">
                  Private 6-Month Intensive
                </span>
                <span className="font-serif text-2xl font-bold text-white block mb-4">
                  Bespoke Founder Engagement
                </span>
                <p className="font-sans text-xs text-white/70 mb-6">
                  Includes 12 strategy sessions, 25–30 personal transformation hours, and unlimited asynchronous advisory.
                </p>
                <Link
                  href="/book-consultation"
                  className="w-full bg-gold text-navy hover:bg-gold-light py-3 rounded-[2px] font-sans text-xs font-bold tracking-wider uppercase text-center block transition-all"
                >
                  Schedule Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

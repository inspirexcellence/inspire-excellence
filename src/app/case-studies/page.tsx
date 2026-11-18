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
  Quote,
  Clock,
  TrendingUp,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'Case Studies & Transformation Reports — Inspire Excellence',
  description:
    'Real stories of executive alignment, culture transformation, and leadership breakthroughs achieved with the Inspire Excellence 3P framework.',
  path: '/case-studies',
});

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
                EXECUTIVE WHITE PAPERS & CASE REPORTS
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1] mb-6">
              Case Studies & <br />
              <span className="font-serif italic font-normal text-[#8B72BE]">Executive Impact</span>{' '}
              <span className="font-serif italic font-normal text-[#E07A5F]">Reports.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
              Explore our in-depth executive transformation reports and case studies documenting real-world breakthroughs in leadership, culture, and scalable enterprise growth.
            </p>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#executive-reports"
                className="inline-flex items-center gap-2.5 bg-navy text-white hover:bg-[#2A2A5A] px-6 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-gold" />
                <span>Explore Executive Reports</span>
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

      {/* SECTION: FEATURED EXECUTIVE CASE STUDY REPORTS */}
      <section id="executive-reports" className="py-12 lg:py-20 border-b border-muted-border bg-[#F4EFE6]/60">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-muted-border/80 pb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B72BE]" />
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#8B72BE]">
                  SPECIAL WHITE PAPERS & CASE REPORTS
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-charcoal/70 bg-white px-3.5 py-1.5 rounded-full border border-muted-border shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>Complete Online Reading Reports</span>
              </div>
            </div>

            {/* REPORT CARD 1: The Ambition Trap */}
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
                
                <div className="absolute top-4 left-4">
                  <span className="bg-[#8B72BE] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-[2px] shadow-sm">
                    EXECUTIVE REPORT 01
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
                  <p className="font-sans text-[11px] text-white/70 mt-1">
                    Engagement: 1:1 Executive Transformation (6-Month Intensive)
                  </p>
                </div>
              </div>

              {/* Right Content Column */}
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

                  {/* Highlights */}
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
                    <span className="font-medium">12-Min Read • 7 Narrative Chapters</span>
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

            {/* REPORT CARD 2: The Bottleneck Wore His Name */}
            <div className="bg-white rounded-md border-2 border-[#E07A5F]/30 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-300 hover:shadow-2xl hover:border-[#E07A5F]/50">
              {/* Left Visual Column */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-[#1A1A40] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop&q=80"
                  alt="The Bottleneck Wore His Name Case Study"
                  fill
                  className="object-cover opacity-85"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E07A5F] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-[2px] shadow-sm">
                    EXECUTIVE REPORT 02
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-gold text-xs font-serif italic mb-1">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0 text-gold" />
                    <span>Family Business Transformation Case Study</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-white leading-snug">
                    Client: Third-Generation Owner, Family Enterprise
                  </p>
                  <p className="font-sans text-[11px] text-white/70 mt-1">
                    Engagement: Total Life Transformative Intensive™ (2 Years)
                  </p>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="font-sans text-xs uppercase tracking-[0.18em] font-bold text-[#E07A5F]">
                      FAMILY ENTERPRISE & SCALING (2-YEAR INTENSIVE)
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold leading-tight mb-3">
                    The Bottleneck Wore His Name: How a Third-Generation Owner Grew a ₹16 Crore Business by Changing the Man Who Ran It
                  </h2>

                  <p className="font-sans text-sm text-charcoal/85 leading-relaxed mb-6">
                    The story of a business owner who asked for better execution, and discovered that the ceiling on his company&apos;s growth was not a process, a market or a team—it was an owner-dependency loop. Discover how shifting from Operator to Architect unlocked ₹10 Cr in revenue growth.
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6 bg-[#FAF7F2] p-4 sm:p-5 rounded-sm border border-muted-border/80">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/60 font-bold block mb-1">
                      Key Transformation Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-navy">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span>Scaled revenue from ₹16 Cr to ₹26 Cr (+62.5%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span>Reduced dealer delivery time by 2 days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span>Shifted from Operator to Systems Architect</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span>Resolved father-son generational dynamics</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-muted-border">
                  <div className="flex items-center gap-2 text-xs text-charcoal/70">
                    <BookOpen className="w-4 h-4 text-[#E07A5F]" />
                    <span className="font-medium">14-Min Read • Complete Revenue & Operational Metrics</span>
                  </div>

                  <Link
                    href="/case-studies/the-bottleneck-wore-his-name"
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

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import {
  Clock,
  Target,
  RotateCcw,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Play,
  X,
  Quote,
  Star,
  Award,
  Lock,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export default function FounderClarityIntensivePage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoTestimonials = [
    {
      id: 'vid-1',
      name: 'Executive Founder & CEO',
      company: 'Tech Scale-Up',
      title: 'Breaking Through Operational Bottlenecks & 3x Growth',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop',
      duration: '3:45',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Embed placeholder / updateable
      quote:
        'Prerona Ma’am helped me transition from being the bottleneck in every decision to building a self-sustaining leadership rhythm.',
      tag: 'Scale & Operations',
    },
    {
      id: 'vid-2',
      name: 'Managing Partner',
      company: 'Advisory & Venture Firm',
      title: 'Rewiring Executive Mindset & High-Stakes Clarity',
      thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=500&fit=crop',
      duration: '4:12',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote:
        'The depth of inner psychological work in the 6-month intensive unlocked clarity I hadn’t found in a decade of coaching.',
      tag: 'Narrative Identity',
    },
    {
      id: 'vid-3',
      name: 'D2C Brand Founder',
      company: 'Consumer Goods',
      title: 'From 80-Hour Burnout to Strategic Market Expansion',
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=500&fit=crop',
      duration: '5:20',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote:
        'We restructured our revenue levers and reclaimed 30+ hours a week of founder energy without sacrificing business growth.',
      tag: 'Founder Vitality',
    },
    {
      id: 'vid-4',
      name: 'Enterprise Director',
      company: 'Global Solutions',
      title: 'Aligning People, Vision & High-Performance Teams',
      thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop',
      duration: '3:15',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote:
        'The 3P framework turned abstract culture goals into measurable operational execution across our entire department.',
      tag: 'Team Alignment',
    },
  ];

  const writtenTestimonials = [
    {
      name: 'Ritusmita Biswas',
      designation: 'Media Entrepreneur & Communications Strategist',
      role: 'Founder, Wordsmith Media',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
      content:
        'Working with Prerona Ma’am is an evolutionary experience. Her profound grasp of psychocybernetics and narrative identity helped me dismantle deep-seated internal plateaus and scale my ventures with absolute conviction. She sees straight through the noise to your highest potential.',
      highlight: 'Dismantled deep-seated plateaus with conviction',
    },
    {
      name: 'Pankaj Bajaj',
      designation: 'Industrialist & Business Leader',
      role: 'Enterprise Director & TEDx Organizer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      content:
        'The Founder Clarity Intensive is not standard consulting—it is a surgical transformation of how a founder operates. Prerona’s structured 1 Cycle of Evolution gave our leadership team razor-sharp decision frameworks, eliminating operational drag and accelerating critical strategic execution.',
      highlight: 'Surgical transformation of how a founder operates',
    },
    {
      name: 'Harish Shadadpuri',
      designation: 'Corporate Executive & Managing Director',
      role: 'Global Trade & Operations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      content:
        'Prerona Roy brings an unmatched combination of commercial acumen and psychological mastery. Her 1:1 mentorship helped me navigate complex executive transitions and align my entire leadership core. The clarity gained in 6 months continues to compound daily.',
      highlight: 'Unmatched commercial acumen and psychological mastery',
    },
  ];

  const programDeliverables = [
    '12 High-Impact 1:1 Strategy Sessions with Prerona Roy',
    '25–30 Hours of Intensive Personal & Psychological Transformation',
    '1 Full Cycle of Evolution (Awareness, Strategy, Execution)',
    'Subconscious Belief & Psychocybernetics Recalibration',
    '1–2 Core Business Growth & Operational Leverage Levers',
    'Founder Energy Protection & Delegation Decision Matrix',
    'Bi-Weekly Execution Reviews & Milestone Accountability',
    'Direct Priority Asynchronous Advisory Access',
    'Inspire Excellence Diagnostic Workbook & Frameworks',
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-muted-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
                6-MONTH PRIVATE ENGAGEMENT
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.08] mb-4">
              Founder Clarity Intensive
            </h1>

            <p className="font-serif italic text-2xl sm:text-3xl text-[#E07A5F] mb-6">
              Clarity to build. Focus to scale.
            </p>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
              A bespoke 6-month transformational pathway designed exclusively for founders, CXOs, and visionary builders ready to master inner alignment, eliminate operational bottlenecks, and scale with precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#pricing"
                className="bg-navy text-white hover:bg-[#2A2A5A] px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center gap-2 transition-all shadow-sm"
              >
                <span>View Program Investment & Apply</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#video-testimonials"
                className="border border-navy text-navy hover:bg-navy hover:text-white px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center gap-2 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Client Stories</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Program Architect Profile */}
      <section className="py-16 lg:py-20 border-b border-muted-border bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Image of Prerona Ma'am */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-muted-border shadow-card bg-[#FAF7F2]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                  alt="Prerona Roy — Founder & Leadership Coach"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-gold font-bold block mb-1">
                    FOUNDER & LEADERSHIP COACH
                  </span>
                  <h3 className="font-serif text-2xl font-bold">Prerona Roy</h3>
                  <p className="font-sans text-xs text-white/80 mt-1">
                    John Maxwell-Certified Coach • 17+ Years Corporate Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Bio & Approach */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
                YOUR TRANSFORMATION MENTOR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
                Mentorship grounded in resilience, psychocybernetics, and executive mastery.
              </h2>
              <div className="space-y-4 text-charcoal/80 text-sm sm:text-base leading-relaxed">
                <p>
                  As an 82% burn survivor who rebuilt her career to lead senior corporate divisions and mentor thousands of leaders worldwide, Prerona Roy brings a rare synthesis of emotional depth and rigorous commercial strategy.
                </p>
                <p>
                  In the Founder Clarity Intensive, Prerona works directly with you 1:1 to dismantle subconscious friction, optimize operational focus, and build executive decision frameworks that compound across your organization.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-muted-border">
                <div>
                  <span className="font-serif text-3xl font-bold text-navy block">17+</span>
                  <span className="font-sans text-xs text-charcoal/70 uppercase tracking-wider">Years Experience</span>
                </div>
                <div>
                  <span className="font-serif text-3xl font-bold text-navy block">5000+</span>
                  <span className="font-sans text-xs text-charcoal/70 uppercase tracking-wider">Leaders Mentored</span>
                </div>
                <div>
                  <span className="font-serif text-3xl font-bold text-navy block">1:1</span>
                  <span className="font-sans text-xs text-charcoal/70 uppercase tracking-wider">Private Advisory</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Video Testimonials Showcase */}
      <section id="video-testimonials" className="py-16 lg:py-24 border-b border-muted-border bg-[#FAF7F2]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#E07A5F] font-bold block mb-2">
              CLIENT CASE VIDEOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
              Watch Real Founder Transformation Stories
            </h2>
            <p className="font-sans text-sm text-charcoal/75">
              Hear firsthand from founders and executives who completed the intensive and scaled their organizations with clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-sm border border-muted-border shadow-card overflow-hidden flex flex-col justify-between group"
              >
                {/* Thumbnail Container with Play Trigger */}
                <div
                  className="relative aspect-video w-full bg-charcoal cursor-pointer overflow-hidden"
                  onClick={() => setActiveVideo(video.videoUrl)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/95 text-navy flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 bg-navy/90 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-[2px]">
                    {video.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-0.5 rounded-[2px] font-mono">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-navy mb-2 leading-snug">
                      {video.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/80 italic leading-relaxed mb-4">
                      &ldquo;{video.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-muted-border/60 flex items-center justify-between">
                    <div>
                      <span className="font-sans text-xs font-bold text-navy block">{video.name}</span>
                      <span className="font-sans text-[11px] text-charcoal/60">{video.company}</span>
                    </div>
                    <button
                      onClick={() => setActiveVideo(video.videoUrl)}
                      className="text-xs font-semibold text-[#8B72BE] hover:text-navy flex items-center gap-1 cursor-pointer"
                    >
                      Watch Video →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3 Prominent Client Testimonials (Ritusmita, Pankaj Bajaj, Harish Shadadpuri) */}
      <section className="py-16 lg:py-24 bg-white border-b border-muted-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
              CLIENT ENDORSEMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
              Trusted by Industry Leaders & Entrepreneurs
            </h2>
            <p className="font-sans text-sm text-charcoal/75">
              Read how our tailored executive mentorship delivers clarity, alignment, and sustainable commercial expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {writtenTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#FAF7F2] p-8 sm:p-10 rounded-sm border border-muted-border shadow-xs flex flex-col justify-between hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 text-gold mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="font-sans text-xs uppercase font-bold text-[#E07A5F] tracking-wider mb-3">
                    {t.highlight}
                  </p>

                  <p className="font-sans text-sm text-charcoal/85 leading-relaxed mb-8">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-muted-border flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-muted-border shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-navy">{t.name}</h4>
                    <p className="font-sans text-xs text-charcoal/70">{t.designation}</p>
                    <span className="font-sans text-[11px] text-[#8B72BE] font-medium block">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured 6-Month Intensive Case Study */}
      <section className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-muted-border">
        <Container>
          <div className="bg-white rounded-sm border border-muted-border shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Image */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-cream">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80"
                alt="The Ambition Trap Case Study"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-muted-border shadow-xs">
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#8B72BE]">
                  6-MONTH TRANSFORMATION
                </span>
              </div>
            </div>

            {/* Content & Breakthroughs */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#8B72BE] block mb-2">
                  FEATURED EXECUTIVE CASE STUDY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold leading-snug mb-3">
                  The Ambition Trap: When the Pursuit of Success Becomes the Biggest Obstacle to Achieving It
                </h2>
                <p className="font-serif italic text-sm sm:text-base text-[#E07A5F] mb-4">
                  The story of a successful senior architect who had everything he needed to become a leader, except the freedom to perform without constantly judging himself.
                </p>
                <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-6">
                  Carrying an underlying belief that failing to become a Director by 42 meant he was &ldquo;average&rdquo;, his attention was perpetually divided between doing the work and appraising himself. Through 1:1 narrative identity rewiring and cognitive psychology, we broke the performance-pressure loop.
                </p>

                {/* Key Breakthroughs */}
                <div className="space-y-2 mb-8 bg-[#FAF7F2] p-5 rounded-sm border border-muted-border/60">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/60 font-semibold block mb-2">
                    Core Transformation Breakthroughs:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-navy font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>Separated execution from internal reflection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>Authentic, non-transactional relationships</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>Dismantled age-based deadline for self-worth</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>Practicing executive leadership in the present</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-muted-border">
                <span className="font-sans text-xs text-charcoal/60">
                  Client: Senior Architect, Consulting Firm
                </span>
                <Link
                  href="/case-studies/the-ambition-trap"
                  className="inline-flex items-center gap-2 bg-navy text-white hover:bg-[#2A2A5A] px-6 py-3 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all shadow-sm"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Program Blueprint (4 Dimensions) */}
      <section className="py-16 lg:py-20 border-b border-muted-border bg-white">
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
              <h3 className="font-serif text-2xl font-bold text-navy mb-2">1–2 Business Levers</h3>
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
        </Container>
      </section>

      {/* Pricing & Investment Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Deliverables */}
            <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-12 rounded-sm border border-muted-border shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
                  COMPLETE 6-MONTH CURRICULUM
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
                  What You Receive in the Intensive
                </h2>
                <div className="space-y-3.5">
                  {programDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                      <span className="font-sans text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-muted-border/80 flex items-center justify-between text-xs text-charcoal/70">
                <span>Cohort Limit: Capped to 5 Founders</span>
                <span className="text-[#8B72BE] font-semibold">1:1 High-Touch Advisory</span>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-5 bg-[#1A1A40] text-white p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4 text-gold" />
                  <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">
                    INVESTMENT & ADMISSION
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">
                  Founder Clarity Intensive
                </h3>
                <p className="font-sans text-xs text-white/70 leading-relaxed mb-6">
                  6-month private 1:1 engagement with Prerona Roy designed to unlock your next level of growth.
                </p>

                <div className="bg-white/10 p-6 rounded-sm border border-white/15 mb-6">
                  <span className="font-sans text-xs uppercase tracking-wider text-white/70 block mb-1">
                    PROGRAMME INVESTMENT
                  </span>
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-gold mb-1">
                    ₹1,25,000
                  </div>
                  <span className="font-sans text-[11px] text-white/60">
                    6-Month Bespoke Private Transformation Engagement
                  </span>
                </div>

                <div className="text-xs text-white/80 space-y-2 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>Includes all 12 strategy sessions & 25–30h inner work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>Discovery call & suitability evaluation required</span>
                  </div>
                </div>
              </div>

              <Link
                href="/book-consultation"
                className="w-full bg-gold text-navy hover:bg-gold-light py-4 rounded-[2px] font-sans text-xs font-bold tracking-wider uppercase text-center block transition-all shadow-md"
              >
                Apply for 6-Month Intensive
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-sm overflow-hidden shadow-2xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={activeVideo}
              title="Founder Transformation Testimonial"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

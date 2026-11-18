'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Compass,
  FileText,
  Search,
  Layout,
  PlayCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function FlowchartTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      number: '01',
      title: 'Outcome Clarification',
      subtitle: 'Defining unambiguous objectives and transformation horizons',
      description:
        'We establish the exact strategic, behavioural, and financial outcomes required from the engagement. Rather than focusing on surface-level symptoms, we define the non-negotiable milestones that constitute genuine enterprise transformation.',
      icon: Compass,
      color: '#8B72BE',
      outputs: ['Strategic Outcome Blueprint', 'Target Milestone Matrix', 'Executive Commitment Agreement'],
    },
    {
      number: '02',
      title: 'First Documentation Call',
      subtitle: 'Mapping baseline operational realities and structural patterns',
      description:
        'A comprehensive baseline intake capturing current workflows, organizational hierarchies, decision-making velocity, and historical friction points across leadership and execution teams.',
      icon: FileText,
      color: '#E07A5F',
      outputs: ['Current-State Operational Log', 'Friction Points Heatmap', 'Intake Diagnostic Dossier'],
    },
    {
      number: '03',
      title: 'Deep Discovery Session',
      subtitle: 'Uncovering the underlying behavioral and psychological ceiling',
      description:
        'An intensive diagnostic examination led by Prerona Roy to uncover the invisible bottlenecks, psychological defenses, and relationship-with-authority patterns that dictate how leadership actually operates.',
      icon: Search,
      color: '#D48B38',
      outputs: ['Leadership Identity Assessment', 'Invisible Ceilings Audit', 'Root-Cause Psychological Profile'],
    },
    {
      number: '04',
      title: 'Transformation Design',
      subtitle: 'Architecting the bespoke 3P roadmap and capability framework',
      description:
        'Crafting a tailored intervention architecture integrating People (identity), Perspective (cognitive frameworks), and Process (operational mechanisms) specifically adapted to your business model.',
      icon: Layout,
      color: '#5B9E9E',
      outputs: ['Custom 3P Architecture', 'Syllabus & Sprint Schedule', 'Intervention Protocol Guide'],
    },
    {
      number: '05',
      title: 'Implementation Phase',
      subtitle: 'Embedding weekly behavioral shifts and operating cadence',
      description:
        'High-velocity 1:1 sessions, live tactical recalibration, and real-time execution support. We dismantle legacy micromanagement patterns and embed structured delegation and accountability systems.',
      icon: PlayCircle,
      color: '#8B72BE',
      outputs: ['Weekly Strategic Sprints', 'Live Decision Coaching', 'Team Alignment Governance'],
    },
    {
      number: '06',
      title: 'Completion Timeline',
      subtitle: 'Calibrating progress against target milestones and autonomy metrics',
      description:
        'A structured checkpoint assessing leadership independence, team execution without founder dependency, and quantifiable financial acceleration against the initial baseline.',
      icon: Clock,
      color: '#E07A5F',
      outputs: ['Milestone Completion Audit', 'Autonomy Metric Scorecard', 'Enterprise Valuation Lift'],
    },
    {
      number: '07',
      title: 'Return to Life',
      subtitle: 'Integrating transformed leadership into lasting personal and family legacy',
      description:
        'Consolidating newfound cognitive clarity, energy architecture, and emotional composure so that high-performance leadership is sustained without personal burnout or familial strain.',
      icon: Sparkles,
      color: '#D48B38',
      outputs: ['Energy & Boundary Blueprint', 'Family Harmony Protocol', 'Personal Vitality Rhythm'],
    },
    {
      number: '08',
      title: '6-Month Review & Reflection',
      subtitle: 'Clinical longitudinal evaluation of sustained cultural and financial scale',
      description:
        'Six months post-intensive, we conduct a formal institutional audit to evaluate whether the behavioral shifts, delegation protocols, and cultural cohesion have permanently embedded across the enterprise.',
      icon: CheckCircle2,
      color: '#5B9E9E',
      outputs: ['Longitudinal Impact Report', 'Sustained Culture Audit', 'Multi-Year Growth Trajectory'],
    },
  ];

  useEffect(() => {
    let ctx: any;

    const initAnimation = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        // 1. Silky smooth scroll-scrubbed progress spine
        if (progressBarRef.current) {
          gsap.fromTo(
            progressBarRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: '.flowchart-timeline-track',
                start: 'top 70%',
                end: 'bottom 80%',
                scrub: 0.6,
              },
            }
          );
        }

        // 2. Animate each stage card smoothly without jerk
        const cards = gsap.utils.toArray<HTMLElement>('.flowchart-stage-item');
        cards.forEach((item) => {
          const cardBody = item.querySelector('.stage-card-body');
          const stageBadge = item.querySelector('.stage-badge-node');

          if (cardBody) {
            gsap.fromTo(
              cardBody,
              {
                opacity: 0,
                y: 26,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 82%',
                  once: true,
                },
              }
            );
          }

          if (stageBadge) {
            gsap.fromTo(
              stageBadge,
              {
                scale: 0.82,
                opacity: 0,
              },
              {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 82%',
                  once: true,
                },
              }
            );
          }
        });

        // 3. Smooth fade-in of connecting downward arrows
        const arrows = gsap.utils.toArray<HTMLElement>('.flowchart-arrow-connector');
        arrows.forEach((arrow) => {
          gsap.fromTo(
            arrow,
            {
              opacity: 0,
              y: -10,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: arrow,
                start: 'top 85%',
                once: true,
              },
            }
          );
        });
      }, containerRef);
    };

    initAnimation();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Header */}
      <section className="pb-12 sm:pb-16 border-b border-muted-border">
        <Container narrow>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#8B72BE] hover:text-navy transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col items-start mb-4">
            <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
            <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
              METHODOLOGY & OPERATING BLUEPRINT
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-navy leading-[1.12] mb-6">
            The 8-Stage Journey of{' '}
            <span className="font-serif italic text-[#8B72BE]">Transformation</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Every breakthrough follows an intentional architecture. Scroll down to follow our
            8-stage clinical roadmap as it unfolds from baseline diagnosis to sustained
            multi-generational scale.
          </p>
        </Container>
      </section>

      {/* Interactive GSAP Timeline Section */}
      <section className="py-14 sm:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flowchart-timeline-track relative">
            {/* Background Static Line */}
            <div className="absolute left-6 lg:left-1/2 top-4 bottom-8 w-[2px] -translate-x-1/2 bg-[#E8DDD0]" />

            {/* GSAP Scroll-Triggered Progress Fill Line */}
            <div
              ref={progressBarRef}
              className="absolute left-6 lg:left-1/2 top-4 bottom-8 w-[3px] -translate-x-1/2 origin-top bg-gradient-to-b from-[#8B72BE] via-[#E07A5F] via-[#D48B38] to-[#5B9E9E] z-10 shadow-[0_0_12px_rgba(139,114,190,0.5)]"
            />

            {/* Stages Stack */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20 relative z-20">
              {stages.map((stage, idx) => {
                const IconComponent = stage.icon;
                const isEven = idx % 2 === 1;

                return (
                  <React.Fragment key={stage.number}>
                    <div className="flowchart-stage-item relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-16">
                      {/* Left Side Content (Odd stages on desktop) */}
                      <div
                        className={`pl-14 sm:pl-16 lg:pl-0 ${
                          isEven ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'
                        }`}
                      >
                        <div
                          className="stage-card-body bg-white p-6 sm:p-8 rounded-[2px] border border-muted-border shadow-card hover:shadow-xl transition-shadow duration-300 relative group"
                          style={{ borderTop: `3px solid ${stage.color}` }}
                        >
                          <div
                            className={`flex flex-col sm:flex-row sm:items-baseline gap-2 mb-3 ${
                              isEven ? 'lg:justify-start' : 'lg:justify-end'
                            }`}
                          >
                            <span
                              className="inline-block font-sans text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[2px] w-fit"
                              style={{
                                backgroundColor: `${stage.color}15`,
                                color: stage.color,
                              }}
                            >
                              Stage {stage.number}
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold leading-tight">
                              {stage.title}
                            </h2>
                          </div>

                          <p className="font-sans text-xs sm:text-sm font-semibold text-charcoal/70 mb-3 italic">
                            {stage.subtitle}
                          </p>

                          <p className="font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed mb-5 text-left">
                            {stage.description}
                          </p>

                          {/* Outputs */}
                          <div className="pt-4 border-t border-muted-border/80 text-left">
                            <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-charcoal/60 mb-2">
                              Key Deliverables & Milestones:
                            </span>
                            <div
                              className={`flex flex-wrap gap-2 ${
                                isEven ? 'lg:justify-start' : 'lg:justify-start'
                              }`}
                            >
                              {stage.outputs.map((out, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1.5 text-xs text-charcoal bg-[#FAF7F2] border border-[#E8DDD0] px-3 py-1 rounded-[2px]"
                                >
                                  <span
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: stage.color }}
                                  />
                                  {out}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Node on Timeline Spine */}
                      <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-6 lg:top-1/2 lg:-translate-y-1/2 z-30">
                        <div
                          className="stage-badge-node w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 flex items-center justify-center shadow-lg"
                          style={{ borderColor: stage.color }}
                        >
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: stage.color }} />
                        </div>
                      </div>

                      {/* Empty opposite column for alternating desktop layout */}
                      <div
                        className={`hidden lg:block ${
                          isEven ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      />
                    </div>

                    {/* Connecting Downward Arrow between Stages */}
                    {idx < stages.length - 1 && (
                      <div className="flowchart-arrow-connector relative flex items-center justify-start lg:justify-center pl-4 sm:pl-4 lg:pl-0 my-1 lg:my-2">
                        <div
                          className="w-8 h-8 rounded-full bg-[#FDFAF5] border border-[#E8DDD0] flex items-center justify-center text-charcoal/70 shadow-2xs z-20"
                          style={{ color: stages[idx + 1].color }}
                        >
                          <ArrowDown className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Bottom Consultation CTA */}
          <div className="mt-20 sm:mt-28 p-8 sm:p-14 rounded-[2px] bg-[#1A1A40] text-white text-center shadow-elevated relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
            <div className="relative z-10">
              <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-[#C5A572] uppercase block mb-3">
                TAKE THE FIRST STEP
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 text-white">
                Ready to Navigate Your Transformation Roadmap?
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
                Begin with an exploratory discovery conversation with Prerona Roy to determine
                which engagement format aligns with your institutional objectives.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-[#C5A572] hover:bg-[#D4BA8E] text-[#1A1A40] px-7 py-3.5 rounded-[2px] font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Start Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/approach"
                  className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 px-7 py-3.5 rounded-[2px] font-sans text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Explore the 3P System</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
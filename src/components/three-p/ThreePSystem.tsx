'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, Eye, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type PType = 'people' | 'perspective' | 'process';

const pData = {
  people: {
    id: '01',
    name: 'PEOPLE',
    subtitle: 'Human Potential & Leadership Alignment',
    description:
      'We understand the individuals at the heart of every challenge and opportunity. Developing inner capability, emotional mastery, and cognitive focus to lead with resilience.',
    icon: Users,
    color: '#8B72BE', // Lavender
    bgGradient: 'from-[#8B72BE]/20 via-[#8B72BE]/5 to-transparent',
    borderColor: 'border-[#8B72BE]',
    textColor: 'text-[#8B72BE]',
    link: '/transformation-areas/people',
  },
  perspective: {
    id: '02',
    name: 'PERSPECTIVE',
    subtitle: 'Mindset Shifts & Strategic Clarity',
    description:
      'We shift perspectives to reveal possibilities beyond present limitations. Rewiring narrative identity and subconscious assumptions to see clarity where others see friction.',
    icon: Eye,
    color: '#E07A5F', // Coral
    bgGradient: 'from-[#E07A5F]/20 via-[#E07A5F]/5 to-transparent',
    borderColor: 'border-[#E07A5F]',
    textColor: 'text-[#E07A5F]',
    link: '/approach',
  },
  process: {
    id: '03',
    name: 'PROCESS',
    subtitle: 'Execution Systems & Sustainable Results',
    description:
      'We design and embed scalable processes that turn strategic insight into daily action, predictable momentum, and long-term organizational excellence.',
    icon: Settings,
    color: '#5B9E9E', // Teal
    bgGradient: 'from-[#5B9E9E]/20 via-[#5B9E9E]/5 to-transparent',
    borderColor: 'border-[#5B9E9E]',
    textColor: 'text-[#5B9E9E]',
    link: '/services',
  },
};

export function ThreePSystem() {
  const [active, setActive] = useState<PType>('people');
  const [scrollProgress, setScrollProgress] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll listener for sticky pin track
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollableDistance = rect.height - windowHeight;
      if (scrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);
      setScrollProgress(progress);

      if (progress < 0.34) {
        setActive('people');
      } else if (progress < 0.67) {
        setActive('perspective');
      } else {
        setActive('process');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Staggered Motion Effect whenever the active node changes
  useEffect(() => {
    if (prefersReducedMotion || !cardContentRef.current) return;

    let ctx: any;
    const initAnimation = async () => {
      const gsap = (await import('gsap')).default;

      ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.fromTo(
          '.p-badge',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
        )
          .fromTo(
            '.p-title',
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' },
            '-=0.25'
          )
          .fromTo(
            '.p-desc',
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' },
            '-=0.3'
          )
          .fromTo(
            '.p-cta',
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' },
            '-=0.3'
          );
      }, cardContentRef);
    };

    initAnimation();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [active, prefersReducedMotion]);

  // Jump to specific P section when clicking tab/node
  const handleSelect = (type: PType) => {
    setActive(type);
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const trackTop = scrollTop + rect.top;
    const windowHeight = window.innerHeight;
    const scrollableDistance = rect.height - windowHeight;

    let targetProgress = 0.1;
    if (type === 'people') {
      targetProgress = 0.1;
    } else if (type === 'perspective') {
      targetProgress = 0.5;
    } else if (type === 'process') {
      targetProgress = 0.85;
    }

    const targetY = trackTop + scrollableDistance * targetProgress;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const currentData = pData[active];

  return (
    /* Pinned Track without any nested scrollbar */
    <div ref={trackRef} className="relative w-full h-[260vh] sm:h-[280vh]">
      {/* Sticky Viewport Stage - zero inner scrollbar, strictly fills viewport cleanly */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center py-6 sm:py-8 lg:py-0 bg-[#FAF7F2] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
          {/* Top Interactive Tabs & Progress Indicator */}
          <div className="flex flex-col items-center mb-6 sm:mb-10 w-full">
            <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 mb-3 w-full py-1">
              {(['people', 'perspective', 'process'] as PType[]).map((type) => {
                const item = pData[type];
                const isSelected = active === type;
                return (
                  <button
                    key={type}
                    onClick={() => handleSelect(type)}
                    className={cn(
                      'px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full font-sans text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer border shrink-0 whitespace-nowrap',
                      isSelected
                        ? 'bg-white shadow-md border-navy text-navy scale-105'
                        : 'bg-transparent border-muted-border text-charcoal/75 hover:border-charcoal/40 hover:text-navy'
                    )}
                  >
                    <span
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-transform duration-300 shrink-0"
                      style={{
                        backgroundColor: item.color,
                        transform: isSelected ? 'scale(1.4)' : 'scale(1)',
                      }}
                    />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Scroll Phase Progress Bar */}
            <div className="w-28 sm:w-36 h-[2px] bg-muted-border/60 rounded-full overflow-hidden relative">
              <div
                className="h-full transition-all duration-300 ease-out"
                style={{
                  width: `${Math.max(scrollProgress * 100, 8)}%`,
                  backgroundColor: currentData.color,
                }}
              />
            </div>
          </div>

          {/* Main 3P Interactive Stage with Stagger Motion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
            {/* Left Side: Staggered Animated Content Card */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <div
                ref={cardContentRef}
                className="bg-white p-5 sm:p-8 lg:p-10 rounded-sm border border-muted-border shadow-soft relative overflow-hidden transition-shadow duration-500 hover:shadow-card"
              >
                {/* Ambient dynamic glow */}
                <div
                  className={cn(
                    'absolute -right-16 -top-16 w-44 sm:w-56 h-44 sm:h-56 rounded-full blur-3xl opacity-35 pointer-events-none bg-gradient-to-br transition-all duration-700',
                    currentData.bgGradient
                  )}
                />

                {/* Stagger Item 1: Badge & ID */}
                <div className="p-badge flex items-center gap-3 sm:gap-4 mb-2.5 sm:mb-4">
                  <span
                    className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold transition-colors duration-500"
                    style={{ color: currentData.color }}
                  >
                    {currentData.id}
                  </span>
                  <div className="h-[1px] w-6 sm:w-8 bg-muted-border" />
                  <span
                    className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-500"
                    style={{ color: currentData.color }}
                  >
                    {currentData.name}
                  </span>
                </div>

                {/* Stagger Item 2: Subtitle Headline */}
                <h3 className="p-title font-serif text-xl sm:text-2xl lg:text-[2.2rem] text-navy leading-[1.2] mb-2.5 sm:mb-4">
                  {currentData.subtitle}
                </h3>

                {/* Stagger Item 3: Description Copy */}
                <p className="p-desc font-sans text-xs sm:text-[14.5px] text-charcoal/85 leading-relaxed mb-5 sm:mb-8">
                  {currentData.description}
                </p>

                {/* Stagger Item 4: Action Button Link */}
                <div className="p-cta">
                  <Link
                    href={currentData.link}
                    className="inline-flex items-center gap-2 text-navy hover:text-[#8B72BE] font-sans text-xs font-semibold uppercase tracking-wider transition-colors group"
                  >
                    <span>Explore {currentData.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side: Geometrically Accurate 3P Orbital Canvas */}
            <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2 relative min-h-[230px] sm:min-h-[300px] lg:min-h-[400px]">
              <div className="relative w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                
                {/* SVG Connecting Pointer Lines - Exactly Aligned to Nodes */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 400"
                >
                  {/* Dotted Orbit Rings */}
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="#E2DCD5"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="110"
                    fill="none"
                    stroke="#E2DCD5"
                    strokeWidth="0.75"
                    opacity="0.6"
                  />

                  {/* Top Pointer Line -> PEOPLE Node (200, 48) */}
                  <line
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="48"
                    stroke={active === 'people' ? '#8B72BE' : '#E2DCD5'}
                    strokeWidth={active === 'people' ? '2.5' : '1'}
                    strokeDasharray={active === 'people' ? 'none' : '3 3'}
                    className="transition-all duration-500"
                  />

                  {/* Bottom-Right Pointer Line -> PERSPECTIVE Node (325, 275) */}
                  <line
                    x1="200"
                    y1="200"
                    x2="325"
                    y2="275"
                    stroke={active === 'perspective' ? '#E07A5F' : '#E2DCD5'}
                    strokeWidth={active === 'perspective' ? '2.5' : '1'}
                    strokeDasharray={active === 'perspective' ? 'none' : '3 3'}
                    className="transition-all duration-500"
                  />

                  {/* Bottom-Left Pointer Line -> PROCESS Node (75, 275) */}
                  <line
                    x1="200"
                    y1="200"
                    x2="75"
                    y2="275"
                    stroke={active === 'process' ? '#5B9E9E' : '#E2DCD5'}
                    strokeWidth={active === 'process' ? '2.5' : '1'}
                    strokeDasharray={active === 'process' ? 'none' : '3 3'}
                    className="transition-all duration-500"
                  />
                </svg>

                {/* Central 3P Typography Core with Pulse Glow */}
                <div className="relative z-20 w-14 h-14 sm:w-18 sm:h-18 lg:w-24 lg:h-24 rounded-full bg-white border border-muted-border shadow-md flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105">
                  <span className="font-serif text-xl sm:text-2xl lg:text-4xl font-bold text-navy tracking-tight">
                    3P
                  </span>
                </div>

                {/* Node 1: PEOPLE (Top: 0deg) */}
                <button
                  onClick={() => handleSelect('people')}
                  className={cn(
                    'absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-30 transition-all duration-500 cursor-pointer group',
                    active === 'people'
                      ? 'scale-110 sm:scale-115'
                      : 'scale-90 sm:scale-95 opacity-75 hover:opacity-100'
                  )}
                >
                  <div
                    className={cn(
                      'relative w-9 h-9 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center transition-all duration-300 border shadow-md',
                      active === 'people'
                        ? 'border-[#8B72BE] shadow-[0_0_20px_rgba(139,114,190,0.4)]'
                        : 'border-muted-border group-hover:border-navy'
                    )}
                  >
                    {active === 'people' && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-[#8B72BE] pointer-events-none" />
                    )}
                    <Users
                      className={cn(
                        'w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 transition-colors duration-300',
                        active === 'people' ? 'text-[#8B72BE]' : 'text-charcoal'
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      'font-sans text-[9px] sm:text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full transition-all duration-300',
                      active === 'people'
                        ? 'text-[#8B72BE] bg-[#8B72BE]/10 shadow-xs'
                        : 'text-charcoal/70 bg-white/70'
                    )}
                  >
                    People
                  </span>
                </button>

                {/* Node 2: PERSPECTIVE (Bottom Right: 120deg) */}
                <button
                  onClick={() => handleSelect('perspective')}
                  className={cn(
                    'absolute bottom-2 sm:bottom-4 right-0 sm:right-2 flex flex-col items-center gap-1 sm:gap-2 z-30 transition-all duration-500 cursor-pointer group',
                    active === 'perspective'
                      ? 'scale-110 sm:scale-115'
                      : 'scale-90 sm:scale-95 opacity-75 hover:opacity-100'
                  )}
                >
                  <div
                    className={cn(
                      'relative w-9 h-9 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center transition-all duration-300 border shadow-md',
                      active === 'perspective'
                        ? 'border-[#E07A5F] shadow-[0_0_20px_rgba(224,122,95,0.4)]'
                        : 'border-muted-border group-hover:border-navy'
                    )}
                  >
                    {active === 'perspective' && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-[#E07A5F] pointer-events-none" />
                    )}
                    <Eye
                      className={cn(
                        'w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 transition-colors duration-300',
                        active === 'perspective'
                          ? 'text-[#E07A5F]'
                          : 'text-charcoal'
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      'font-sans text-[9px] sm:text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full transition-all duration-300',
                      active === 'perspective'
                        ? 'text-[#E07A5F] bg-[#E07A5F]/10 shadow-xs'
                        : 'text-charcoal/70 bg-white/70'
                    )}
                  >
                    Perspective
                  </span>
                </button>

                {/* Node 3: PROCESS (Bottom Left: 240deg) */}
                <button
                  onClick={() => handleSelect('process')}
                  className={cn(
                    'absolute bottom-2 sm:bottom-4 left-0 sm:left-2 flex flex-col items-center gap-1 sm:gap-2 z-30 transition-all duration-500 cursor-pointer group',
                    active === 'process'
                      ? 'scale-110 sm:scale-115'
                      : 'scale-90 sm:scale-95 opacity-75 hover:opacity-100'
                  )}
                >
                  <div
                    className={cn(
                      'relative w-9 h-9 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center transition-all duration-300 border shadow-md',
                      active === 'process'
                        ? 'border-[#5B9E9E] shadow-[0_0_20px_rgba(91,158,158,0.4)]'
                        : 'border-muted-border group-hover:border-navy'
                    )}
                  >
                    {active === 'process' && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-[#5B9E9E] pointer-events-none" />
                    )}
                    <Settings
                      className={cn(
                        'w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 transition-colors duration-300',
                        active === 'process' ? 'text-[#5B9E9E]' : 'text-charcoal'
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      'font-sans text-[9px] sm:text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full transition-all duration-300',
                      active === 'process'
                        ? 'text-[#5B9E9E] bg-[#5B9E9E]/10 shadow-xs'
                        : 'text-charcoal/70 bg-white/70'
                    )}
                  >
                    Process
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

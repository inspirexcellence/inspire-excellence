import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  Brain,
  Briefcase,
  HeartPulse,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { mockTeamMembers } from '@/lib/mock/team';

export const metadata = createMetadata({
  title: 'Who We Are — Architects of Lasting Impact | Inspire Excellence',
  description:
    'At Inspire Excellence, we are transformation specialists going beyond traditional coaching, using psychology, neuroscience, and cybernetics for rapid, lasting change.',
  path: '/about',
});

export default function AboutPage() {
  const dimensions = [
    {
      title: 'Personal Genius',
      icon: Brain,
      color: '#8B72BE',
      items: [
        'Accelerate Learning of New Skills',
        'Improve Cognitive Abilities',
        'Enhance Memory Retention',
        'Strengthen Focus and Concentration',
        'Achieve Emotional Mastery',
        'Absorb Insights from High Achievers Effortlessly',
        'Develop Sharp Intuition and Instincts',
        'Enhance Strategic Thinking Abilities',
        'Build Inner Motivation and Drive',
      ],
    },
    {
      title: 'Career',
      icon: Briefcase,
      color: '#E07A5F',
      items: [
        'Make Confident Decisions',
        'Cultivate Calm in High-Pressure Situations',
        'Achieve Work-Life Balance',
        'Develop Positive Peer Relationships',
        'Boost Work Performance and Efficiency',
        'Master Time Management',
        'Overcome Procrastination',
        'Grow Financially and Professionally',
        'Transition Smoothly to New Roles',
      ],
    },
    {
      title: 'Health',
      icon: HeartPulse,
      color: '#5B9E9E',
      items: [
        'Boost Energy and Vitality',
        'Alleviate Chronic Conditions',
        'Experience Pain-Free Living',
        'Maintain Calm and Inner Peace',
        'Cultivate Restful Sleep Patterns',
        'Develop Patience and Inner Harmony',
        'Establish Lasting Healthy Habits',
        'Prioritize Well-being Naturally',
        'Manage and Overcome Allergies',
        'Conquer Fears and Phobias',
      ],
    },
    {
      title: 'Relationships',
      icon: Users,
      color: '#D48B38',
      items: [
        'Build Meaningful, Layered Connections',
        'Foster Clear Understanding',
        'Promote Harmony and Reduce Conflict',
        'Strengthen Relations with Authority Figures',
        'Strengthen Bonds with Family and Friends',
        'Build Trusting Client Relationships',
        'Develop Supportive Social Circles',
      ],
    },
    {
      title: 'Leadership',
      icon: Compass,
      color: '#8B72BE',
      items: [
        'Inspire Lasting Impact',
        'Build a Strong Network',
        'Speak with Confidence and Clarity',
        'Cultivate Charisma and Presence',
        'Enhance Strategic Thinking',
        'Strengthen Self-Image',
        'Master Negotiation',
        'Resolve Conflicts with Ease',
        'Project Confidence and Authority',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F2] pt-28 sm:pt-36 pb-24">
      {/* ========================================================
          SECTION 1: Who We Are ? Architects of Lasting Impact
          ======================================================== */}
      <section className="pb-14 sm:pb-20 border-b border-muted-border">
        <Container>
          <div className="max-w-5xl lg:max-w-6xl mx-auto">
            {/* Header Title & Subtitle */}
            <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-bold mb-2">
                Who We Are ?
              </h1>
              <h2 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#8B72BE] font-medium mb-4">
                Architects of Lasting Impact
              </h2>
              <div className="w-14 h-[1.5px] bg-[#C5A572]" />
            </div>

            {/* Narrative Paragraphs with generous horizontal reading width */}
            <div className="space-y-6 text-charcoal/90 text-left text-base sm:text-lg lg:text-[19px] leading-[1.85]">
              <p>
                At Inspire Excellence, we are a team of dedicated professionals and transformation
                specialists who go beyond traditional coaching. Our mission is to help individuals
                unlock their true potential, chained by limiting beliefs or habits, and achieve
                extraordinary results. With extensive experience and insights into human behavior,
                psychology, and neuroscience, we enable real, measurable change in a remarkably short
                period.
              </p>

              <p>
                We focus on tangible, accelerated results through scientifically grounded methods.
                Our approach is inspired by the pioneering research in the fields of psychology,
                neurology, and therapeutic sciences. Drawing from fields such as neuro-linguistic
                programming, cybernetics, and behavioral science, we utilize advanced techniques
                that rewire mental and behavioral patterns without repetitive practice, rituals, or
                rigid routines.
              </p>

              <p>
                Inspire Excellence is more than a quick fix. We are committed to equipping you with
                the tools and capabilities to confidently shape your future, ensuring that your
                dreams become a lived reality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 2: What Changes Could Transform Your Health, Career, and Relationships?
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#FDFAF5] border-b border-muted-border">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
            <h2 className="font-sans font-bold text-lg sm:text-2xl text-navy tracking-tight uppercase mb-4 leading-snug">
              WHAT CHANGES COULD TRANSFORM YOUR HEALTH, CAREER, AND RELATIONSHIPS?
            </h2>
            <div className="w-12 h-[1.5px] bg-[#E07A5F] mx-auto mb-6" />

            <p className="font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed text-left sm:text-center">
              Everyone deserves happiness, success, growth, and accomplishment—universal
              aspirations that transcend age, gender, and profession. These outcomes are just as
              meaningful for groups as they are for individuals. At Inspire Excellence, we have
              identified five core aspects essential to creating a balanced, fulfilling life for
              anybody, no matter who they are: Personal Genius, Relationships, Career, Health, and
              Leadership. In each of these areas, we bring transformative outcomes customised to help
              you thrive. Below, explore some of the specific results (out of the infinite
              possibilities) we empower individuals to achieve in each dimension.
            </p>
          </div>

          {/* 5 Core Dimensions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-12">
            {dimensions.slice(0, 3).map((dim) => {
              const IconComp = dim.icon;
              return (
                <div
                  key={dim.title}
                  className="bg-white rounded-[2px] p-7 sm:p-8 border border-[#E8DDD0] shadow-card hover:shadow-xl transition-all duration-300"
                  style={{ borderTop: `3px solid ${dim.color}` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-[2px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${dim.color}15`, color: dim.color }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-navy">
                      {dim.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {dim.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/85 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: dim.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Remaining 2 Dimensions (Relationships & Leadership) Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dimensions.slice(3).map((dim) => {
              const IconComp = dim.icon;
              return (
                <div
                  key={dim.title}
                  className="bg-white rounded-[2px] p-7 sm:p-8 border border-[#E8DDD0] shadow-card hover:shadow-xl transition-all duration-300"
                  style={{ borderTop: `3px solid ${dim.color}` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-[2px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${dim.color}15`, color: dim.color }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-navy">
                      {dim.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {dim.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/85 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: dim.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 3: Leadership & Founder Prerona Roy
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex flex-col items-center mb-2">
              <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
                LEADERSHIP & CLINICAL PRACTICE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy">
              The Minds Behind Inspire Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {mockTeamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white p-7 sm:p-8 rounded-[2px] border border-muted-border shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full max-w-[380px] mx-auto rounded-[2px] overflow-hidden mb-6 bg-[#FAF7F2] border border-[#E8DDD0]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-serif text-3xl text-navy/40">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-wider text-[#8B72BE] font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Connect CTA Banner */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-[2px] bg-[#1A1A40] text-white text-center max-w-4xl mx-auto shadow-elevated">
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">
              Ready to Shape Your Future?
            </h3>
            <p className="font-sans text-sm sm:text-base text-white/80 max-w-lg mx-auto mb-6 leading-relaxed">
              Equip yourself with the tools, perspective and capability to turn your dreams into a lived reality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C5A572] hover:bg-[#D4BA8E] text-[#1A1A40] px-7 py-3 rounded-[2px] font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
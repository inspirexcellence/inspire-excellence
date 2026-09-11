import React from 'react';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import {
  Building2,
  Users,
  Compass,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'Organisations & Corporate Transformation — Inspire Excellence',
  description:
    'End-to-end organizational alignment, culture evolution, operating model redesign, and leadership development for high-performing enterprises.',
  path: '/organisations',
});

export default function OrganisationsPage() {
  const capabilities = [
    {
      id: '01',
      title: 'Strategy & Alignment',
      tagline: 'Clarify vision & synchronize execution',
      desc: 'Redefine strategic priorities, eliminate organizational friction, and align leadership teams around high-leverage outcomes.',
      href: '/services#strategy',
      icon: Compass,
    },
    {
      id: '02',
      title: 'Culture Transformation',
      tagline: 'Build adaptive, high-trust environments',
      desc: 'Shift institutional mindset, foster psychological safety, and embed accountability behaviors that sustain long-term growth.',
      href: '/services#culture',
      icon: Sparkles,
    },
    {
      id: '03',
      title: 'Process & Operating Model',
      tagline: 'Design stable, scalable business systems',
      desc: 'Streamline workflows, establish agile governance frameworks, and build repeatable operational systems that drive velocity.',
      href: '/services#process',
      icon: Layers,
    },
    {
      id: '04',
      title: 'Leadership Development',
      tagline: 'Equip executives for high-stakes leadership',
      desc: 'Bespoke executive coaching, crisis management training, and leadership pipelines to navigate disruption with conviction.',
      href: '/services#leadership',
      icon: Users,
    },
    {
      id: '05',
      title: 'Change Implementation',
      tagline: 'Turn strategy into measurable adoption',
      desc: 'Structured change management programs that guarantee stakeholder buy-in, minimize transition fatigue, and deliver durable ROI.',
      href: '/services#change',
      icon: TrendingUp,
    },
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
                ENTERPRISE & ORGANISATIONAL EVOLUTION
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1] mb-6">
              Transform systems, cultures <br />
              <span className="font-serif italic font-normal text-[#8B72BE]">and capabilities</span>{' '}
              <span className="font-serif italic font-normal text-[#E07A5F]">for the future.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
              We partner with board members, CXOs, and business leaders to align people, perspective, and processes — turning ambitious strategic goals into measurable operational excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-consultation"
                className="bg-navy text-white hover:bg-[#2A2A5A] px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Request Corporate Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="border border-navy text-navy hover:bg-navy hover:text-white px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
              OUR CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy">
              Comprehensive Transformation Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-white p-8 rounded-sm border border-muted-border shadow-xs flex flex-col justify-between hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-muted-border flex items-center justify-center">
                        <IconComp className="w-5 h-5 text-navy" />
                      </div>
                      <span className="font-serif text-xl font-bold text-[#8B72BE]">{cap.id}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-navy mb-1.5">{cap.title}</h3>
                    <span className="font-sans text-xs text-[#E07A5F] font-semibold block mb-3">
                      {cap.tagline}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  <Link
                    href={cap.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-navy hover:text-[#8B72BE] transition-colors pt-4 border-t border-muted-border/60 group"
                  >
                    <span>Explore Capability</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Enterprise Stats */}
      <section className="py-16 bg-[#1A1A40] text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-gold block mb-1">
                100+
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-white/70">
                Organisations Transformed
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-gold block mb-1">
                5000+
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-white/70">
                Leaders Mentored
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-gold block mb-1">
                17+
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-white/70">
                Years Experience
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-gold block mb-1">
                98%
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-white/70">
                Strategic Retention
              </span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

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
  Calendar,
  Clock,
  Briefcase,
  Target,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'Organisations & Corporate Transformation — Inspire Excellence',
  description:
    'End-to-end organizational alignment, culture evolution, operating model redesign, and leadership development delivered across Executive Workshops, 90-Day Engagements, and 6–12-Month Partnerships.',
  path: '/organisations',
});

export default function OrganisationsPage() {
  const engagementFormats = [
    {
      id: 'format-1',
      title: 'Executive Workshops',
      badge: 'IMMERSIVE & HIGH-IMPACT',
      duration: 'Single / Multi-Day Intensive',
      color: '#8B72BE',
      description:
        'Our Executive Workshops offer immersive, high-impact learning experiences that challenge conventional thinking, build leadership capabilities and initiate meaningful change.',
      highlights: [
        'Leadership mindset recalibration',
        'Executive alignment & vision mapping',
        'Psychological safety & high-trust culture',
        'Direct, interactive facilitation',
      ],
      idealFor: 'Executive teams, department heads, and leadership retreats.',
    },
    {
      id: 'format-2',
      title: '90-Day Transformation Engagements',
      badge: 'STRUCTURED & OUTCOME-DRIVEN',
      duration: '3 Months (Quarterly Sprint)',
      color: '#E07A5F',
      description:
        'Our 90-Day Transformation Engagements provide structured, outcome-driven interventions that translate strategic insights into measurable organizational progress.',
      highlights: [
        'Rapid operational & process diagnostics',
        'Focused OKR & KPI synchronization',
        'Bottleneck elimination & workflow speed',
        'Bi-weekly milestone execution reviews',
      ],
      idealFor: 'Organisations tackling critical operational transitions or scaling hurdles.',
    },
    {
      id: 'format-3',
      title: '6–12-Month Strategic Advisory Partnerships',
      badge: 'INSTITUTIONAL EXCELLENCE',
      duration: '6 to 12 Months (Sustained Retainer)',
      color: '#D48B38',
      description:
        'For organizations seeking deeper, sustained transformation, our 6–12-Month Strategic Advisory Partnerships offer ongoing guidance, leadership alignment and implementation support to embed change, strengthen organizational capabilities and build long-term institutional excellence.',
      highlights: [
        'Comprehensive 3P system implementation',
        'Culture and narrative identity transformation',
        'Executive coaching for key CXOs & board',
        'Enduring governance & operating model architecture',
      ],
      idealFor: 'Enterprises committed to enduring multi-generational capability and scale.',
    },
  ];

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

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.08] mb-6">
              Transform systems, cultures <br />
              <span className="font-serif italic font-normal text-[#8B72BE]">and capabilities</span>{' '}
              <span className="font-serif italic font-normal text-[#E07A5F]">for the future.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
              We partner with visionary individuals and forward-thinking organisations to challenge conventional thinking, redefine possibilities and turn ambitious visions into extraordinary outcomes.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-consultation"
                className="bg-navy text-white hover:bg-[#2A2A5A] px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Request Corporate Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#engagement-formats"
                className="border border-navy text-navy hover:bg-navy hover:text-white px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
              >
                View Engagement Formats
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Engagement Formats Section */}
      <section id="engagement-formats" className="py-16 lg:py-24 border-b border-muted-border bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
              THREE DISTINCT PATHWAYS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
              Corporate Transformation Engagement Formats
            </h2>
            <div className="bg-[#FAF7F2] p-6 sm:p-8 md:p-10 rounded-sm border border-muted-border/80 text-charcoal/90 font-sans text-sm sm:text-base leading-[1.85] tracking-wide text-justify [text-justify:inter-word]">
              At Inspire Excellence Global Pvt. Ltd., our corporate transformation programs are delivered through three distinct engagement formats, designed to meet organizations at different stages of their growth and transformation journey. Our Executive Workshops offer immersive, high-impact learning experiences that challenge conventional thinking, build leadership capabilities and initiate meaningful change. Our 90-Day Transformation Engagements provide structured, outcome-driven interventions that translate strategic insights into measurable organizational progress. For organizations seeking deeper, sustained transformation, our 6–12-Month Strategic Advisory Partnerships offer ongoing guidance, leadership alignment and implementation support to embed change, strengthen organizational capabilities and build long-term institutional excellence. Each engagement is tailored to the organization&apos;s unique challenges, strategic priorities and growth ambitions.
            </div>
          </div>

          {/* 3 Format Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementFormats.map((format) => (
              <div
                key={format.id}
                className="bg-[#FAF7F2] rounded-sm border border-muted-border shadow-xs flex flex-col justify-between p-8 sm:p-10 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="font-sans text-[10.5px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-[2px] bg-white border border-muted-border"
                      style={{ color: format.color }}
                    >
                      {format.badge}
                    </span>
                    <span className="font-sans text-xs text-charcoal/60 font-medium">
                      {format.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                    {format.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-6">
                    {format.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-muted-border/60 mb-6">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/60 font-semibold block">
                      Core Focus Areas:
                    </span>
                    {format.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal/85">
                        <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-muted-border">
                  <span className="font-sans text-[11px] text-charcoal/60 block mb-4">
                    <strong>Ideal for:</strong> {format.idealFor}
                  </span>
                  <Link
                    href="/book-consultation"
                    className="inline-flex items-center justify-center gap-2 w-full bg-navy text-white hover:bg-[#2A2A5A] py-2.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
                  >
                    <span>Inquire About This Format</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
              OUR EXPERTISE
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

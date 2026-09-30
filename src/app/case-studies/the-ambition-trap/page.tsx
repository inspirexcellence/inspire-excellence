import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  UserCheck,
  Brain,
  CheckCircle2,
  Compass,
  Sparkles,
  Quote,
  Target,
  Users,
  FileText,
  Download,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'The Ambition Trap: When the Pursuit of Success Becomes the Biggest Obstacle to Achieving It',
  description:
    'Executive Transformation Case Study: The story of a successful senior architect who had everything he needed to become a leader, except the freedom to perform without constantly judging himself.',
  path: '/case-studies/the-ambition-trap',
});

export default function AmbitionTrapCaseStudyPage() {
  const successMeasures = [
    {
      original: 'Designation by a particular age',
      expanded: 'Scope of responsibility and complexity of problems solved',
    },
    {
      original: 'Recognition from senior leadership',
      expanded: 'Quality of judgment, contribution and strategic influence',
    },
    {
      original: 'Access to influential people',
      expanded: 'Depth of trust and professional relationships',
    },
    {
      original: 'Visible career advancement',
      expanded: 'Growth in capability, decision-making and leadership maturity',
    },
    {
      original: 'Meeting an externally defined timeline',
      expanded: 'Building a meaningful and sustainable professional life',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2]">
      {/* Header & Breadcrumb */}
      <section className="py-12 md:py-16 border-b border-muted-border">
        <Container narrow>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#8B72BE] hover:text-navy transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="flex flex-col items-start mb-4">
            <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
            <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
              EXECUTIVE TRANSFORMATION CASE STUDY
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy leading-[1.12] mb-6">
            The Ambition Trap: When the Pursuit of Success Becomes the Biggest Obstacle to Achieving It
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#E07A5F] leading-relaxed mb-6">
            The story of a successful senior architect who had everything he needed to become a leader, except the freedom to perform without constantly judging himself.
          </p>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-muted-border/80 text-xs text-charcoal/70">
            <span><strong>Client Profile:</strong> Senior Architect, Consulting Firm</span>
            <span>•</span>
            <span><strong>Engagement:</strong> 1:1 Executive Transformation (6-Month Intensive)</span>
            <span>•</span>
            <span><strong>Coach:</strong> Prerona Roy</span>
          </div>
        </Container>
      </section>

      {/* Main Narrative Article */}
      <section className="py-12 lg:py-16">
        <Container narrow>
          <article className="prose-custom space-y-12 text-charcoal/90 leading-relaxed font-sans text-base sm:text-lg">
            {/* Section 1 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                The Man Who Was Running Out of Time
              </h2>
              <p className="mb-4">
                He was in his early forties. A senior architect in a consulting firm, intellectually sharp, technically accomplished and already well established in his career. By most conventional measures, he was doing well.
              </p>
              <p className="mb-4">
                But when he came to work with me, he was carrying something that wasn&apos;t immediately obvious. It wasn&apos;t a lack of ambition, direction or capability. In fact, he had plenty of all three.
              </p>
              <p className="font-serif italic text-2xl sm:text-3xl text-navy font-semibold my-8 pl-5 border-l-4 border-[#8B72BE] leading-relaxed">
                It was desperation.
              </p>
              <p className="mb-4">
                Not the kind that announces itself through visible panic or emotional breakdowns. His was a much more sophisticated form of desperation, carefully disguised as ambition, discipline and an unwavering commitment to professional growth.
              </p>
              <p className="mb-4 text-base sm:text-lg">
                He had a very specific destination in mind:{' '}
                <span className="font-serif italic text-navy font-bold text-lg sm:text-xl">
                  &ldquo;I want to become a Director by 45.&rdquo;
                </span>
              </p>
              <p className="mb-6">
                There was nothing inherently problematic about that ambition. But as our conversations progressed, I began to understand that becoming a Director wasn&apos;t simply something he wanted to achieve. It had become something he <strong>needed</strong> to achieve to validate who he was.
              </p>

              {/* Callout: Underlying Belief */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border-l-4 border-[#E07A5F] border border-muted-border shadow-xs my-8">
                <span className="font-sans text-xs uppercase tracking-widest text-[#E07A5F] font-bold block mb-3">
                  THE UNDERLYING BELIEF
                </span>
                <p className="font-serif text-2xl sm:text-3xl text-navy font-bold leading-relaxed">
                  &ldquo;If I haven&apos;t become a Director by 41 or 42, it means I&apos;m average.&rdquo;
                </p>
              </div>

              <p>
                Consider what happens when a person begins measuring an entire career, perhaps even their own worth, against a single designation and an unforgiving deadline. Every meeting becomes an examination. Every presentation becomes an opportunity to prove oneself. And every missed opportunity becomes evidence that time is running out.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                A Meeting Was Never Just a Meeting
              </h2>
              <p className="mb-4">
                Imagine walking into an important meeting with your senior leadership team. You have prepared your presentation. You understand the subject. You know that your expertise deserves a place at the table.
              </p>
              <p className="mb-4">
                You begin speaking. But even before you have finished explaining your first recommendation, another conversation starts inside your head:
              </p>

              {/* Internal Dialogue Box - Made highly readable and spacious */}
              <div className="bg-white p-6 sm:p-8 rounded-sm border-l-4 border-[#8B72BE] border border-muted-border shadow-xs my-8 space-y-3.5">
                <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-1">
                  THE INTERNAL SURVEILLANCE DIALOGUE
                </span>
                <div className="space-y-3 font-serif italic text-base sm:text-lg text-navy leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-[#8B72BE] font-sans font-bold not-italic">•</span>
                    <span>&ldquo;Was that the right way to say it?&rdquo;</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#8B72BE] font-sans font-bold not-italic">•</span>
                    <span>&ldquo;Did I sound senior enough?&rdquo;</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#8B72BE] font-sans font-bold not-italic">•</span>
                    <span>&ldquo;I hope they recognise my contribution.&rdquo;</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#8B72BE] font-sans font-bold not-italic">•</span>
                    <span>&ldquo;Will this improve my chances of becoming a Director?&rdquo;</span>
                  </p>
                </div>
              </div>

              <p className="mb-4">
                While your colleagues are discussing the business problem, a portion of your attention is occupied with evaluating your own performance. While someone is responding, you are wondering whether you made the right impression.
              </p>

              {/* Big Quote Callout */}
              <div className="bg-[#1A1A40] text-white p-8 sm:p-10 rounded-sm my-8 text-center shadow-md">
                <Quote className="w-8 h-8 text-gold/40 mx-auto mb-3" />
                <p className="font-serif italic text-2xl sm:text-3xl text-gold font-normal leading-relaxed max-w-2xl mx-auto">
                  &ldquo;He was so busy trying to become a Director that he was struggling to experience what it meant to lead in the present.&rdquo;
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                The Neuroscience of Getting in Your Own Way
              </h2>
              <p className="mb-4">
                What makes this case particularly interesting is that his experience reflects several well-studied patterns in cognitive psychology and performance science:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-6 sm:p-8 rounded-sm border border-muted-border">
                  <div className="w-10 h-10 rounded-full bg-[#8B72BE]/10 flex items-center justify-center text-[#8B72BE] mb-3">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">Explicit Monitoring</h3>
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed">
                    When we become excessively conscious of executing expertise, we disrupt the automated cognitive fluency that allows effortless execution (analogous to a concert pianist monitoring each finger).
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-sm border border-muted-border">
                  <div className="w-10 h-10 rounded-full bg-[#E07A5F]/10 flex items-center justify-center text-[#E07A5F] mb-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">Evaluation Apprehension</h3>
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed">
                    Working-memory capacity becomes occupied by worries regarding how seniors judge potential, dividing attention and impairing spontaneous listening.
                  </p>
                </div>
              </div>

              {/* Performance Pressure Loop */}
              <div className="bg-white p-6 sm:p-8 rounded-sm border border-muted-border shadow-xs my-8">
                <span className="font-sans text-xs font-bold text-[#8B72BE] uppercase tracking-widest block mb-4">
                  THE PERFORMANCE-PRESSURE LOOP IDENTIFIED
                </span>
                <div className="space-y-3 font-sans text-sm sm:text-base">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-[#8B72BE] shrink-0">1. High-Stakes Goal:</span>
                    <span>Become a Director by a specific age</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-[#E07A5F] shrink-0">2. Threat to Self-Worth:</span>
                    <span className="font-serif italic font-semibold text-navy">&ldquo;If I don&apos;t achieve it, I&apos;m average&rdquo;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-[#5B9E9E] shrink-0">3. Excessive Self-Monitoring:</span>
                    <span>Constantly checking whether each action is good enough</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-[#D48B38] shrink-0">4. Divided Attention:</span>
                    <span>Less capacity for spontaneous thinking, listening and connection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-navy shrink-0">5. Amplified Pressure:</span>
                    <span>Every perceived shortcoming reinforces the original fear</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The 4 Breakthroughs */}
            <div className="pt-6 border-t border-muted-border">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
                THE 4 TRANSFORMATION BREAKTHROUGHS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-8">
                How We Broke the Ambition Trap
              </h2>

              {/* Breakthrough 1 */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border border-muted-border mb-8 shadow-xs">
                <span className="font-serif text-2xl font-bold text-[#8B72BE] block mb-1">01</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-3">
                  Giving Performance Its Own Space
                </h3>
                <p className="text-base text-charcoal/85 leading-relaxed mb-6">
                  We separated <strong>performance mode</strong> from <strong>reflection mode</strong>. During a meeting, his attention was directed entirely to the business problem and participants. Evaluation was deferred to a structured post-interaction reflection window.
                </p>
                <div className="p-6 bg-[#FAF7F2] border-l-4 border-[#8B72BE] rounded-r-sm text-lg sm:text-xl font-serif italic text-navy leading-relaxed">
                  &ldquo;You cannot give your complete attention to a conversation while simultaneously conducting a performance appraisal of yourself.&rdquo;
                </div>
              </div>

              {/* Breakthrough 2 */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border border-muted-border mb-8 shadow-xs">
                <span className="font-serif text-2xl font-bold text-[#E07A5F] block mb-1">02</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-3">
                  When Relationships Stop Being Career Strategies
                </h3>
                <p className="text-base text-charcoal/85 leading-relaxed mb-6">
                  We transitioned his stakeholder interactions from transactional calculations (&ldquo;Can this person help me advance?&rdquo;) to authentic curiosity, mutual respect, and layered relationships.
                </p>
                <div className="p-6 bg-[#FAF7F2] border-l-4 border-[#E07A5F] rounded-r-sm text-lg sm:text-xl font-serif italic text-navy leading-relaxed">
                  &ldquo;What if you stopped meeting people only through the lens of where they could take you, and started discovering who they actually are?&rdquo;
                </div>
              </div>

              {/* Breakthrough 3 */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border border-muted-border mb-8 shadow-xs">
                <span className="font-serif text-2xl font-bold text-[#5B9E9E] block mb-1">03</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-3">
                  Dismantling the Deadline That Defined His Worth
                </h3>
                <p className="text-base text-charcoal/85 leading-relaxed mb-6">
                  We dismantled the single metric of age-based promotion and expanded his framework across multi-dimensional criteria:
                </p>

                {/* Table */}
                <div className="overflow-x-auto border border-muted-border rounded-sm">
                  <table className="w-full text-left text-sm sm:text-base">
                    <thead className="bg-[#1A1A40] text-white">
                      <tr>
                        <th className="p-4 font-semibold text-sm">The Original Measure</th>
                        <th className="p-4 font-semibold text-sm">The Expanded Perspective</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-muted-border">
                      {successMeasures.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#FAF7F2]">
                          <td className="p-4 text-charcoal/80 font-medium">{row.original}</td>
                          <td className="p-4 text-navy font-semibold">{row.expanded}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Breakthrough 4 */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border border-muted-border mb-8 shadow-xs">
                <span className="font-serif text-2xl font-bold text-gold block mb-1">04</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-3">
                  From Proving Himself to Performing at His Potential
                </h3>
                <p className="text-base text-charcoal/85 leading-relaxed mb-6">
                  Shifted from asking <span className="font-serif italic text-navy font-semibold">&ldquo;What must I do to prove that I deserve to become a Director?&rdquo;</span> to asking <span className="font-serif italic text-navy font-semibold">&ldquo;What does this situation require of me? What is the most valuable contribution I can make?&rdquo;</span>
                </p>
                <div className="p-6 bg-[#FAF7F2] border-l-4 border-gold rounded-r-sm text-lg sm:text-xl font-serif italic text-navy leading-relaxed">
                  &ldquo;You don&apos;t have to wait until someone calls you a leader to begin developing the qualities of one.&rdquo;
                </div>
              </div>
            </div>

            {/* The Question That Remains */}
            <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-sm border border-muted-border shadow-xs">
              <span className="font-sans text-xs uppercase tracking-widest text-[#E07A5F] font-bold block mb-2">
                EXECUTIVE REFLECTION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                The Question That Remains
              </h2>
              <p className="mb-6 text-base sm:text-lg leading-relaxed">
                Ambition itself is not the problem. The problem begins when ambition becomes inseparable from the fear of being inadequate.
              </p>
              
              <div className="bg-white p-7 sm:p-9 rounded-sm border-l-4 border-[#8B72BE] border border-muted-border shadow-xs my-8">
                <Quote className="w-6 h-6 text-[#8B72BE]/50 mb-2" />
                <p className="font-serif text-2xl sm:text-3xl text-navy font-bold italic leading-relaxed">
                  &ldquo;What might become possible if you no longer needed every achievement to prove that you were enough?&rdquo;
                </p>
              </div>

              <p className="text-base sm:text-lg leading-relaxed">
                Because the person you are working so hard to become may already have more of the necessary capabilities than you realise. The opportunity is to create the conditions in which those capabilities can emerge.
              </p>
            </div>
          </article>

          {/* Bottom Consultation CTA */}
          <div className="mt-16 pt-12 border-t border-muted-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-1">
                Ready to elevate your leadership identity?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70">
                Explore our 1:1 Founder Clarity and Total Life Evolution private engagements.
              </p>
            </div>
            <Link
              href="/book-consultation"
              className="bg-navy text-white hover:bg-[#2A2A5A] px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center gap-2 transition-all shrink-0"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Brain,
  Quote,
  TrendingUp,
  Target,
  CheckCircle2,
  Users,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'The Bottleneck Wore His Name: How a Third-Generation Owner Grew a ₹16 Crore Business — Inspire Excellence',
  description:
    'Executive Transformation Case Study: The story of a business owner who asked for better execution, and discovered that the thing standing between his company and its next level was not a process, a market or a team. It was a pattern of leadership he had never been asked to examine.',
  path: '/case-studies/the-bottleneck-wore-his-name',
});

export default function BottleneckWoreHisNamePage() {
  const comparisonMatrix = [
    {
      operator: 'Gets things done personally',
      architect: 'Creates the conditions in which others deliver',
    },
    {
      operator: 'Responds to each operational problem',
      architect: 'Builds systems that prevent recurring ones',
    },
    {
      operator: 'Manages individual activities',
      architect: 'Understands and leads the whole organisation',
    },
    {
      operator: 'Relies on conversations and follow-ups for visibility',
      architect: 'Relies on metrics and structured reporting',
    },
    {
      operator: 'Confronts when expectations are missed',
      architect: 'Communicates, clarifies and follows through',
    },
  ];

  const revenueMilestones = [
    {
      milestone: 'Starting point',
      revenue: '₹16 crore',
    },
    {
      milestone: 'End of Year 1',
      revenue: '₹22 crore',
    },
    {
      milestone: 'End of Year 2',
      revenue: '₹26 crore',
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
            The Bottleneck Wore His Name: How a Third-Generation Owner Grew a ₹16 Crore Business by Changing the Man Who Ran It
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#E07A5F] leading-relaxed mb-6">
            The story of a business owner who asked for better execution, and discovered that the thing standing between his company and its next level was not a process, a market or a team. It was a pattern of leadership he had never been asked to examine.
          </p>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-muted-border/80 text-xs text-charcoal/70">
            <span><strong>Client Profile:</strong> Third-Generation Owner, Established Family Business (₹16 Cr turnover)</span>
            <span>•</span>
            <span><strong>Engagement:</strong> Total Life Transformative Intensive™ (2 Years)</span>
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
                The Brief That Was Never the Real Brief
              </h2>
              <p className="mb-4">
                He arrived with a request that sounded entirely reasonable.
              </p>
              <p className="mb-4">
                He wanted to grow his business.
              </p>
              <p className="mb-4">
                The business he led was not a start-up looking for direction. It was a legacy enterprise in its third generation, with an established dealer and customer network, a working team and a turnover of roughly ₹16 crore. Demand for expansion was not the problem. The market was willing. The name carried weight.
              </p>
              <p className="mb-4">
                What he asked us for was sharper execution, stronger operations and a strategy to accelerate growth. A consultant’s brief, in other words, and on paper a consultant’s problem.
              </p>
              <p className="mb-4">
                There were processes to tighten. There were operational inefficiencies. There were people who needed clearer direction. Everything he described was real.
              </p>
              <p className="mb-4">
                But somewhere in the first few conversations, a quieter pattern began to surface, one that no operations audit would have found.
              </p>
              <p className="mb-4">
                <strong>He was a man who knew exactly what needed to happen in his business, and who could not reliably get it to happen through other people.</strong>
              </p>
              <p className="mb-4">
                Instructions were given, and execution did not follow as expected. Conversations with team members tended to turn confrontational. Accountability was hard to drive. The same issues kept returning, and each time, the person who stepped in to resolve them was the owner himself.
              </p>
              <p className="mb-4">
                And then, a little further into our exploration, another thread appeared. The relationship with his father.
              </p>
              <p className="mb-4">
                That was the moment the engagement changed shape. We were no longer looking at a business problem with a personal footnote. We were looking at two transformations that could not be separated: the business that needed stronger systems, and the leader who needed a different relationship with authority, emotion and control.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                The Invisible Bottleneck
              </h2>
              <p className="mb-4">
                There is a paradox hiding inside many owner-led businesses.
              </p>
              <p className="mb-4">
                The qualities that built the company, deep industry knowledge, personal involvement, an instinct for solving problems on the spot, can quietly become the ceiling on its growth. Not because the owner is failing, but because the business has grown past the point where one person’s presence can hold it together.
              </p>
              <p className="mb-4">
                The symptoms are rarely dramatic. They look like this:
              </p>
              <ul className="space-y-2 mb-6 pl-4 border-l-2 border-muted-border">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B72BE] font-bold">•</span>
                  <span>The owner is the final escalation point for decisions that should have been settled three levels below.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B72BE] font-bold">•</span>
                  <span>Work is delegated, but outcomes are only trusted once he has personally checked them.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B72BE] font-bold">•</span>
                  <span>Visibility comes through conversations, occasional updates and follow-ups, rather than through a structured view of the business.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B72BE] font-bold">•</span>
                  <span>Each fresh problem pulls him back into the operating detail.</span>
                </li>
              </ul>
              <p className="mb-6">
                Over time the business stops depending on its systems and starts depending on its owner. It grows, but only as far as his attention can stretch.
              </p>

              {/* Big Quote Callout */}
              <div className="bg-[#1A1A40] text-white p-8 sm:p-10 rounded-sm my-8 text-center shadow-md">
                <Quote className="w-8 h-8 text-gold/40 mx-auto mb-3" />
                <p className="font-serif italic text-2xl sm:text-3xl text-gold font-normal leading-relaxed max-w-2xl mx-auto">
                  “The question was never whether he understood the business. It was whether the business could function without needing him to hold every thread.”
                </p>
              </div>

              <p>
                This is the question that reframed the entire engagement.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                The Loop No One Could See From Inside
              </h2>
              <p className="mb-4">
                Before any intervention, we mapped the pattern as it actually played out. Not as a theory, but as a sequence that had repeated, in different forms, many times.
              </p>

              {/* The Loop Box */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border-l-4 border-[#E07A5F] border border-muted-border shadow-xs my-8">
                <span className="font-sans text-xs uppercase tracking-widest text-[#E07A5F] font-bold block mb-4">
                  THE OWNER-DEPENDENCY LOOP
                </span>
                <div className="space-y-3.5 font-sans text-sm sm:text-base text-charcoal/90">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-[#E07A5F] shrink-0">1.</span>
                    <span>A task is delegated. Expectations are communicated, though not always with full clarity.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-[#E07A5F] shrink-0">2.</span>
                    <span>Execution falls short. A deadline slips, or the work arrives differently from what was imagined.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-[#E07A5F] shrink-0">3.</span>
                    <span>Frustration builds. The owner feels the gap between what he knows is possible and what he sees.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-[#E07A5F] shrink-0">4.</span>
                    <span>The conversation turns confrontational. The team member becomes defensive.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-[#E07A5F] shrink-0">5.</span>
                    <span>The underlying problem remains unresolved, so the owner steps in personally, and the dependency deepens.</span>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                Seen from outside, it looks like a performance problem in the team. Seen from inside, it feels like proof that nobody else can be trusted with the work.
              </p>
              <p>
                It is neither. It is a loop. And a loop can only be broken by the person standing inside it.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                The Neuroscience of the Familiar Reaction
              </h2>
              <p className="mb-6">
                Why do capable leaders repeat behaviours they already know are not working?
              </p>
              <p className="mb-6">
                Because knowing what to do and doing it under pressure are governed by different parts of the system.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-white p-7 rounded-sm border border-muted-border shadow-2xs">
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">
                    Emotional Regulation and Executive Function
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
                    Under stress, emotional arousal makes it harder to think flexibly, consider other perspectives or respond with deliberation. The very moment a leader most needs clarity, a missed deadline or a disappointing outcome, is the moment the brain is least inclined to provide it. The aim of our work was to widen the space between stimulus and response, so that frustration informed the conversation instead of running it.
                  </p>
                </div>

                <div className="bg-white p-7 rounded-sm border border-muted-border shadow-2xs">
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">
                    Pattern Recognition
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
                    Repeated behaviour becomes automatic. A familiar trigger produces a familiar response, long after that response has stopped being useful. Change begins when the pattern becomes visible, and sticks when a better response is rehearsed often enough to become the more accessible one.
                  </p>
                </div>

                <div className="bg-white p-7 rounded-sm border border-muted-border shadow-2xs">
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">
                    Identity
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
                    This was the deepest layer. A business owner who grew up inside a family enterprise knows its operations intimately. But scaling an organisation requires a different identity: someone who builds systems, develops people and creates accountability, rather than someone who personally makes things happen.
                  </p>
                </div>
              </div>

              {/* Identity Quote */}
              <div className="p-6 bg-white border-l-4 border-[#8B72BE] rounded-r-sm shadow-xs text-lg sm:text-xl font-serif italic text-navy leading-relaxed my-8">
                “Behaviour follows identity. Change what a leader believes his role is, and the behaviours begin to rearrange themselves.”
              </div>
            </div>

            {/* The 4 Breakthroughs */}
            <div className="pt-6 border-t border-muted-border">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8B72BE] font-bold block mb-2">
                HOW WE BROKE THE PATTERN
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-8">
                THE 4 TRANSFORMATION BREAKTHROUGHS
              </h2>

              {/* Breakthrough 1 */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border border-muted-border mb-8 shadow-xs">
                <span className="font-serif text-2xl font-bold text-[#8B72BE] block mb-1">01</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
                  From Confrontation to Constructive Conversation
                </h3>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  We began with the way he led conversations, because every other change depended on it.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  There is a real difference between being assertive and being aggressive. An assertive leader states expectations clearly, addresses gaps directly and holds the line on accountability, without letting frustration take over the room. We worked on three capabilities:
                </p>
                <ul className="space-y-3 mb-6 pl-4 border-l-2 border-[#8B72BE]/30 text-sm sm:text-base text-charcoal/85">
                  <li>
                    <strong>Assertiveness without aggression.</strong> Responding with composure, clarity and intention, rather than reacting in the moment.
                  </li>
                  <li>
                    <strong>Disagreement as problem-solving.</strong> Shifting the focus from who was at fault to what had gone wrong, what needed to change and how follow-through would be confirmed.
                  </li>
                  <li>
                    <strong>Leadership beyond personal involvement.</strong> Creating clarity, ownership and accountability so that work gets done even when he is not watching.
                  </li>
                </ul>
                <div className="p-6 bg-[#FAF7F2] border-l-4 border-[#8B72BE] rounded-r-sm text-lg sm:text-xl font-serif italic text-navy leading-relaxed">
                  “The objective was never to make him less demanding. It was to make him more effective in communicating what he demanded.”
                </div>
              </div>

              {/* Breakthrough 2 */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border border-muted-border mb-8 shadow-xs">
                <span className="font-serif text-2xl font-bold text-[#E07A5F] block mb-1">02</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
                  A Business That Could Be Seen
                </h3>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  A growing organisation cannot run on the owner’s impressions. Once the conversation about leadership had begun to shift, the operational side came into focus.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  We introduced structured operational metrics and reporting, so that he could see where delays were occurring, which activities needed intervention and how teams were performing. Management by verbal update gave way to decisions made on consistent information.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  We also built a sales structure that could scale. The goal was a larger salesperson base without a loss of organisational control: more reach, with monitoring, reporting and accountability built in, so that growth would not mean the owner personally tracking every individual.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed mb-6">
                  And we worked with the team on process adherence and communication. A system on paper changes nothing. People have to understand it, follow it, and say so when it is not working.
                </p>
                <div className="p-6 bg-[#FAF7F2] border-l-4 border-[#E07A5F] rounded-r-sm text-lg sm:text-xl font-serif italic text-navy leading-relaxed">
                  “If you cannot see what is happening in your business, you cannot consistently improve what is happening in your business.”
                </div>
              </div>

              {/* Breakthrough 3 */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border border-muted-border mb-8 shadow-xs">
                <span className="font-serif text-2xl font-bold text-[#5B9E9E] block mb-1">03</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
                  The Two Days
                </h3>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  One outcome from this phase became the clearest early signal that something had genuinely shifted: dealer delivery time was reduced by two days.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  Two days can sound small in isolation. Across an entire dealer network, it is not. Faster delivery shortens waiting periods, improves the dealer’s experience and strengthens the business’s ability to serve its market.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  What makes it instructive is how it was achieved. Nobody was told to simply work faster. It took better coordination, closer monitoring and stronger execution across every step of the delivery process, which is to say it took both halves of the engagement working together. A well-designed process fails if people do not own it. A committed team underperforms if nobody can see where the delay is.
                </p>
                <p className="text-lg font-serif italic text-navy font-semibold">
                  Better systems. Better execution. Better visibility.
                </p>
              </div>

              {/* Breakthrough 4 */}
              <div className="bg-white p-7 sm:p-9 rounded-sm border border-muted-border mb-8 shadow-xs">
                <span className="font-serif text-2xl font-bold text-gold block mb-1">04</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
                  The Father Question
                </h3>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  The fourth breakthrough was the least visible and, in many ways, the most important.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  In a third-generation business, family and enterprise occupy the same space. The relationship between a father and son carries expectations, long-established ways of speaking and differing views on how things should be done, all inside a company that predates both of them.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed mb-4">
                  We worked on this relationship as part of his wider personal transformation. The purpose was to help him navigate it with more awareness and composure, while continuing to grow into a leadership identity of his own.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed">
                  Why does this belong in a business case study? Because leadership does not stop at the office door. The way a person handles emotional pressure with the people who matter most is the way they tend to handle it everywhere. The capacity to pause rather than react, to communicate rather than confront, and to tell an emotional response apart from a considered decision does not stay in one room.
                </p>
              </div>
            </div>

            {/* Matrix: Operator to Architect */}
            <div className="pt-6 border-t border-muted-border">
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-3">
                From Operator to Architect
              </h2>
              <p className="text-base text-charcoal/85 leading-relaxed mb-6">
                The thread running through all four breakthroughs was a single shift in how he understood his job.
              </p>

              <div className="overflow-x-auto border border-muted-border rounded-sm shadow-xs mb-8">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-[#1A1A40] text-white">
                    <tr>
                      <th className="p-4 font-semibold text-sm">The Owner as Operator</th>
                      <th className="p-4 font-semibold text-sm">The Owner as Architect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted-border">
                    {comparisonMatrix.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF7F2]">
                        <td className="p-4 text-charcoal/80 font-medium">{row.operator}</td>
                        <td className="p-4 text-navy font-semibold">{row.architect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* The Numbers */}
            <div className="pt-6 border-t border-muted-border">
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                The Numbers
              </h2>

              <div className="overflow-x-auto border border-muted-border rounded-sm shadow-xs mb-6 max-w-md">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-[#1A1A40] text-white">
                    <tr>
                      <th className="p-3.5 font-semibold text-sm">Milestone</th>
                      <th className="p-3.5 font-semibold text-sm">Annual Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted-border">
                    {revenueMilestones.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF7F2]">
                        <td className="p-3.5 text-charcoal/80 font-medium">{row.milestone}</td>
                        <td className="p-3.5 text-navy font-bold text-gold">{row.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-3 mb-6 text-base text-charcoal/85 leading-relaxed">
                <p>
                  Year 1: ₹16 crore to ₹22 crore, growth of ₹6 crore, or approximately 37.5%.
                </p>
                <p>
                  Year 2: ₹22 crore to ₹26 crore, a further ₹4 crore.
                </p>
                <p className="font-semibold text-navy">
                  Across two years: ₹10 crore of additional annual revenue, an increase of 62.5%.
                </p>
                <p>
                  Alongside revenue, the engagement produced a two-day reduction in dealer delivery time, stronger operational reporting, a more scalable sales structure, better communication and process adherence across the team, and a visible change in how the owner handled difficult conversations.
                </p>
                <p className="text-xs sm:text-sm text-charcoal/70 italic pt-2">
                  A note on reading these figures: revenue is as reported by the client. A business’s growth over two years has many contributors, including market conditions and the efforts of the team itself. What we can say is that the growth coincided with, and was supported by, changes in how the business was led and how it could see itself.
                </p>
              </div>
            </div>

            {/* What This Case Teaches */}
            <div className="pt-6 border-t border-muted-border">
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                What This Case Teaches
              </h2>
              <p className="mb-4 text-base text-charcoal/85 leading-relaxed">
                It would be easy to read this as a growth story. Sixteen crore to twenty-six. Better reporting. Faster delivery.
              </p>
              <p className="mb-6 text-base text-charcoal/85 leading-relaxed">
                But look at where the work began. Not with a new market, a new product or a new sales target, but with the way one man handled a disappointing conversation on an ordinary working day.
              </p>
              <p className="mb-4 font-semibold text-navy">
                Three lessons stand out.
              </p>
              <div className="space-y-4 mb-8 pl-4 border-l-2 border-[#8B72BE]">
                <p className="text-base text-charcoal/85 leading-relaxed">
                  <strong>Execution problems are often leadership problems in disguise.</strong> When the same issues keep returning, the question to ask is not only “what is wrong with the process?” but “what pattern keeps recreating it?”
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed">
                  <strong>Systems without behavioural change do not hold.</strong> A reporting dashboard cannot compensate for a leader who reacts rather than responds. The two have to be built together.
                </p>
                <p className="text-base text-charcoal/85 leading-relaxed">
                  <strong>The next stage of a business often waits on the next version of its leader.</strong> The capabilities that built a company are not always the ones that can carry it further.
                </p>
              </div>
            </div>

            {/* Executive Reflection */}
            <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-sm border border-muted-border shadow-xs">
              <span className="font-sans text-xs uppercase tracking-widest text-[#E07A5F] font-bold block mb-2">
                EXECUTIVE REFLECTION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                The Question That Remains
              </h2>
              <p className="mb-4 text-base sm:text-lg leading-relaxed">
                There comes a point in the life of every growing business when what got it here will not get it there.
              </p>
              <p className="mb-6 text-base sm:text-lg leading-relaxed">
                The owner who once managed everything personally must learn to lead through others. The leader who once relied on instinct and informal communication must build structures that outlast his own presence. The person who once resolved every problem must create an organisation that can resolve problems without him.
              </p>

              <div className="bg-white p-7 sm:p-9 rounded-sm border-l-4 border-[#8B72BE] border border-muted-border shadow-xs my-8">
                <Quote className="w-6 h-6 text-[#8B72BE]/50 mb-2" />
                <p className="font-serif text-2xl sm:text-3xl text-navy font-bold italic leading-relaxed">
                  “What would your business look like if it could hold itself together, and who would you have to become for that to be true?”
                </p>
              </div>

              <p className="text-base sm:text-lg leading-relaxed">
                Sometimes the next level of growth is not waiting for a better strategy. It is waiting for a different version of the person responsible for carrying it out.
              </p>
            </div>

            {/* Closing Note */}
            <div className="p-6 bg-white rounded-sm border border-muted-border text-center space-y-4">
              <h3 className="font-serif text-2xl font-bold text-navy">
                Ready to examine the pattern behind your business?
              </h3>
              <p className="font-sans text-sm text-charcoal/80 max-w-xl mx-auto">
                Explore our Total Life Transformative and Founder Clarity Intensive private engagements at Inspire Excellence.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 bg-navy text-white hover:bg-[#2A2A5A] px-7 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all shadow-sm"
                >
                  <span>Schedule a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-xs text-charcoal/60 italic pt-2">
                Client details have been anonymised to protect confidentiality.
              </p>
            </div>
          </article>
        </Container>
      </section>
    </div>
  );
}

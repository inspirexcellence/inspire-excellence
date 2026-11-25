import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import {
  getTransformationAreaData,
  transformationAreasList,
} from '@/data/transformation-areas';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Target,
  Users,
  Compass,
  TrendingUp,
  Building2,
  ShieldCheck,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

export function generateStaticParams() {
  return [
    { slug: 'individual' },
    { slug: 'leadership' },
    { slug: 'people' },
    { slug: 'organisations' },
    { slug: 'performance' },
    { slug: 'relationships' },
    { slug: 'founders-leaders' },
    { slug: 'people-teams' },
  ];
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const area = getTransformationAreaData(slug);
  if (!area) {
    return createMetadata({
      title: 'Transformation Area | Inspire Excellence',
    });
  }

  return createMetadata({
    title: `${area.headerCategory} — ${area.mainTitle} | Inspire Excellence`,
    description: area.introParagraphs[0],
    path: `/transformation-areas/${slug}`,
  });
}

export default async function TransformationAreaDetail(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const area = getTransformationAreaData(slug);

  if (!area) {
    notFound();
  }

  // Other areas for bottom exploration
  const otherAreas = transformationAreasList.filter((a) => a.slug !== area.slug);

  return (
    <main className="min-h-screen bg-[#FDF9F3]">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#F5EDE4]/70 to-[#FDF9F3] border-b border-[#E8DDD0]">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-charcoal/70 mb-8 overflow-x-auto pb-1 scrollbar-none font-sans">
            <Link href="/" className="hover:text-navy transition-colors whitespace-nowrap">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-charcoal/40" />
            <Link
              href="/transformation-areas"
              className="hover:text-navy transition-colors whitespace-nowrap"
            >
              Transformation Areas
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-charcoal/40" />
            <span className="text-navy font-semibold truncate">
              {area.headerCategory}
            </span>
          </nav>

          {/* Category Tag */}
          <div className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1A1A40] text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-[2px] border-l-4 border-l-[#E07A5F] shadow-md mb-6">
            <span>{area.headerCategory}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A40] font-bold leading-tight mb-8">
            {area.mainTitle}
          </h1>

          {/* Intro Paragraphs */}
          <div className="space-y-5 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed font-sans">
            {area.introParagraphs.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === area.introParagraphs.length - 1
                    ? 'font-medium text-[#1A1A40] italic pt-2'
                    : ''
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* Hero CTA Quick Jump */}
          <div className="mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-[#E8DDD0]">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1A40] hover:bg-[#2B2B5A] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{area.ctaButtonText}</span>
              <ArrowRight className="w-4 h-4 text-[#C9BAE5]" />
            </Link>
            <a
              href="#dimensions"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#D8CFC4] hover:border-[#8B72BE] text-[#1A1A40] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full transition-all shadow-xs cursor-pointer"
            >
              <span>Explore Dimensions</span>
              <ChevronRight className="w-4 h-4 text-[#8B72BE]" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHAT CAN TRANSFORM / THE 6 DIMENSIONS */}
      <section id="dimensions" className="py-20 md:py-28 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-block px-3.5 py-1.5 bg-[#1A1A40] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-[2px] mb-4 shadow-2xs">
              Transformation Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A40] font-bold leading-tight mb-6">
              {area.whatCanTransformTitle}
            </h2>
            <div className="font-sans text-base sm:text-lg text-[#4A4A5E] leading-relaxed whitespace-pre-line">
              {area.whatCanTransformSubtext}
            </div>
          </div>

          {/* Dimensions Cards Grid */}
          <div className="space-y-8">
            {area.dimensions.map((dim) => (
              <div
                key={dim.number}
                className="bg-white rounded-2xl border border-[#E2DCD5] hover:border-[#8B72BE]/50 transition-all duration-300 p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Title, Subtitle, Description */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#8B72BE]">
                        {dim.number}
                      </span>
                      <span className="w-8 h-[2px] bg-[#8B72BE]/40" />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A40] font-bold leading-snug mb-3">
                      {dim.title}
                    </h3>

                    {/* Subtitle Badge */}
                    <div className="inline-block px-4 py-2 bg-[#FAF7F2] border-l-4 border-l-[#E07A5F] border border-[#E8DDD0] rounded-[2px] text-xs sm:text-sm font-bold text-[#1A1A40] tracking-wide mb-5 shadow-xs">
                      {dim.subtitle}
                    </div>

                    <p className="font-sans text-sm sm:text-base text-[#4A4A5E] leading-relaxed whitespace-pre-line">
                      {dim.description}
                    </p>
                  </div>

                  {/* Right Column: Outcomes List */}
                  <div className="lg:col-span-7 bg-[#FAF7F2]/60 rounded-xl p-6 sm:p-8 border border-[#E8DDD0]">
                    <span className="text-xs uppercase font-bold text-[#1A1A40] tracking-wider block mb-4">
                      The transformation you experience:
                    </span>

                    <div className="space-y-6">
                      {dim.outcomes.map((group, gIdx) => (
                        <div key={gIdx} className="space-y-3">
                          {group.category && (
                            <h4 className="font-serif text-lg font-bold text-[#1A1A40] italic pt-1">
                              {group.category}
                            </h4>
                          )}
                          <ul className="space-y-2.5">
                            {group.items.map((item, iIdx) => (
                              <li
                                key={iIdx}
                                className="flex items-start gap-3 text-sm text-[#374151] font-sans leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#8B72BE] shrink-0 mt-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO IS THIS FOR? */}
      <section className="py-20 md:py-24 bg-[#F5EDE4]/50 border-y border-[#E8DDD0]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 bg-[#1A1A40] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-[2px] mb-4 shadow-2xs">
              Audience Alignment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A40] font-bold leading-tight mb-4">
              {area.whoIsThisForTitle}
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#4A4A5E] leading-relaxed whitespace-pre-line">
              {area.whoIsThisForSubtext}
            </p>
          </div>

          {/* Case A: Structured Groups (Founders & Leaders / People & Teams / Organisations) */}
          {area.whoIsThisForGroups && area.whoIsThisForGroups.length > 0 && (
            <div
              className={`grid grid-cols-1 ${
                area.whoIsThisForGroups.length === 4
                  ? 'md:grid-cols-2 lg:grid-cols-4'
                  : 'md:grid-cols-3'
              } gap-6`}
            >
              {area.whoIsThisForGroups.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-7 border border-[#E2DCD5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#1A1A40] text-white flex items-center justify-center font-serif text-lg font-bold mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A40] font-bold mb-4 leading-snug">
                      {group.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {group.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4A5E] font-sans leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F] shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Case B: Bullets List (Individual Transformation) */}
          {area.whoIsThisForBullets && area.whoIsThisForBullets.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E2DCD5] shadow-sm">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {area.whoIsThisForBullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#374151] font-sans leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#8B72BE] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {area.whoIsThisForCallout && (
                  <div className="mt-10 pt-8 border-t border-[#E8DDD0] text-center">
                    <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1A1A40] font-bold italic leading-relaxed">
                      &ldquo;{area.whoIsThisForCallout}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <span className="inline-block px-3.5 py-1.5 bg-[#1A1A40] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-[2px] mb-4 shadow-2xs">
              {area.approachTitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A40] font-bold leading-tight mb-6">
              {area.approachSubtitle}
            </h2>
            <div className="font-sans text-base sm:text-lg text-[#4A4A5E] leading-relaxed whitespace-pre-line">
              {area.approachIntro}
            </div>
          </div>

          {/* Approach Dimensions */}
          <div
            className={`grid grid-cols-1 ${
              area.approachDimensions.length === 4
                ? 'md:grid-cols-2 lg:grid-cols-4'
                : 'md:grid-cols-3'
            } gap-6`}
          >
            {area.approachDimensions.map((app) => (
              <div
                key={app.number}
                className="bg-white rounded-2xl p-8 border border-[#E2DCD5] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-[#8B72BE]">
                      {app.number}
                    </span>
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-white bg-[#1A1A40] px-3.5 py-1.5 rounded-[2px] shadow-xs">
                      {app.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#1A1A40] font-bold leading-snug mb-3">
                    {app.title}
                  </h3>

                  <p className="font-sans text-sm text-[#4A4A5E] leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS OFFERINGS (FOR PEOPLE & TEAMS / ORGANISATIONS) */}
      {area.solutions && area.solutions.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-[#F5EDE4]/60 to-[#FDF9F3] border-t border-[#E8DDD0]">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1.5 bg-[#1A1A40] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-[2px] mb-4 shadow-2xs">
                Engagement Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A40] font-bold leading-tight mb-4">
                {area.solutionsTitle}
              </h2>
              {area.solutionsSubtitle && (
                <p className="font-sans text-base sm:text-lg text-[#4A4A5E]">
                  {area.solutionsSubtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {area.solutions.map((sol, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white rounded-xl p-7 border border-[#E2DCD5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#8B72BE]/15 text-[#1A1A40] flex items-center justify-center font-sans font-bold text-xs mb-4">
                      {sIdx + 1}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A40] font-bold mb-3 leading-snug">
                      {sol.title}
                    </h3>
                    <p className="font-sans text-sm text-[#4A4A5E] leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. WHAT DOES IT LOOK LIKE? (COMPARISON TABLE FOR ORGANISATIONAL TRANSFORMATION) */}
      {area.shifts && area.shifts.length > 0 && (
        <section className="py-20 md:py-24 border-t border-[#E8DDD0]">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 bg-[#1A1A40] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-[2px] mb-4 shadow-2xs">
                Measurable Impact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A40] font-bold leading-tight mb-4">
                {area.whatItLooksLikeTitle}
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#4A4A5E]">
                {area.whatItLooksLikeSubtext}
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl border border-[#E2DCD5] overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-[#1A1A40] text-white p-4 sm:p-5 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider">
                <div className="pl-2 sm:pl-4">Today</div>
                <div className="pl-2 sm:pl-4 text-[#C9BAE5]">The Desired Shift</div>
              </div>
              <div className="divide-y divide-[#E8DDD0]">
                {area.shifts.map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="grid grid-cols-2 p-4 sm:p-5 text-sm sm:text-base font-sans hover:bg-[#FAF7F2] transition-colors"
                  >
                    <div className="text-[#4A4A5E] pr-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      <span>{row.today}</span>
                    </div>
                    <div className="text-[#1A1A40] font-semibold pl-2 sm:pl-4 flex items-center gap-2 border-l border-[#E8DDD0]">
                      <ArrowRight className="w-4 h-4 text-[#8B72BE] shrink-0" />
                      <span>{row.shift}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {area.shiftsNote && (
              <p className="font-sans text-xs sm:text-sm text-[#4A4A5E]/80 text-center mt-6 italic">
                {area.shiftsNote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* 7. WHY INSPIRE EXCELLENCE? */}
      {area.whyBeliefs && area.whyBeliefs.length > 0 && (
        <section className="py-20 md:py-24 bg-[#1A1A40] text-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold text-[#C9BAE5] tracking-widest block mb-3">
                Core Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                {area.whyTitle}
              </h2>
              <div className="font-sans text-base sm:text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                {area.whyIntro}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 mb-10">
              <span className="text-xs uppercase font-bold text-white/60 tracking-wider block mb-6">
                We believe that:
              </span>
              <ul className="space-y-4">
                {area.whyBeliefs.map((belief, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3.5 text-base sm:text-lg text-gray-200 font-sans leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8B72BE] shrink-0 mt-1" />
                    <span>{belief}</span>
                  </li>
                ))}
              </ul>
            </div>

            {area.whyCoreMessage && (
              <div className="text-center max-w-3xl mx-auto">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-bold leading-relaxed italic">
                  &ldquo;{area.whyCoreMessage}&rdquo;
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 8. CLOSING THOUGHTS & CALL TO ACTION */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div
            className="rounded-3xl p-10 sm:p-14 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl border border-[#2D2D5E]"
            style={{ backgroundColor: '#1A1A40' }}
          >
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#8B72BE]/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-[#E07A5F]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-[#C9BAE5] uppercase tracking-widest text-xs font-bold mb-4 block">
                Begin Your Journey
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                {area.closingTitle}
              </h2>

              <div className="space-y-3 mb-8 text-sm sm:text-base md:text-lg text-gray-200 font-sans leading-relaxed">
                {area.closingBody.map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/15">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-white">
                  {area.ctaTitle}
                </h3>
                <p className="font-sans text-sm sm:text-base text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                  {area.ctaSubtext}
                </p>

                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 px-9 py-4 bg-[#E07A5F] hover:bg-[#D0694E] text-white font-sans text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{area.ctaButtonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. EXPLORE OTHER TRANSFORMATION AREAS */}
      <section className="py-16 md:py-20 bg-[#F5EDE4]/40 border-t border-[#E8DDD0]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-bold text-[#E07A5F] tracking-widest block mb-1">
                Explore More Pathways
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A40] font-bold">
                Other Transformation Areas
              </h3>
            </div>
            <Link
              href="/transformation-areas"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B72BE] hover:text-[#1A1A40] transition-colors"
            >
              <span>View All 4 Transformation Areas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/transformation-areas/${other.slug}`}
                className="group bg-white rounded-xl p-6 border border-[#E2DCD5] hover:border-[#8B72BE]/50 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#8B72BE] block mb-2">
                    {other.headerCategory}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#1A1A40] group-hover:text-[#8B72BE] transition-colors leading-snug mb-3">
                    {other.mainTitle}
                  </h4>
                  <p className="font-sans text-xs text-[#4A4A5E] line-clamp-3 leading-relaxed mb-6">
                    {other.introParagraphs[0]}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E07A5F] group-hover:text-[#1A1A40] transition-colors">
                  <span>Explore Pathway</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { transformationAreasList } from '@/data/transformation-areas';
import {
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
  User,
  Crown,
  Users,
  Building2,
} from 'lucide-react';

export const metadata = createMetadata({
  title: 'Transformation Areas | Inspire Excellence',
  description:
    'Explore the four core dimensions of transformation: Individual Transformation, Founders & Leaders, People & Teams, and Organisational Transformation.',
  path: '/transformation-areas',
});

const iconsMap: Record<string, React.ReactNode> = {
  individual: <User className="w-6 h-6 text-[#8B72BE]" />,
  leadership: <Crown className="w-6 h-6 text-[#E07A5F]" />,
  people: <Users className="w-6 h-6 text-[#5B9E9E]" />,
  organisations: <Building2 className="w-6 h-6 text-[#C5A572]" />,
};

export default function TransformationAreasPage() {
  return (
    <main className="min-h-screen bg-[#FDF9F3]">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#F5EDE4]/70 to-[#FDF9F3] border-b border-[#E8DDD0]">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1A1A40] text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-[2px] border-l-4 border-l-[#E07A5F] shadow-md mb-6">
            <span>Human Potential & Systemic Growth</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A40] font-bold leading-tight mb-6">
            Where clarity creates <span className="italic font-serif text-[#8B72BE]">change</span>.
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-[#4A4A5E] max-w-3xl mx-auto leading-relaxed">
            At Inspire Excellence, we work at the intersection of neuroscience, cognitive mastery, and behavioral science across four interconnected transformation domains.
          </p>
        </div>
      </section>

      {/* 2. THE 4 TRANSFORMATION AREAS SHOWCASE */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transformationAreasList.map((area, idx) => (
              <div
                key={area.slug}
                className="group bg-white rounded-2xl border border-[#E2DCD5] hover:border-[#8B72BE]/60 transition-all duration-300 p-8 sm:p-10 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DDD0] flex items-center justify-center shadow-2xs">
                      {iconsMap[area.slug]}
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#8B72BE]/40 group-hover:text-[#8B72BE] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 bg-[#FAF7F2] border-l-3 border-l-[#E07A5F] border border-[#E8DDD0] text-xs uppercase font-bold text-[#1A1A40] tracking-wider rounded-[2px] mb-3">
                    {area.headerCategory}
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A40] font-bold leading-snug mb-4 group-hover:text-[#8B72BE] transition-colors">
                    <Link href={`/transformation-areas/${area.slug}`}>
                      {area.mainTitle}
                    </Link>
                  </h2>

                  <p className="font-sans text-sm sm:text-base text-[#4A4A5E] leading-relaxed mb-6">
                    {area.introParagraphs[0]}
                  </p>

                  {/* 6 Dimensions Overview */}
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E8DDD0] mb-8">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#1A1A40] block mb-3">
                      Core Dimensions:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#374151]">
                      {area.dimensions.map((dim) => (
                        <div key={dim.number} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8B72BE] shrink-0" />
                          <span className="truncate">{dim.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-6 border-t border-[#E8DDD0] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#4A4A5E]">
                    6 Comprehensive Dimensions
                  </span>
                  <Link
                    href={`/transformation-areas/${area.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A40] hover:bg-[#8B72BE] text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 shadow-xs hover:shadow group/btn"
                  >
                    <span>Explore Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY QUOTE BANNER */}
      <section className="py-16 md:py-20 bg-[#F5EDE4]/60 border-y border-[#E8DDD0]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1A40] font-bold italic leading-relaxed mb-4">
            &ldquo;Because leadership is not just about what you achieve. It is about the people you influence, the decisions you make and the impact you create.&rdquo;
          </p>
          <span className="font-sans text-xs uppercase tracking-widest text-[#E07A5F] font-bold">
            Inspire Excellence Philosophy
          </span>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
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
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Are you ready to begin your transformation?
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
                Discover the shifts you need to make and explore the right transformation journey for your personal, leadership, or organisational goals.
              </p>
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-9 py-4 bg-[#E07A5F] hover:bg-[#D0694E] text-white font-sans text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book a Consultation Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

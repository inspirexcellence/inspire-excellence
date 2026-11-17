'use client';

import React, { useState } from 'react';

export function TrustedOrganisationsSection() {
  const [tcsError, setTcsError] = useState(false);
  const [modError, setModError] = useState(false);

  return (
    <section className="py-9 sm:py-12 bg-[#FAF7F2] border-y border-[#E8DDD0] relative overflow-hidden select-none">
      {/* Edge gradient masks for seamless fade on sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

      {/* Line 1: Moving Left */}
      <div className="overflow-hidden w-full mb-3.5 sm:mb-4">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
          {[0, 1].map((loopIdx) => (
            <div key={`l1-${loopIdx}`} className="flex items-center gap-8 sm:gap-12 shrink-0">
              {/* TCS */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                {!tcsError ? (
                  <img
                    src="https://i.logos-download.com/113971/29583-9fde4947792aa7b5b379c0b1aee0ead2.png/Tata_Consultancy_Services_Logo_2020.png?dl"
                    alt="TCS"
                    className="h-5 sm:h-6 object-contain mix-blend-multiply"
                    onError={() => setTcsError(true)}
                  />
                ) : (
                  <span className="font-sans font-black text-xs sm:text-sm tracking-tight bg-gradient-to-r from-[#E07A5F] via-[#8B72BE] to-[#5B9E9E] bg-clip-text text-transparent">
                    tcs
                  </span>
                )}
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em] ml-1">
                  TCS
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* L&T */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                <img
                  src="/brands/L&T.png"
                  alt="L&T"
                  className="h-5 sm:h-6 object-contain mix-blend-multiply"
                />
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em] ml-1">
                  L&amp;T
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* Ministry of Defence */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                {!modError ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                    alt="Ministry of Defence"
                    className="h-6 sm:h-7 object-contain mix-blend-multiply"
                    onError={() => setModError(true)}
                  />
                ) : (
                  <div className="w-6 h-6 rounded-[2px] bg-[#1A1F36]/10 flex items-center justify-center text-[#1A1F36] text-[10px] font-bold">
                    🏛
                  </div>
                )}
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em]">
                  Ministry of Defence
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* Reliance Retail */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-[2px] bg-red-700 text-white font-serif font-bold text-xs flex items-center justify-center shrink-0">
                  R
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em]">
                  Reliance Retail
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* John Maxwell Certified Coach */}
              <div className="flex items-center gap-3 px-6 py-2.5 sm:px-7 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#B8860B]/50 shadow-xs hover:border-[#B8860B] transition-all shrink-0">
                <img
                  src="/brands/Max.png"
                  alt="John Maxwell Certified Coach"
                  className="h-6 sm:h-7 object-contain mix-blend-multiply"
                />
                <span className="text-xs sm:text-sm font-extrabold text-[#1A1F36] uppercase tracking-[0.1em]">
                  John Maxwell Certified Coach
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* State Bank of India */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                <img
                  src="/brands/sbi.png"
                  alt="State Bank of India"
                  className="h-5 sm:h-6 object-contain mix-blend-multiply"
                />
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em] ml-1">
                  State Bank of India
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Line 2: Moving Right (Reverse) */}
      <div className="overflow-hidden w-full">
        <div className="animate-marquee-reverse flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
          {[0, 1].map((loopIdx) => (
            <div key={`l2-${loopIdx}`} className="flex items-center gap-8 sm:gap-12 shrink-0">
              {/* John Maxwell Certified Coach */}
              <div className="flex items-center gap-3 px-6 py-2.5 sm:px-7 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#B8860B]/50 shadow-xs hover:border-[#B8860B] transition-all shrink-0">
                <img
                  src="/brands/Max.png"
                  alt="John Maxwell Certified Coach"
                  className="h-6 sm:h-7 object-contain mix-blend-multiply"
                />
                <span className="text-xs sm:text-sm font-extrabold text-[#1A1F36] uppercase tracking-[0.1em]">
                  John Maxwell Certified Coach
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* Reliance Retail */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-[2px] bg-red-700 text-white font-serif font-bold text-xs flex items-center justify-center shrink-0">
                  R
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em]">
                  Reliance Retail
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* Ministry of Defence */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                {!modError ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                    alt="Ministry of Defence"
                    className="h-6 sm:h-7 object-contain mix-blend-multiply"
                    onError={() => setModError(true)}
                  />
                ) : (
                  <div className="w-6 h-6 rounded-[2px] bg-[#1A1F36]/10 flex items-center justify-center text-[#1A1F36] text-[10px] font-bold">
                    🏛
                  </div>
                )}
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em]">
                  Ministry of Defence
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* State Bank of India */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                <img
                  src="/brands/sbi.png"
                  alt="State Bank of India"
                  className="h-5 sm:h-6 object-contain mix-blend-multiply"
                />
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em] ml-1">
                  State Bank of India
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* L&T */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                <img
                  src="/brands/L&T.png"
                  alt="L&T"
                  className="h-5 sm:h-6 object-contain mix-blend-multiply"
                />
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em] ml-1">
                  L&amp;T
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>

              {/* TCS */}
              <div className="flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#FDFAF5] border border-[#E8DDD0] shadow-2xs hover:border-[#B8860B]/60 transition-all shrink-0">
                {!tcsError ? (
                  <img
                    src="https://i.logos-download.com/113971/29583-9fde4947792aa7b5b379c0b1aee0ead2.png/Tata_Consultancy_Services_Logo_2020.png?dl"
                    alt="TCS"
                    className="h-5 sm:h-6 object-contain mix-blend-multiply"
                    onError={() => setTcsError(true)}
                  />
                ) : (
                  <span className="font-sans font-black text-xs sm:text-sm tracking-tight bg-gradient-to-r from-[#E07A5F] via-[#8B72BE] to-[#5B9E9E] bg-clip-text text-transparent">
                    tcs
                  </span>
                )}
                <span className="text-xs sm:text-sm font-bold text-[#1A1F36] uppercase tracking-[0.1em] ml-1">
                  TCS
                </span>
              </div>

              <span className="text-[#B8860B] text-sm sm:text-base select-none">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
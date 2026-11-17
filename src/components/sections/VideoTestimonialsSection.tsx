'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  badge: string;
  videoUrl: string;
  poster: string;
}

export function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<TestimonialItem | null>(null);

  const testimonials: TestimonialItem[] = [
    {
      id: 'ankoor-gupta',
      name: 'Ankoor Gupta',
      designation: 'Director, Omni Green Solutions Pvt Ltd',
      badge: '₹26 Cr Annual Revenue',
      videoUrl: 'https://res.cloudinary.com/bckdihv8/video/upload/Add_a_heading_1_md3nlz.mp4',
      poster: 'https://res.cloudinary.com/bckdihv8/video/upload/so_1.0/Add_a_heading_1_md3nlz.jpg',
    },
    {
      id: 'shubhadha-bhave',
      name: 'Shubhadha Bhave',
      designation: 'Founder, Kids Intelligence',
      badge: 'Preschool & Franchise Model',
      videoUrl: 'https://res.cloudinary.com/bckdihv8/video/upload/WhatsApp_Video_2026-07-20_at_13.43.57_inonue.mp4',
      poster: 'https://res.cloudinary.com/bckdihv8/video/upload/so_1.0/WhatsApp_Video_2026-07-20_at_13.43.57_inonue.jpg',
    },
    {
      id: 'vanya-surana',
      name: 'Vanya Surana',
      designation: 'Makeup Artist',
      badge: 'Independent Professional',
      videoUrl: 'https://res.cloudinary.com/bckdihv8/video/upload/Vanya_Reel_1_1_f3aomv.mp4',
      poster: 'https://res.cloudinary.com/bckdihv8/video/upload/so_2.0/Vanya_Reel_1_1_f3aomv.jpg',
    },
  ];

  return (
    <section id="video-testimonials" className="py-14 sm:py-16 bg-[#FAF7F2] border-t border-muted-border">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <div className="flex flex-col items-center mb-2">
            <div className="w-8 h-[1.5px] bg-[#E07A5F] mb-2" />
            <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#E07A5F] uppercase">
              CLIENT TESTIMONIAL VIDEOS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-[1.15]">
            Real Leader Transformation Stories
          </h2>
        </div>

        {/* Vertical Video Cards — Single Row (1 Line) Across 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className="relative aspect-[3/4] w-full rounded-2xl border border-[#E8DDD0] shadow-card overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-navy cursor-pointer"
            >
              {/* Real Cloudinary Video with hover preview */}
              <video
                src={`${item.videoUrl}#t=0.5`}
                poster={item.poster}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseOver={(e) => {
                  const v = e.currentTarget as HTMLVideoElement;
                  v.play().catch(() => {});
                }}
                onMouseOut={(e) => {
                  const v = e.currentTarget as HTMLVideoElement;
                  v.pause();
                  v.currentTime = 0;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Rich gradient overlay so white text has maximum clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20 pointer-events-none" />

              {/* Centered Circular Gold Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-13 h-13 rounded-full bg-[#B8860B] group-hover:bg-[#C5A572] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Play className="w-5 h-5 fill-current ml-0.5 text-navy" />
                </div>
              </div>

              {/* Title, Subtitle, and Badge — Pure White & Centered */}
              <div className="absolute bottom-5 left-4 right-4 text-center flex flex-col items-center pointer-events-none z-10">
                <h3 className="!text-white text-white font-serif font-bold text-xl sm:text-2xl leading-tight mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  {item.name}
                </h3>
                <p className="!text-white/95 text-white/95 font-sans text-xs sm:text-sm font-medium leading-snug mb-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                  {item.designation}
                </p>
                <span className="inline-block bg-white/95 text-[#B8860B] text-[10.5px] font-sans font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Reel-Format Vertical Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10 cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative w-full max-w-[420px] h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo.videoUrl}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimation = async () => {
      const gsap = (await import('gsap')).default
      if (!containerRef.current) return
      
      gsap.to('.cta-bg-shape', {
        rotation: 360,
        duration: 100,
        repeat: -1,
        ease: 'linear'
      })
    }
    initAnimation()
  }, [])

  return (
    <section ref={containerRef} className="relative py-20 lg:py-28 bg-navy overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="cta-bg-shape w-[800px] h-[800px] border border-white/20 rounded-full" />
        <div className="cta-bg-shape w-[600px] h-[600px] border border-white/20 rounded-full absolute" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-white leading-tight">
              What could become possible if you{' '}
              <span className="font-serif italic text-gold">changed the way</span>{' '}
              you approached the problem?
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-8 text-left lg:text-right">
            <p className="font-serif italic text-gold text-xl lg:text-2xl">
              Let's explore it together.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-sm hover:bg-cream transition-colors font-medium">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

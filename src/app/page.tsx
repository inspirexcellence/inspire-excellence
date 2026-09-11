import { Metadata } from 'next'
import { Hero } from '@/components/hero/Hero'
import { BeliefSection } from '@/components/sections/BeliefSection'
import { ApproachSection } from '@/components/sections/ApproachSection'
import { TransformationAreas } from '@/components/sections/TransformationAreas'
import { StatsSection } from '@/components/sections/StatsSection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Inspire Excellence — Transformation That Creates Impact',
  description: 'We partner with individuals and organisations to unlock potential, shift perspective and create meaningful, lasting change.'
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <BeliefSection />
      <ApproachSection />
      <TransformationAreas />
      <StatsSection />
      <InsightsSection />
      <CTASection />
    </>
  )
}

import { Metadata } from 'next';
import { Hero } from '@/components/hero/Hero';
import { BeliefSection } from '@/components/sections/BeliefSection';
import { VideoTestimonialsSection } from '@/components/sections/VideoTestimonialsSection';
import { TrustedOrganisationsSection } from '@/components/sections/TrustedOrganisationsSection';
import { TransformationAreas } from '@/components/sections/TransformationAreas';
import { StatsSection } from '@/components/sections/StatsSection';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Inspire Excellence — Transformation That Creates Impact',
  description:
    'We partner with individuals and organisations to unlock potential, shift perspective and create meaningful, lasting change.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Trusted by organisations social proof strip placed directly below Hero */}
      <TrustedOrganisationsSection />
      <BeliefSection />
      {/* Testimonials videos placed below the 3-P circle section */}
      <VideoTestimonialsSection />
      <TransformationAreas />
      <StatsSection />
      <InsightsSection />
      <CTASection />
    </>
  );
}

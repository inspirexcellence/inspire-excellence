import { Metadata } from 'next';
import { Hero } from '@/components/hero/Hero';
import { WelcomeIntroModal } from '@/components/modals/WelcomeIntroModal';
import { BeliefSection } from '@/components/sections/BeliefSection';
import { VideoTestimonialsSection } from '@/components/sections/VideoTestimonialsSection';
import { TrustedOrganisationsSection } from '@/components/sections/TrustedOrganisationsSection';
import { TransformationAreas } from '@/components/sections/TransformationAreas';
import { StatsSection } from '@/components/sections/StatsSection';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { CTASection } from '@/components/sections/CTASection';

import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Inspire Excellence — Transformation That Creates Impact',
  description:
    'We partner with individuals and organisations to unlock potential, shift perspective and create meaningful, lasting change.',
  alternates: {
    canonical: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Welcome Intro Modal — Cancel to reveal website as it was */}
      <WelcomeIntroModal />

      <Hero />
      <BeliefSection />
      {/* Trusted By Leaders strip placed below the 3P section */}
      <TrustedOrganisationsSection />
      {/* Testimonials videos placed below the strip */}
      <VideoTestimonialsSection />
      <TransformationAreas />
      <StatsSection />
      <InsightsSection />
      <CTASection />
    </>
  );
}
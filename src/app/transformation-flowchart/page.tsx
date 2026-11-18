import React from 'react';
import { createMetadata } from '@/lib/metadata';
import { FlowchartTimeline } from '@/components/flowchart/FlowchartTimeline';

export const metadata = createMetadata({
  title: 'Transformation Flowchart | Inspire Excellence',
  description:
    'Our 8-stage clinical roadmap: an interactive journey from outcome clarification to sustained multi-generational scale.',
  path: '/transformation-flowchart',
});

export default function FlowchartPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] pt-28 sm:pt-36 pb-20">
      <FlowchartTimeline />
    </main>
  );
}
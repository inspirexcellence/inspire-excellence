import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({ title: 'Privacy Policy | Inspire Excellence' });

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-ivory py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-navy">
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">Privacy Policy</h1>
        <p className="font-sans text-charcoal">Last updated: August 2026</p>
        <div className="font-sans text-charcoal space-y-6 mt-8">
          <p>Inspire Excellence is committed to protecting your privacy and ensuring your personal data is handled securely and responsibly in compliance with GDPR and Indian Data Protection laws.</p>
          <h2 className="font-serif text-2xl text-navy mt-8">Information We Collect</h2>
          <p>We collect personal information you provide to us directly, such as your name, email, phone number, and organisation details when you book a consultation or use our contact form.</p>
          <h2 className="font-serif text-2xl text-navy mt-8">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at admin@inspirexcellence.org.</p>
        </div>
      </div>
    </main>
  );
}

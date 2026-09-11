import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({ title: 'Terms & Conditions | Inspire Excellence' });

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ivory py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-navy">
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">Terms & Conditions</h1>
        <div className="font-sans text-charcoal space-y-6 mt-8">
          <p>Welcome to Inspire Excellence. By accessing our website and services, you agree to these Terms & Conditions.</p>
          <h2 className="font-serif text-2xl text-navy mt-8">Intellectual Property</h2>
          <p>All methodologies, frameworks, text, graphics, and logos on this site are the property of Inspire Excellence and are protected by applicable intellectual property laws.</p>
        </div>
      </div>
    </main>
  );
}

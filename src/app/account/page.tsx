import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Member Portal | Inspire Excellence',
});

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-cream py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h1 className="font-serif text-4xl text-navy mb-12">Member Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white p-6 border-fine border-muted-border rounded-sm">
              <div className="w-20 h-20 bg-lavender/20 rounded-full mb-4"></div>
              <h3 className="font-serif text-2xl text-navy">Welcome back</h3>
              <p className="font-sans text-sm text-charcoal mt-2">Manage your journey.</p>
            </div>
            <nav className="bg-white p-4 border-fine border-muted-border rounded-sm flex flex-col space-y-2 font-sans text-sm">
              <a href="#" className="p-2 bg-cream text-navy font-semibold rounded-sm">Overview</a>
              <a href="#" className="p-2 text-charcoal hover:bg-cream rounded-sm transition-colors">My Programs</a>
              <a href="#" className="p-2 text-charcoal hover:bg-cream rounded-sm transition-colors">Consultations</a>
              <a href="#" className="p-2 text-charcoal hover:bg-cream rounded-sm transition-colors">Settings</a>
            </nav>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 border-fine border-muted-border rounded-sm">
              <h2 className="font-serif text-2xl text-navy mb-6">Upcoming Consultations</h2>
              <p className="font-sans text-charcoal">No upcoming sessions. <a href="/book-consultation" className="text-lavender underline">Book one now.</a></p>
            </div>
            
            <div className="bg-white p-8 border-fine border-muted-border rounded-sm">
              <h2 className="font-serif text-2xl text-navy mb-6">Saved Resources</h2>
              <div className="p-4 border border-muted-border rounded-sm flex justify-between items-center">
                <span className="font-sans text-navy">Leadership Compass Workbook PDF</span>
                <button className="text-coral text-sm uppercase tracking-widest font-semibold">Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

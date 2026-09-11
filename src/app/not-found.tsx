import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-7xl text-lavender mb-6">404</h1>
        <h2 className="font-serif text-3xl text-navy mb-4">Page not found</h2>
        <p className="text-charcoal mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/"
          className="inline-flex bg-navy text-white px-6 py-3 rounded-sm hover:bg-navy/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

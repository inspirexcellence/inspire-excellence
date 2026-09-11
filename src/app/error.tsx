'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="font-serif text-3xl text-navy mb-4">Something went wrong</h2>
        <p className="text-charcoal mb-8">We're working on it. Please try again.</p>
        <button
          onClick={() => reset()}
          className="bg-navy text-white px-6 py-3 rounded-sm hover:bg-navy/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

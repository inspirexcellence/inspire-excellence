export default function Loading() {
  return (
    <div className="fixed inset-0 bg-ivory z-50 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-navy/20 border-t-navy rounded-full animate-spin" />
        <span className="font-sans text-sm tracking-widest text-navy uppercase">Loading</span>
      </div>
    </div>
  )
}

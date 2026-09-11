import React from 'react'
import { cn } from '@/lib/utils'
import { Users, Eye, Settings } from 'lucide-react'

interface ThreePNodeProps {
  title: string
  type: 'people' | 'perspective' | 'process'
  isActive?: boolean
  className?: string
}

export function ThreePNode({ title, type, isActive, className }: ThreePNodeProps) {
  const getIcon = () => {
    switch (type) {
      case 'people': return <Users className="w-6 h-6" />
      case 'perspective': return <Eye className="w-6 h-6" />
      case 'process': return <Settings className="w-6 h-6" />
    }
  }

  const getColorClass = () => {
    if (!isActive) return 'border-muted-border text-charcoal opacity-60'
    switch (type) {
      case 'people': return 'border-lavender text-lavender scale-110 opacity-100'
      case 'perspective': return 'border-coral text-coral scale-110 opacity-100'
      case 'process': return 'border-teal text-teal scale-110 opacity-100'
    }
  }

  return (
    <div className={cn("flex flex-col items-center gap-3 transition-all duration-500", className)}>
      <div className={cn("w-20 h-20 rounded-full border flex items-center justify-center bg-white shadow-sm transition-all duration-500", getColorClass())}>
        {getIcon()}
      </div>
      <span className="text-xs font-sans uppercase tracking-widest text-navy font-medium">
        {title}
      </span>
    </div>
  )
}

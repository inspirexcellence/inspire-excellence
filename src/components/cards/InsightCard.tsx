'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Post {
  title: string
  slug: string
  category: string
  date: string
  image: string
}

export function InsightCard({ post }: { post: Post }) {
  return (
    <Link href={`/insights/${post.slug}`} className="group flex flex-col rounded-sm overflow-hidden border border-muted-border bg-white hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-coral text-white text-xs font-medium px-2 py-1 rounded-sm uppercase tracking-wide z-10">
          {post.category}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <span className="text-xs text-charcoal/60">{post.date}</span>
        <h3 className="font-serif text-lg text-navy font-medium group-hover:text-lavender transition-colors line-clamp-2">
          {post.title}
        </h3>
      </div>
    </Link>
  )
}

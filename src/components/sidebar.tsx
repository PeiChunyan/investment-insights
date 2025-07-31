'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const categories = [
  { name: 'All', slug: '', count: 1 },
  { name: 'Philosophy', slug: 'philosophy', count: 1 },
  { name: 'Trends', slug: 'trends', count: 0 },
  { name: 'Valuation', slug: 'valuation', count: 0 },
]

export function Sidebar() {
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)
  const [currentCategory, setCurrentCategory] = useState('')

  useEffect(() => {
    setMounted(true)
    setCurrentCategory(searchParams.get('category') || '')
  }, [searchParams])

  if (!mounted) {
    return (
      <aside className="w-48 flex-shrink-0">
        <div className="sticky top-8">
          <nav className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.slug ? `/articles?category=${category.slug}` : '/articles'}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <span className="text-xs text-gray-400">{category.count}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    )
  }

  return (
    <aside className="w-56 flex-shrink-0">
      <div className="sticky top-24">
        <div className="bg-slate-200 p-6 rounded-2xl border border-slate-300">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Categories</h3>
          <nav className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.slug ? `/articles?category=${category.slug}` : '/articles'}
                className={cn(
                  'block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300',
                  currentCategory === category.slug
                    ? 'text-slate-800 bg-white shadow-sm border border-slate-400'
                    : 'text-slate-700 hover:text-slate-800 hover:bg-white/70'
                )}
              >
                <div className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full font-medium",
                    currentCategory === category.slug 
                      ? "bg-slate-300 text-slate-800"
                      : "bg-slate-300 text-slate-700"
                  )}>{category.count}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}
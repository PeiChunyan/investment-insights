'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Articles', href: '/articles' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="border-b border-slate-300 bg-slate-50/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center h-18">
            <Link href="/" className="flex items-center space-x-3 text-xl font-semibold text-slate-800 tracking-tight">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span>Investment Insights</span>
            </Link>
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="border-b border-slate-300 bg-slate-50/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="flex items-center space-x-3 text-xl font-semibold text-slate-800 tracking-tight">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span>Investment Insights</span>
          </Link>
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-all duration-300 py-2',
                  pathname === item.href
                    ? 'text-slate-800 border-b-2 border-slate-700'
                    : 'text-slate-600 hover:text-slate-800'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
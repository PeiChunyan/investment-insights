'use client'

import { Sidebar } from '@/components/sidebar'
import { Search } from '@/components/search'
import Link from 'next/link'

export default function ArticlesPage() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-12 py-16">
          <Sidebar />
          <main className="flex-1">
            <div className="mb-12">
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-4xl font-semibold text-slate-800 tracking-tight">Articles</h1>
                <Link
                  href="/articles/new"
                  className="px-6 py-3 bg-slate-700 text-white font-medium rounded-xl hover:bg-slate-600 transition-all duration-300 shadow-sm"
                >
                  New Article
                </Link>
              </div>
              <p className="text-xl text-slate-700 mb-8">
                Thoughtful investment analysis, market observations, and methodology development.
              </p>
              <div className="max-w-md">
                <Search />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-200 border border-slate-300 p-8 rounded-2xl hover:bg-slate-300 transition-all duration-300">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">
                  Getting Started with Investment Analysis
                </h2>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  A systematic approach to building investment analysis skills and methodology.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-slate-400 text-slate-800 text-sm font-medium rounded-full">Philosophy</span>
                  <span className="text-sm text-slate-600">Jan 15, 2024</span>
                </div>
              </div>
              
              <div className="text-center py-20 bg-slate-200 rounded-2xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-300">
                  <div className="text-2xl">✍️</div>
                </div>
                <p className="text-xl font-semibold text-slate-800 mb-2">More articles coming soon</p>
                <p className="text-slate-700">Begin documenting your investment analysis journey</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
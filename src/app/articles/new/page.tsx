'use client'

import { useState } from 'react'
import { MarkdownEditor } from '@/components/markdown-editor'
import { Category } from '@/types'

export default function NewArticle() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState<Category>('PHILOSOPHY')
  const [excerpt, setExcerpt] = useState('')

  const handleSave = async () => {
    console.log('Saving article:', { title, content, category, excerpt })
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-light text-gray-900 mb-4">New Article</h1>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-900 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
            placeholder="Article title"
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-900 mb-2">
            Excerpt
          </label>
          <input
            type="text"
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
            placeholder="Brief description"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="px-3 py-2 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
          >
            <option value="PHILOSOPHY">Philosophy</option>
            <option value="TRENDS">Trends</option>
            <option value="VALUATION">Valuation</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Content
          </label>
          <MarkdownEditor
            value={content}
            onChange={setContent}
            placeholder="Write your article content in Markdown..."
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gray-900 text-white text-sm hover:bg-gray-700 transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 border border-gray-200 text-gray-900 text-sm hover:bg-gray-50 transition-colors"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}
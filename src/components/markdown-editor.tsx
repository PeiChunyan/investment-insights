'use client'

import { useState } from 'react'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function MarkdownEditor({ value, onChange, placeholder }: MarkdownEditorProps) {
  const [isPreview, setIsPreview] = useState(false)

  return (
    <div className="border border-gray-200">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setIsPreview(false)}
          className={`px-4 py-2 text-sm ${
            !isPreview ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600'
          }`}
        >
          Write
        </button>
        <button
          onClick={() => setIsPreview(true)}
          className={`px-4 py-2 text-sm ${
            isPreview ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600'
          }`}
        >
          Preview
        </button>
      </div>
      
      <div className="min-h-96">
        {isPreview ? (
          <div className="p-4 prose prose-sm max-w-none">
            {value ? (
              <div dangerouslySetInnerHTML={{ __html: value.replace(/\n/g, '<br>') }} />
            ) : (
              <p className="text-gray-400">Nothing to preview</p>
            )}
          </div>
        ) : (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-96 p-4 resize-none focus:outline-none text-sm font-mono"
          />
        )}
      </div>
    </div>
  )
}
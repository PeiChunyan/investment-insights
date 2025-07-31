'use client'

import { useState } from 'react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Subscribing email:', email)
    setIsSubscribed(true)
    setIsSubmitting(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <div className="text-center py-8">
        <p className="text-sm text-green-600">Thank you for subscribing!</p>
      </div>
    )
  }

  return (
    <div className="bg-slate-300 py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4">Stay Updated</h3>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
          Receive thoughtful investment analyses and insights directly in your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 border border-slate-400 rounded-xl text-sm focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-all bg-white"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting || !email.trim()}
            className="px-6 py-3 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        <p className="text-xs text-slate-600 mt-4">
          Thoughtful content, no spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}
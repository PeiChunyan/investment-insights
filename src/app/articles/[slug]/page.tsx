import { getArticleBySlug, getAllArticles } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          href="/articles"
          className="text-slate-600 hover:text-slate-800 text-sm mb-8 inline-block transition-colors"
        >
          ← Back to Articles
        </Link>
        
        <article className="bg-white p-12 rounded-2xl shadow-sm">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-slate-600">
              <span className="px-3 py-1 bg-slate-100 text-slate-800 font-medium rounded-full">
                {article.category}
              </span>
              <span>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              {article.predictions && article.predictions.length > 0 && (
                <span>📊 {article.predictions.length} predictions</span>
              )}
            </div>
          </header>

          <div 
            className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {article.predictions && article.predictions.length > 0 && (
            <div className="mt-12 p-8 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Performance Tracking</h3>
              <div className="space-y-4">
                {article.predictions.map((prediction, index) => {
                  const getStatusColor = (status: string) => {
                    switch (status) {
                      case 'correct': return 'text-green-700 bg-green-100'
                      case 'incorrect': return 'text-red-700 bg-red-100'  
                      case 'partial': return 'text-yellow-700 bg-yellow-100'
                      default: return 'text-slate-700 bg-slate-200'
                    }
                  }

                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg">
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(prediction.status)}`}>
                        {prediction.status.charAt(0).toUpperCase() + prediction.status.slice(1)}
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800">{prediction.content}</p>
                        {prediction.target_date && (
                          <p className="text-sm text-slate-500 mt-1">
                            Target: {new Date(prediction.target_date).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
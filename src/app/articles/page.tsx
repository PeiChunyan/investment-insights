import { Sidebar } from '@/components/sidebar'
import { Search } from '@/components/search'
import { getAllArticles, getArticlesByCategory } from '@/lib/articles'
import Link from 'next/link'

export default async function ArticlesPage() {
  const articles = getAllArticles()
  
  const categoryCounts = [
    { name: 'All', slug: '', count: articles.length },
    { name: 'Philosophy', slug: 'philosophy', count: getArticlesByCategory('philosophy').length },
    { name: 'Trends', slug: 'trends', count: getArticlesByCategory('trends').length },
    { name: 'Valuation', slug: 'valuation', count: getArticlesByCategory('valuation').length },
  ]

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-12 py-16">
          <Sidebar categoryCounts={categoryCounts} />
          <main className="flex-1">
            <div className="mb-12">
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-4xl font-semibold text-slate-800 tracking-tight">Articles</h1>
              </div>
              <p className="text-xl text-slate-700 mb-8">
                Thoughtful investment analysis, market observations, and methodology development.
              </p>
              <div className="max-w-md">
                <Search />
              </div>
            </div>
            
            <div className="space-y-6">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <Link 
                    key={article.slug} 
                    href={`/articles/${article.slug}`}
                    className="block"
                  >
                    <div className="bg-slate-200 border border-slate-300 p-8 rounded-2xl hover:bg-slate-300 transition-all duration-300">
                      <h2 className="text-xl font-semibold text-slate-800 mb-3">
                        {article.title}
                      </h2>
                      <p className="text-slate-700 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-slate-400 text-slate-800 text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-slate-600">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        {article.predictions && article.predictions.length > 0 && (
                          <span className="text-sm text-slate-600">
                            📊 {article.predictions.length} predictions
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center py-20 bg-slate-200 rounded-2xl">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-300">
                    <div className="text-2xl">✍️</div>
                  </div>
                  <p className="text-xl font-semibold text-slate-800 mb-2">No articles yet</p>
                  <p className="text-slate-700">Create your first article by adding a markdown file to src/content/articles/</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
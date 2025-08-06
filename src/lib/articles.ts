import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'src/content/articles')

export interface ArticleData {
  slug: string
  title: string
  date: string
  category: 'Philosophy' | 'Trends' | 'Valuation'
  excerpt: string
  content: string
  predictions?: Array<{
    content: string
    target_date: string
    status: 'pending' | 'correct' | 'incorrect' | 'partial'
  }>
}

export function getAllArticles(): ArticleData[] {
  // Check if directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '2024-01-01',
        category: data.category || 'Philosophy',
        excerpt: data.excerpt || '',
        content,
        predictions: data.predictions || []
      }
    })

  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getArticleBySlug(slug: string): Promise<ArticleData | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Process markdown to HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '2024-01-01', 
      category: data.category || 'Philosophy',
      excerpt: data.excerpt || '',
      content: contentHtml,
      predictions: data.predictions || []
    }
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

export function getArticlesByCategory(category: string): ArticleData[] {
  const allArticles = getAllArticles()
  if (!category || category === '') {
    return allArticles
  }
  return allArticles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  )
}
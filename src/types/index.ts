import { Article, Prediction, Category, PredictionStatus } from '@prisma/client'

export type ArticleWithPredictions = Article & {
  predictions: Prediction[]
}

export type PredictionWithArticle = Prediction & {
  article: Article
}

export { Category, PredictionStatus }
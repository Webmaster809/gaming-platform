import type { MetadataRoute } from 'next'
import { games } from '@/data/games'
import { categories } from '@/data/categories'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://playhub.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const gameUrls = games.map((game) => ({
    url: `${SITE_URL}/juegos/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const categoryUrls = categories.map((cat) => ({
    url: `${SITE_URL}/categorias/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/juegos`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    ...gameUrls,
    ...categoryUrls,
  ]
}

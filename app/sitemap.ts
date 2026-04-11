import type { MetadataRoute } from 'next'
import { games } from '@/data/games'
import { categories } from '@/data/categories'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://playhub.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const gameUrls = games.map((game) => ({
    url: `${SITE_URL}/juegos/${game.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const categoryUrls = categories.map((cat) => ({
    url: `${SITE_URL}/categorias/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${SITE_URL}/juegos`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.9 },
    {
      url: `${SITE_URL}/categorias`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    { url: `${SITE_URL}/privacidad`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/terminos`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/contacto`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.4 },
    ...gameUrls,
    ...categoryUrls,
  ]
}

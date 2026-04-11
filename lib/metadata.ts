import type { Metadata } from 'next'
import type { Game, Category } from '@/types/game'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://playhub.com'

export function generateGameMetadata(game: Game): Metadata {
  const title = `${game.title} Online - Free Multiplayer | ${SITE_NAME}`
  const description = game.seoDescription

  return {
    title,
    description,
    keywords: [...game.tags, 'free online game', 'browser game', 'no download', 'multiplayer'].join(', '),
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/juegos/${game.slug}`,
      siteName: SITE_NAME,
      images: [{ url: game.thumbnailUrl, width: 1200, height: 630, alt: game.title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [game.thumbnailUrl],
    },
    alternates: {
      canonical: `${SITE_URL}/juegos/${game.slug}`,
    },
  }
}

export function generateCategoryMetadata(category: Category): Metadata {
  const title = `Mejores juegos de ${category.name} gratis online | ${SITE_NAME}`
  const description = `Juega los mejores juegos de ${category.name} gratis online. Sin descargas, sin registro. ${category.description}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/categoria/${category.slug}`,
      siteName: SITE_NAME,
      type: 'website',
    },
  }
}

export function generateGameJsonLd(game: Game) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    url: `${SITE_URL}/juegos/${game.slug}`,
    description: game.seoDescription,
    image: game.thumbnailUrl,
    genre: game.category,
    numberOfPlayers: {
      '@type': 'QuantitativeValue',
      description: `${game.players} players`,
    },
    playMode: 'MultiPlayer',
    applicationCategory: 'Game',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

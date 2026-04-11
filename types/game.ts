export interface Game {
  slug: string
  title: string
  description: string
  category: CategorySlug
  embedUrl: string
  thumbnailUrl: string
  players: '1' | '1-2' | '1-4' | '2-16'
  tags: string[]
  featured: boolean
  trending: boolean
  seoDescription: string
}

export type CategorySlug = 'fps' | 'battle-royale' | 'puzzle' | 'social' | 'sports' | 'classic'

export interface Category {
  slug: CategorySlug
  name: string
  description: string
  icon: string
  color: string
}

export interface AdSlot {
  id: string
  format: 'banner' | 'sidebar' | 'inline' | 'interstitial'
}

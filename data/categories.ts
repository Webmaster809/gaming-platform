import type { Category } from '@/types/game'

export const categories: Category[] = [
  {
    slug: 'fps',
    name: 'FPS & Shooter',
    description: 'First-person shooter games',
    icon: '🎯',
    color: '#FF006E',
  },
  {
    slug: 'battle-royale',
    name: 'Battle Royale',
    description: 'Survive and dominate',
    icon: '⚔️',
    color: '#00D9FF',
  },
  {
    slug: 'puzzle',
    name: 'Puzzle & Brain',
    description: 'Challenge your mind',
    icon: '🧩',
    color: '#7C00FF',
  },
  {
    slug: 'social',
    name: 'Social & Party',
    description: 'Play with friends',
    icon: '🎉',
    color: '#FF00FF',
  },
  {
    slug: 'sports',
    name: 'Sports & Racing',
    description: 'Competition and speed',
    icon: '🏆',
    color: '#00FF41',
  },
  {
    slug: 'classic',
    name: 'Classics',
    description: 'Timeless games',
    icon: '🕹️',
    color: '#FF9500',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

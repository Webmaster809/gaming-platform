import type { Category } from '@/types/game'

export const categories: Category[] = [
  {
    slug: 'fps',
    name: 'FPS & Shooter',
    description: 'Juegos de disparos en primera persona',
    icon: '🎯',
    color: '#FF006E',
  },
  {
    slug: 'battle-royale',
    name: 'Battle Royale',
    description: 'Sobrevive y domina',
    icon: '⚔️',
    color: '#00D9FF',
  },
  {
    slug: 'puzzle',
    name: 'Puzzle & Brain',
    description: 'Desafía tu mente',
    icon: '🧩',
    color: '#7C00FF',
  },
  {
    slug: 'social',
    name: 'Social & Party',
    description: 'Juega con amigos',
    icon: '🎉',
    color: '#FF00FF',
  },
  {
    slug: 'sports',
    name: 'Sports & Racing',
    description: 'Competencia y velocidad',
    icon: '🏆',
    color: '#00FF41',
  },
  {
    slug: 'classic',
    name: 'Clásicos',
    description: 'Juegos eternos',
    icon: '🕹️',
    color: '#00D9FF',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

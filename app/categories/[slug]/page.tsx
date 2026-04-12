import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { categories, getCategoryBySlug } from '@/data/categories'
import { getGamesByCategory } from '@/data/games'
import { generateCategoryMetadata } from '@/lib/metadata'
import GameCard from '@/components/game/GameCard'
import AdBanner from '@/components/layout/AdBanner'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}
  return generateCategoryMetadata(category)
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return notFound()

  const games = getGamesByCategory(slug)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="font-orbitron text-3xl font-black text-white">
            {category.name}
          </h1>
        </div>
        <p className="text-gray-400">{category.description} — {games.length} {games.length === 1 ? 'game' : 'games'}</p>
      </div>

      <AdBanner slotId="1357924680" format="banner" className="h-20 mb-6 w-full" />

      {games.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((game, i) => (
            <GameCard key={game.slug} game={game} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No games in this category yet.</p>
          <p className="text-sm mt-2">Check back soon — we update every week.</p>
        </div>
      )}
    </div>
  )
}

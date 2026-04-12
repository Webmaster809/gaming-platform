import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/data/categories'
import { getGamesByCategory } from '@/data/games'

export const metadata: Metadata = {
  title: 'Free Online Game Categories',
  description: 'Explore all game categories: FPS, Battle Royale, Puzzle, Social, Sports and Classics. Play free in your browser.',
}

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="font-orbitron text-3xl font-black text-[#00D9FF] mb-2">
        Categories
      </h1>
      <p className="text-gray-400 mb-8">{categories.length} categories available</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const gameCount = getGamesByCategory(cat.slug).length
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group block bg-[#1F2937] rounded-xl p-6 border border-transparent hover:border-[#00D9FF]/40 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.1)]"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h2
                className="font-orbitron text-lg font-bold text-white mb-1 group-hover:text-[#00D9FF] transition-colors"
              >
                {cat.name}
              </h2>
              <p className="text-gray-400 text-sm mb-3">{cat.description}</p>
              <span className="text-xs text-[#00D9FF] bg-[#00D9FF]/10 px-2 py-1 rounded-full">
                {gameCount} {gameCount === 1 ? 'game' : 'games'}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

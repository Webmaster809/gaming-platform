import type { Metadata } from 'next'
import { games } from '@/data/games'
import GameCard from '@/components/game/GameCard'
import AdBanner from '@/components/layout/AdBanner'

export const metadata: Metadata = {
  title: 'All Free Online Games',
  description: 'Explore 15+ free online games. No downloads, no registration. FPS, Battle Royale, Puzzle, and more.',
}

const SLOT_LEADERBOARD = process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? ''

export default function GamesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="font-orbitron text-3xl font-black text-white mb-2">
        All <span className="text-[#00D9FF]">Games</span>
      </h1>
      <p className="text-gray-400 mb-6">{games.length} games available — updated every week</p>

      {SLOT_LEADERBOARD && (
        <div className="mb-6">
          <AdBanner slotId={SLOT_LEADERBOARD} format="banner" className="w-full" />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, i) => (
          <GameCard key={game.slug} game={game} index={i} />
        ))}
      </div>
    </div>
  )
}

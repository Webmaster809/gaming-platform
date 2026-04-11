import type { Metadata } from 'next'
import { games } from '@/data/games'
import GameCard from '@/components/game/GameCard'
import AdBanner from '@/components/layout/AdBanner'

export const metadata: Metadata = {
  title: 'Todos los Juegos Online Gratis',
  description: 'Explora más de 15 juegos online gratis. Sin descargas, sin registro. FPS, Battle Royale, Puzzle, y más.',
}

export default function GamesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="font-orbitron text-3xl font-black text-white mb-2">
        Todos los <span className="text-[#00D9FF]">Juegos</span>
      </h1>
      <p className="text-gray-400 mb-6">{games.length} juegos disponibles — actualizamos cada semana</p>

      <AdBanner slotId="5566778899" format="banner" className="h-20 mb-6 w-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, i) => (
          <GameCard key={game.slug} game={game} index={i} />
        ))}
      </div>
    </div>
  )
}

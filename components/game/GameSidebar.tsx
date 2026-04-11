import type { Game } from '@/types/game'
import AdBanner from '@/components/layout/AdBanner'
import GameCard from '@/components/game/GameCard'
import { getGamesByCategory } from '@/data/games'

export default function GameSidebar({ game }: { game: Game }) {
  const related = getGamesByCategory(game.category)
    .filter((g) => g.slug !== game.slug)
    .slice(0, 4)

  return (
    <aside className="flex flex-col gap-6">
      <AdBanner slotId="9876543210" format="rectangle" className="w-full" />

      <div className="bg-[#1F2937] rounded-xl p-4 border border-[#00D9FF]/10">
        <h2 className="font-orbitron text-sm font-bold text-[#00D9FF] mb-2">Sobre el juego</h2>
        <p className="text-gray-400 text-sm">{game.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs bg-[#00D9FF]/10 text-[#00D9FF] px-2 py-1 rounded-full">
            👥 {game.players} jugadores
          </span>
          {game.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div>
          <h3 className="font-orbitron text-sm font-bold text-white mb-3">Juegos similares</h3>
          <div className="flex flex-col gap-3">
            {related.map((g, i) => (
              <GameCard key={g.slug} game={g} index={i} />
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}

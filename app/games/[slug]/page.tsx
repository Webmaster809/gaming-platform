import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { games, getGameBySlug } from '@/data/games'
import { generateGameMetadata, generateGameJsonLd } from '@/lib/metadata'
import GameFrame from '@/components/game/GameFrame'
import GameSidebar from '@/components/game/GameSidebar'
import AdBanner from '@/components/layout/AdBanner'

interface Props {
  params: Promise<{ slug: string }>
}

const SLOT_LEADERBOARD = process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? ''
const SLOT_RECTANGLE   = process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE   ?? ''

export async function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const game = getGameBySlug(slug)
  if (!game) return {}
  return generateGameMetadata(game)
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params
  const game = getGameBySlug(slug)
  if (!game) return notFound()

  const jsonLd = generateGameJsonLd(game)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="font-orbitron text-2xl font-black text-white mb-4">
          {game.title} <span className="text-[#00D9FF]">Online</span>
        </h1>

        {/* Leaderboard above the game */}
        {SLOT_LEADERBOARD && (
          <div className="mb-4">
            <AdBanner slotId={SLOT_LEADERBOARD} format="banner" className="w-full" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          <GameFrame game={game} />
          <div className="flex flex-col gap-6">
            {/* Rectangle ad at top of sidebar */}
            {SLOT_RECTANGLE && (
              <AdBanner slotId={SLOT_RECTANGLE} format="rectangle" className="w-[300px] h-[250px]" />
            )}
            <GameSidebar game={game} />
          </div>
        </div>

        <section className="mt-10">
          <h2 className="font-orbitron text-xl font-bold text-white mb-3">
            How to play {game.title}
          </h2>
          <p className="text-gray-400 leading-relaxed">{game.description}</p>
        </section>
      </div>
    </>
  )
}

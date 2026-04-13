'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Game } from '@/types/game'

interface GameCardProps {
  game: Game
  index?: number
}

// Neon color per category, matching the card style reference
const categoryColors: Record<string, string> = {
  fps:           '#00D9FF',
  'battle-royale': '#FF006E',
  puzzle:        '#7C00FF',
  social:        '#FF00FF',
  sports:        '#00FF41',
  classic:       '#FF9500',
}

export default function GameCard({ game, index = 0 }: GameCardProps) {
  const neon = categoryColors[game.category] ?? '#00D9FF'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.04, y: -4 }}
    >
      <Link href={`/games/${game.slug}`} className="block group">
        <div
          className="relative rounded-xl overflow-hidden bg-[#0A0E27] transition-all duration-200"
          style={{
            border: `1px solid ${neon}40`,
            boxShadow: `0 0 0 0 ${neon}00`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 24px ${neon}50, 0 0 6px ${neon}30`
            ;(e.currentTarget as HTMLDivElement).style.borderColor = `${neon}99`
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${neon}00`
            ;(e.currentTarget as HTMLDivElement).style.borderColor = `${neon}40`
          }}
        >
          {/* Thumbnail */}
          <div className="relative aspect-video bg-[#0A0E27] overflow-hidden">
            <Image
              src={game.thumbnailUrl}
              alt={game.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/placeholder-game.svg'
              }}
            />

            {/* Top-right ribbon for trending */}
            {game.trending && (
              <div
                className="absolute top-0 right-0 font-orbitron text-[9px] font-black text-white px-3 py-1 uppercase tracking-wider"
                style={{ background: neon, clipPath: 'polygon(12px 0%, 100% 0%, 100% 100%, 0% 100%)' }}
              >
                Trending
              </div>
            )}

            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
              style={{ background: `linear-gradient(to top, ${neon}50, transparent)` }}
            >
              <span
                className="font-orbitron text-xs font-black text-black px-5 py-1.5 rounded-full"
                style={{ background: neon }}
              >
                ▶ PLAY
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-3">
            {/* Category bar accent */}
            <div className="h-0.5 w-8 rounded-full mb-2" style={{ background: neon }} />
            <h3
              className="font-orbitron font-bold text-white text-sm truncate transition-colors duration-200"
              style={{ '--neon': neon } as React.CSSProperties}
            >
              <span className="group-hover:text-[var(--neon)] transition-colors">
                {game.title}
              </span>
            </h3>
            <p className="text-gray-400 text-xs mt-1 line-clamp-2">{game.description}</p>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{ color: neon, background: `${neon}18` }}
              >
                👥 {game.players}
              </span>
              {game.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[10px] text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

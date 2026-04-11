'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Game } from '@/types/game'

interface GameCardProps {
  game: Game
  index?: number
}

export default function GameCard({ game, index = 0 }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.06 }}
    >
      <Link href={`/juegos/${game.slug}`} className="block group">
        <div className="relative rounded-xl overflow-hidden bg-[#1F2937] border border-[#00D9FF]/10 transition-all duration-200 group-hover:border-[#00D9FF]/60 group-hover:shadow-[0_0_30px_rgba(0,217,255,0.25)]">
          {/* Thumbnail */}
          <div className="relative aspect-video bg-[#0A0E27]">
            <Image
              src={game.thumbnailUrl}
              alt={game.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/placeholder-game.jpg'
              }}
            />
            {game.trending && (
              <span className="absolute top-2 left-2 bg-[#FF00FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Trending
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="bg-[#00FF41] text-black text-xs font-bold px-4 py-1 rounded-full">
                ▶ JUGAR
              </span>
            </div>
          </div>
          {/* Info */}
          <div className="p-3">
            <h3 className="font-orbitron font-bold text-white text-sm truncate group-hover:text-[#00D9FF] transition-colors">
              {game.title}
            </h3>
            <p className="text-gray-400 text-xs mt-1 line-clamp-2">{game.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] text-[#00D9FF] bg-[#00D9FF]/10 px-2 py-0.5 rounded-full">
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

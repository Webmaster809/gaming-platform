'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import GameCard from '@/components/game/GameCard'
import { getFeaturedGames } from '@/data/games'

export default function FeaturedGames() {
  const featured = getFeaturedGames()

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-2xl font-bold text-white"
        >
          🔥 Juegos Destacados
        </motion.h2>
        <Link href="/juegos" className="text-[#00D9FF] text-sm hover:text-white transition-colors">
          Ver todos →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featured.map((game, i) => (
          <GameCard key={game.slug} game={game} index={i} />
        ))}
      </div>
    </section>
  )
}

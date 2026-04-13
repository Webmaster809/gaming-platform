'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { categories } from '@/data/categories'

// The category illustration is a 3-column × 2-row sprite sheet.
// backgroundPosition picks the right panel for each category.
const categoryImageMap: Record<string, { col: number; row: number }> = {
  fps:           { col: 0, row: 0 },
  'battle-royale': { col: 1, row: 0 },
  puzzle:        { col: 2, row: 0 },
  social:        { col: 0, row: 1 },
  sports:        { col: 1, row: 1 },
  classic:       { col: 2, row: 1 },
}

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-orbitron text-2xl font-bold text-white mb-6"
      >
        Categories
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => {
          const pos = categoryImageMap[cat.slug] ?? { col: 0, row: 0 }
          const bgX = (pos.col / 2) * 100
          const bgY = (pos.row / 1) * 100

          return (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={`/categories/${cat.slug}`}
                className="block rounded-xl overflow-hidden border border-transparent hover:border-[#00D9FF]/60 transition-all group shadow-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
              >
                {/* Illustration panel */}
                <div
                  className="w-full aspect-square"
                  style={{
                    backgroundImage: 'url(/category-illustration.png)',
                    backgroundSize: '300% 200%',
                    backgroundPosition: `${bgX}% ${bgY}%`,
                  }}
                />
                {/* Label */}
                <div className="bg-[#1F2937] px-2 py-2 text-center group-hover:bg-[#00D9FF]/10 transition-colors">
                  <span className="font-orbitron text-[10px] font-bold text-white group-hover:text-[#00D9FF] transition-colors leading-tight block">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

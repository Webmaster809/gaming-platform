'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { categories } from '@/data/categories'

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
        {categories.map((cat, i) => (
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
              className="block p-4 rounded-xl bg-[#1F2937] border border-transparent hover:border-[#00D9FF]/40 transition-all text-center group"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="font-orbitron text-xs font-bold text-white group-hover:text-[#00D9FF] transition-colors">
                {cat.name}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

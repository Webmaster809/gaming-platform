'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C00FF]/10 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="font-orbitron text-4xl md:text-6xl font-black text-white mb-4"
        >
          JUEGOS{' '}
          <span className="text-[#00D9FF]" style={{ textShadow: '0 0 20px #00D9FF' }}>ONLINE</span>
          <br />
          GRATIS
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          15+ juegos sin descargas, sin registro. FPS, Battle Royale, Puzzle y más.
          Juega ahora mismo en tu navegador.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/juegos"
            className="bg-[#00D9FF] text-black font-bold px-8 py-3 rounded-full hover:bg-[#00FF41] transition-colors duration-200 font-orbitron uppercase tracking-wider"
          >
            ▶ Jugar Ahora
          </Link>
          <Link
            href="/categorias"
            className="border border-[#00D9FF] text-[#00D9FF] font-bold px-8 py-3 rounded-full hover:bg-[#00D9FF]/10 transition-colors duration-200 font-orbitron uppercase tracking-wider"
          >
            Ver Categorías
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex justify-center gap-8 mt-12 text-center"
        >
          {[
            { value: '15+', label: 'Juegos' },
            { value: '100%', label: 'Gratis' },
            { value: '0', label: 'Descargas' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-orbitron text-2xl font-black text-[#00D9FF]">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

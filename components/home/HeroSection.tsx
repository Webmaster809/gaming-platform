'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 text-center min-h-[560px] flex items-center">
      {/* Banner background */}
      <div className="absolute inset-0">
        <Image
          src="/banner.png"
          alt="PlayHub Gaming"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#0A0E27]/70" />
        {/* Bottom fade into site background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="font-orbitron text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg"
          >
            FREE{' '}
            <span className="text-[#00D9FF]" style={{ textShadow: '0 0 20px #00D9FF' }}>
              ONLINE
            </span>
            <br />
            GAMES
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl"
          >
            15+ games with no downloads, no registration. FPS, Battle Royale,
            Puzzle and more. Play right now in your browser.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/games"
              className="bg-[#00D9FF] text-black font-bold px-8 py-3 rounded-full hover:bg-[#00FF41] transition-colors duration-200 font-orbitron uppercase tracking-wider"
            >
              ▶ Play Now
            </Link>
            <Link
              href="/categories"
              className="border border-[#00D9FF] text-[#00D9FF] font-bold px-8 py-3 rounded-full hover:bg-[#00D9FF]/10 transition-colors duration-200 font-orbitron uppercase tracking-wider backdrop-blur-sm"
            >
              Browse Categories
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex justify-center lg:justify-start gap-8 mt-10"
          >
            {[
              { value: '15+', label: 'Games' },
              { value: '100%', label: 'Free' },
              { value: '0', label: 'Downloads' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-orbitron text-2xl font-black text-[#00D9FF]" style={{ textShadow: '0 0 10px #00D9FF' }}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          className="hidden lg:flex shrink-0 items-center justify-center w-80 h-80"
        >
          {/* Radial glow behind mascot so it reads against any background */}
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(0,217,255,0.18) 30%, transparent 70%)',
              }}
            />
            <Image
              src="/mascot.png"
              alt="PlayHub mascot"
              fill
              priority
              style={{
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 24px rgba(0,217,255,0.6))',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

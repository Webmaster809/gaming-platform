'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { trackGameStart } from '@/lib/analytics'
import type { Game } from '@/types/game'

export default function GameFrame({ game }: { game: Game }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    trackGameStart(game.slug, game.title)
  }, [game.slug, game.title])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative w-full"
    >
      <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#00D9FF]/20 shadow-[0_0_40px_rgba(0,217,255,0.1)]">
        <iframe
          ref={iframeRef}
          src={game.embedUrl}
          title={game.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="mt-2 flex justify-end">
        <button
          onClick={() => iframeRef.current?.requestFullscreen()}
          className="text-xs text-gray-500 hover:text-[#00D9FF] transition-colors"
        >
          ⛶ Pantalla completa
        </button>
      </div>
    </motion.div>
  )
}

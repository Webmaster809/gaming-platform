'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { trackGameStart } from '@/lib/analytics'
import type { Game } from '@/types/game'

export default function GameFrame({ game }: { game: Game }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    trackGameStart(game.slug, game.title)
    setFailed(false)
    setLoaded(false)

    // Detect X-Frame-Options / CSP blocks — browsers don't fire onerror for these,
    // but the iframe stays blank. We check after a timeout.
    const timer = setTimeout(() => {
      if (!loaded) setFailed(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [game.slug, game.title, loaded])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative w-full"
    >
      <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#00D9FF]/20 shadow-[0_0_40px_rgba(0,217,255,0.1)]">
        {failed ? (
          /* Blocked iframe fallback */
          <div className="w-full h-full bg-[#0A0E27] flex flex-col items-center justify-center gap-4 text-center px-8">
            <div className="text-4xl">🚫</div>
            <p className="font-orbitron text-[#00D9FF] font-bold text-lg">
              Can&apos;t load in browser
            </p>
            <p className="text-gray-400 text-sm max-w-sm">
              This game blocks external embedding. Play it directly on its official site.
            </p>
            <a
              href={game.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[#00D9FF] text-black font-bold px-6 py-2 rounded-full hover:bg-[#00FF41] transition-colors font-orbitron text-sm uppercase tracking-wider"
            >
              Play on official site ↗
            </a>
          </div>
        ) : (
          <iframe
            ref={iframeRef}
            src={game.embedUrl}
            title={game.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>

      {!failed && (
        <div className="mt-2 flex justify-end">
          <button
            onClick={() => iframeRef.current?.requestFullscreen()}
            className="text-xs text-gray-500 hover:text-[#00D9FF] transition-colors"
          >
            ⛶ Fullscreen
          </button>
        </div>
      )}
    </motion.div>
  )
}

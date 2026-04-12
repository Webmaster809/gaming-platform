'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1
        className="font-orbitron text-6xl font-black text-[#FF006E] mb-4"
        style={{ textShadow: '0 0 30px #FF006E' }}
      >
        500
      </h1>
      <p className="text-white text-xl font-bold mb-2">Something went wrong</p>
      <p className="text-gray-400 mb-8">An unexpected error occurred. Please try again.</p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-[#00D9FF] text-black font-bold px-6 py-2 rounded-full hover:bg-[#00FF41] transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border border-[#00D9FF] text-[#00D9FF] font-bold px-6 py-2 rounded-full hover:bg-[#00D9FF]/10 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

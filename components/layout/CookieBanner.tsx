'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0E27]/95 backdrop-blur-md border-t border-[#00D9FF]/20 px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          We use cookies for analytics (Google Analytics) and advertising (Google AdSense) to improve
          your experience. By clicking{' '}
          <span className="text-white font-medium">Accept</span>, you consent to our use of cookies.{' '}
          <a href="/privacy" className="text-[#00D9FF] hover:underline">
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm font-medium text-gray-400 border border-gray-700 rounded-full hover:border-gray-500 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-bold text-black bg-[#00D9FF] rounded-full hover:bg-[#00FF41] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

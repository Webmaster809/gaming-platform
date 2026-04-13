'use client'

import { useEffect, useRef } from 'react'

interface AdBannerProps {
  slotId: string
  format?: 'banner' | 'rectangle'
  className?: string
}

const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID

export default function AdBanner({ slotId, format = 'banner', className }: AdBannerProps) {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      const w = window as Window & { adsbygoogle?: unknown[] }
      w.adsbygoogle = w.adsbygoogle ?? []
      w.adsbygoogle.push({})
    } catch {
      // Script not ready yet — AdSense loads it async
    }
  }, [])

  // Don't render if publisher not configured
  if (!PUBLISHER_ID || PUBLISHER_ID === 'ca-pub-XXXXXXXXXX') return null

  const isRectangle = format === 'rectangle'

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slotId}
        data-ad-format={isRectangle ? 'rectangle' : 'auto'}
        data-full-width-responsive={isRectangle ? 'false' : 'true'}
      />
    </div>
  )
}

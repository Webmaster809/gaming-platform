'use client'

import { useEffect } from 'react'

interface AdBannerProps {
  slotId: string
  format: 'banner' | 'sidebar' | 'rectangle'
  className?: string
}

const formatStyles: Record<AdBannerProps['format'], React.CSSProperties> = {
  banner: { display: 'block' },
  sidebar: { display: 'inline-block', width: '300px', height: '600px' },
  rectangle: { display: 'inline-block', width: '300px', height: '250px' },
}

const formatConfig: Record<AdBannerProps['format'], { adFormat?: string; fullWidthResponsive?: boolean }> = {
  banner: { adFormat: 'auto', fullWidthResponsive: true },
  sidebar: {},
  rectangle: {},
}

export default function AdBanner({ slotId, format, className }: AdBannerProps) {
  const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID

  useEffect(() => {
    try {
      const w = window as Window & { adsbygoogle?: unknown[] }
      if (w.adsbygoogle) {
        w.adsbygoogle.push({})
      }
    } catch (_) {}
  }, [])

  const isPlaceholder = !PUBLISHER_ID || PUBLISHER_ID === 'ca-pub-XXXXXXXXXX'

  if (isPlaceholder) {
    return (
      <div
        className={`bg-[#1F2937]/50 border border-dashed border-gray-700 flex items-center justify-center text-gray-600 text-xs rounded ${className ?? ''}`}
      >
        [Ad — {format}]
      </div>
    )
  }

  const config = formatConfig[format]

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={formatStyles[format]}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slotId}
        {...(config.adFormat ? { 'data-ad-format': config.adFormat } : {})}
        {...(config.fullWidthResponsive ? { 'data-full-width-responsive': 'true' } : {})}
      />
    </div>
  )
}

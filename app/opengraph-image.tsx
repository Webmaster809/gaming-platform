import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'PlayHub - Free Online Games'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0E27',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: 'absolute',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,217,255,0.18) 0%, transparent 65%)',
            right: -100,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
        {/* Accent line */}
        <div style={{ width: 80, height: 4, background: '#00D9FF', borderRadius: 2, marginBottom: 24 }} />
        {/* Logo */}
        <div style={{ fontSize: 90, fontWeight: 900, color: '#00D9FF', letterSpacing: '-3px', lineHeight: 1, marginBottom: 20 }}>
          PlayHub
        </div>
        {/* Tagline */}
        <div style={{ fontSize: 30, color: '#9CA3AF', marginBottom: 40 }}>
          Free Online Games — No Downloads, No Registration
        </div>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 14 }}>
          {['🎯 FPS', '⚔️ Battle Royale', '🧩 Puzzle', '🎉 Social', '🕹️ Classics'].map((tag) => (
            <div
              key={tag}
              style={{
                background: 'rgba(0,217,255,0.1)',
                border: '1px solid rgba(0,217,255,0.4)',
                borderRadius: 999,
                padding: '8px 22px',
                color: '#00D9FF',
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}

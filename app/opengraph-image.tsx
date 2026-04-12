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
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Glow background */}
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,217,255,0.15) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: '#00D9FF',
            letterSpacing: '-2px',
            textShadow: '0 0 40px #00D9FF',
            marginBottom: 24,
          }}
        >
          PlayHub
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#9CA3AF',
            marginBottom: 40,
          }}
        >
          Free Online Games — No Downloads, No Registration
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['FPS', 'Battle Royale', 'Puzzle', 'Social', 'Classics'].map((tag) => (
            <div
              key={tag}
              style={{
                background: 'rgba(0,217,255,0.1)',
                border: '1px solid rgba(0,217,255,0.4)',
                borderRadius: 999,
                padding: '8px 20px',
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

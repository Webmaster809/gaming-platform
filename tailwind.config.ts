import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: { neon: '#00D9FF' },
        magenta: { neon: '#FF00FF' },
        violet: { neon: '#7C00FF' },
        green: { neon: '#00FF41' },
        pink: { neon: '#FF006E' },
        dark: {
          bg: '#0A0E27',
          card: '#1F2937',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'glow-cyan': 'glowCyan 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        glowCyan: {
          from: { boxShadow: '0 0 10px #00D9FF' },
          to: { boxShadow: '0 0 30px #00D9FF, 0 0 60px #00D9FF' },
        },
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00D9FF 0%, #FF00FF 100%)',
      },
    },
  },
  plugins: [],
}

export default config

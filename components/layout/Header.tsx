'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-[#0A0E27]/90 backdrop-blur-md border-b border-[#00D9FF]/20"
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/icon.png"
            alt={SITE_NAME}
            width={36}
            height={36}
            className="drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
          />
          <span
            className="font-orbitron text-xl font-bold text-[#00D9FF] group-hover:text-white transition-colors"
            style={{ textShadow: '0 0 20px #00D9FF' }}
          >
            {SITE_NAME}
          </span>
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          {[
            { href: '/', label: 'Home' },
            { href: '/games', label: 'Games' },
            { href: '/categories', label: 'Categories' },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-400 hover:text-[#00D9FF] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

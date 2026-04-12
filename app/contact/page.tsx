import type { Metadata } from 'next'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the PlayHub team. Report issues, suggest games, or send us your feedback.',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-orbitron text-3xl font-black text-[#00D9FF] mb-2">
        Contact
      </h1>
      <p className="text-gray-400 mb-8">
        Have a question, suggestion, or found an issue? We&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: '🎮',
            title: 'Suggest a game',
            description: 'Know a game that should be on our platform? Let us know.',
          },
          {
            icon: '🐛',
            title: 'Report an issue',
            description: 'If a game won\'t load or you found a bug, help us improve.',
          },
          {
            icon: '🤝',
            title: 'Collaborations',
            description: 'Game developers, content creators — let\'s talk.',
          },
          {
            icon: '⚖️',
            title: 'Legal matters',
            description: 'DMCA, privacy or other legal matters. We respond within 48h.',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-[#1F2937] rounded-xl p-5 border border-[#00D9FF]/10"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <h2 className="font-orbitron text-sm font-bold text-white mb-1">{item.title}</h2>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1F2937] rounded-xl p-6 border border-[#00D9FF]/20">
        <h2 className="font-orbitron text-lg font-bold text-white mb-4">Send us a message</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          To reach us, send an email to:{' '}
          <span className="text-[#00D9FF] font-mono">contact@{SITE_NAME.toLowerCase()}.com</span>
        </p>
        <p className="text-gray-500 text-xs mt-3">
          We respond within 24-48 business hours. For urgent DMCA reports, include
          &quot;DMCA&quot; in the email subject line.
        </p>
      </div>
    </div>
  )
}

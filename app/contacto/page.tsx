import type { Metadata } from 'next'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con el equipo de PlayHub. Reporta problemas, sugiere juegos o envíanos tus comentarios.',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-orbitron text-3xl font-black text-[#00D9FF] mb-2">
        Contacto
      </h1>
      <p className="text-gray-400 mb-8">
        ¿Tienes alguna pregunta, sugerencia o encontraste un problema? Nos encantaría escucharte.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: '🎮',
            title: 'Sugerir un juego',
            description: 'Si conoces un juego que debería estar en nuestra plataforma, cuéntanos.',
          },
          {
            icon: '🐛',
            title: 'Reportar un problema',
            description: 'Si un juego no carga o encontraste un error, ayúdanos a mejorarlo.',
          },
          {
            icon: '🤝',
            title: 'Colaboraciones',
            description: 'Desarrolladores de juegos, creadores de contenido — hablemos.',
          },
          {
            icon: '⚖️',
            title: 'Asuntos legales',
            description: 'DMCA, privacidad u otros asuntos legales. Respondemos en 48h.',
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
        <h2 className="font-orbitron text-lg font-bold text-white mb-4">Envíanos un mensaje</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Para contactarnos, envía un email a:{' '}
          <span className="text-[#00D9FF] font-mono">contacto@{SITE_NAME.toLowerCase()}.com</span>
        </p>
        <p className="text-gray-500 text-xs mt-3">
          Respondemos en un plazo de 24-48 horas hábiles. Para reportes urgentes de DMCA, incluye
          &quot;DMCA&quot; en el asunto del email.
        </p>
      </div>
    </div>
  )
}

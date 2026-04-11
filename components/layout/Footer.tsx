import Link from 'next/link'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'

export default function Footer() {
  return (
    <footer className="border-t border-[#00D9FF]/10 bg-[#0A0E27] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-orbitron font-bold text-[#00D9FF] mb-3">{SITE_NAME}</h3>
          <p className="text-gray-400 text-sm">
            La mejor plataforma de juegos online gratuitos. Sin descargas, sin registro.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Categorías</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['fps', 'battle-royale', 'puzzle', 'social', 'classic'].map((cat) => (
              <li key={cat}>
                <Link
                  href={`/categorias/${cat}`}
                  className="hover:text-[#00D9FF] transition-colors capitalize"
                >
                  {cat.replace('-', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/privacidad" className="hover:text-[#00D9FF] transition-colors">Política de Privacidad</Link></li>
            <li><Link href="/terminos" className="hover:text-[#00D9FF] transition-colors">Términos de Uso</Link></li>
            <li><Link href="/contacto" className="hover:text-[#00D9FF] transition-colors">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-xs text-gray-600 border-t border-[#00D9FF]/5">
        © {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
      </div>
    </footer>
  )
}

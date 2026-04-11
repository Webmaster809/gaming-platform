import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-orbitron text-6xl font-black text-[#00D9FF] mb-4"
        style={{ textShadow: '0 0 30px #00D9FF' }}>
        404
      </h1>
      <p className="text-white text-xl font-bold mb-2">Página no encontrada</p>
      <p className="text-gray-400 mb-8">Esta URL no existe o fue movida.</p>
      <div className="flex gap-4">
        <Link href="/" className="bg-[#00D9FF] text-black font-bold px-6 py-2 rounded-full hover:bg-[#00FF41] transition-colors">
          Inicio
        </Link>
        <Link href="/juegos" className="border border-[#00D9FF] text-[#00D9FF] font-bold px-6 py-2 rounded-full hover:bg-[#00D9FF]/10 transition-colors">
          Ver juegos
        </Link>
      </div>
    </div>
  )
}

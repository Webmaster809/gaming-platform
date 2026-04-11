import Link from 'next/link'

export default function GameNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-orbitron text-4xl font-black text-[#00D9FF] mb-4">404</h1>
      <p className="text-gray-400 mb-6">Este juego no existe o fue movido.</p>
      <Link href="/juegos" className="bg-[#00D9FF] text-black font-bold px-6 py-2 rounded-full hover:bg-[#00FF41] transition-colors">
        Ver todos los juegos
      </Link>
    </div>
  )
}

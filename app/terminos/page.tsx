import type { Metadata } from 'next'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'

export const metadata: Metadata = {
  title: 'Términos de Uso',
  description: 'Términos y condiciones de uso de PlayHub. Lee nuestras reglas y condiciones antes de usar la plataforma.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-orbitron text-3xl font-black text-[#00D9FF] mb-2">
        Términos de Uso
      </h1>
      <p className="text-gray-500 text-sm mb-8">Última actualización: abril 2026</p>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">1. Aceptación de los términos</h2>
        <p className="text-gray-400 leading-relaxed">
          Al acceder y utilizar {SITE_NAME}, aceptas cumplir con estos Términos de Uso. Si no estás de
          acuerdo con alguno de estos términos, te pedimos que no utilices nuestra plataforma.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">2. Descripción del servicio</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} es una plataforma gratuita de juegos online que integra juegos de terceros mediante
          tecnología iframe y ofrece juegos desarrollados propios. El acceso a todos los juegos es gratuito
          y no requiere registro ni instalación de software adicional.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">3. Uso permitido</h2>
        <p className="text-gray-400 leading-relaxed">
          Puedes utilizar {SITE_NAME} para uso personal y no comercial. Está prohibido: intentar vulnerar
          la seguridad del sitio, usar bots o scripts automatizados, reproducir o redistribuir el contenido
          sin autorización, o usar la plataforma para actividades ilegales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">4. Propiedad intelectual</h2>
        <p className="text-gray-400 leading-relaxed">
          Los juegos integrados en {SITE_NAME} son propiedad de sus respectivos desarrolladores.
          {SITE_NAME} actúa como plataforma de distribución y no reclama propiedad sobre dichos juegos.
          El diseño, código y contenido propio de {SITE_NAME} está protegido por derechos de autor.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">5. Publicidad</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} se financia mediante publicidad de Google AdSense. Los anuncios son proporcionados
          por Google y sus socios. {SITE_NAME} no es responsable del contenido de dichos anuncios.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">6. Limitación de responsabilidad</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} se proporciona &quot;tal cual&quot;, sin garantías de ningún tipo. No nos hacemos responsables
          de interrupciones del servicio, pérdida de datos, o daños derivados del uso de la plataforma o
          de los juegos integrados de terceros.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">7. Modificaciones</h2>
        <p className="text-gray-400 leading-relaxed">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán
          en vigor al ser publicados en esta página. El uso continuado de {SITE_NAME} implica la aceptación
          de los términos actualizados.
        </p>
      </section>
    </div>
  )
}

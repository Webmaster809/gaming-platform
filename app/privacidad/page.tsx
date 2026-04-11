import type { Metadata } from 'next'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://playhub.com'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de PlayHub. Información sobre cómo recopilamos y usamos tus datos.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-orbitron text-3xl font-black text-[#00D9FF] mb-2">
        Política de Privacidad
      </h1>
      <p className="text-gray-500 text-sm mb-8">Última actualización: abril 2026</p>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">1. Información que recopilamos</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} ({SITE_URL}) recopila automáticamente ciertos datos cuando visitas nuestra plataforma,
          incluyendo tu dirección IP, tipo de navegador, páginas visitadas y tiempo de sesión. Esta información
          se utiliza exclusivamente para mejorar la experiencia del usuario y analizar el rendimiento del sitio
          mediante Google Analytics 4.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">2. Cookies y publicidad</h2>
        <p className="text-gray-400 leading-relaxed">
          Utilizamos Google AdSense para mostrar publicidad relevante. Google y sus socios pueden usar cookies
          para personalizar los anuncios según tus visitas a este y otros sitios web. Puedes optar por no recibir
          publicidad personalizada visitando{' '}
          <a href="https://www.google.com/settings/ads" className="text-[#00D9FF] hover:underline" target="_blank" rel="noopener noreferrer">
            google.com/settings/ads
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">3. Uso de los datos</h2>
        <p className="text-gray-400 leading-relaxed">
          Los datos recopilados se utilizan para: analizar el tráfico del sitio, mejorar el contenido y los juegos
          disponibles, mostrar publicidad relevante a través de Google AdSense, y garantizar el correcto
          funcionamiento de la plataforma. No vendemos ni compartimos tus datos personales con terceros
          fuera de los servicios mencionados.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">4. Servicios de terceros</h2>
        <p className="text-gray-400 leading-relaxed">
          Esta plataforma integra juegos de terceros mediante iframes. {SITE_NAME} no es responsable de
          las políticas de privacidad de dichos juegos o sitios externos. Los juegos integrados pueden tener
          sus propias cookies y mecanismos de seguimiento.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">5. Derechos del usuario</h2>
        <p className="text-gray-400 leading-relaxed">
          Tienes derecho a acceder, rectificar o eliminar los datos que tengamos sobre ti. Para ejercer
          estos derechos o para cualquier consulta sobre privacidad, contáctanos a través de nuestra{' '}
          <a href="/contacto" className="text-[#00D9FF] hover:underline">página de contacto</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">6. Menores de edad</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} está dirigido a usuarios de 5 años en adelante. No recopilamos conscientemente
          información personal de niños menores de 13 años. Si eres padre o tutor y crees que tu hijo
          nos ha proporcionado información personal, contáctanos para eliminarla.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">7. Cambios en esta política</h2>
        <p className="text-gray-400 leading-relaxed">
          Podemos actualizar esta política de privacidad periódicamente. Los cambios serán publicados
          en esta página con la fecha de actualización. El uso continuado de {SITE_NAME} tras los cambios
          implica la aceptación de la nueva política.
        </p>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms and conditions of use for PlayHub. Read our rules and conditions before using the platform.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-orbitron text-3xl font-black text-[#00D9FF] mb-2">
        Terms of Use
      </h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">1. Acceptance of terms</h2>
        <p className="text-gray-400 leading-relaxed">
          By accessing and using {SITE_NAME}, you agree to comply with these Terms of Use. If you
          disagree with any of these terms, please do not use our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">2. Description of service</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} is a free online gaming platform that embeds third-party games via iframe technology
          and offers its own developed games. Access to all games is free and requires no registration
          or additional software installation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">3. Permitted use</h2>
        <p className="text-gray-400 leading-relaxed">
          You may use {SITE_NAME} for personal and non-commercial purposes. The following are prohibited:
          attempting to breach site security, using bots or automated scripts, reproducing or redistributing
          content without authorization, or using the platform for illegal activities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">4. Intellectual property</h2>
        <p className="text-gray-400 leading-relaxed">
          Games embedded on {SITE_NAME} are the property of their respective developers.
          {SITE_NAME} acts as a distribution platform and makes no claim of ownership over those games.
          The design, code, and original content of {SITE_NAME} are protected by copyright.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">5. Advertising</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} is funded through Google AdSense advertising. Ads are provided by Google and its
          partners. {SITE_NAME} is not responsible for the content of those ads.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">6. Limitation of liability</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} is provided &quot;as is&quot;, without warranties of any kind. We are not responsible
          for service interruptions, data loss, or damages arising from the use of the platform or
          embedded third-party games.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">7. Modifications</h2>
        <p className="text-gray-400 leading-relaxed">
          We reserve the right to modify these terms at any time. Changes take effect when posted on
          this page. Continued use of {SITE_NAME} implies acceptance of the updated terms.
        </p>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'PlayHub'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://playhub.com'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy of PlayHub. Information about how we collect and use your data.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-orbitron text-3xl font-black text-[#00D9FF] mb-2">
        Privacy Policy
      </h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">1. Information we collect</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} ({SITE_URL}) automatically collects certain data when you visit our platform,
          including your IP address, browser type, pages visited, and session duration. This information
          is used exclusively to improve the user experience and analyze site performance via Google Analytics 4.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">2. Cookies and advertising</h2>
        <p className="text-gray-400 leading-relaxed">
          We use Google AdSense to display relevant advertising. Google and its partners may use cookies
          to personalize ads based on your visits to this and other websites. You can opt out of
          personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" className="text-[#00D9FF] hover:underline" target="_blank" rel="noopener noreferrer">
            google.com/settings/ads
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">3. Use of data</h2>
        <p className="text-gray-400 leading-relaxed">
          Collected data is used to: analyze site traffic, improve available content and games,
          display relevant advertising through Google AdSense, and ensure the platform runs correctly.
          We do not sell or share your personal data with third parties outside the services mentioned above.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">4. Third-party services</h2>
        <p className="text-gray-400 leading-relaxed">
          This platform embeds third-party games via iframes. {SITE_NAME} is not responsible for
          the privacy policies of those games or external sites. Embedded games may have their own
          cookies and tracking mechanisms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">5. Your rights</h2>
        <p className="text-gray-400 leading-relaxed">
          You have the right to access, correct, or delete any data we hold about you. To exercise
          these rights or for any privacy-related questions, contact us through our{' '}
          <a href="/contact" className="text-[#00D9FF] hover:underline">contact page</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">6. Minors</h2>
        <p className="text-gray-400 leading-relaxed">
          {SITE_NAME} is intended for users aged 5 and older. We do not knowingly collect personal
          information from children under 13. If you are a parent or guardian and believe your child
          has provided us with personal information, please contact us to have it removed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-orbitron text-lg font-bold text-white mb-3">7. Changes to this policy</h2>
        <p className="text-gray-400 leading-relaxed">
          We may update this privacy policy periodically. Changes will be posted on this page with
          an updated date. Continued use of {SITE_NAME} after changes implies acceptance of the new policy.
        </p>
      </section>
    </div>
  )
}

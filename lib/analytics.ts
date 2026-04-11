declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: 'game_start' | 'game_finish' | 'ad_impression' | 'category_view',
  params: Record<string, string | number>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export function trackGameStart(gameSlug: string, gameTitle: string) {
  trackEvent('game_start', { game_slug: gameSlug, game_title: gameTitle })
}

export function trackAdImpression(adSlot: string) {
  trackEvent('ad_impression', { ad_slot: adSlot })
}

import HeroSection from '@/components/home/HeroSection'
import CategoryGrid from '@/components/home/CategoryGrid'
import FeaturedGames from '@/components/home/FeaturedGames'
import AdBanner from '@/components/layout/AdBanner'

const SLOT_LEADERBOARD = process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? ''
const SLOT_RECTANGLE   = process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE   ?? ''

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Leaderboard below hero */}
      {SLOT_LEADERBOARD && (
        <div className="max-w-7xl mx-auto px-4 py-3">
          <AdBanner slotId={SLOT_LEADERBOARD} format="banner" className="w-full" />
        </div>
      )}
      <CategoryGrid />
      <FeaturedGames />
      {/* Rectangle after featured games */}
      {SLOT_RECTANGLE && (
        <div className="max-w-7xl mx-auto px-4 pb-8 flex justify-center">
          <AdBanner slotId={SLOT_RECTANGLE} format="rectangle" className="w-[300px] h-[250px]" />
        </div>
      )}
    </>
  )
}

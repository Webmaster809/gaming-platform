import HeroSection from '@/components/home/HeroSection'
import CategoryGrid from '@/components/home/CategoryGrid'
import FeaturedGames from '@/components/home/FeaturedGames'
import AdBanner from '@/components/layout/AdBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-2">
        <AdBanner slotId="1234567890" format="banner" className="h-24 w-full" />
      </div>
      <CategoryGrid />
      <FeaturedGames />
    </>
  )
}

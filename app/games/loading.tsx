export default function GamesLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="h-9 w-48 bg-[#1F2937] rounded-lg animate-pulse mb-2" />
      <div className="h-4 w-64 bg-[#1F2937] rounded animate-pulse mb-6" />
      <div className="h-20 w-full bg-[#1F2937] rounded-xl animate-pulse mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden bg-[#1F2937] animate-pulse">
            <div className="aspect-video bg-[#0A0E27]" />
            <div className="p-3 space-y-2">
              <div className="h-4 bg-gray-700 rounded w-3/4" />
              <div className="h-3 bg-gray-800 rounded w-full" />
              <div className="h-3 bg-gray-800 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

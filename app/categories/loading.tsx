export default function CategoriesLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="h-9 w-48 bg-[#1F2937] rounded-lg animate-pulse mb-2" />
      <div className="h-4 w-40 bg-[#1F2937] rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-[#1F2937] rounded-xl p-6 animate-pulse">
            <div className="w-10 h-10 bg-gray-700 rounded mb-3" />
            <div className="h-5 bg-gray-700 rounded w-2/3 mb-2" />
            <div className="h-4 bg-gray-800 rounded w-full mb-3" />
            <div className="h-5 w-16 bg-[#00D9FF]/20 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

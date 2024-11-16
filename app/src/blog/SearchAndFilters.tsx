interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchAndFilters({
  searchQuery,
  setSearchQuery,
}: SearchAndFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="relative flex-grow max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 
                   bg-white dark:bg-neutral-800 
                   focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
    </div>
  );
} 
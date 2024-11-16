import { Search } from 'lucide-react';

const categories = [
  { name: 'Education', count: 24 },
  { name: 'Spirituality', count: 18 },
  { name: 'Personal Growth', count: 15 },
  { name: 'Academic Tips', count: 12 },
  { name: 'Mindfulness', count: 9 },
];

export function Sidebar() {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 mb-8">
      <div className="relative">
        <input 
          type="search" 
          placeholder="Search articles..." 
          className="w-full px-4 py-2 pl-10 rounded-lg border border-neutral-200 dark:border-neutral-700 
                   bg-neutral-50 dark:bg-neutral-800 
                   focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-600
                   transition-all"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
      </div>

      <div className="h-px bg-neutral-200 dark:bg-neutral-700 my-6"></div>

      <h3 className="font-bold mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between items-center group cursor-pointer">
            <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
              {category.name}
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 
                         text-neutral-600 dark:text-neutral-400 group-hover:bg-yellow-100 
                         dark:group-hover:bg-yellow-900/30 transition-colors">
              {category.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
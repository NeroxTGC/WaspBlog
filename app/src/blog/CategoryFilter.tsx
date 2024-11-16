import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex flex-nowrap gap-2 min-w-full px-4 sm:px-0">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
            ${selectedCategory === 'all'
              ? 'bg-yellow-500 text-white'
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-yellow-500/10'
            }`}
        >
          All
        </button>
        {categories.filter(category => category !== 'all').map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
              ${selectedCategory === category
                ? 'bg-yellow-500 text-white'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-yellow-500/10'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
} 
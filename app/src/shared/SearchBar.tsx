import { Search, Clock, BarChart, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { articles } from '../blog/articles';
import { useNavigate } from 'react-router-dom';

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface SearchResult {
  articles: typeof articles;
  categories: string[];
  avgReadTime: number;
  difficulty: Difficulty;
}

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const analyzeResults = (filteredArticles: typeof articles): SearchResult => {
    // Get unique categories
    const categories = [...new Set(filteredArticles.map(a => a.category))];
    
    // Calculate average read time
    const avgReadTime = Math.round(
      filteredArticles.reduce((acc, article) => 
        acc + parseInt(article.readTime.split(' ')[0]), 0) / filteredArticles.length
    );

    // Determine difficulty based on read time and content
    const difficulty: Difficulty = avgReadTime > 7 ? 'Advanced' : 
                                 avgReadTime > 4 ? 'Intermediate' : 'Beginner';

    return {
      articles: filteredArticles,
      categories,
      avgReadTime,
      difficulty
    };
  };

  const searchResults = articles
    .filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5);

  const results = analyzeResults(searchResults);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0);
  };

  const handleArticleClick = (href: string) => {
    setSearchTerm('');
    setShowDropdown(false);
    navigate(href);
  };

  return (
    <div className="relative w-full">
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
        <div className="relative">
          <input 
            type="search" 
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search articles..." 
            className="w-full px-4 py-2 pl-10 rounded-lg border border-neutral-200 dark:border-neutral-700 
                     bg-neutral-50 dark:bg-neutral-800 
                     focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
        </div>
      </div>

      {showDropdown && searchResults.length > 0 && (
        <div className="absolute w-full mt-2 bg-white dark:bg-neutral-900 rounded-lg shadow-lg 
                      border border-neutral-200 dark:border-neutral-700 max-h-[80vh] overflow-y-auto z-50">
          {/* Analytics Section */}
          <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Avg. Read Time: {results.avgReadTime} min</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                <span>Level: {results.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Categories: {results.categories.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          {searchResults.map((article) => (
            <button
              key={article.id}
              onClick={() => handleArticleClick(article.href)}
              className="w-full px-4 py-3 text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 
                         transition-colors duration-150 flex items-start gap-3 border-b 
                         border-neutral-200 dark:border-neutral-700 last:border-0"
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 
                             truncate mb-1">
                  {article.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                  {article.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 
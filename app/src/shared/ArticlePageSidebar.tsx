import { Search, Bookmark, TrendingUp } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function ArticlePageSidebar() {
  const relatedArticles = [
    {
      title: "The Impact of AI on Education",
      date: "March 10, 2024",
      readTime: "8 min read",
    },
    {
      title: "Digital Literacy in Modern Learning",
      date: "March 8, 2024",
      readTime: "6 min read",
    },
    {
      title: "Student Success in Online Learning",
      date: "March 5, 2024",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="space-y-8">
      <SearchBar />

      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-yellow-500" />
          <h3 className="font-bold">Related Articles</h3>
        </div>
        <div className="space-y-4">
          {relatedArticles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <h4 className="font-medium group-hover:text-yellow-500 transition-colors">
                {article.title}
              </h4>
              <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <Bookmark className="h-5 w-5 text-yellow-500" />
          <h3 className="font-bold">Newsletter</h3>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Get the latest articles and insights straight to your inbox.
        </p>
        <input 
          type="email" 
          placeholder="Your email address" 
          className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 
                   bg-neutral-50 dark:bg-neutral-800 mb-4
                   focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-neutral-900 
                        font-medium py-2 px-4 rounded-lg transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
}
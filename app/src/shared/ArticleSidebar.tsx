import { Search, Bookmark, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { type Article } from '../blog/articles';
import { articles } from '../blog/articles';
import { subscribe } from 'wasp/client/operations';
import { CTACasualLeave } from './components/CTACasualLeave';

type SubscribeResponse = {
  success: boolean
  message: string
}

interface ArticleSidebarProps {
  currentArticle: Article;
}

export function ArticleSidebar({ currentArticle }: ArticleSidebarProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await subscribe({ email }) as SubscribeResponse;
      if (response.success) {
        setMessage({ text: response.message, type: 'success' });
        setEmail('');
      } else {
        setMessage({ text: response.message, type: 'error' });
      }
    } catch (error: any) {
      setMessage({ 
        text: error.message || 'Something went wrong', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const relatedArticles = useMemo(() => {
    return articles
      .filter(article => 
        article.category === currentArticle.category && 
        article.id !== currentArticle.id
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [currentArticle]);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-4 md:p-6">
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
          <h3 className="text-sm md:text-base font-bold">Related Articles</h3>
        </div>
        <div className="space-y-3 md:space-y-4">
          {relatedArticles.map((article) => (
            <Link 
              key={article.id} 
              to={article.href}
              className="group block"
              onClick={() => window.scrollTo(0, 0)}
            >
              <h4 className="text-sm md:text-base font-medium group-hover:text-yellow-500 transition-colors line-clamp-2">
                {article.title}
              </h4>
              <div className="flex items-center text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                <span>{new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-4 md:p-6">
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <Bookmark className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
          <h3 className="text-sm md:text-base font-bold">Newsletter</h3>
        </div>
        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 mb-3 md:mb-4">
          Get the latest articles and insights straight to your inbox.
        </p>
        <form onSubmit={handleSubscribe}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address" 
            className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg 
                     border border-neutral-200 dark:border-neutral-700 
                     bg-neutral-50 dark:bg-neutral-800 mb-3 md:mb-4
                     focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {message && (
            <div className={`text-sm mb-3 ${
              message.type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}>
              {message.text}
            </div>
          )}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-neutral-900 
                     text-sm md:text-base font-medium py-1.5 md:py-2 px-3 md:px-4 
                     rounded-lg transition-colors disabled:opacity-50 
                     disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>

      {/* <CTACasualLeave /> */}
    </div>
  );
}
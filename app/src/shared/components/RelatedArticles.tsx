import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../../blog/articles';
import React, { useCallback } from 'react';

interface RelatedArticlesProps {
  currentArticleUrl?: string;
  maxArticles?: number;
}

export function RelatedArticles({ 
  currentArticleUrl,
  maxArticles = 3 
}: RelatedArticlesProps) {
  const relatedArticles = React.useMemo(() => {
    if (!currentArticleUrl) {
      return articles
        .filter(article => article.featured)
        .sort(() => Math.random() - 0.5)
        .slice(0, maxArticles);
    }

    const currentArticle = articles.find(article => article.href === currentArticleUrl);
    if (!currentArticle) return [];

    const sameCategory = articles.filter(article => 
      article.category === currentArticle.category && 
      article.href !== currentArticleUrl
    );

    if (sameCategory.length >= maxArticles) {
      return sameCategory
        .sort(() => Math.random() - 0.5)
        .slice(0, maxArticles);
    }

    const remainingCount = maxArticles - sameCategory.length;
    const otherArticles = articles
      .filter(article => 
        article.category !== currentArticle.category && 
        article.href !== currentArticleUrl
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, remainingCount);

    return [...sameCategory, ...otherArticles];
  }, [currentArticleUrl, maxArticles]);

  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  if (!relatedArticles?.length) return null;

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
        <h3 className="text-sm md:text-base font-bold">
          {currentArticleUrl ? 'Related Articles' : 'Featured Articles'}
        </h3>
      </div>
      <div className="space-y-3 md:space-y-4">
        {relatedArticles.map((article) => (
          <Link 
            key={article.id}
            to={article.href}
            className="group block"
            onClick={handleClick}
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
  );
} 
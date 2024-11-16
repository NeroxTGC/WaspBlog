import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../blog/articles';

interface OtherArticlesProps {
  currentArticleUrl: string;
  maxArticles?: number;
}

export function OtherArticles({ currentArticleUrl, maxArticles = 6 }: OtherArticlesProps) {
  const otherArticles = React.useMemo(() => {
    return articles
      .filter(article => article.href !== currentArticleUrl)
      .sort(() => Math.random() - 0.5)
      .slice(0, maxArticles);
  }, [currentArticleUrl, maxArticles]);

  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-950 py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Other Articles You Might Like
          </h2>
          <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600 dark:text-zinc-400">
            Continue exploring our content with these selected articles.
          </p>
        </div>
        
        <div className="mx-auto mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherArticles.map((article) => (
            <article key={article.id} className="flex flex-col items-start justify-between group">
              <div className="relative w-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-[16/9] w-full rounded-xl sm:rounded-2xl bg-zinc-100 dark:bg-zinc-800 object-cover 
                    transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-zinc-900/10 dark:ring-zinc-100/10" />
              </div>
              
              <div className="max-w-xl w-full">
                <div className="mt-4 sm:mt-6 md:mt-8 flex items-center gap-x-4 text-xs sm:text-sm">
                  <time className="text-zinc-500 dark:text-zinc-400">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <div className="group relative">
                  <h3 className="mt-2 sm:mt-3 text-base sm:text-lg leading-6 font-semibold text-zinc-900 dark:text-zinc-100 
                    group-hover:text-yellow-500 dark:group-hover:text-yellow-400">
                    <Link to={article.href} onClick={handleClick}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 sm:mt-4 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {article.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Calendar, Clock, User, Tag } from 'lucide-react';
import { type Article } from '../blog/articles';
import { ShareButton } from './ShareButton';

interface ArticleHeroProps {
  article: Article;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <div className="relative">
      <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] w-full relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 to-neutral-950/30"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="relative -mt-32 md:-mt-36 lg:-mt-40 xl:-mt-44 mb-8 z-10 max-w-4xl xl:max-w-5xl mx-auto">
          <span className="px-4 py-2 rounded-full bg-yellow-500 text-neutral-900 text-sm md:text-base font-medium">
            {article.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between gap-3 text-neutral-900 dark:text-white">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-1.5 opacity-70" />
                <span>{new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short'
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 md:h-5 md:w-5 mr-1.5 opacity-70" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <ShareButton 
              title={article.title} 
              url={window.location.href}
              className="rounded-full text-neutral-900 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
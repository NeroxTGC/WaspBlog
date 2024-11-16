import { ArticlePreview } from './ArticlePreview';
import { type Article } from './articles'; // Asegúrate de exportar el tipo Article de articles.ts

type ArticlesListProps = {
  articles: Article[];
  visibleArticles: number;
  viewMode: 'list' | 'grid';
  showMoreArticles: () => void;
};

export function ArticlesList({ 
  articles, 
  visibleArticles, 
  viewMode, 
  showMoreArticles 
}: ArticlesListProps) {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className={`max-w-3xl ${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 gap-8' 
          : 'flex flex-col space-y-16'
      }`}>
        {articles.slice(0, visibleArticles).map((article) => (
          <ArticlePreview key={article.id} article={article} viewMode={viewMode} />
        ))}
      </div>
      {visibleArticles < articles.length && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={showMoreArticles}
            className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
} 
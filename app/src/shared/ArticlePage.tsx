import { ArticleHero } from './ArticleHero';
import { ArticlePageSidebar } from './ArticlePageSidebar';
import { type Article } from '../blog/articles';

interface ArticlePageProps {
  theme: string;
  toggleTheme: () => void;
  article: Article;
}

export function ArticlePage({ theme, toggleTheme, article }: ArticlePageProps) {
  return (
    <>
      <ArticleHero article={article} />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <ArticlePageSidebar />
          </div>
        </div>
      </main>
    </>
  );
}
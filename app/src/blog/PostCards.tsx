import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

// Actualizar la interfaz para que coincida con el modelo de Article
export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image?: string;
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export function PostCard({ post }: { post: Post }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link 
      to={`/${post.slug}`} 
      className="block"
      onClick={scrollToTop}
    >
      <div className={`bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden 
                    transform hover:scale-[1.02] transition-all duration-300 
                    ${post.featured ? 'mb-8' : ''}`}>
        {post.image && (
          <div className="relative overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 dark:bg-yellow-900/30 
                        text-yellow-800 dark:text-yellow-200 inline-block mb-2">
            {post.category}
          </span>
          <h3 className={`${post.featured ? 'text-2xl' : 'text-xl'} font-bold mb-2 
                       hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors`}>
            {post.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface PostCardsProps {
  posts: Post[];
  visiblePosts: number;
  showMorePosts?: () => void;
}

export function PostCards({ posts, visiblePosts, showMorePosts }: PostCardsProps) {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {posts.slice(0, visiblePosts).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {showMorePosts && visiblePosts < posts.length && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={showMorePosts}
            className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Load More Posts
          </button>
        </div>
      )}
    </div>
  );
}
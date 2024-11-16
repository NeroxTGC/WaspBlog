import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from './utils';

interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  href: string;
  image: string;
}

interface ArticlePreviewProps {
  article: Article;
  viewMode: 'list' | 'grid';
}

export function ArticlePreview({ article, viewMode }: ArticlePreviewProps) {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <article className={`${
      viewMode === 'list' 
        ? 'md:grid md:grid-cols-4 md:items-baseline' 
        : 'flex flex-col'
    }`}>
      <div className={`${
        viewMode === 'list' 
          ? 'md:col-span-3 group relative flex flex-col items-start'
          : 'group relative flex flex-col items-start'
      }`}>
        <div className="w-full mb-4 overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <Link
            to={article.href}
            onClick={scrollToTop}
            className="hover:text-yellow-500 dark:hover:text-yellow-400"
          >
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
            <span className="relative z-10">{article.title}</span>
          </Link>
        </h2>
        <time
          className={`relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5 ${
            viewMode === 'list' ? 'md:hidden' : ''
          }`}
          dateTime={article.date}
        >
          <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span className="h-4 w-0.5 rounded-full bg-yellow-200 dark:bg-yellow-500" />
          </span>
          {formatDate(article.date)}
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {article.description}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-yellow-500"
        >
          Read article
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {viewMode === 'list' && (
        <time
          className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
          dateTime={article.date}
        >
          {formatDate(article.date)}
        </time>
      )}
    </article>
  );
}

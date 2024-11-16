import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Children, cloneElement, isValidElement } from 'react';
import { OtherArticles } from './components/OtherArticles';
import { ArticleHero } from './ArticleHero';
import { ArticleSidebar } from './ArticleSidebar';
import { articles } from '../blog/articles';
import BackToTop from '../client/components/BackToTop';

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  date: string;
  image?: {
    src: string;
    alt: string;
  };
  url: string;
}

function processContent(children: React.ReactNode): React.ReactNode {
  const processNode = (node: React.ReactNode): React.ReactNode => {
    if (!isValidElement(node)) {
      return node;
    }

    const children = Children.map(node.props.children, processNode);

    return children ? cloneElement(node, {}, children) : node;
  };

  return Children.map(children, processNode);
}

export function ArticleLayout({ 
  children, 
  title, 
  description, 
  date,
  image,
  url 
}: ArticleLayoutProps) {
  const processedChildren = processContent(children);
  
  const currentArticle = articles.find(article => article.href === url);

  if (!currentArticle) {
    console.error('Article not found:', url);
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://toograded.com${url}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://toograded.com${url}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`https://toograded.com${url}`} />
      </Helmet>
      <ArticleHero article={currentArticle} />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-0">
        <div className="hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              to="/blog" 
              className="group flex h-10 w-10 items-center justify-center rounded-full 
                bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition 
                dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 
                dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 
                dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          <div className="lg:col-span-8 xl:col-span-7 lg:col-start-2 xl:col-start-3">
            <div className="relative">
              <div className="hidden lg:block sticky top-8 z-50 -ml-14">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="float-left"
                >
                  <Link 
                    to="/blog" 
                    className="group flex h-10 w-10 items-center justify-center rounded-full 
                      bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition 
                      dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 
                      dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                  >
                    <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 
                      dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
                  </Link>
                </motion.div>
              </div>

              <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none
                prose-headings:mb-4 md:prose-headings:mb-6
                prose-p:mb-4 md:prose-p:mb-6
                prose-p:leading-relaxed md:prose-p:leading-loose
                prose-p:tracking-wide
                prose-h1:text-4xl md:prose-h1:text-5xl
                prose-h2:text-3xl md:prose-h2:text-4xl
                prose-h3:text-2xl md:prose-h3:text-3xl
                prose-h4:text-xl md:prose-h4:text-2xl
                prose-hr:my-6 md:prose-hr:my-8
                prose-blockquote:my-6 md:prose-blockquote:my-8
                [&>*]:mb-4 md:[&>*]:mb-6"
              >
                {processedChildren}
              </article>

              <div className="mt-12 md:mt-16 lg:mt-20">
                <hr className="border-t border-zinc-200 dark:border-zinc-700/40" />
                <OtherArticles currentArticleUrl={url} />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 xl:col-span-3">
            <div className="sticky top-8 space-y-6 md:space-y-8">
              <ArticleSidebar currentArticle={currentArticle} />
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
    </>
  );
}

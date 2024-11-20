import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArticleLayout } from '../../shared/ArticleLayout';
import testArticle1Image from './components/test-article-1.webp';

const metadata = {
    title: "Test Article 1",
    description: "Test Article 1",
    date: "2024-10-16",
    url: "/test-article-1"
  };

export function TestArticle1Page() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <ArticleLayout
        title={metadata.title}
        description={metadata.description}
        date={metadata.date}
        url={metadata.url}
        image={{
          src: testArticle1Image,
          alt: "Test Image 1"
        }}
      >
        <div className="mt-8 prose dark:prose-invert">
          Content
        </div>
      </ArticleLayout>
    </>
  );
}

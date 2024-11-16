import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from './Container';
import { articles } from './articles';
import { Hero } from './Hero';
import { Sidebar } from './Sidebar';
import { SearchAndFilters } from './SearchAndFilters';
import { PostCards } from './PostCards';
import { CategoryFilter } from './CategoryFilter';

export function BlogPage() {
  const [visibleArticles, setVisibleArticles] = useState(9);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const categories = Array.from(new Set(articles.map(article => article.category)))
    .sort((a, b) => a.localeCompare(b));

  const monthCategories = ['all', ...Array.from(new Set(articles.map(article => {
    const date = new Date(article.date);
    return {
      label: date.toLocaleString('default', { month: 'long', year: 'numeric' }),
      timestamp: date.getTime()
    };
  }).map(item => item.label)))
  .sort((a, b) => {
    if (a === 'all') return -1;
    if (b === 'all') return 1;
    
    const dateA = new Date(articles.find(article => 
      new Date(article.date).toLocaleString('default', { month: 'long', year: 'numeric' }) === a
    )?.date || '');
    
    const dateB = new Date(articles.find(article => 
      new Date(article.date).toLocaleString('default', { month: 'long', year: 'numeric' }) === b
    )?.date || '');
    
    return dateB.getTime() - dateA.getTime();
  })];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    const articleDate = new Date(article.date);
    const articleMonth = articleDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    const matchesMonth = selectedMonth === 'all' || articleMonth === selectedMonth;
    
    return matchesSearch && matchesCategory && matchesMonth;
  });

  const showMoreArticles = () => {
    setVisibleArticles(prevCount => prevCount + 9);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-boxdark-2 text-neutral-900 dark:text-neutral-50">
      <Helmet>
        <title>Blog - Education, Spirituality, and Personal Growth</title>
        <meta name="description" content="Explore insights on higher education, Islamic spirituality, and self-improvement strategies." />
        <meta property="og:title" content="Blog - Education, Spirituality, and Personal Growth" />
        <meta property="og:description" content="Explore insights on higher education, Islamic spirituality, and self-improvement strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/blog" />
      </Helmet>
      <Container className="">
        <Hero />
        <div className="mt-8 space-y-6">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <SearchAndFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="xl:grid xl:grid-cols-[1fr_300px] gap-8">
            <PostCards
              posts={filteredArticles}
              visiblePosts={visibleArticles}
              showMorePosts={showMoreArticles}
            />
            <div className="hidden xl:block">
              <div className="sticky top-8">
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Filter by Month
                </h2>
                <nav className="mt-4">
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setSelectedMonth('all')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors
                          ${selectedMonth === 'all'
                            ? 'bg-yellow-500/10 text-yellow-500'
                            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                          }`}
                      >
                        All Posts
                      </button>
                    </li>
                    {monthCategories.filter(month => month !== 'all').map((month) => (
                      <li key={month}>
                        <button
                          onClick={() => setSelectedMonth(month)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors
                            ${selectedMonth === month
                              ? 'bg-yellow-500/10 text-yellow-500'
                              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                            }`}
                        >
                          {month}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

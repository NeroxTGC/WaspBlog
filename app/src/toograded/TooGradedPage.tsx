import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Hero2 from './components/Hero2';
import { Helmet } from 'react-helmet-async';

// Lazy load features components
const Features1 = lazy(() => import('./components/Features1').then(module => ({
  default: module.Features1
})));
const Features2 = lazy(() => import('./components/Features2').then(module => ({
  default: module.Features2
})));
const Features3 = lazy(() => import('./components/Features3').then(module => ({
  default: module.Features3
})));

export function TooGradedPage() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <Helmet>
        <title>TooGraded: Your Academic Performance Calculator</title>
        <meta
          name="description"
          content="Easily calculate and convert your SGPA, CGPA, and percentages with our comprehensive suite of academic tools. Boost your academic performance with TooGraded."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toograded.com" />
        <meta property="og:title" content="TooGraded: Your Academic Performance Calculator" />
        <meta
          property="og:description"
          content="Easily calculate and convert your SGPA, CGPA, and percentages with our comprehensive suite of academic tools. Boost your academic performance with TooGraded."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://toograded.com" />
        <meta name="twitter:title" content="TooGraded: Your Academic Performance Calculator" />
        <meta
          name="twitter:description"
          content="Easily calculate and convert your SGPA, CGPA, and percentages with our comprehensive suite of academic tools. Boost your academic performance with TooGraded."
        />

        {/* Additional SEO tags */}
        <link rel="canonical" href="https://toograded.com" />
        <meta
          name="keywords"
          content="SGPA calculator, CGPA calculator, GPA converter, academic performance, college grades, university grading system, percentage calculator"
        />

        {/* Schema.org markup for Google */}
        <script type="application/ld+json">{`
          [
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TooGraded",
              "alternateName": "TooGraded - Academic Performance Calculator",
              "url": "https://toograded.com",
              "description": "Easily calculate and convert your SGPA, CGPA, and percentages with our comprehensive suite of academic tools. Boost your academic performance with TooGraded."
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://toograded.com/"
                }
              ]
            }
          ]
        `}</script>
      </Helmet>
      <main>
        <Hero2 />
        <Suspense fallback={
          <div className="h-96 bg-white dark:bg-neutral-950 animate-pulse" />
        }>
          <Features1 id="CGPA" />
        </Suspense>
        <Suspense fallback={
          <div className="h-96 bg-white dark:bg-neutral-950 animate-pulse" />
        }>
          <Features2 id="SGPA" />
        </Suspense>
        <Suspense fallback={
          <div className="h-96 bg-white dark:bg-neutral-950 animate-pulse" />
        }>
          <Features3 id="Resources" />
        </Suspense>
      </main>
    </div>
  );
}

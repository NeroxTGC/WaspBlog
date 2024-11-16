import { Quote, Share2, BookmarkPlus, Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ShareButton } from './ShareButton';

interface ArticleContentProps {
  title: string;
  content: string | React.ReactNode;
}

export function ArticleContent({ title, content }: ArticleContentProps) {
  const shareUrl = window.location.href;

  return (
    <div className="relative">
      {/* Barra lateral flotante */}
      <div className="hidden lg:block absolute left-0 top-0 -translate-x-16">
        <div className="sticky top-24 flex flex-col gap-3">
          <ShareButton 
            title={title} 
            url={shareUrl} 
            className="[&>div]:left-full [&>div]:ml-2" // Ajusta el menú desplegable para que aparezca a la derecha
          />
          <button className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors">
            <BookmarkPlus className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Barra superior solo en móvil */}
      <div className="lg:hidden flex justify-end gap-3 mb-8">
        <ShareButton title={title} url={shareUrl} />
        <button className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors">
          <BookmarkPlus className="h-5 w-5" />
        </button>
      </div>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        {content}
      </article>
    </div>
  );
}
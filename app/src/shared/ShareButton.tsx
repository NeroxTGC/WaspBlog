import { Share2, Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface ShareButtonProps {
  title: string;
  url: string;
  className?: string;
}

export function ShareButton({ title, url, className = '' }: ShareButtonProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const shareButtonRef = useRef<HTMLButtonElement>(null);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target as Node) &&
        !shareButtonRef.current?.contains(event.target as Node)
      ) {
        setShowShareMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className={`relative ${className}`}>
      <button 
        ref={shareButtonRef}
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
      >
        <Share2 className="h-5 w-5" />
      </button>
      
      {showShareMenu && (
        <div 
          ref={shareMenuRef}
          className="absolute right-0 sm:left-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 py-2 z-50"
        >
          <a 
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Twitter className="h-4 w-4 mr-3" />
            <span>Twitter</span>
          </a>
          <a 
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Facebook className="h-4 w-4 mr-3" />
            <span>Facebook</span>
          </a>
          <a 
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Linkedin className="h-4 w-4 mr-3" />
            <span>LinkedIn</span>
          </a>
          <button 
            onClick={copyToClipboard}
            className="w-full flex items-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Link2 className="h-4 w-4 mr-3" />
            <span>{showCopied ? 'Copied!' : 'Copy link'}</span>
          </button>
        </div>
      )}
    </div>
  );
} 
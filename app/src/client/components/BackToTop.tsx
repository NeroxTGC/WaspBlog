import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-4 right-4 md:bottom-8 md:right-8
        bg-gray-100 hover:bg-gray-200 
        dark:bg-neutral-800 dark:hover:bg-neutral-700
        text-gray-600 dark:text-gray-300
        rounded-full p-2.5 md:p-3
        shadow-lg 
        transition-all duration-300 ease-in-out
        z-50
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12 pointer-events-none'
        }
      `}
      aria-label="Volver arriba"
    >
      <svg 
        className="w-5 h-5 md:w-6 md:h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
} 
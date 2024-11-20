import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { calculators, resources } from '../data/menuItems';

// Lazy load the dropdown content
const DropdownMenu = lazy(() => import('./DropdownMenu'));

interface NavMenuProps {
  onNavigate?: () => void;
}

const NavMenu = React.memo(({ onNavigate }: NavMenuProps) => {
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Link
        to="/gradebook-online"
        onClick={onNavigate}
        className="flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-300 transition-all duration-300 ease-in-out"
      >
        <span className="relative">
          Gradebook
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </span>
      </Link>
      {/* Titles load immediately, content loads lazy */}
      <Suspense fallback={
        <button className="flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-white">
          Calculators
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      }>
        <DropdownMenu 
          title="GPA Calculators"
          items={calculators}
          onNavigate={onNavigate}
        />
      </Suspense>

      <Suspense fallback={
        <button className="flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-white">
          Resources
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      }>
        <DropdownMenu 
          title="Resources"
          items={resources}
          onNavigate={onNavigate}
        />
      </Suspense>

      {/* Blog link loads immediately */}
      <Link
        to="/blog"
        onClick={onNavigate}
        className="flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-300 transition-all duration-300 ease-in-out"
      >
        <span className="relative">
          Blog
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </span>
      </Link>
    </Popover.Group>
  );
});

export default NavMenu; 
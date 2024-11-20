import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200 transition-all duration-300 ease-in-out hover:bg-yellow-50/50 dark:hover:bg-yellow-900/10 group"
        onClick={onClick}
      >
        <span className="sr-only">Open main menu</span>
        <div className="relative w-6 h-6">
          <Bars3Icon 
            className="h-6 w-6 transform transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-yellow-500 dark:group-hover:text-yellow-400" 
            aria-hidden="true" 
          />
          <div className="absolute inset-0 bg-yellow-200/0 group-hover:bg-yellow-200/5 dark:group-hover:bg-yellow-800/5 transition-all duration-300 ease-in-out blur-xl"></div>
        </div>
      </button>
    </div>
  );
};

export default MobileMenuButton; 
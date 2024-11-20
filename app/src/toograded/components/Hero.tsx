'use client'

import React, { useState, lazy, Suspense } from 'react';
import DarkModeSwitcher from '../../client/components/DarkModeSwitcher';
import Logo from './common/Logo';
import MobileMenuButton from './navigation/MobileMenuButton';
import NavMenu from './navigation/NavMenu';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import { useAuth } from 'wasp/client/auth';
import DropdownUser from '../../user/DropdownUser';

// Lazy load components
const MobileMenu = lazy(() => import('./navigation/MobileMenu'));
const LazyLogo = lazy(() => import('./common/Logo'));

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: user, isLoading: isUserLoading } = useAuth();

  return (
    <div 
      className="relative flex flex-col pt-24"
      data-priority="high"
    >
      <header className="absolute inset-x-0 top-0 z-50 mb-16">
        <nav 
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" 
          aria-label="Global"
          data-priority="high"
        >
          <Suspense fallback={
            <div className="contents animate-pulse">
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          }>
            <div 
              className="contents" 
              style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto' }}
              data-priority="low"
            >
              <LazyLogo />
            </div>
          </Suspense>
          
          <div className="flex lg:hidden">
            <MobileMenuButton 
              isOpen={mobileMenuOpen} 
              onClick={() => setMobileMenuOpen(true)} 
            />
          </div>
          
          <NavMenu />

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <DarkModeSwitcher />
            {isUserLoading ? null : !user ? (
              <Link 
                to="/login"
                className="px-4 py-2 rounded-lg bg-yellow-600 dark:bg-yellow-500 text-white font-semibold hover:bg-yellow-700 dark:hover:bg-yellow-600 transition-colors duration-300"
              >
                <div className="flex items-center">
                  Log in <BiLogIn size='1.1rem' className='ml-1' />
                </div>
              </Link>
            ) : (
              <div className="ml-4">
                <DropdownUser user={user} />
              </div>
            )}
          </div>
        </nav>

        <Suspense fallback={null}>
          {mobileMenuOpen && (
            <MobileMenu 
              isOpen={mobileMenuOpen} 
              onClose={() => setMobileMenuOpen(false)} 
            />
          )}
        </Suspense>
      </header>
    </div>
  );
}

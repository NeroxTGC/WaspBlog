'use client'

import React, { useState, lazy, Suspense } from 'react';
import DarkModeSwitcher from '../../client/components/DarkModeSwitcher';
import Logo from './common/Logo';
import MobileMenuButton from './navigation/MobileMenuButton';
import HeroContent from './hero/HeroContent';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import { useAuth } from 'wasp/client/auth';
import DropdownUser from '../../user/DropdownUser';

// Lazy load only the menus that appear on interaction
const NavMenu = lazy(() => import('./navigation/NavMenu'));
const MobileMenu = lazy(() => import('./navigation/MobileMenu'));

export default function Hero2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: user, isLoading: isUserLoading } = useAuth();

  const handleCloseMenus = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            {/* High priority Logo render with priority class */}
            <div className="contents" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto' }}>
              <Logo />
            </div>
            
            <div className="flex lg:hidden">
              <MobileMenuButton 
                isOpen={mobileMenuOpen} 
                onClick={() => setMobileMenuOpen(true)} 
              />
            </div>
            
            <Suspense fallback={<div className="hidden lg:block lg:w-auto" />}>
              <NavMenu onNavigate={handleCloseMenus} />
            </Suspense>

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

        <HeroContent />
      </div>
    </>
  );
}

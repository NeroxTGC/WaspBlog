import React, { Fragment, lazy, Suspense } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { calculators, resources } from '../data/menuItems';
import DarkModeSwitcher from '../../../client/components/DarkModeSwitcher';
import { useAuth } from 'wasp/client/auth';
import { BiLogIn } from 'react-icons/bi';
import DropdownUser from '../../../user/DropdownUser';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  subItems?: MenuItem[];
}

interface Section {
  title: string;
  items: MenuItem[];
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { data: user, isLoading: isUserLoading } = useAuth();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="lg:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 flex">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm border-yellow-100/20">
              <div className="flex items-center justify-between">
                <Link to="/" className='flex items-center -m-1.5 p-1.5 text-gray-900 duration-300 ease-in-out hover:text-yellow-500'>
                  <Suspense fallback={<div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />}>
                    <img 
                      className='h-8 w-8' 
                      src={new URL('../../../client/static/logo.webp', import.meta.url).href} 
                      alt='Too Graded'
                      loading="lazy"
                      decoding="async"
                    />
                  </Suspense>
                  <span className='ml-2 text-xl font-semibold leading-6'>
                    <span className='text-black dark:text-yellow-50 text-lg'>Too</span>
                    <span className='text-yellow-500 dark:text-yellow-500'>Graded</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-yellow-100/20">
                  {/* Calculators Section */}
                  <div className="space-y-2 py-6">
                    <div className="font-semibold text-gray-100 px-3 py-2">Calculators</div>
                    {calculators.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="group relative -mx-3 flex items-center gap-x-6 rounded-xl p-3 text-base font-semibold leading-7 text-gray-100 hover:bg-gradient-to-r hover:from-neutral-800/50 hover:to-transparent"
                        onClick={onClose}
                      >
                        <div className="relative flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-800/50 group-hover:bg-neutral-700/50">
                          <item.icon className="h-6 w-6 text-yellow-400 group-hover:scale-110" aria-hidden="true" />
                        </div>
                        <span className="group-hover:text-yellow-400">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Converters Section (subItems) */}
                  {calculators[0]?.subItems && (
                    <div className="py-6">
                      <div className="font-semibold text-gray-100 px-3 py-2">Converters</div>
                      <div className="space-y-1">
                        {calculators[0].subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="group relative -mx-3 flex items-center gap-x-6 rounded-xl p-3 text-sm font-semibold leading-7 text-gray-300 hover:bg-gradient-to-r hover:from-neutral-800/50 hover:to-transparent"
                            onClick={onClose}
                          >
                            <div className="relative flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-neutral-800/50 group-hover:bg-neutral-700/50">
                              <subItem.icon className="h-5 w-5 text-yellow-400 group-hover:scale-110" aria-hidden="true" />
                            </div>
                            <div className="flex flex-col">
                              <span className="group-hover:text-yellow-400">{subItem.name}</span>
                              <span className="text-xs text-gray-500">{subItem.description}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Resources Section */}
                  <div className="space-y-2 py-6">
                    <div className="font-semibold text-gray-100 px-3 py-2">Resources</div>
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="group relative -mx-3 flex items-center gap-x-6 rounded-xl p-3 text-base font-semibold leading-7 text-gray-100 hover:bg-gradient-to-r hover:from-neutral-800/50 hover:to-transparent"
                        onClick={onClose}
                      >
                        <div className="relative flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-800/50 group-hover:bg-neutral-700/50">
                          <item.icon className="h-6 w-6 text-yellow-400 group-hover:scale-110" aria-hidden="true" />
                        </div>
                        <span className="group-hover:text-yellow-400">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Rest of the menu (Blog, Login, etc) */}
                  <div className="py-6">
                  <Link
                      to="/gradebook-online"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-neutral-800 transition-all duration-300 ease-in-out"
                      onClick={onClose}
                    >
                      GradeBook  
                    </Link>
                    <Link
                      to="/blog"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-neutral-800 transition-all duration-300 ease-in-out"
                      onClick={onClose}
                    >
                      Blog
                    </Link>
                    
                    {isUserLoading ? null : !user ? (
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:bg-yellow-500/10 transition-all duration-300 ease-in-out group"
                        onClick={onClose}
                      >
                        <div className="flex items-center">
                          <span className="group-hover:text-yellow-400">Log in</span>
                          <BiLogIn size='1.1rem' className='ml-2 text-yellow-400 group-hover:translate-x-1 transition-transform duration-300' />
                        </div>
                      </Link>
                    ) : (
                      <div className="-mx-3 px-3 py-2">
                        <DropdownUser user={user} />
                      </div>
                    )}

                    <div className="mt-4 px-3">
                      <DarkModeSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu; 
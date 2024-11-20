import React from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface MenuItem {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  subItems?: MenuItem[];
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
  onNavigate?: () => void;
}

const DropdownMenu = React.memo(({ title, items, onNavigate }: DropdownMenuProps) => {
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <React.Fragment>
          <Popover.Button 
            className={`flex items-center gap-x-1 text-sm font-semibold leading-6 transition-all duration-300 ease-in-out focus:outline-none relative
              ${open 
                ? 'text-yellow-500 dark:text-yellow-400' 
                : 'text-gray-900 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-300'
              }`}
          >
            <span className="relative">
              {title}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </span>
            <ChevronDownIcon 
              className={`h-5 w-5 flex-none transition-all duration-300 ease-in-out
                ${open ? 'text-yellow-500 dark:text-yellow-400 rotate-180' : 'text-gray-400'}
              `} 
              aria-hidden="true" 
            />
          </Popover.Button>

          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-300 delay-75"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-3xl -translate-x-1/2 transform px-4">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-white dark:bg-neutral-900 px-6 py-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    {items.map((item) => (
                      <div key={item.name}>
                        <Link
                          to={item.href}
                          onClick={() => {
                            close();
                            onNavigate?.();
                          }}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors duration-200"
                        >
                          {React.createElement(item.icon, {
                            className: "h-6 w-6 flex-shrink-0 text-yellow-600",
                            'aria-hidden': true
                          })}
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-white">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {items[0]?.subItems && (
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-neutral-800">
                      <div className="grid grid-cols-3 gap-4">
                        {items[0].subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => {
                              close();
                              onNavigate?.();
                            }}
                            className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors duration-200"
                          >
                            {React.createElement(subItem.icon, {
                              className: "h-5 w-5 flex-shrink-0 text-yellow-600",
                              'aria-hidden': true
                            })}
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{subItem.name}</p>
                              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{subItem.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </React.Fragment>
      )}
    </Popover>
  );
});

export default DropdownMenu; 
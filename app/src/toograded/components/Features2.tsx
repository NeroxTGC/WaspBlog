import React, { useCallback, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CalculatorIcon, ChartBarIcon, ArrowsRightLeftIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    name: 'SGPA Calculator',
    description: 'Calculate your Semester Grade Point Average quickly and accurately.',
    icon: CalculatorIcon,
    path: '/sgpa-calculator'
  },
  {
    name: 'SGPA to Percentage',
    description: 'Convert your SGPA to percentage with our easy-to-use tool.',
    icon: ChartBarIcon,
    path: '/sgpa-to-percentage-calculator'
  },
  {
    name: 'SGPA to CGPA',
    description: 'Convert your SGPA to CGPA effortlessly.',
    icon: ArrowsRightLeftIcon,
    path: '/sgpa-to-cgpa-calculator'
  },
]

export function Features2({ id }: { id?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-100px 0px',
  })

  const [showArrow, setShowArrow] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setShowArrow(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const scrollToResources = () => {
    const resourcesElement = document.getElementById('Resources');
    if (resourcesElement) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const windowHeight = window.innerHeight;
      const elementTop = resourcesElement.getBoundingClientRect().top;
      const elementHeight = resourcesElement.offsetHeight;
      const offset = Math.max(0, (windowHeight - elementHeight) / 2);
      const scrollPosition = window.pageYOffset + elementTop - headerHeight - offset;
      window.scrollTo({top: scrollPosition, behavior: 'smooth'});
    }
  };

  return (
    <div id={id} className="bg-white dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:to-[#0a0a0a] py-12 sm:py-24 relative">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="relative isolate overflow-hidden bg-white dark:bg-transparent px-4 py-10 sm:px-10 sm:py-24 lg:py-24 xl:px-24 dark:shadow-none">
          <div className="mx-auto grid max-w-full grid-cols-1 gap-y-8 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <img
              src={isMobile ? "/common/sgpa-screenshot_50.webp" : "/common/sgpa-screenshot.webp"}
              alt="SGPA Calculator Screenshot"
              loading="lazy"
              decoding="async"
              className={`relative -z-20 w-full max-w-none rounded-xl shadow-xl ring-1 ring-neutral-400/10 dark:ring-neutral-400/20 lg:row-span-2 transition-all duration-1000 ease-out mb-8 lg:mb-0 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
              width={2432}
              height={1442}
            />
            <div className={`lg:pl-8 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                Maximize your semester performance with our SGPA tools.
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                Our comprehensive SGPA tools help you calculate, convert, and plan your semester grades for better academic success.
              </p>
              <div className="mt-10 max-w-xl lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                  {features.map((feature, index) => (
                    <div key={feature.name} className={`relative transition-all duration-1000 ease-out ${inView ? `opacity-100 translate-y-0 delay-[${300 + index * 150}ms]` : 'opacity-0 translate-y-20'}`}>
                      <Link
                        to={feature.path}
                        onClick={handleClick}
                        className="group block w-full text-left p-6 border border-yellow-300/20 dark:border-yellow-500/20 rounded-lg overflow-hidden transition-all duration-500 ease-in-out hover:border-yellow-400/50 dark:hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/5 to-yellow-400/5 dark:from-yellow-900/5 dark:to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        <div className="absolute inset-0 bg-yellow-200/5 dark:bg-yellow-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out blur-xl"></div>
                        <div className="relative">
                          <div className="flex items-center">
                            <feature.icon className="h-6 w-6 text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" aria-hidden="true" />
                            <span className="ml-3 text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                              {feature.name}
                            </span>
                          </div>
                          <p className="mt-2 text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 dark:from-yellow-500 dark:via-yellow-400 dark:to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></div>
                        <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 dark:from-yellow-500 dark:via-yellow-400 dark:to-yellow-300 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-top delay-150"></div>
                        <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 dark:from-yellow-500 dark:via-yellow-400 dark:to-yellow-300 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-bottom delay-300"></div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showArrow && (
        <button 
          onClick={scrollToResources}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-yellow-500 transition-all duration-300 focus:outline-none"
          aria-label="Scroll to Resources section"
        >
          <ChevronDownIcon className="w-8 h-8 animate-bounce" />
        </button>
      )}
    </div>
  )
}

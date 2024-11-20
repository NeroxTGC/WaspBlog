import React, { useCallback, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CalculatorIcon, ChartBarIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'CGPA Calculator',
    description: 'Easily calculate your Cumulative Grade Point Average with our intuitive tool.',
    icon: CalculatorIcon,
    path: '/cgpa-calculator'
  },
  {
    name: 'CGPA to Percentage',
    description: 'Convert your CGPA to percentage quickly and accurately.',
    icon: ChartBarIcon,
    path: '/cgpa-to-percentage-calculator'
  },
  {
    name: 'Engineering CGPA',
    description: 'Specialized CGPA calculator tailored for engineering students.',
    icon: AcademicCapIcon,
    path: '/cgpa-calculator-for-engineering'
  },
]

export function Features1({ id }: { id?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-100px 0px',
  })

  const [showArrow, setShowArrow] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setShowArrow(true), 2000) // Show arrow 2 seconds after content is in view
      return () => clearTimeout(timer)
    }
  }, [inView])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is typical mobile breakpoint
    };
    
    checkMobile(); // Check initially
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const scrollToFeatures2 = () => {
    const features2Element = document.getElementById('features2');
    if (features2Element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const windowHeight = window.innerHeight;
      const elementTop = features2Element.getBoundingClientRect().top;
      const elementHeight = features2Element.offsetHeight;
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
            <div className={`lg:pr-8 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                Boost your academic performance. Start using our CGPA tools today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                Our suite of CGPA tools helps you track, calculate, and understand your academic progress with ease and precision.
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
            <img
              src={isMobile ? "/common/cgpa-screenshot_50.webp" : "/common/cgpa-screenshot.webp"}
              alt="CGPA Calculator Screenshot"
              loading="lazy"
              decoding="async"
              className={`relative -z-20 w-full max-w-none rounded-xl shadow-xl ring-1 ring-neutral-400/10 dark:ring-neutral-400/20 lg:row-span-2 transition-all duration-1000 ease-out mb-8 lg:mb-0 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      
      {/* Updated Arrow button */}
      <a 
        href="#SGPA"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-yellow-500 transition-all duration-300 focus:outline-none"
        aria-label="Scroll to next section"
      >
        <ChevronDownIcon className="w-8 h-8 animate-bounce" />
      </a>
    </div>
  )
}

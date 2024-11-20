import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from 'wasp/client/auth';

const HeroContent = React.memo(() => {
  const { data: user } = useAuth();

  return (
    <motion.div 
      className="relative isolate px-4 sm:px-6 pt-8 sm:pt-14 lg:px-8 flex-grow flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <motion.div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-400 to-yellow-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </motion.div>
      
      {/* Hero content */}
      <div className="mx-auto max-w-2xl w-full">
        <motion.div 
          className="hidden sm:mb-8 sm:flex sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20">
            Empowering students with precision calculations
          </div>
        </motion.div>
        <div className="text-center">
          <motion.h1 
            className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Elevate Your <span className="text-yellow-500 dark:text-yellow-400">Grades</span>, 
            Amplify Your <span className="text-yellow-500 dark:text-yellow-400">Success</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-pretty text-lg leading-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Effortlessly calculate and convert SGPA, CGPA, and percentages with our comprehensive suite of academic tools.
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a 
              href="#CGPA"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 relative overflow-hidden group"
            >
              Learn more <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            {/* TODO: Login button */}
            {/* {!user && (
              <a
                href="/login"
                className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition-colors"
              >
                Login
              </a>
            )} */}
          </motion.div>
        </div>
      </div>
      
      {/* Bottom background element */}
      <motion.div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-400 to-yellow-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </motion.div>
    </motion.div>
  );
});

export default HeroContent;
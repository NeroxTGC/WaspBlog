import React from 'react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900 rounded-lg p-6 text-center">
      <h3 className="text-lg md:text-xl font-bold text-yellow-800 dark:text-yellow-200">
        Ready to Take Control of Your Grades?
      </h3>
      <p className="mt-2 text-sm md:text-base text-yellow-700 dark:text-yellow-300">
        Start using our grade tracking tools today!
      </p>
      <Link 
        to="/gradebook" 
        className="mt-4 inline-block bg-yellow-600 text-white hover:bg-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-500 rounded-md px-4 py-2"
      >
        Get Started
      </Link>
    </div>
  );
};

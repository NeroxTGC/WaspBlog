import React from 'react';
import { Link } from 'react-router-dom';

export function CTACasualLeave() {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900 rounded-lg shadow-lg p-4 md:p-6 text-center">
      <h3 className="text-lg md:text-xl font-bold text-yellow-800 dark:text-yellow-200">
        Try Our Casual Leave Application Generator!
      </h3>
      <p className="mt-2 text-sm md:text-base text-yellow-700 dark:text-yellow-300">
        Generate professional casual leave applications instantly.
      </p>
      <Link 
        to="/casual-leave-application" 
        target="_blank"
        className="mt-4 inline-block bg-yellow-600 text-white hover:bg-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-500 rounded-md px-4 py-2"
      >
        Generate Now
      </Link>
    </div>
  );
} 
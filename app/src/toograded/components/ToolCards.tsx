import React from 'react';
import { Link } from 'react-router-dom';
import { CalculatorIcon } from '@heroicons/react/24/outline';

const tools = [
  {
    name: 'SGPA Calculator',
    description: 'Calculate your Semester Grade Point Average',
    path: '/sgpa-calculator',
  },
  {
    name: 'CGPA Calculator',
    description: 'Calculate your Cumulative Grade Point Average',
    path: '/cgpa-calculator',
  },
  {
    name: 'SGPA to Percentage',
    description: 'Convert SGPA to percentage',
    path: '/sgpa-to-percentage-calculator',
  },
  {
    name: 'CGPA to Percentage',
    description: 'Convert CGPA to percentage',
    path: '/cgpa-to-percentage-calculator',
  },
  {
    name: 'SGPA to CGPA',
    description: 'Convert SGPA to CGPA',
    path: '/sgpa-to-cgpa-calculator',
  },
  {
    name: 'Mark Percentage',
    description: 'Calculate mark percentage',
    path: '/mark-percentage-calculator',
  },
  {
    name: 'Engineering CGPA',
    description: 'CGPA Calculator for Engineering',
    path: '/cgpa-calculator-for-engineering',
  },
];

export default function ToolCards() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <li key={tool.path} className="col-span-1 rounded-lg bg-transparent transition-all">
            <Link to={tool.path} className="flex flex-col h-full group">
              <div className="relative p-6 border border-yellow-300/20 dark:border-yellow-500/20 rounded-lg overflow-hidden transition-all duration-500 ease-in-out group-hover:border-yellow-400/50 dark:group-hover:border-yellow-500/50 group-hover:shadow-lg group-hover:shadow-yellow-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/5 to-yellow-400/5 dark:from-yellow-900/5 dark:to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                <div className="absolute inset-0 bg-yellow-200/5 dark:bg-yellow-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out blur-xl"></div>
                <div className="relative z-10 flex items-center justify-between space-x-6">
                  <div className="flex-1 transform group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">{tool.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{tool.description}</p>
                  </div>
                  <CalculatorIcon className="h-8 w-8 flex-shrink-0 text-yellow-400 dark:text-yellow-500 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" aria-hidden="true" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 dark:from-yellow-500 dark:via-yellow-400 dark:to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></div>
                <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 dark:from-yellow-500 dark:via-yellow-400 dark:to-yellow-300 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-top delay-150"></div>
                <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 dark:from-yellow-500 dark:via-yellow-400 dark:to-yellow-300 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-bottom delay-300"></div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

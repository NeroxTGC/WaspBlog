import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo_1_48x48.webp';

const Logo = () => {
  return (
    <div className="flex lg:flex-1">
      <Link to="/" className='flex items-center -m-1.5 p-1.5 text-gray-900 duration-300 ease-in-out hover:text-yellow-500'>
        <img className='h-8 w-8' src={logo} alt='TooGraded Logo' />
        <span className='ml-2 text-xl font-semibold leading-6'>
          <span className='text-black dark:text-yellow-50 text-lg'>Too</span>
          <span className='text-yellow-500 dark:text-yellow-500'>Graded</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo; 
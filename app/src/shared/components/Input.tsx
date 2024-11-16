import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      className={`
        block w-full rounded-md border-0
        text-gray-900 dark:text-gray-100
        shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700
        placeholder:text-gray-400 dark:placeholder:text-gray-600
        focus:ring-2 focus:ring-inset focus:ring-yellow-600 dark:focus:ring-yellow-500
        bg-white dark:bg-neutral-800
        text-xs
        h-7
        disabled:opacity-50
        ${className}
      `}
    />
  );
}; 
import React from 'react';
import clsx from 'clsx';

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('sm:px-8', className)}
      {...props}
    >
          <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">{props.children}</div>
      </div>
  );
}
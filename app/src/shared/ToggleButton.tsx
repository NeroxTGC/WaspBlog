import React from 'react';

type ToggleButtonProps = {
  pressed: boolean;
  onChange: (pressed: boolean) => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  pressed,
  onChange,
  children,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      onClick={() => onChange(!pressed)}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center text-sm font-medium 
        transition-colors duration-200 rounded-md
        ${pressed 
          ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200' 
          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'}
        focus:outline-none
        disabled:opacity-50
        ${className}
      `}
      type="button"
      role="switch"
      aria-checked={pressed}
    >
      {children}
    </button>
  );
}; 
import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'soft' | 'toggle';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
}

const getVariantClasses = (variant: ButtonProps['variant'] = 'primary') => {
  const variants = {
    primary: "bg-yellow-600 text-white hover:bg-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-500",
    secondary: "bg-neutral-700 text-white hover:bg-neutral-600 dark:bg-neutral-800 dark:hover:bg-neutral-700",
    soft: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
    toggle: "bg-neutral-200 text-neutral-900 data-[state=on]:bg-yellow-600 data-[state=on]:text-white dark:bg-neutral-800 dark:text-neutral-100 dark:data-[state=on]:bg-yellow-600",
  };
  return variants[variant];
};

const getSizeClasses = (size: ButtonProps['size'] = 'md') => {
  const sizes = {
    xs: "h-7 w-7",
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  };
  return sizes[size];
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const variantClasses = getVariantClasses(variant);
    const sizeClasses = getSizeClasses(size);
    const widthClass = fullWidth ? 'w-full' : '';
    
    const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`;

    return (
      <button
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button"; 
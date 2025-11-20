import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import { cn } from '@/shared/utils/helpers';

/**
 * Button Variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button Props Interface
 * Following Interface Segregation Principle
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

/**
 * Button Component
 * Presentational component following Separation of Concerns
 * - No business logic
 * - Purely visual representation
 * - Highly composable and reusable
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-primary text-white hover:bg-primary-70 active:bg-primary-80',
      secondary:
        'bg-secondary-100 text-dark-base-100 hover:bg-secondary-90 active:bg-secondary-80 border border-border-medium',
      success:
        'bg-fresh-green text-white hover:bg-fresh-green-70 active:bg-fresh-green-80',
      warning:
        'bg-tertiary text-dark-base-100 hover:bg-tertiary-70 active:bg-tertiary-80',
      error:
        'bg-error text-white hover:bg-error-70 active:bg-error-80',
      ghost:
        'bg-transparent text-text-primary hover:bg-surface-light active:bg-surface-dark',
      outline:
        'bg-transparent border-2 border-primary text-primary hover:bg-primary-10 active:bg-primary-20',
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-sm px-3 py-1.5 gap-1.5',
      md: 'text-base px-4 py-2 gap-2',
      lg: 'text-lg px-6 py-3 gap-2.5',
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          widthStyles,
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

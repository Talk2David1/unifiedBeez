import { type InputHTMLAttributes, forwardRef, type ReactNode } from 'react';
import { cn } from '@/shared/utils/helpers';

/**
 * Checkbox Props Interface
 */
export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  error?: string;
}

/**
 * Checkbox Component
 * Reusable checkbox with label and error support
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, disabled, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 11)}`;

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-start gap-2">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            className={cn(
              'mt-0.5 h-4 w-4 rounded border-input-stroke bg-input-filled text-primary transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-error',
              className
            )}
            {...props}
          />
          {label && (
            <label
              htmlFor={checkboxId}
              className={cn(
                'text-sm text-text-secondary cursor-pointer select-none',
                disabled && 'cursor-not-allowed opacity-50'
              )}
            >
              {label}
            </label>
          )}
        </div>
        {error && <p className="text-xs text-error ml-6">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

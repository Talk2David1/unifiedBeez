'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button } from '@/shared/components';
import { signupSchema, type SignupFormData } from '../schemas/signup.schema';
import { useSignup } from '../hooks/useSignup';

/**
 * SignupForm Component
 * Handles user registration with validation
 */
export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const { handleSignup, isLoading, error } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });

  // Password validation criteria
  const passwordCriteria = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const onSubmit = async (data: SignupFormData) => {
    await handleSignup(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      {/* Email */}
      <div style={{ width: '478px' }}>
        <Input
          {...register('email')}
          label="Email"
          type="email"
          placeholder="brian@unifiedbeez.com"
          helperText="This is a hint text to help user."
          error={errors.email?.message}
          disabled={isLoading}
          fullWidth
        />
      </div>

      {/* Password */}
      <Input
        {...register('password', {
          onChange: (e) => setPassword(e.target.value),
        })}
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="••••••••"
        helperText="This is a hint text to help user."
        error={errors.password?.message}
        disabled={isLoading}
        fullWidth
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg
                className="w-5 h-5 text-text-tertiary hover:text-text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-text-tertiary hover:text-text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        }
      />

      {/* Confirm Password */}
      <Input
        {...register('confirmPassword')}
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="••••••••"
        helperText="This is a hint text to help user."
        error={errors.confirmPassword?.message}
        disabled={isLoading}
        fullWidth
        rightIcon={
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="focus:outline-none"
            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            {showConfirmPassword ? (
              <svg
                className="w-5 h-5 text-text-tertiary hover:text-text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-text-tertiary hover:text-text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        }
      />

      {/* Error Message */}
      {error && (
        <div className="bg-error-10 border border-error text-error rounded-md p-3 text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <Button 
        type="submit" 
        variant="primary" 
        fullWidth 
        isLoading={isLoading}
        className="bg-[#053D27] font-medium"
        style={{ padding: '16px 24px', color: '#FFFFFF', borderRadius: '12px' }}
      >
        Create account
      </Button>


      {/* Password Requirements - Below Button */}
      <div className="text-xs text-text-secondary space-y-1">
        <p className="flex items-center gap-1.5">
          <span className={passwordCriteria.minLength ? "text-success" : "text-error"}>
            {passwordCriteria.minLength ? '✓' : '✗'}
          </span> At least 8 characters
        </p>
        <p className="flex items-center gap-1.5">
          <span className={passwordCriteria.hasUppercase ? "text-success" : "text-error"}>
            {passwordCriteria.hasUppercase ? '✓' : '✗'}
          </span> At least one uppercase letter
        </p>
        <p className="flex items-center gap-1.5">
          <span className={passwordCriteria.hasLowercase ? "text-success" : "text-error"}>
            {passwordCriteria.hasLowercase ? '✓' : '✗'}
          </span> At least one lowercase letter
        </p>
        <p className="flex items-center gap-1.5">
          <span className={passwordCriteria.hasNumber ? "text-success" : "text-error"}>
            {passwordCriteria.hasNumber ? '✓' : '✗'}
          </span> At least one number
        </p>
        <p className="flex items-center gap-1.5">
          <span className={passwordCriteria.hasSpecial ? "text-success" : "text-error"}>
            {passwordCriteria.hasSpecial ? '✓' : '✗'}
          </span> At least one special character
        </p>
      </div>

      
      {/* Sign up with OAuth */}
      <div className="flex items-center w-full gap-3 text-xs text-text-tertiary">
        <span className="h-[2px] flex-1 bg-border-dark opacity-60" />
        <span className="text-center whitespace-nowrap">or sign up with</span>
        <span className="h-[2px] flex-1 bg-border-dark opacity-60" />
      </div>

  
    </form>
  );
}

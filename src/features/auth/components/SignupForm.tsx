'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Input, Checkbox, Button } from '@/shared/components';
import { signupSchema, type SignupFormData } from '../schemas/signup.schema';
import { useSignup } from '../hooks/useSignup';

/**
 * SignupForm Component
 * Handles user registration with validation
 */
export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { handleSignup, isLoading, error } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: SignupFormData) => {
    await handleSignup(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      {/* Full Name */}
      <Input
        {...register('fullName')}
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        error={errors.fullName?.message}
        disabled={isLoading}
        fullWidth
      />

      {/* Email */}
      <Input
        {...register('email')}
        label="Email"
        type="email"
        placeholder="Enter your email"
        helperText="We'll never share your email with anyone else"
        error={errors.email?.message}
        disabled={isLoading}
        fullWidth
      />

      {/* Password */}
      <Input
        {...register('password')}
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="••••••••"
        error={errors.password?.message}
        disabled={isLoading}
        fullWidth
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-text-tertiary hover:text-text-primary transition-colors"
            tabIndex={-1}
          >
            {showPassword ? (
              <svg
                className="w-5 h-5"
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
                className="w-5 h-5"
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
        helperText="Please re-enter your password"
        error={errors.confirmPassword?.message}
        disabled={isLoading}
        fullWidth
        rightIcon={
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="text-text-tertiary hover:text-text-primary transition-colors"
            tabIndex={-1}
          >
            {showConfirmPassword ? (
              <svg
                className="w-5 h-5"
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
                className="w-5 h-5"
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

      {/* Password Requirements */}
      <div className="bg-surface-light border border-border-light rounded-md p-3 text-xs space-y-1">
        <p className="font-medium text-text-primary">Password requirements:</p>
        <ul className="list-disc list-inside text-text-secondary space-y-0.5">
          <li>At least 8 characters</li>
          <li>At least one uppercase letter (A-Z)</li>
          <li>At least one lowercase letter (a-z)</li>
          <li>At least one number (0-9)</li>
          <li>At least one special character (!@#$%^&*)</li>
        </ul>
      </div>

      {/* Terms and Conditions */}
      <Checkbox
        {...register('acceptTerms')}
        label={
          <span>
            I agree to the{' '}
            <Link
              href="/terms"
              className="text-primary hover:text-primary-70 underline"
            >
              Terms and Conditions
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="text-primary hover:text-primary-70 underline"
            >
              Privacy Policy
            </Link>
          </span>
        }
        error={errors.acceptTerms?.message}
        disabled={isLoading}
      />

      {/* Error Message */}
      {error && (
        <div className="bg-error-10 border border-error text-error rounded-md p-3 text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>
        Create account
      </Button>

      {/* Sign in with OAuth */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-medium"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background-light px-2 text-text-tertiary">
            or sign up with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Button
          type="button"
          variant="outline"
          className="flex items-center justify-center gap-2"
          disabled={isLoading}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex items-center justify-center gap-2"
          disabled={isLoading}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
          </svg>
          Apple
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex items-center justify-center gap-2"
          disabled={isLoading}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
          </svg>
          Microsoft
        </Button>
      </div>

      {/* Sign In Link */}
      <p className="text-center text-sm text-text-secondary">
        Already have an account?{' '}
        <Link href="/login" className="text-primary hover:text-primary-70 font-medium">
          Sign in
        </Link>
      </p>
    </form>
  );
}

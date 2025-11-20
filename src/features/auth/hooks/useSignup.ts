'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { SignupFormData } from '../schemas/signup.schema';

interface UseSignupReturn {
  isLoading: boolean;
  error: string | null;
  handleSignup: (data: SignupFormData) => Promise<void>;
}

/**
 * Custom hook for signup functionality
 * Handles user registration logic and API calls
 */
export function useSignup(): UseSignupReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (data: SignupFormData): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual API call using apiClient
      // Example: await apiClient.post('/auth/signup', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock successful signup
      console.log('Signup data:', {
        email: data.email,
        fullName: data.fullName,
      });

      // Store token (if returned from API)
      // localStorage.setItem('auth_token', response.data.token);

      // Redirect to dashboard or verification page
      router.push('/dashboard');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred during signup';
      setError(errorMessage);
      console.error('Signup error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handleSignup,
  };
}

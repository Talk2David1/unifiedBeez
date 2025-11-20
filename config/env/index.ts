/**
 * Environment Configuration
 * Type-safe environment variable access
 */

interface EnvironmentConfig {
  apiUrl: string;
  appName: string;
  appUrl: string;
  isDevelopment: boolean;
  isProduction: boolean;
  enableAnalytics: boolean;
}

/**
 * Get environment configuration
 * Validates and provides type-safe access to environment variables
 */
export function getEnvironmentConfig(): EnvironmentConfig {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || '',
    appName: process.env.NEXT_PUBLIC_APP_NAME || 'UnifiedBeez',
    appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    isDevelopment,
    isProduction,
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  };
}

// Export singleton instance
export const env = getEnvironmentConfig();

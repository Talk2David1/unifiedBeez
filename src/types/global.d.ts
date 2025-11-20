/**
 * Global Type Definitions
 * Type augmentations and global types for the application
 */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_APP_NAME: string;
      NEXT_PUBLIC_APP_URL: string;
      NEXT_PUBLIC_ENABLE_ANALYTICS: string;
    }
  }
}

export {};

import { ApiError, type ApiRequestConfig, type ApiResponse } from '@/types/api';

/**
 * Request Interceptor
 * Modifies request before sending
 * - Adds authentication headers
 * - Adds common headers
 */
export async function requestInterceptor(
  config: ApiRequestConfig
): Promise<ApiRequestConfig> {
  const headers = new Headers(config.headers);

  // Add authentication token if available
  const token = typeof window !== 'undefined' 
    ? localStorage.getItem('auth_token') 
    : null;
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  // Add common headers
  headers.set('Accept', 'application/json');

  return {
    ...config,
    headers,
  };
}

/**
 * Response Interceptor
 * Processes response after receiving
 */
export async function responseInterceptor<T>(
  response: ApiResponse<T>
): Promise<ApiResponse<T>> {
  // Log responses in development
  if (process.env.NODE_ENV === 'development') {
    console.log('API Response:', {
      status: response.status,
      data: response.data,
    });
  }

  return response;
}

/**
 * Error Interceptor
 * Handles errors from requests
 * - Network errors
 * - Authentication errors
 * - Server errors
 */
export async function errorInterceptor(error: Error): Promise<never> {
  // Handle abort errors
  if (error.name === 'AbortError') {
    throw new ApiError('Request timeout', 408);
  }

  // Handle API errors
  if (error instanceof ApiError) {
    // Handle authentication errors
    if (error.statusCode === 401) {
      // Clear authentication state
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
      }
      // Optionally redirect to login
      // window.location.href = '/login';
    }

    // Log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', {
        message: error.message,
        statusCode: error.statusCode,
        data: error.data,
      });
    }

    throw error;
  }

  // Handle network errors
  if (error instanceof TypeError && error.message.includes('fetch')) {
    throw new ApiError('Network error. Please check your connection.', 0);
  }

  // Handle unknown errors
  console.error('Unknown error:', error);
  throw new ApiError('An unexpected error occurred', 500);
}

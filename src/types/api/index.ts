/**
 * API Error Class
 * Custom error class for API-related errors
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * API Request Configuration
 */
export interface ApiRequestConfig extends RequestInit {
  baseURL?: string;
  timeout?: number;
}

/**
 * API Response Type
 */
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

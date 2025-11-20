import { ApiError, type ApiRequestConfig, type ApiResponse } from '@/types/api';
import { requestInterceptor, responseInterceptor, errorInterceptor } from './interceptors';

/**
 * API Client
 * Base HTTP client with interceptors and error handling
 */
class ApiClient {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string = '', timeout: number = 30000) {
    this.baseURL = baseURL || process.env.NEXT_PUBLIC_API_URL || '';
    this.timeout = timeout;
  }

  /**
   * Make HTTP request
   */
  private async request<T>(
    endpoint: string,
    config: ApiRequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      // Apply request interceptor
      const interceptedConfig = await requestInterceptor(config);

      const response = await fetch(url, {
        ...interceptedConfig,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Check if response is ok
      if (!response.ok) {
        let errorData: unknown = null;
        const contentType = response.headers.get('content-type');
        
        try {
          if (contentType?.includes('application/json')) {
            errorData = await response.json();
          } else {
            errorData = await response.text();
          }
        } catch {
          // If parsing fails, leave errorData as null
        }
        
        throw new ApiError(
          `HTTP Error: ${response.statusText}`,
          response.status,
          errorData
        );
      }

      // Parse response data based on content type and status
      let data: T;
      const contentType = response.headers.get('content-type');
      
      // Handle 204 No Content or other no-body responses
      if (response.status === 204 || response.headers.get('content-length') === '0') {
        data = null as T;
      } else if (contentType?.includes('application/json')) {
        try {
          data = await response.json();
        } catch (error) {
          throw new ApiError(
            'Failed to parse JSON response',
            response.status,
            { parseError: error instanceof Error ? error.message : 'Unknown parse error' }
          );
        }
      } else {
        // For non-JSON responses, return as text
        data = (await response.text()) as T;
      }

      const apiResponse: ApiResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };

      // Apply response interceptor
      return await responseInterceptor(apiResponse);
    } catch (error) {
      clearTimeout(timeoutId);
      
      // Apply error interceptor
      throw await errorInterceptor(error as Error);
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'GET',
    });
  }

  /**
   * POST request
   */
  async post<T>(
    endpoint: string,
    data?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    });
  }

  /**
   * PUT request
   */
  async put<T>(
    endpoint: string,
    data?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    });
  }

  /**
   * PATCH request
   */
  async patch<T>(
    endpoint: string,
    data?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    });
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'DELETE',
    });
  }

  /**
   * Set base URL
   */
  setBaseURL(baseURL: string): void {
    this.baseURL = baseURL;
  }

  /**
   * Set timeout
   */
  setTimeout(timeout: number): void {
    this.timeout = timeout;
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export class for creating new instances
export { ApiClient };

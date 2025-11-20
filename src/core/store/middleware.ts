import type { Middleware } from '@reduxjs/toolkit';
import { isAction } from '@reduxjs/toolkit';

/**
 * Logger Middleware
 * Logs actions and state changes in development mode
 */
const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  if (process.env.NODE_ENV === 'development' && isAction(action)) {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
  }
  return next(action);
};

/**
 * Error Handling Middleware
 * Catches and logs errors from async actions
 */
const errorMiddleware: Middleware = () => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    console.error('Error in action:', action, error);
    throw error;
  }
};

/**
 * Combined custom middleware
 * Add additional middleware here as needed
 */
export const customMiddleware = [
  errorMiddleware,
  ...(process.env.NODE_ENV === 'development' ? [loggerMiddleware] : []),
];

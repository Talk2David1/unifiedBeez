import { configureStore, type Middleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rootReducer } from './rootReducer';
import { customMiddleware } from './middleware';

/**
 * Configure and create the Redux store
 * Implements Redux Toolkit with custom middleware
 */
export function makeStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types for serializable check
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }).concat(customMiddleware as Middleware[]),
    devTools: process.env.NODE_ENV !== 'production',
  });

  // Enable refetchOnFocus/refetchOnReconnect behaviors
  setupListeners(store.dispatch);

  return store;
}

// Export store instance
export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

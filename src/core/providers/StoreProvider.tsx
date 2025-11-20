'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/core/store';

interface StoreProviderProps {
  children: React.ReactNode;
}

/**
 * StoreProvider - Provides Redux store to the application
 * Creates a new store instance for each request in SSR
 */
export function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = useRef(makeStore());

  return <Provider store={storeRef.current}>{children}</Provider>;
}

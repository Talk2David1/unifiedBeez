import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, RootState } from '@/core/store';

/**
 * Pre-typed Redux hooks
 * Use these hooks throughout the application instead of plain `useDispatch` and `useSelector`
 */

// Use throughout the app instead of plain `useDispatch`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Use throughout the app instead of plain `useSelector`
export const useAppSelector = useSelector.withTypes<RootState>();

// Export store hook
export { useStore };

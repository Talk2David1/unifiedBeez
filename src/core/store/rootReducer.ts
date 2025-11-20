import { combineReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

/**
 * Placeholder reducer to prevent empty reducer error
 * Remove this once you add your first feature reducer
 */
const placeholderSlice = createSlice({
  name: 'placeholder',
  initialState: {},
  reducers: {},
});

/**
 * Root Reducer
 * Combines all feature reducers into a single root reducer
 * 
 * Add feature reducers here as they are created:
 * import { userReducer } from '@/features/user/store/slice';
 * 
 * Then add to reducers object:
 * user: userReducer,
 */

const reducers = {
  // Placeholder to prevent empty reducer error - remove when adding first feature
  placeholder: placeholderSlice.reducer,
  // Feature reducers will be added here
  // Example: user: userReducer,
};

export const rootReducer = combineReducers(reducers);

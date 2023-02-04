import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { createLogger } from 'redux-logger';

import allReducers from './reducers';

// Combining all the reducers
const rootReducer = combineReducers({
  ...allReducers
});

// Store Configuration
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewareOptions = { serializableCheck: false };
    if (process.env.NODE_ENV === 'development') {
      // Redux Logger Middleware
      const logger = createLogger({
        collapsed: true
      });
      return getDefaultMiddleware(middlewareOptions).concat(logger);
    }
    return getDefaultMiddleware(middlewareOptions);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

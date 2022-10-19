import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
// import untypedMiddleware from 'untyped-middleware';
import authGoogleSlice from './slices/Authentication/AuthenticationGoogleSlices';

export const store = configureStore({
  reducer: {
    auth: authGoogleSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

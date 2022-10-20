import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
// TODO: it is for merge state
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import authGoogleSlice from './slices/Authentication/AuthenticationGoogleSlices';

const persistConfig = {
  key: 'root',
  storage,
  // TODO: merge state
  // stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
  key: 'user',
  storage: storageSession,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, authGoogleSlice),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunk],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

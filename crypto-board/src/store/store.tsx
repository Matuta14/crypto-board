import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Uses localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import assetsReducer from './assets/slice';
import websocketReducer from './websocket/slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['assets'],
};

const rootReducer = combineReducers({
  websocket: websocketReducer,
  assets: assetsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;

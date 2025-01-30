import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Uses localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import assetsReducer from './assets/slice';
import websocketReducer from './websocket/slice';

// Configuration for persisting Redux state
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['assets'], // Persist only the assets slice
};

// Combine reducers
const rootReducer = combineReducers({
  websocket: websocketReducer, // This will not be persisted
  assets: assetsReducer, // This will be persisted
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // TODO: See why do we need it
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Prevent warnings related to non-serializable values
    }),
});

export const persistor = persistStore(store);
export default store;

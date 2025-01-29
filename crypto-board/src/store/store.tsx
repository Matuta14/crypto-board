// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import assetsReducer from './assets/slice';
import websocketReducer from './websocket/slice';
const store = configureStore({
  reducer: {
    websocket: websocketReducer,
    assets: assetsReducer,
  },
});

export default store;

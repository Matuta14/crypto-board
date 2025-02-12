import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { WebSocketProvider } from './context/websocketProvider.tsx';
import { Provider } from 'react-redux';
import store from './store/store.tsx';
import { ViewportProvider } from './context/viewport.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ViewportProvider>
        <WebSocketProvider>
          <App />
        </WebSocketProvider>
      </ViewportProvider>
    </Provider>
  </StrictMode>
);

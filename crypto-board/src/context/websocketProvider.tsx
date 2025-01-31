import { createContext, useContext } from 'react';
import useWebSocket from 'react-use-websocket';
import { getWsPath } from './helpers';

const WebSocketContext = createContext<any>(null);

export const WebSocketProvider = ({ children }: any) => {
  const WS_URL = import.meta.env.VITE_WS_URL;

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    getWsPath(WS_URL),
    {
      onError: (event) => {
        console.error('WebSocket error:', event);
      },
      shouldReconnect: () => true,
    }
  );

  return (
    <WebSocketContext.Provider value={{ sendMessage, readyState, lastMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    console.warn('WebSocket context is not ready yet');
  }
  return context;
};

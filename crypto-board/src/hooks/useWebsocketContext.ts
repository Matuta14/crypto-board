import { useContext } from 'react';
import { WebSocketContext } from '../context/websocketProvider';

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    console.warn('WebSocket context is not ready yet');
  }
  return context;
};

import { createContext, useContext, useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { useDispatch } from 'react-redux';
// import { ProcessWsData } from '../helpers/processWsData';

const WebSocketContext = createContext<any>(null);

export const WebSocketProvider = ({ children }: any) => {
  // const dispatch = useDispatch();
  // const WS_URL = import.meta.env.VITE_WS_URL;
  // const { sendMessage, lastMessage, readyState } = useWebSocket(
  //   `${WS_URL}/prices?assets=bitcoin,litecoin,ethereum`,
  //   {
  //     onError: (event) => {
  //       // Capture WebSocket connection error
  //       console.error('WebSocket error:', event);
  //     },
  //     shouldReconnect: () => true, // Reconnect on disconnection
  //   }
  // );
  // useEffect(() => {
  // console.log('lastMessage: ', lastMessage);
  //   if (lastMessage !== null) {
  //     try {
  //       const parsedData = JSON.parse(lastMessage?.data);
  //       // ProcessWsData(parsedData, dispatch);
  //     } catch (error) {
  //       console.error('Error parsing message:', error, lastMessage?.data);
  //     }
  //   }
  // }, [lastMessage]);
  // return (
  //   <WebSocketContext.Provider value={{ sendMessage, readyState, lastMessage }}>
  //     {children}
  //   </WebSocketContext.Provider>
  // );
};

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    console.warn('WebSocket context is not ready yet');
  }
  return context;
};

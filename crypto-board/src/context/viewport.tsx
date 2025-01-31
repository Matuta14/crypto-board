import React, { createContext, useEffect, useState } from 'react';
export const ViewportContext = createContext({
  isMobile: false,
  isLaptop: false,
});

export const ViewportProvider = ({ children }: IViewportProviderProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;
  const isLaptop = width <= 1024;

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile, isLaptop }}>
      {children}
    </ViewportContext.Provider>
  );
};

interface IViewportProviderProps {
  children: React.ReactNode;
}

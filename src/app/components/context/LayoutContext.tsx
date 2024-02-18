"use client"
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface LayoutContextType {
  layout: boolean;
  changeLayout: (newLayout: boolean) => void;
}


type LayoutProviderProps = {
  children: ReactNode;
};
const LayoutContext = createContext<LayoutContextType | undefined>(undefined);
export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};


export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [layout, setLayout] = useState(false);

  const changeLayout = (newLayout: boolean) => {
    console.log(newLayout);
    
    setLayout(newLayout);
  };

  return (
    <LayoutContext.Provider value={{ layout, changeLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};




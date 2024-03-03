import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface MobileContextProps {
  screenWidth: number;
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextProps | undefined>(undefined);


interface MobileProviderProps {
  children: ReactNode;
}

export const MobileProvider: React.FC<MobileProviderProps> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    
    window.addEventListener('resize', updateScreenWidth);

    
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []); 

  // Determine if the screen width is less than 640px
  const isMobile = screenWidth < 640;

  return (
    <MobileContext.Provider value={{ screenWidth, isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};
export const useMobileStatus = (): MobileContextProps => {
    const context = useContext(MobileContext);
    if (!context) {
      throw new Error('useMobileStatus must be used within a MobileProvider');
    }
    return context;
  };


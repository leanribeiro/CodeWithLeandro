import { createContext, useContext } from "react";
import { AppContextType } from "./types";

const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider = ({children} : {children: React.ReactNode}) => {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppProvider');
  }
  return context;
};
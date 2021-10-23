import React, { createContext, useContext, useEffect, useMemo } from "react";
import { createChannel, sendMessageToPage } from "./channel";

const AppContext = createContext({});

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  useEffect(() => {
    createChannel();
  }, []);

  const value = useMemo(
    () => ({
      sendMessageToPage,
    }),
    [sendMessageToPage]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

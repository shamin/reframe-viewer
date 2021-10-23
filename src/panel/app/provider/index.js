import React, { createContext, useContext, useEffect, useMemo } from "react";
import { createChannel, sendMessageToPage } from "./channel";
import { initializeMessaging } from "./messaging";

const AppContext = createContext({});

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  useEffect(() => {
    createChannel();
    initializeMessaging();
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

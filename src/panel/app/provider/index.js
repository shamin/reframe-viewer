import React, { createContext, useContext, useEffect, useMemo } from "react";
import { sendMessageToPage, useChannel } from "./channel";
import { initializeMessaging } from "./messaging";

const AppContext = createContext({});

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const { db, events } = useChannel();

  useEffect(() => {
    initializeMessaging();
  }, []);

  const value = useMemo(
    () => ({
      sendMessageToPage,
      db,
      events,
    }),
    [sendMessageToPage, db, events]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

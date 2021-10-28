import React, { createContext, useContext, useEffect, useMemo } from "react";
import { sendMessageToPage, useChannel } from "./channel";
import { initializeMessaging } from "./messaging";

const AppContext = createContext({});

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const { db, events, clearEvents } = useChannel();

  useEffect(() => {
    initializeMessaging();
  }, []);

  const value = useMemo(
    () => ({
      sendMessageToPage,
      db,
      events,
      clearEvents,
    }),
    [sendMessageToPage, db, events, clearEvents]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createChannel, sendMessageToPage } from "./channel";
import { initializeMessaging } from "./messaging";

const AppContext = createContext({});

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [db, setDb] = useState({});

  useEffect(() => {
    createChannel((db) => {
      setDb(db);
    });
    initializeMessaging();
  }, []);

  const value = useMemo(
    () => ({
      sendMessageToPage,
      db,
    }),
    [sendMessageToPage, db]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

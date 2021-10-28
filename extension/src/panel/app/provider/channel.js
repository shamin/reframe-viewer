import { useCallback, useEffect, useMemo, useState } from "react";
import * as constants from "../../../shared/constants";

export const sendMessageToPage = (message) => {
  message.tabId = chrome?.devtools?.inspectedWindow.tabId;
  message.owner = constants.PANEL_NAME;
  chrome?.runtime?.sendMessage(message);
};

export const useChannel = () => {
  const [db, setDb] = useState({});
  const [events, setEvents] = useState([]);

  const port = useMemo(() =>
    chrome?.runtime?.connect({
      name: constants.APP_NAME,
    })
  );

  const handleEvent = (event, data) => {
    if (event === "refreshDb") {
      setDb(db);
    }
    if (event === "newEvent") {
      setDb(data.db);
      setEvents([...events, data]);
    }
  };

  const onMessageListener = useCallback(
    (message) => {
      const { event, data } = message;
      handleEvent(event, data);
    },
    [db, events]
  );

  const clearEvents = () => {
    setEvents([]);
  };

  useEffect(() => {
    port?.onMessage.addListener(onMessageListener);
    return () => {
      port?.onMessage.removeListener(onMessageListener);
    };
  }, [db, events]);

  return {
    db,
    events,
    clearEvents,
  };
};

const EVENT_NAME = "reframe-viewer-event-webpage";

const sendEvent = (detail) => {
  var event = new CustomEvent(EVENT_NAME, {
    detail,
  });
  window.dispatchEvent(event);
};

export const handleReframeEvent = (reframeEvent) => {
  sendEvent({
    "reframe-event": reframeEvent,
    event: "handle-event",
  });
};

export const getDbEvent = () => {
  sendEvent({
    event: "get-db",
  });
};

export const initializeListener = () => {
  window.addEventListener("reframe-viewer-event", ({ detail }) => {
    chrome.runtime.sendMessage(message, function (message) {});
  });
  return
};
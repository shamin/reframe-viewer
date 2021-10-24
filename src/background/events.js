export const handleReframeEvent = (reframeEvent) => {
  const event = new CustomEvent("reframe-viewer-event-webpage", {
    detail: {
      "reframe-event": reframeEvent,
      event: "handle-event",
    },
  });
  window.dispatchEvent(event);
};

export const getDbEvent = () => {
  const event = new CustomEvent("reframe-viewer-event-webpage", {
    detail: {
      event: "get-db",
    },
  });
  window.dispatchEvent(event);
};

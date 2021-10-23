const sendMessageToPanel = (message) => {
  chrome.runtime.sendMessage(message, function (message) {});
};

export const initializeMessaging = () => {
  window.addEventListener("reframe-viewer-event", ({ detail }) => {
    sendMessageToPanel(detail);
  });
};

initializeMessaging();

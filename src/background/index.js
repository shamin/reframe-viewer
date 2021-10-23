import * as constants from "../shared/constants";
import { executeScriptFiles } from "./script";

chrome.runtime.onConnect.addListener((port) => {
  const extensionListener = function (message, _sender, sendResponse) {
    if (message?.owner === constants.PANEL_NAME) {
      if (message.action === "initialize") {
        executeScriptFiles(message.tabId, "messaging.js");
      }
    } else {
      port.postMessage(message);
    }
    sendResponse(message);
  };

  chrome.runtime.onMessage.addListener(extensionListener);

  port.onDisconnect.addListener(() => {
    chrome.runtime.onMessage.removeListener(extensionListener);
  });
});

chrome.runtime.onMessage.addListener(() => {
  return true;
});

import * as constants from "../shared/constants";
import { getDbEvent, handleReframeEvent } from "./events";
import { executeScriptFunc } from "./script";

chrome.runtime.onConnect.addListener((port) => {
  const extensionListener = function (message, _sender, sendResponse) {
    if (message?.owner === constants.PANEL_NAME) {
      if (message.action === "initialize") {
        console.log("Intialize");
      } else if (message.action === "getDb") {
        executeScriptFunc(message.tabId, getDbEvent);
      } 
      else if (message.action === "handleReframeEvent") {
        executeScriptFunc(message.tabId, handleReframeEvent, [message.reframeEvent]);
      }
       else {
        console.log("else");
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

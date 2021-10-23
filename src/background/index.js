import * as constants from '../shared/constants'

chrome.runtime.onConnect.addListener(function (port) {
  const extensionListener = function (message, sender, sendResponse) {
    if (message?.owner === constants.PANEL_NAME) {
      //Evaluate script in inspectedPage
      if (message.action === "code") {
        chrome.scripting.executeScript(
          {
            target: { tabId: message.tabId },
          },
          { code: message.content }
        );

        //Attach script to inspectedPage
      } else if (message.action === "script") {
        function getTitle() {
          console.log("Logiin......");
          return document.title;
        }

        chrome.scripting.executeScript(
          {
            target: { tabId: message.tabId },
            func: getTitle,
          },
          (...args) => {
            console.log("Callback args", args);
          }
        );

        //Pass message to inspectedPage
      } else {
        chrome.tabs.sendMessage(message.tabId, message, sendResponse);
      }

      // This accepts messages from the inspectedPage and
      // sends them to the panel
    } else {
      port.postMessage(message);
    }
    sendResponse(message);
  };

  chrome.runtime.onMessage.addListener(extensionListener);

  port.onDisconnect.addListener(function (port) {
    chrome.runtime.onMessage.removeListener(extensionListener);
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  return true;
});

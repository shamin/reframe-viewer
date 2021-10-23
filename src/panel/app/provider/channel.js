import * as constants from "../../../shared/constants";

export const createChannel = (callback) => {
  const port = chrome?.runtime?.connect({
    name: constants.APP_NAME,
  });

  port?.onMessage.addListener(function (message) {
    console.log(message);
    callback(message);
  });
};

export const sendMessageToPage = (message) => {
  message.tabId = chrome?.devtools?.inspectedWindow.tabId;
  message.owner = constants.PANEL_NAME;
  chrome?.runtime?.sendMessage(message);
};

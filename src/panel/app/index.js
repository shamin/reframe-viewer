import React from "react";
import { Container } from "./container";
import { DB } from "./db";

(function createChannel() {
  const port = chrome.runtime.connect({
    name: "Sample Communication", //Given a Name
  });

  port.onMessage.addListener(function (message) {
    document.querySelector("#insertmessagebutton").innerHTML = message.content;
  });
})();

function sendObjectToInspectedPage(message) {
  message.tabId = chrome.devtools.inspectedWindow.tabId;
  chrome.runtime.sendMessage(message);
}

export const App = () => (
  <Container>
    {/* <input type="text" placeholder="type something" />
    <DB /> */}
    <div>
      <button
        onClick={() => {
          sendObjectToInspectedPage({
            action: "code",
            content: "console.log('Inline script executed')",
          });
        }}
      >
        Execute script in inspected page
      </button>
      <button
        onClick={() => {
          sendObjectToInspectedPage({
            action: "script",
            content: "inserted-script.js",
          });
        }}
      >
        Insert script into inspected page
      </button>
      <button
        onClick={() => {
          sendObjectToInspectedPage({
            action: "code",
            content:
              "document.body.innerHTML='<button>Send message to DevTools</button>'",
          });
          sendObjectToInspectedPage({
            action: "script",
            content: "messageback-script.js",
          });
        }}
      >
        Insert button to send a message from page to devtools
      </button>
    </div>
  </Container>
);

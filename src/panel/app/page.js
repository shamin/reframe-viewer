import React from "react";
import { useApp } from "./provider";

export const Page = () => {
  const { sendMessageToPage } = useApp();
  return (
    <div>
      <button
        onClick={() => {
          sendMessageToPage({
            action: "code",
            content: "console.log('Inline script executed')",
          });
        }}
      >
        Execute script in inspected page
      </button>
      <button
        onClick={() => {
          sendMessageToPage({
            action: "script",
            content: "inserted-script.js",
          });
        }}
      >
        Insert script into inspected page
      </button>
      <button
        onClick={() => {
          sendMessageToPage({
            action: "code",
            content:
              "document.body.innerHTML='<button>Send message to DevTools</button>'",
          });
          sendMessageToPage({
            action: "script",
            content: "messageback-script.js",
          });
        }}
      >
        Insert button to send a message from page to devtools
      </button>
    </div>
  );
};

import React from "react";
import { useApp } from "./provider";

export const Page = () => {
  const { sendMessageToPage } = useApp();
  return (
    <div>
      <button
        onClick={() => {
          sendMessageToPage({
            action: "initialize",
          });
        }}
      >
        Initialize
      </button>
    </div>
  );
};

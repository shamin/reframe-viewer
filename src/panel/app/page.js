import React from "react";
import { useApp } from "./provider";
import { DB } from "./db";

export const Page = () => {
  const { sendMessageToPage } = useApp();
  return (
    <div>
      <input type="text" placeholder="type something" />
      <DB />
    </div>
  );
};

import React from "react";
import ReactJson from 'react-json-view'

export const DB = () => (
  <ReactJson
    src={{
      app: { account: { name: "Shamin" }, type: "something", price: 700 },
    }}
    theme="monokai"
  />
);

import React from "react";
import ReactJson from "react-json-view";

export const DB = ({ data }) => <ReactJson src={data} theme="monokai" />;

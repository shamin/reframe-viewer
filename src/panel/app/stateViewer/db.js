/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import ReactJson from "react-json-view";

const wrapperStyles = css`
  padding: 4px 8px;
`;

export const DB = ({ data }) => (
  <div css={wrapperStyles}>
    <ReactJson
      src={data}
      theme="google"
      displayDataTypes={false}
      style={{ fontSize: 14 }}
    />
  </div>
);

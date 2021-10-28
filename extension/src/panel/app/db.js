/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import ReactJson from "react-json-view";
import get from "lodash/get";

const wrapperStyles = css`
  padding: 4px 8px;
  overflow: scroll;
`;

export const DB = ({ data, filter = "", rootName="db" }) => {
  const filterKeys = filter.replaceAll(":", "").split(" ");
  const src =
    filter.length > 0
      ? { [filterKeys.join(".")]: get(data, filterKeys) }
      : data;
  return (
    <div css={wrapperStyles}>
      <ReactJson
        src={src}
        name={rootName}
        theme="google"
        displayDataTypes={false}
        style={{ fontSize: 14 }}
      />
    </div>
  );
};

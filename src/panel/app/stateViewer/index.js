/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useApp } from "../provider";
import { DB } from "./db";
import { Input } from "../../../shared/components/input";
import { COLORS } from "../../../shared/styles";
import { useState } from "react";

const inputWrapperStyles = css`
  background: ${COLORS.grey700};
  padding: 4px;
  border-bottom: 1px solid ${COLORS.grey500};
`;

export const StateViewer = () => {
  const [filter, setFilter] = useState("");
  const [filterApplied, setFilterApplied] = useState("")
  const { db, sendMessageToPage } = useApp();
  return (
    <div>
      <div css={inputWrapperStyles}>
        <Input
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          onEnterPress={() => {
            setFilterApplied(filter);
          }}
        />
      </div>
      <DB data={db} filter={filterApplied} />
      <button
        onClick={() => {
          sendMessageToPage({
            action: "getDb",
          });
        }}
      >
        Refresh
      </button>
    </div>
  );
};

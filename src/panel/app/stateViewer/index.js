/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useApp } from "../provider";
import { DB } from "../db";
import { Input } from "../../../shared/components/input";
import { COLORS } from "../../../shared/styles";
import { useState } from "react";
import { RefreshIcon } from "../../../shared/icons/refresh";

const headerStyles = css`
  background: ${COLORS.grey700};
  padding: 4px;
  border-bottom: 1px solid ${COLORS.grey500};
  display: flex;
`;

const refreshButtonStyles = css`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 4px;
  margin: 0 4px;
  border-radius: 4px;
  &:hover {
    background: ${COLORS.grey900};
  }
`;

export const StateViewer = () => {
  const [filter, setFilter] = useState("");
  const [filterApplied, setFilterApplied] = useState("");
  const { db, sendMessageToPage } = useApp();
  return (
    <div>
      <div css={headerStyles}>
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
        <button
          css={refreshButtonStyles}
          onClick={() => {
            sendMessageToPage({
              action: "getDb",
            });
          }}
        >
          <RefreshIcon color={COLORS.grey100} size={16} />
        </button>
      </div>
      <DB data={db} filter={filterApplied} />
    </div>
  );
};

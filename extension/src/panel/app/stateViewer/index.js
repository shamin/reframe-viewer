/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useApp } from "../provider";
import { DB } from "../db";
import { Input } from "../../../shared/components/input";
import { COLORS } from "../../../shared/styles";
import { useState } from "react";
import { RefreshIcon } from "../../../shared/icons/refresh";
import { CollapseIcon } from "../../../shared/icons/collapse";
import { ExpandIcon } from "../../../shared/icons/expand";
import { useCollapsed } from "../hooks/useCollapsed";

const headerStyles = css`
  background: ${COLORS.grey700};
  padding: 4px;
  border-bottom: 1px solid ${COLORS.grey500};
  display: flex;
`;

const headerButtonStyles = ({ disabled } = {}) => css`
  background: none;
  border: none;
  cursor: ${disabled ? "not-allowed" : "pointer"};
  padding: 0 4px;
  margin: 0 4px;
  border-radius: 4px;
  &:hover {
    background: ${COLORS.grey900};
  }
`;

const stateViewerStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StateViewer = () => {
  const [filter, setFilter] = useState("");
  const [filterApplied, setFilterApplied] = useState("");
  const { db, sendMessageToPage } = useApp();
  const { collapsed, onCollapse, onExpand, collapseDisabled, expandDisabled } =
    useCollapsed(1);

  return (
    <div css={stateViewerStyles}>
      <div css={headerStyles}>
        <button
          css={headerButtonStyles({ disabled: expandDisabled })}
          onClick={onExpand}
          disabled={expandDisabled}
        >
          <ExpandIcon
            color={expandDisabled ? COLORS.grey200 : COLORS.grey100}
            size={16}
          />
        </button>
        <button
          css={headerButtonStyles({ disabled: collapseDisabled })}
          onClick={onCollapse}
          disabled={collapseDisabled}
        >
          <CollapseIcon
            color={collapseDisabled ? COLORS.grey200 : COLORS.grey100}
            size={16}
          />
        </button>
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
          css={headerButtonStyles()}
          onClick={() => {
            sendMessageToPage({
              action: "getDb",
            });
          }}
        >
          <RefreshIcon color={COLORS.grey100} size={16} />
        </button>
      </div>
      <DB data={db} filter={filterApplied} collapsed={collapsed} />
    </div>
  );
};

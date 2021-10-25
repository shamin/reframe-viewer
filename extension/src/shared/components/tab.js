/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { COLORS } from "../styles";

const tabHeaderStyles = css`
  width: 100%;
  background: ${COLORS.grey700};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLORS.grey500};
`;

export const TabHeader = ({ children }) => (
  <div css={tabHeaderStyles}>{children}</div>
);

export const TabsWrapper = ({ defaultSelected, children }) => {
  const [selected, onSelect] = useState(defaultSelected);
  return <div>{children({ selected, onSelect })}</div>;
};

const tabItemStyles = ({ selected }) => css`
  color: ${selected ? COLORS.grey100 : COLORS.grey200};
  font-size: 14px;
  padding: 4px 16px;
  background: ${selected ? COLORS.black : "transparent"};
  border: none;
  cursor: pointer;
`;

export const TabItem = ({ id, name, selected, onSelect }) => (
  <button
    css={tabItemStyles({ selected: id === selected })}
    onClick={() => onSelect(id)}
  >
    {name}
  </button>
);

export const TabView = ({ id, selected, children }) => {
  const isSelected = id === selected;
  return (
    isSelected && (
      <div>
        {children}
      </div>
    )
  );
};

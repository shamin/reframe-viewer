/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "../../shared/styles";

const tabItemStyles = ({ selected }) => css`
  color: ${selected ? COLORS.grey100 : COLORS.grey200};
  font-size: 14px;
  padding: 4px 8px;
  background: ${selected ? COLORS.grey900 : "transparent"};
`;

const TabItem = ({ name, selected }) => {
  return <div css={tabItemStyles({ selected })}>{name}</div>;
};

const tabStyles = css`
  width: 100%;
  background: ${COLORS.grey700};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLORS.grey500};
`;

export const Tabs = () => {
  return (
    <div css={tabStyles}>
      <TabItem name="State" selected />
      <TabItem name="Events" />
    </div>
  );
};

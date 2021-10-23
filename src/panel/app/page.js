/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useApp } from "./provider";
import { DB } from "./db";
import { Input } from "../../shared/components/input";
import { COLORS } from "../../shared/styles";

const inputWrapperStyles = css`
  background: ${COLORS.grey700};
  padding: 4px;
  border-bottom: 1px solid ${COLORS.grey500};
`;

export const Page = () => {
  const { db } = useApp();
  return (
    <div>
      <div css={inputWrapperStyles}>
        <Input type="text" placeholder="Filter" />
      </div>
      <DB data={db} />
    </div>
  );
};

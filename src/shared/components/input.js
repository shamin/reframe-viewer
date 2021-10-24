/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "../styles";

const inputStyles = css`
  width: 100%;
  height: 20px;
  border-radius: 0;
  background: ${COLORS.grey900};
  outline: none;
  border: none;
  padding: 0 10px;
  color: ${COLORS.grey200};
  border: 1px solid ${COLORS.grey900};
  &:hover {
    border: 1px solid ${COLORS.grey500};
  }
  &:active,
  &:focus {
    border: 1px solid ${COLORS.activeBlue};
  }
`;

export const Input = ({ onEnterPress, ...remainingProps }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onEnterPress?.();
    }
  };

  return (
    <input onKeyPress={handleKeyPress} css={inputStyles} {...remainingProps} />
  );
};

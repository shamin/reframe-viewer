import React from "react";
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react";
import { COLORS } from "../../shared/styles";

export const Container = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          background: ${COLORS.grey900};
          margin: 0;
          font-family: "Lato", sans-serif;
        }
      `}
    />
    {children}
  </>
);

import React from 'react'
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react";

export const Container = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          background: rgb(12,13,23);
          font-family: "Lato", sans-serif;
        }
      `}
    />
    {children}
  </>
);

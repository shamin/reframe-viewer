/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react";

export const App = () => (
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: red;
      }
    `}
  >
    <Global
      styles={css`
        body {
          background: black;
          font-family: 'Lato', sans-serif;
        }
      `}
    />
    Hello world
  </div>
);

import React from "react";
import { Container } from "./container";
import { DB } from "./db";
import AppProvider from "./provider";
import { Page } from './page'

export const App = () => (
  <AppProvider>
    <Container>
      {/* <input type="text" placeholder="type something" />
    <DB /> */}
      <Page />
    </Container>
  </AppProvider>
);

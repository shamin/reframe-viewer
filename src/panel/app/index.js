import React from "react";
import { Container } from "./container";
import AppProvider from "./provider";
import { Page } from './page'

export const App = () => (
  <AppProvider>
    <Container>
      <Page />
    </Container>
  </AppProvider>
);

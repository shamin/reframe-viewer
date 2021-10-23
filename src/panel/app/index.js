import React from "react";
import { Container } from "./container";
import AppProvider from "./provider";
import { Page } from "./page";
import { Tabs } from "./tabs";

export const App = () => (
  <AppProvider>
    <Container>
      <Tabs />
      <Page />
    </Container>
  </AppProvider>
);

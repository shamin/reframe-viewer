import React from "react";
import { Container } from "./container";
import AppProvider from "./provider";
import { Page } from "./page";
import { Tabs } from "./tabs";
import { TabsWrapper, TabItem, TabHeader, TabView } from "../../shared/components/tab";

export const App = () => (
  <AppProvider>
    <Container>
      <TabsWrapper defaultSelected="state">
        {({ selected, onSelect }) => (
          <>
            <TabHeader>
              <TabItem
                id="state"
                name="State"
                selected={selected}
                onSelect={onSelect}
              />
              <TabItem
                id="events"
                name="Events"
                selected={selected}
                onSelect={onSelect}
              />
            </TabHeader>
            <TabView id="state" selected={selected}>
              <Page />
            </TabView>
            <TabView id="events" selected={selected} />
          </>
        )}
      </TabsWrapper>
    </Container>
  </AppProvider>
);

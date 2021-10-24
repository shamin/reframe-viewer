import React from "react";
import { Container } from "./container";
import AppProvider from "./provider";
import {
  TabsWrapper,
  TabItem,
  TabHeader,
  TabView,
} from "../../shared/components/tab";
import { StateViewer } from "./stateViewer";

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
              <StateViewer />
            </TabView>
            <TabView id="events" selected={selected} />
          </>
        )}
      </TabsWrapper>
    </Container>
  </AppProvider>
);

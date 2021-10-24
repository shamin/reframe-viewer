import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { TabsWrapper, TabItem, TabHeader, TabView } from "../../shared/components/tab";
import { COLORS } from "../../shared/styles";

export const Tabs = () => {
  return (
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
          <TabView id="state" selected={selected} />
          <TabView id="events" selected={selected} />
        </>
      )}
    </TabsWrapper>
  );
};

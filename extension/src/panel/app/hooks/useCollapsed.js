import { useState } from "react";

const collapsedValues = [true, 1, 2, false];

export const useCollapsed = (defaultCollapsed = false) => {
  const [collapsedIndex, setCollapsedIndex] = useState(
    collapsedValues.findIndex((v) => v === defaultCollapsed)
  );

  const onExpand = () => {
    setCollapsedIndex(collapsedIndex + 1);
  };
  const onCollapse = () => {
    setCollapsedIndex(collapsedIndex - 1);
  };

  const collapsed = collapsedValues[collapsedIndex];
  return {
    onExpand,
    onCollapse,
    expandDisabled: collapsed === false,
    collapseDisabled: collapsed === true,
    collapsed,
  };
};

/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Input } from "../../../shared/components/input";
import { COLORS } from "../../../shared/styles";
import { useState } from "react";
import { sendMessageToPage } from "../provider/channel";
import { useApp } from "../provider";
import { Table } from "./table";
import { CancelIcon } from "../../../shared/icons/clear";
import { FilterIcon } from "../../../shared/icons/filter";

const rowStyles = css`
  display: flex;
  background: ${COLORS.grey700};
  padding: 4px;
  border-bottom: 1px solid ${COLORS.grey500};
`;

const handleReframeEvent = (event) => {
  sendMessageToPage({
    action: "handleReframeEvent",
    reframeEvent: event,
  });
};

const cancelButtonStyles = css`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 4px;
  margin: 0 4px;
  border-radius: 4px;
  &:hover {
    background: ${COLORS.grey900};
  }
`;

const getEventsToShow = (events, filterEvent) => {
  if (filterEvent.length === 0) {
    return [...events].sort(() => -1);
  } else {
    return [...events].filter((e) => e.event.includes(filterEvent));
  }
};

export const Events = () => {
  const [event, setEvent] = useState("");
  const [filterView, setFilterView] = useState(false);
  const [filterEvent, setFilterEvent] = useState("");
  const { events, clearEvents } = useApp();

  const toggleFilter = () => {
    setFilterView(!filterView);
  };

  return (
    <div>
      <div css={rowStyles}>
        <Input
          type="text"
          placeholder="Dispatch Event eg: [:event {:data data}]"
          value={event}
          onChange={(e) => {
            setEvent(e.target.value);
          }}
          onEnterPress={() => {
            handleReframeEvent(event);
            setEvent("");
          }}
        />
        <button
          css={cancelButtonStyles}
          onClick={() => {
            clearEvents();
          }}
        >
          <CancelIcon color={COLORS.grey100} size={16} />
        </button>
        <button
          css={cancelButtonStyles}
          onClick={() => {
            toggleFilter();
          }}
        >
          <FilterIcon
            color={filterView ? COLORS.activeRed : COLORS.grey100}
            size={14}
          />
        </button>
      </div>
      {filterView && (
        <div css={rowStyles}>
          <Input
            type="text"
            placeholder="Filter"
            value={filterEvent}
            onChange={(e) => {
              setFilterEvent(e.target.value);
            }}
          />
        </div>
      )}
      <Table events={getEventsToShow(events, filterEvent)} />
    </div>
  );
};

/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Input } from "../../../shared/components/input";
import { COLORS } from "../../../shared/styles";
import { useState } from "react";
import { sendMessageToPage } from "../provider/channel";
import { useApp } from "../provider";
import { Table } from "./table";
import { CancelIcon } from "../../../shared/icons/clear";

const headerStyles = css`
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

export const Events = () => {
  const [event, setEvent] = useState("");
  const { events, clearEvents } = useApp();
  return (
    <div>
      <div css={headerStyles}>
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
      </div>
      <Table events={[...events].sort(() => -1)} />
    </div>
  );
};

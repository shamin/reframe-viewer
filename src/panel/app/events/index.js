/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Input } from "../../../shared/components/input";
import { COLORS } from "../../../shared/styles";
import { useState } from "react";
import { sendMessageToPage } from "../provider/channel";
import { useApp } from "../provider";
import { events } from "./data";
import { Table } from "./table";

const inputWrapperStyles = css`
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

export const Events = () => {
  const [event, setEvent] = useState("");
  // const { events } = useApp()
  return (
    <div>
      <div css={inputWrapperStyles}>
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
      </div>
      <Table events={events} />
    </div>
  );
};

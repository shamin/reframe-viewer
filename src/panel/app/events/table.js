/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { COLORS } from "../../../shared/styles";
import classNames from "classnames";
import { CloseIcon } from "../../../shared/icons/close";

const tableStyles = css`
  flex: 1;
  color: ${COLORS.grey100};
  font-size: 14px;
  .table__header-row {
    display: flex;
    .table__cell {
      flex: 1;
      padding: 8px 6px;
      border-bottom: 1px solid ${COLORS.grey500};
      border-top: 1px solid ${COLORS.grey500};
    }
  }
  .table__body {
    overflow: scroll;
    .table__row {
      display: flex;
      cursor: pointer;
      &:nth-of-type(even) {
        background: ${COLORS.grey800};
      }
      &:nth-of-type(odd) {
        background: ${COLORS.grey750};
      }
      &:hover {
        background: ${COLORS.hoverBlue};
      }
      .table__cell {
        flex: 1;
        padding: 4px 6px;
      }
      &--selected {
        background: ${COLORS.activeBlue} !important;
      }
    }
  }
`;

const detailViewStyles = css`
  flex: 2;
  color: ${COLORS.grey100};
  font-size: 14px;
  border-left: 2px solid ${COLORS.grey500};
  .detail-view__header {
    border-bottom: 1px solid ${COLORS.grey500};
    border-top: 1px solid ${COLORS.grey500};
    display: flex;
    padding: 8px 6px;
    .detail-view__header-text {
      margin: 0;
    }
    .detail-view__close-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 4px;
      margin: 0 4px;
      border-radius: 4px;
      &:hover {
        background: ${COLORS.grey900};
      }
    }
  }
`;

export const Table = ({ events }) => {
  const [selectedEvent, setSeletedEvent] = useState(null);
  const selectedEventDetails =
    selectedEvent !== null && events.find((e, i) => i === selectedEvent);
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div css={tableStyles}>
        <div className="table__header-row">
          <div className="table__cell">Name</div>
        </div>
        <div className="table__body">
          {events.map((e, i) => (
            <div
              className={classNames("table__row", {
                "table__row--selected": selectedEvent === i,
              })}
              onClick={() => setSeletedEvent(i)}
            >
              <div className="table__cell">{e.event}</div>
              {/* <div className="table__cell">
              {JSON.stringify(e?.["event-data"])}
            </div> */}
            </div>
          ))}
        </div>
      </div>
      {selectedEvent !== null && (
        <div css={detailViewStyles}>
          <div className="detail-view__header">
            <button
              className="detail-view__close-btn"
              onClick={() => {
                setSeletedEvent(null)
              }}
            >
              <CloseIcon color={COLORS.grey200} size={12} />
            </button>
            <p className="detail-view__header-text">Details</p>
          </div>
          <div>{JSON.stringify(selectedEventDetails?.["event-data"])}</div>
        </div>
      )}
    </div>
  );
};

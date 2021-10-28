/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { COLORS } from "../../../shared/styles";
import classNames from "classnames";
import { CloseIcon } from "../../../shared/icons/close";
import { DB } from "../db";

const tableStyles = css`
  flex: 1;
  color: ${COLORS.grey100};
  font-size: 14px;
  display: flex;
  flex-direction: column;
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
    flex: 1;
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
  .detail-view__body {
    .detail-view__item {
      padding: 8px;
      border-bottom: 1px solid ${COLORS.grey500};
      .detail-view__item-header {
        font-weight: 600;
        padding-bottom: 4px;
      }
      .item__field {
        display: flex;
        margin-bottom: 10px;
        .item__field-name {
          color: ${COLORS.grey200};
          font-weight: 600;
          padding-right: 4px;
          margin: 0;
        }
        .item__field-value {
          flex: 1;
          margin: 0;
        }
      }
      .detail-view__item-body {
        padding: 8px 20px;
      }
    }
  }
`;

export const Table = ({ events }) => {
  const [selectedEvent, setSeletedEvent] = useState(null);
  const selectedEventDetails =
    selectedEvent !== null && events.find((e) => e.timestamp === selectedEvent);
  return (
    <div
      css={css`
        display: flex;
        height: 100%;
      `}
    >
      <div css={tableStyles}>
        <div className="table__header-row">
          <div className="table__cell">Name</div>
          {selectedEvent === null && (
            <div className="table__cell">Timestamp</div>
          )}
        </div>
        <div className="table__body">
          {events.map((e) => (
            <div
              key={e.timestamp}
              className={classNames("table__row", {
                "table__row--selected": selectedEvent === e.timestamp,
              })}
              onClick={() => setSeletedEvent(e.timestamp)}
            >
              <div className="table__cell">{e.event}</div>
              {selectedEvent === null && (
                <div className="table__cell">
                  {new Date(e.timestamp).toString()}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {selectedEventDetails && (
        <div css={detailViewStyles}>
          <div className="detail-view__header">
            <button
              className="detail-view__close-btn"
              onClick={() => {
                setSeletedEvent(null);
              }}
            >
              <CloseIcon color={COLORS.grey200} size={10} />
            </button>
            <p className="detail-view__header-text">Details</p>
          </div>
          <div className="detail-view__body">
            <details className="detail-view__item" open={true}>
              <summary className="detail-view__item-header">Event</summary>
              <div className="detail-view__item-body">
                <div className="item__field">
                  <p className="item__field-name">Full Event:</p>
                  <p className="item__field-value">
                    {selectedEventDetails?.["full-event"]}
                  </p>
                </div>
                <div className="item__field">
                  <p className="item__field-name">Datas:</p>
                  {selectedEventDetails?.["event-data"] ? (
                    <div className="item__field-value">
                      <DB
                        data={selectedEventDetails?.["event-data"]}
                        rootName={false}
                      />
                    </div>
                  ) : (
                    <p className="item__field-value">nil</p>
                  )}
                </div>
              </div>
            </details>
            <details className="detail-view__item" open={true}>
              <summary className="detail-view__item-header">Before</summary>
              <DB data={selectedEventDetails?.["before"]} />
            </details>
            <details className="detail-view__item" open={true}>
              <summary className="detail-view__item-header">After</summary>
              <DB data={selectedEventDetails?.["after"]} />
            </details>
          </div>
        </div>
      )}
    </div>
  );
};

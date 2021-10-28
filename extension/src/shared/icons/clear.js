import React from "react";

export const CancelIcon = ({ color = "#000000", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size}>
    <circle
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeMiterlimit="10"
      cx="16"
      cy="16"
      r="12"
    />
    <path
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeMiterlimit="10"
      d="M7.8 7.6l16.4 16.8"
    />
  </svg>
);

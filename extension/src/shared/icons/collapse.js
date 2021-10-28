import React from "react";

export const CollapseIcon = ({ color = "#000000", size = 24 }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.75 4.5h14.5a.75.75 0 00.102-1.493L21.25 3H6.75a.75.75 0 00-.102 1.493l.102.007zM6.75 19.5h14.5a.75.75 0 00.102-1.493L21.25 18H6.75a.75.75 0 00-.102 1.493l.102.007zM13.75 8a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zM13 13.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM11 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2 0a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h4a.5.5 0 00.5-.5z"
      fill={color}
    />
  </svg>
);

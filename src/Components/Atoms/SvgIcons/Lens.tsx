import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
}
const Lens: React.FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || "21"}
      height={height || "21"}
      className={className ? className : ""}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z"
        stroke="#A3A3C2"
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.375 18.375L14.5687 14.5687"
        stroke="#A3A3C2"
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lens;

import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const Bell: React.FC<Props> = ({ width, height, className, pathClassName }) => {
  return (
    <svg
      width={width || "14"}
      height={height || "17"}
      className={className ? className : ""}
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.23503 2.48071C9.10196 1.36502 8.15249 0.5 7.00098 0.5C5.84947 0.5 4.9 1.36502 4.76693 2.48071C2.88993 3.3316 1.58431 5.22166 1.58431 7.41667V11.1799L0.331437 13.662C0.0796442 14.1609 0.442195 14.75 1.00098 14.75H4.87901C5.18788 15.6239 6.02131 16.25 7.00098 16.25C7.98064 16.25 8.81407 15.6239 9.12295 14.75H13.001C13.5598 14.75 13.9223 14.1609 13.6705 13.662L12.4176 11.1799V7.41667C12.4176 5.22166 11.112 3.3316 9.23503 2.48071ZM10.9981 11.6964L11.7823 13.25H2.21967L3.00385 11.6964C3.05675 11.5916 3.08431 11.4759 3.08431 11.3585V7.41667C3.08431 5.25355 4.83786 3.5 7.00098 3.5C9.16409 3.5 10.9176 5.25355 10.9176 7.41667V11.3585C10.9176 11.4759 10.9452 11.5916 10.9981 11.6964Z"
        fill="#A3A3C2"
      />
    </svg>
  );
};

export default Bell;

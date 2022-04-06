import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const Clock: React.FC<Props> = ({ width, height, className, pathClassName }) => {
  return (
    <svg
      width={width || "16"}
      height={height || "16"}
      className={className ? className : ""}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00002 0.666687C12.0501 0.666687 15.3334 3.94993 15.3334 8.00002C15.3334 12.0501 12.0501 15.3334 8.00002 15.3334C3.94993 15.3334 0.666687 12.0501 0.666687 8.00002C0.666687 3.94993 3.94993 0.666687 8.00002 0.666687ZM8.00002 2.00002C4.68631 2.00002 2.00002 4.68631 2.00002 8.00002C2.00002 11.3137 4.68631 14 8.00002 14C11.3137 14 14 11.3137 14 8.00002C14 4.68631 11.3137 2.00002 8.00002 2.00002ZM8.00002 3.33335C8.36821 3.33335 8.66669 3.63183 8.66669 4.00002V7.67396L11.4093 9.80712C11.6999 10.0332 11.7523 10.452 11.5263 10.7426C11.3002 11.0333 10.8814 11.0856 10.5907 10.8596L7.59073 8.52626C7.42834 8.39995 7.33335 8.20575 7.33335 8.00002V4.00002C7.33335 3.63183 7.63183 3.33335 8.00002 3.33335Z"
        fill="#696D8C"
      />
    </svg>
  );
};

export default Clock;

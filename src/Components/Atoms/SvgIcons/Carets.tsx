import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
export const CaretSm: React.FC<Props> = ({
  width,
  height,
  className,
  pathClassName,
}) => {
  return (
    <svg
      width={width || "8"}
      height={height || "5"}
      className={className ? className : ""}
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3.05719L6.86193 0.195262C7.12228 -0.0650874 7.54439 -0.0650874 7.80474 0.195262C8.06509 0.455612 8.06509 0.877722 7.80474 1.13807L4.4714 4.4714C4.21105 4.73175 3.78895 4.73175 3.5286 4.4714L0.195262 1.13807C-0.0650874 0.877722 -0.0650874 0.455612 0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L4 3.05719Z"
        fill="#696D8C"
      />
    </svg>
  );
};

export const CaretMd: React.FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || "7"}
      height={height || "12"}
      className={className ? className : ""}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.58579 6L0.292893 1.70711C-0.0976315 1.31658 -0.0976316 0.683417 0.292893 0.292893C0.683417 -0.0976305 1.31658 -0.0976306 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6Z"
        fill="#E5E4EF"
      />
    </svg>
  );
};

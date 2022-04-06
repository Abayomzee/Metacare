import React from "react";
import { PerformanceBadgeStyle } from "./Style";
import { PerfomanceBadgeProps } from "./Types";

const PerformanceBadge: React.FC<PerfomanceBadgeProps> = (props) => {
  const { performance = "+4.14%" } = props;
  return <PerformanceBadgeStyle> {performance} </PerformanceBadgeStyle>;
};

export default PerformanceBadge;

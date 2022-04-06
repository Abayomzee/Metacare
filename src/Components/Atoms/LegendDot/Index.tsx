import React from "react";
import { LegendDotStyle } from "./Style";
import { LegendDotProps } from "./Types";

const LengendDot: React.FC<LegendDotProps> = (props) => {
  return <LegendDotStyle {...props} />;
};

export default LengendDot;

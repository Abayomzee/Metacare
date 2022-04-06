import Typography from "Components/Atoms/Typography/Index";
import React from "react";
import { GraphCardStyle } from "./Style";

interface Props {
  title: string;
  duration: string;
}
const GraphCard: React.FC<Props> = (props) => {
  const { title, duration } = props;
  return (
    <GraphCardStyle>
      <Typography as="h5" className="heading-1 mb-20" text={title} />
      <Typography as="h3" className="heading-2" text={`${duration}`} />
    </GraphCardStyle>
  );
};

export default GraphCard;

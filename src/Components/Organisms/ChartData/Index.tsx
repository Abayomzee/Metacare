import React from "react";
import PerformanceBadge from "Components/Atoms/Badge/PerformanceBadge";
import IconButton from "Components/Atoms/Button/IconButton";
import LengendDot from "Components/Atoms/LegendDot/Index";
import Calender from "Components/Atoms/SvgIcons/Calender";
import Typography from "Components/Atoms/Typography/Index";
import GraphCard from "Components/Molecules/GraphCard/Index";
import { Flex } from "Styles/layouts/Flex";
import { Line } from "react-chartjs-2";
import {
  ChartDataStyle,
  ChartDataAsides,
  ChartDataTop,
} from "./Style";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

interface Props {
  data: any;
}
const ChartData: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <ChartDataStyle>
      <ChartDataAsides className="left">
        <ChartDataTop>
          <Flex gap="1.6rem" flexRowAiCenter>
            <Typography as="h4" className="" text={data.title} />
            <PerformanceBadge performance={data.performance} />
          </Flex>
          <div className="right">
            <LengendDot type={`${data.priorityType}`} />
            <Typography as="h6" className="" text="High Priority" />
            <IconButton
              icon={<Calender />}
              className="btn-sm btn-has-divider ml-16"
              text="This Month"
            />
          </div>
        </ChartDataTop>
        <Line options={data.chart.options} data={data.chart.data} />
      </ChartDataAsides>
      <ChartDataAsides className="right">
        {data.analyticCards.map((card: any) => (
          <GraphCard key="" title={card.title} duration={card.duration} />
        ))}
      </ChartDataAsides>
    </ChartDataStyle>
  );
};

export default ChartData;

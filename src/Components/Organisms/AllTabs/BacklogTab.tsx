import React from "react";
import TabHeader from "../TabHeader/Index";
import ChartData from "Components/Organisms/ChartData/Index";
import { chartDataForTab } from "Components/dummy";
import { motion } from "framer-motion";

interface Props {}
const BacklogTab: React.FC<Props> = (props) => {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 8 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5 }}
    >
      <TabHeader title="Backlog Analytics" />
      {chartDataForTab.map((tabData) => (
        <ChartData key={tabData.id} data={tabData} />
      ))}
    </motion.section>
  );
};

export default BacklogTab;

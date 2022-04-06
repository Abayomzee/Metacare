import React, { useEffect } from "react";
import useTabs from "Utils/Hooks/useTabs";
import EfficiencyTab from "../AllTabs/EfficiencyTab";
import TabMenus from "Components/Organisms/TabMenus/Index";
import { TabHeaderWrapper, TabBodyWrapper } from "./Style";
import { DashboardCenter } from "Styles/layouts/Center";
import VolumeTab from "../AllTabs/VolumeTab";
import CustomerSatisfactionTab from "./../AllTabs/CustomerSatisfactionTab";
import BacklogTab from "../AllTabs/BacklogTab";
import { AnimatePresence } from "framer-motion";

interface Props {}
const Tabs: React.FC<Props> = (props) => {
  const [activeTabId, setTabId, renderTabComponent, setAllTabContent] =
    useTabs(1);

  useEffect(() => {
    setAllTabContent([
      <EfficiencyTab />,
      <VolumeTab />,
      <CustomerSatisfactionTab />,
      <BacklogTab />,
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TabHeaderWrapper>
        <DashboardCenter>
          <TabMenus activeId={activeTabId} handleClick={setTabId} />
        </DashboardCenter>
      </TabHeaderWrapper>

      <TabBodyWrapper>
        <DashboardCenter>
          <AnimatePresence exitBeforeEnter>
            {renderTabComponent(activeTabId)}
          </AnimatePresence>
        </DashboardCenter>
      </TabBodyWrapper>
    </>
  );
};

export default Tabs;

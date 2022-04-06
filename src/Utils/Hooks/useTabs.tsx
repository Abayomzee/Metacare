import { useState } from "react";

const useTabs = (activeTab: any) => {
  const [allTabContent, setAllTabContent] = useState([]);
  const [activeTabId, setActiveTabId] = useState(activeTab);

  const setTabId = (id: any) => setActiveTabId(id);

  const renderTabComponent = (index: any) => {
    return allTabContent[index-1];
  };

  return [activeTabId, setTabId, renderTabComponent, setAllTabContent];
};

export default useTabs;

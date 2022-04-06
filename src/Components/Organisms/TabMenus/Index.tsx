import React from "react";
import { TabMenusStyle } from "./Style";
import TabMenu from "Components/Atoms/TabMenu/Index";

interface Props {
  activeId: any;
  handleClick: any;
}
const TabMenus: React.FC<Props> = (props) => {
  const { activeId, handleClick } = props;
  // const menus = ["Efficiency", "Volume", "Customer Satisfaction", "Backlog"];
  const menus = [
    {
      id: 1,
      label: "Efficiency",
    },
    {
      id: 2,
      label: "Volume",
    },
    {
      id: 3,
      label: "Customer Satisfaction",
    },
    {
      id: 4,
      label: "Backlog",
    },
  ];
  return (
    <TabMenusStyle>
      {menus.map((menu) => (
        <TabMenu
          key={menu.id}
          text={menu.label}
          active={menu.id === activeId}
          handleClick={() => handleClick(menu.id)}
        />
      ))}
    </TabMenusStyle>
  );
};

export default TabMenus;

import React from "react";
import { TabMenuStyle } from "./Style";
import { TabMenuProps } from "./Types";

const TabMenu: React.FC<TabMenuProps> = (props) => {
  const { text, handleClick } = props;
  return (
    <TabMenuStyle onClick={handleClick} {...props}>
      {text}
    </TabMenuStyle>
  );
};

export default TabMenu;

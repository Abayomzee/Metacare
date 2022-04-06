import React, { useState } from "react";
import { SidenavMenuStyle } from "./Style";
import SideMenu from "Components/Molecules/SideMenu/Index";
import SidenavDropdown from "Components/Molecules/SidenavDropdown/Index";
import { AnimatePresence } from "framer-motion";

interface Props {
  icon: JSX.Element;
  label: string | number;
  subMenus: string[];
}
const SidenavMenu: React.FC<Props> = (props) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { icon, label, subMenus } = props;
  return (
    <SidenavMenuStyle>
      <SideMenu
        icon={icon}
        label={label}
        active={showDropdown}
        handleClick={setShowDropdown}
      />
      <AnimatePresence>
        {showDropdown && subMenus.length && (
          <SidenavDropdown items={subMenus} open={showDropdown} />
        )}
      </AnimatePresence>
    </SidenavMenuStyle>
  );
};

export default SidenavMenu;

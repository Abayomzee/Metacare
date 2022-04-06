import React from "react";
import { SideMenuStyle } from "./Style";
import Typography from "Components/Atoms/Typography/Index";
import { CaretMd } from "Components/Atoms/SvgIcons/Carets";
import { SideMenuProps } from "./Types";

const SideMenu: React.FC<SideMenuProps> = (props) => {
  const { icon, label, handleClick, active } = props;
  return (
    <SideMenuStyle {...props} onClick={() => handleClick(!active)}>
      {icon}
      <Typography as="p" className="label" text={label} />

      <CaretMd className={`ml-auto menu-caret ${active ? "rotate-caret" : ""}`} />
    </SideMenuStyle>
  );
};

export default SideMenu;


import React from "react";
import UserDetail from "Components/Molecules/UserDetails/Index";
import { SideNavStyle, SidenavMenuWrapper } from "./Style";
import { sideNavigationMenus } from "Components/dummy";
import SidenavMenu from "Components/Organisms/SidenavMenu/Index";

interface Props {}
const SideNav: React.FC<Props> = (props) => {
  return (
    <SideNavStyle>
      <UserDetail />

      <SidenavMenuWrapper>
        {sideNavigationMenus.map((menu: any) => (
          <SidenavMenu key={menu.id} {...menu} />
        ))}
      </SidenavMenuWrapper>
    </SideNavStyle>
  );
};

export default SideNav;

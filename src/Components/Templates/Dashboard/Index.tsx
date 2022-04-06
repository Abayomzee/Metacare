import React from "react";
import SideNav from "Components/Organisms/SideNav/Index";
import TopNav from "Components/Organisms/TopNav/Index";
import { DasboardTemplateStyle, DasboardTemplateMain } from "./Style";
import Tabs from "Components/Organisms/Tabs/Index";

interface Props {}
const DasboardTemplate: React.FC<Props> = (props) => {
  return (
    <DasboardTemplateStyle>
      <SideNav />
      <DasboardTemplateMain>
        <TopNav />
        <Tabs />
      </DasboardTemplateMain>
    </DasboardTemplateStyle>
  );
};

export default DasboardTemplate;

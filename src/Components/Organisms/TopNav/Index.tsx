import React from "react";
import { TopNavStyle, Wrapper } from "./Style";
import TopnavSearch from "Components/Molecules/TopnavSearch/Index";
import NotificationAndAvatar from "Components/Molecules/NotificationAndAvatar/Index";
import { DashboardCenter } from "Styles/layouts/Center";

interface Props {}
const TopNav: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <DashboardCenter>
        <TopNavStyle>
          <TopnavSearch />
          <NotificationAndAvatar />
        </TopNavStyle>
      </DashboardCenter>
    </Wrapper>
  );
};

export default TopNav;

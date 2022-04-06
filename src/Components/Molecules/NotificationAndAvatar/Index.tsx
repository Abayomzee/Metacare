import React from "react";
import { NotificationAndAvatarStyle } from "./Style";
import ProfileDropdown from "Components/Atoms/ProfileDropdown/Index";
import Notification from "Components/Molecules/Notification/Index";

interface Props {}
const NotificationAndAvatar: React.FC<Props> = (props) => {
  return (
    <NotificationAndAvatarStyle>
      <Notification />
      <ProfileDropdown />
    </NotificationAndAvatarStyle>
  );
};

export default NotificationAndAvatar;

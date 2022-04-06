import React from "react";
import { NotificationWrapper } from "./Style";
import Bell from "Components/Atoms/SvgIcons/Bell";
import NotificationBadge from "Components/Atoms/Badge/NotificationBadge";

interface Props {}
const Notification: React.FC<Props> = (props) => {
  return (
    <NotificationWrapper>
      <Bell />
      <NotificationBadge count={3} />
    </NotificationWrapper>
  );
};

export default Notification;

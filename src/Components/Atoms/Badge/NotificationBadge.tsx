import React from "react";
import { NotificationBadgeStyle } from "./Style";
import { Props } from "./Types";

const NotificationBadge: React.FC<Props> = (props) => {
  const { count = 3 } = props;
  return <NotificationBadgeStyle> {count} </NotificationBadgeStyle>;
};

export default NotificationBadge;

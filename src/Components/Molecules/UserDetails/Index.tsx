import React from "react";
import { UserDetailStyle } from "./Style";
import UserAvatar from "Components/Atoms/UserAvatar/Index";
import Typography from "Components/Atoms/Typography/Index";

interface Props {}
const UserDetail: React.FC<Props> = (props) => {
  return (
    <UserDetailStyle>
      <UserAvatar />
      <div>
        <Typography as="h5" className="heading-3" text="Metacare" />
        <Typography as="p" className="paragraph-1" text="adeyinka@metacare.app" />
      </div>
    </UserDetailStyle>
  );
};

export default UserDetail;

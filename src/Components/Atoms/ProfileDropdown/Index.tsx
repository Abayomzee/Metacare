import React from "react";
import { ProfileDropdownStyle } from "./Style";
import UserAvatar from "Components/Atoms/UserAvatar/Index";
import { CaretSm } from "Components/Atoms/SvgIcons/Carets";

interface Props {}
const ProfileDropdown: React.FC<Props> = (props) => {
  return (
    <ProfileDropdownStyle>
      <UserAvatar />
      <CaretSm />
    </ProfileDropdownStyle>
  );
};

export default ProfileDropdown;

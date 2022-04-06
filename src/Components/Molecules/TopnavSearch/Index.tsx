import React from "react";
import { TopnavSearchStyle } from "./Style";
import Lens from "Components/Atoms/SvgIcons/Lens";

interface Props {}
const TopnavSearch: React.FC<Props> = (props) => {
  return (
    <TopnavSearchStyle>
      <input placeholder="Ask us any question" />
      <Lens className="input-icon" />
    </TopnavSearchStyle>
  );
};

export default TopnavSearch;

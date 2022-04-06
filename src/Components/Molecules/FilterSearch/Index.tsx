import React from "react";
import { FilterInputStyle } from "./Style";
import Lens from "Components/Atoms/SvgIcons/Lens";

interface Props {}
const FilterSearch: React.FC<Props> = (props) => {
  return (
    <FilterInputStyle>
      <Lens className="input-icon " />
      <input placeholder="Search" />
    </FilterInputStyle>
  );
};

export default FilterSearch;

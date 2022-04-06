import React from "react";
import { TabHeaderStyle } from "./Style";
import Typography from "Components/Atoms/Typography/Index";
import FilterSearch from "Components/Molecules/FilterSearch/Index";
import IconButton from "Components/Atoms/Button/IconButton";
import Button from "Components/Atoms/Button/Index";
import { CaretSm } from "Components/Atoms/SvgIcons/Carets";

interface Props {
  title: String;
}
const TabHeader: React.FC<Props> = (props) => {
  const { title } = props;
  return (
    <TabHeaderStyle>
      <Typography as="h3" className="" text={`${title}`} />
      <div className="right">
        <FilterSearch />
        <IconButton
          icon={<CaretSm pathClassName='' />}
          text="Filter Options"
          className="btn-sm"
        />
        <Button className="btn-good btn-sm btn-has-divider ml-8">Export</Button>
      </div>
    </TabHeaderStyle>
  );
};

export default TabHeader;
